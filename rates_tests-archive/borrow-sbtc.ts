import { Cl } from "@stacks/transactions";
import { describe, expect, it } from "vitest";
import { CONFIG } from "./lib/config";
import { mintSBTCToLoanContract, getCurrentInterestAndLiquidationFee, fundVault } from "./lib/dlc-helper";

const accounts = simnet.getAccounts();
console.log('accounts:', accounts)
const deployer = accounts.get("deployer")!;
const sender = accounts.get("wallet_1")!;
const bob = accounts.get("wallet_3")!;

/*
  The test below is an example. Learn more in the clarinet-sdk readme:
  https://github.com/hirosystems/clarinet/blob/develop/components/clarinet-sdk/README.md
*/
describe("User borrows sbtc", () => {

  it("borrowing fails if no loan setup", () => {
    mintSBTCToLoanContract(100000000000);
    const functionArgs1 = [Cl.uint(0), Cl.uint(10000)]
    const { result } = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "borrow", functionArgs1, deployer);
    //console.log(result)
    expect(result).toBeErr(Cl.uint(1006));
  });

  it("borrowing fails if user is not owner", () => {
    mintSBTCToLoanContract(100000000000);
    fundVault(10000);
    simnet.mineEmptyBlocks(5)
    const functionArgs1 = [Cl.uint(1), Cl.uint(10000)]
    const { result } = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "borrow", functionArgs1, sender);
    
    const p = simnet.callReadOnlyFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 'get-loan', [Cl.uint(1)], sender)
    //console.log('borrowing fails if no loan setup: ', p.result.value.data)

    //console.log(result)
    expect(result).toBeErr(Cl.uint(1005));
  });

  it("borrowing fails for amounts exceeding collateral - case a) zero fee, zero interest", () => {
    mintSBTCToLoanContract(100000000000);
    fundVault(10000);
    simnet.mineEmptyBlocks(5)

    const functionArgs0 = [Cl.uint(0)]
    const p0 = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "set-liquidation-fee", functionArgs0, deployer);
    expect(p0.result).toBeOk(Cl.uint(0));
    
    const functionArgs1 = [Cl.uint(1), Cl.uint(10001)]
    const { result } = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "borrow", functionArgs1, bob);
    expect(result).toBeErr(Cl.uint(1014));
    
    //const p1 = simnet.callReadOnlyFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 'get-loan', [Cl.uint(1)], sender)
    //console.log('borrowing fails if no loan setup: ', p1.result.value.data)
  });

  it("Correct interest calculated - borrowing for 20k blocks", () => {
    simnet.mineEmptyBlocks(20000)
    const p0 = simnet.callReadOnlyFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 'calc-interest', [Cl.uint(100000), Cl.uint(0), Cl.uint(500)], sender)
    console.log('calc-interest: ', p0.result)
    expect(p0.result).toBeUint(47697);
  });

  it("Correct interest calculated", () => {
    const p0 = simnet.callReadOnlyFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 'calc-interest', [Cl.uint(100000), Cl.uint(0), Cl.uint(500)], sender)
    console.log('calc-interest: ', p0.result)
    expect(p0.result).toBeUint(2);
  });

  it("Correct interest calculated with non zero previous interest", () => {
    const p0 = simnet.callReadOnlyFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 'calc-interest', [Cl.uint(10), Cl.uint(0), Cl.uint(500)], sender)
    console.log('calc-interest: ', p0.result)
    expect(p0.result).toBeUint(0);
  });

  it("borrowing fails for amounts exceeding collateral - case b) 10% fee, zero interest", () => {
    mintSBTCToLoanContract(100000000000);
    fundVault(100);
    simnet.mineEmptyBlocks(5)

    const functionArgs0 = [Cl.uint(1000)]
    const p0 = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "set-liquidation-fee", functionArgs0, deployer);
    expect(p0.result).toBeOk(Cl.uint(1000));
    
    const fees = getCurrentInterestAndLiquidationFee(1, false);
    expect(fees.fee).toBeUint(0);
    expect(fees.interest).toBeUint(0);

    const functionArgs1 = [Cl.uint(1), Cl.uint(100)]
    const { result } = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "borrow", functionArgs1, bob);
    expect(result).toBeErr(Cl.uint(1014));
  });

  it("borrowing succeeds if collateral is more than the amount + interest plus potential liquidation penalty", () => {
    mintSBTCToLoanContract(100000000000);
    fundVault(101);
    simnet.mineEmptyBlocks(5)

    const functionArgs0 = [Cl.uint(1000)]
    const p0 = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "set-liquidation-fee", functionArgs0, deployer);
    expect(p0.result).toBeOk(Cl.uint(1000));
    
    const fees = getCurrentInterestAndLiquidationFee(1, false);
    expect(fees.fee).toBeUint(0);
    expect(fees.interest).toBeUint(0);

    const functionArgs1 = [Cl.uint(1), Cl.uint(90)]
    const { result } = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "borrow", functionArgs1, bob);
    expect(result).toBeOk(Cl.bool(true));
  });

  it("borrowing fails for amounts exceeding collateral error on second borrow", () => {
    mintSBTCToLoanContract(100000000000);
    fundVault(100);
    simnet.mineEmptyBlocks(5);

    const p = simnet.callReadOnlyFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 'get-loan', [Cl.uint(1)], sender)

    let fees = getCurrentInterestAndLiquidationFee(1, false);
    expect(fees.fee).toBeUint(0);
    expect(fees.interest).toBeUint(0);
    expect(fees.loan['vault-loan']).toBeUint(0);

    let p2 = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "borrow", [Cl.uint(1), Cl.uint(45)], bob);
    expect(p2.result).toBeOk(Cl.bool(true));
    simnet.mineEmptyBlocks(100);

    fees = getCurrentInterestAndLiquidationFee(1, true)
    expect(fees.loan['vault-loan']).toBeUint(45);
    expect(fees.fee).toBeUint(0);
    expect(fees.interest).toBeUint(0);

    p2 = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "borrow", [Cl.uint(1), Cl.uint(55)], bob);
    expect(p2.result).toBeErr(Cl.uint(1014));
  });

  it("borrowing fails for amounts exceeding collateral error when interest is significant", () => {
    mintSBTCToLoanContract(100000000000);
    fundVault(100);
    simnet.mineEmptyBlocks(5);

    const p = simnet.callReadOnlyFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 'get-loan', [Cl.uint(1)], sender)

    let fees = getCurrentInterestAndLiquidationFee(1, false);
    expect(fees.fee).toBeUint(0);
    expect(fees.interest).toBeUint(0);
    expect(fees.loan['vault-loan']).toBeUint(0);

    let p2 = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "borrow", [Cl.uint(1), Cl.uint(45)], bob);
    expect(p2.result).toBeOk(Cl.bool(true));
    simnet.mineEmptyBlocks(100);

    fees = getCurrentInterestAndLiquidationFee(1, false)
    expect(fees.loan['vault-loan']).toBeUint(45);
    expect(fees.fee).toBeUint(0);
    expect(fees.interest).toBeUint(0);

    simnet.mineEmptyBlocks(1000000);

    p2 = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "borrow", [Cl.uint(1), Cl.uint(44)], bob);
    expect(p2.result).toBeErr(Cl.uint(1014));
  });

  it("borrowing succeeds when borrowing multiple times but interest is accrued", () => {
    mintSBTCToLoanContract(100000000000);
    fundVault(1000000);
    simnet.mineEmptyBlocks(5);

    const p = simnet.callReadOnlyFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 'get-loan', [Cl.uint(1)], sender)

    let p2 = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "borrow", [Cl.uint(1), Cl.uint(100000)], bob);
    expect(p2.result).toBeOk(Cl.bool(true));
    simnet.mineEmptyBlocks(1000);

    let fees = getCurrentInterestAndLiquidationFee(1, true)
    expect(fees.loan['vault-loan']).toBeUint(100000);
    expect(fees.fee).toBeUint(0);
    expect(fees.interest).toBeUint(238);

    p2 = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "borrow", [Cl.uint(1), Cl.uint(100000)], bob);
    expect(p2.result).toBeOk(Cl.bool(true));
    simnet.mineEmptyBlocks(1000);

    fees = getCurrentInterestAndLiquidationFee(1, true)
    expect(fees.loan['vault-loan']).toBeUint(200000);
    expect(fees.fee).toBeUint(0);
    expect(fees.interest).toBeUint(476);

  });

});
