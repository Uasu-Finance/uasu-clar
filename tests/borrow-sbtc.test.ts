import { Cl } from "@stacks/transactions";
import { describe, expect, it } from "vitest";
import { hex } from '@scure/base';
import { CONFIG } from "./lib/config";
import { ParsedTransactionResult } from "@hirosystems/clarinet-sdk";
import { mintSBTCToLoanContract, registerAttestors, registerContract, setupAndFundLoan } from "./lib/dlc-helper";

const accounts = simnet.getAccounts();
console.log('accounts:', accounts)
const deployer = accounts.get("deployer")!;
const sender = accounts.get("wallet_1")!;

/*
  The test below is an example. Learn more in the clarinet-sdk readme:
  https://github.com/hirosystems/clarinet/blob/develop/components/clarinet-sdk/README.md
*/
describe("User borrows sbtc", () => {

  it("borrowing fails if no loan setup", () => {
    mintSBTCToLoanContract(100000000000);
    const functionArgs1 = [Cl.uint(0), Cl.uint(10000)]
    const { result } = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "borrow", functionArgs1, deployer);
    console.log(result)
    expect(result).toBeErr(Cl.uint(1006));
  });

  it("borrowing fails if user is not owner", () => {
    mintSBTCToLoanContract(100000000000);
    setupAndFundLoan(10000);
    simnet.mineEmptyBlocks(5)
    const functionArgs1 = [Cl.uint(1), Cl.uint(10000)]
    const { result } = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "borrow", functionArgs1, sender);
    
    const p = simnet.callReadOnlyFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 'get-loan', [Cl.uint(1)], sender)
    console.log('borrowing fails if no loan setup: ', p.result.value.data)

    console.log(result)
    expect(result).toBeErr(Cl.uint(1005));
  });

  it("borrowing ..", () => {
    mintSBTCToLoanContract(100000000000);
    setupAndFundLoan(10000);
  });

});
