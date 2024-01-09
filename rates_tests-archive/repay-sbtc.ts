import { Cl } from "@stacks/transactions";
import { describe, expect, it } from "vitest";
import { CONFIG } from "./lib/config";
import { mintSBTCToLoanContract, fundVault } from "./lib/dlc-helper";

const accounts = simnet.getAccounts();
console.log('accounts:', accounts)
const deployer = accounts.get("deployer")!;
const sender = accounts.get("wallet_1")!;
const bob = accounts.get("wallet_3")!;

/*
  The test below is an example. Learn more in the clarinet-sdk readme:
  https://github.com/hirosystems/clarinet/blob/develop/components/clarinet-sdk/README.md
*/
describe("User sbtc repays loans ", () => {

  it("repayment fails if no loan setup", () => {
    mintSBTCToLoanContract(100000000000);
    const { result } = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "repay", [Cl.uint(1), Cl.uint(10000)], deployer);
    expect(result).toBeErr(Cl.uint(1006));
  });

  it("repayment fails if not loan owner", () => {
    mintSBTCToLoanContract(100000000000);
    fundVault(1000000);
    simnet.mineEmptyBlocks(5);

    const { result } = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "repay", [Cl.uint(1), Cl.uint(10000)], deployer);
    expect(result).toBeErr(Cl.uint(1005));
  });

});
