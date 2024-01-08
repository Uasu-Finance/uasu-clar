import { Cl } from "@stacks/transactions";
import { describe, expect, it } from "vitest";
import { CONFIG } from "./lib/config";
import { mintSBTCToLoanContract, fundVault } from "./lib/dlc-helper";
import util from 'util'

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

  it("repayment fails owner tries to repay more than borrowed", () => {
    mintSBTCToLoanContract(100000000000);
    fundVault(1000000);
    simnet.mineEmptyBlocks(5);

    const borrow = simnet.callPublicFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "borrow", 
      [Cl.uint(1), Cl.uint(1000000)], 
      bob
    );
    expect(borrow.result).toBeOk(Cl.bool(true));

    const repay = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "repay", [Cl.uint(1), Cl.uint(1000001)], deployer);
    expect(repay.result).toBeErr(Cl.uint(1005));
    const loan = simnet.callReadOnlyFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 'get-loan', [Cl.uint(1)], sender)
    expect(Cl.uint(1000000)).toStrictEqual(loan.result.value.data['vault-loan']);
  });

  it("repayment succeeds if owner repays exact amount borrowed", () => {
    mintSBTCToLoanContract(100000000000);
    fundVault(1000000);
    simnet.mineEmptyBlocks(5);

    const borrow = simnet.callPublicFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "borrow", 
      [Cl.uint(1), Cl.uint(1000000)], 
      bob
    );
    expect(borrow.result).toBeOk(Cl.bool(true));

    const repay = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "repay", [Cl.uint(1), Cl.uint(1000000)], bob);
    console.log('repayment succeeds if: ', util.inspect(repay, false, null, true /* enable colors */));
    expect(repay.result).toBeOk(Cl.bool(true));
    const loan = simnet.callReadOnlyFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 'get-loan', [Cl.uint(1)], sender)
    expect(Cl.uint(0)).toStrictEqual(loan.result.value.data['vault-loan']);
  });

  it("repayment succeeds if owner repays less than amount borrowed", () => {
    mintSBTCToLoanContract(100000000000);
    fundVault(1000000);
    simnet.mineEmptyBlocks(5);

    const borrow = simnet.callPublicFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "borrow", 
      [Cl.uint(1), Cl.uint(1000000)], 
      bob
    );
    expect(borrow.result).toBeOk(Cl.bool(true));

    const repay = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "repay", [Cl.uint(1), Cl.uint(1)], bob);
    console.log('repayment succeeds if: ', util.inspect(repay, false, null, true /* enable colors */));
    expect(repay.result).toBeOk(Cl.bool(true));
    const loan = simnet.callReadOnlyFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 'get-loan', [Cl.uint(1)], sender)
    expect(Cl.uint((1000000-1))).toStrictEqual(loan.result.value.data['vault-loan']);

    const transferEvent = repay.events[0].data
    expect(transferEvent.asset_identifier).toStrictEqual('ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.asset-3::sbtc');
    expect(transferEvent.recipient).toStrictEqual('ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.uasu-sbtc-loan-v2');
    expect(transferEvent.amount).toStrictEqual(''+1);
    expect(Cl.principal(transferEvent.sender)).toStrictEqual(loan.result.value.data['owner']);
  });

  it("loan cannot be closed if loan balance is positive", () => {
    mintSBTCToLoanContract(100000000000);
    fundVault(100);
    simnet.mineEmptyBlocks(5);

    const borrow = simnet.callPublicFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "borrow", 
      [Cl.uint(1), Cl.uint(100)], 
      bob
    );
    expect(borrow.result).toBeOk(Cl.bool(true));

    const repay = simnet.callPublicFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "repay", 
      [Cl.uint(1), Cl.uint(99)], 
      bob
    );
    expect(repay.result).toBeOk(Cl.bool(true));

    const close = simnet.callPublicFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "close-loan", 
      [Cl.uint(1)], 
      bob
    );
    expect(close.result).toBeErr(Cl.uint(1013));
  });

  it("loan can be closed if loan balance is zero", () => {
    mintSBTCToLoanContract(100000000000);
    fundVault(100);
    simnet.mineEmptyBlocks(5);

    const borrow = simnet.callPublicFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "borrow", 
      [Cl.uint(1), Cl.uint(100)], 
      bob
    );
    expect(borrow.result).toBeOk(Cl.bool(true));

    const repay = simnet.callPublicFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "repay", 
      [Cl.uint(1), Cl.uint(100)], 
      bob
    );
    expect(repay.result).toBeOk(Cl.bool(true));

    const close = simnet.callPublicFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "close-loan", 
      [Cl.uint(1)], 
      bob
    );
    expect(close.result).toBeOk(Cl.bool(true));
  });

  it("loan can be closed nothing is ever borrowed", () => {
    mintSBTCToLoanContract(100000000000);
    fundVault(100);
    simnet.mineEmptyBlocks(5);

    const close = simnet.callPublicFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "close-loan", 
      [Cl.uint(1)], 
      bob
    );
    expect(close.result).toBeOk(Cl.bool(true));
    expect(close.events.length).toStrictEqual(3);
    const loan = simnet.callReadOnlyFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 'get-loan', [Cl.uint(1)], sender)
    expect(Cl.uint(0)).toStrictEqual(loan.result.value.data['vault-loan']);

    const mgrEvent = close.events.find((o) => o.data.contract_identifier === 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dlc-manager-v1-1')
    console.log('loan can be closed nothing: ', util.inspect(mgrEvent, false, null, true /* enable colors */));
    expect(mgrEvent?.data?.value?.data?.outcome).toBeUint(0);
  });

});
