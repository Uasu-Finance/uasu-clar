import { Cl } from "@stacks/transactions";
import { describe, expect, it } from "vitest";
import { CONFIG } from "./lib/config";
import { mintSBTCToLoanContract, fundVault } from "./lib/dlc-helper";
import util from 'util'

const accounts = simnet.getAccounts();
//console.log('accounts:', accounts)
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
    expect(p.result.value.data['vault-loan']).toBeUint(0);
    expect(result).toBeErr(Cl.uint(1005));
  });

  it("borrowing fails for amounts exceeding collateral", () => {
    mintSBTCToLoanContract(100000000000);
    fundVault(10000);

    const p0 = simnet.callPublicFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "set-liquidation-fee", 
      [Cl.uint(0)], 
      deployer
    );
    expect(p0.result).toBeOk(Cl.uint(0));
    
    const functionArgs1 = [Cl.uint(1), Cl.uint(10001)]
    const { result } = simnet.callPublicFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "borrow", 
      functionArgs1, 
      bob
    );
    expect(result).toBeErr(Cl.uint(1014));
  });

  it("borrowing succeeds for amounts equal collateral", () => {
    mintSBTCToLoanContract(100000000000);
    fundVault(10000);

    const p0 = simnet.callPublicFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "set-liquidation-fee", 
      [Cl.uint(0)], 
      deployer
    );
    expect(p0.result).toBeOk(Cl.uint(0));
    
    const { result } = simnet.callPublicFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "borrow", 
      [Cl.uint(1), Cl.uint(10000)], 
      bob
    );
    expect(result).toBeOk(Cl.bool(true));
  });

  it("borrowing succeeds if collateral is more than the amount", () => {
    mintSBTCToLoanContract(100000000000);
    fundVault(1001);
    simnet.mineEmptyBlocks(5)

    const p = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "borrow", [Cl.uint(1), Cl.uint(1000)], bob);
    expect(p.result).toBeOk(Cl.bool(true));
    expect(p.events.length).toStrictEqual(1);
    const transferEvent = p.events[0].data
    expect(transferEvent.asset_identifier).toStrictEqual('ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.asset-3::sbtc');
    expect(transferEvent.sender).toStrictEqual('ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.uasu-sbtc-loan-v2');
    expect(transferEvent.amount).toStrictEqual(''+1000);
    const loan = simnet.callReadOnlyFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 'get-loan', [Cl.uint(1)], sender)
    //console.log('borrowing succeeds if collateral: ', util.inspect(loan, false, null, true /* enable colors */));
    expect(Cl.principal(transferEvent.recipient)).toStrictEqual(loan.result.value.data['owner']);
  });

  it("borrowing fails for amounts exceeding collateral error on second borrow", () => {
    mintSBTCToLoanContract(100000000000);
    fundVault(100);
    simnet.mineEmptyBlocks(5);

    const p = simnet.callReadOnlyFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 'get-loan', [Cl.uint(1)], sender)

    let p2 = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "borrow", [Cl.uint(1), Cl.uint(50)], bob);
    expect(p2.result).toBeOk(Cl.bool(true));
    simnet.mineEmptyBlocks(100);

    p2 = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "borrow", [Cl.uint(1), Cl.uint(51)], bob);
    expect(p2.result).toBeErr(Cl.uint(1014));
  });

  it("borrowing fails for amounts exceeding the liquidity of the loan contract", () => {
    mintSBTCToLoanContract(1000);
    fundVault(10000);
    simnet.mineEmptyBlocks(5);
    let p = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "borrow", [Cl.uint(1), Cl.uint(1001)], bob);
    expect(p.result).toBeErr(Cl.uint(1));
  });
});
