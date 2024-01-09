import { Cl } from "@stacks/transactions";
import { describe, expect, it } from "vitest";
import { CONFIG } from "./lib/config";
import { mintSBTCToLoanContract, fundVault, FUNDING_TX, convertReadDLC, convertReadLoan } from "./lib/dlc-helper";
import util from 'util'
import { c32address } from 'c32check';
import { hex } from '@scure/base';

const accounts = simnet.getAccounts();
//console.log('accounts:', accounts)
const protWallet = accounts.get("protocol_wallet")!;
const deployer = accounts.get("deployer")!;
const sender = accounts.get("wallet_1")!;
const bob = accounts.get("wallet_3")!;

/*
  The test below is an example. Learn more in the clarinet-sdk readme:
  https://github.com/hirosystems/clarinet/blob/develop/components/clarinet-sdk/README.md
*/
describe("Repayment of loans ", () => {

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

    const loan = convertReadLoan(1)
    expect(1000000).toStrictEqual(loan.vaultLoan);
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
    //console.log('repayment succeeds if: ', util.inspect(repay, false, null, true /* enable colors */));
    expect(repay.result).toBeOk(Cl.bool(true));

    const loan = convertReadLoan(1)
    expect(0).toStrictEqual(loan.vaultLoan);
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
    //console.log('repayment succeeds if: ', util.inspect(repay, false, null, true /* enable colors */));
    expect(repay.result).toBeOk(Cl.bool(true));

    const loan = convertReadLoan(1)
    expect((1000000-1)).toStrictEqual(loan.vaultLoan);

    const transferEvent = repay.events[0].data
    expect(transferEvent.asset_identifier).toStrictEqual('ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.asset-3::sbtc');
    expect(transferEvent.recipient).toStrictEqual('ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.uasu-sbtc-loan-v2');
    expect(transferEvent.amount).toStrictEqual(''+1);
    expect(transferEvent.sender).toStrictEqual(loan.owner);
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


});

describe("Closure of loans ", () => {
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

  it("loan can be closed if nothing is ever borrowed", () => {
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

    const loan = convertReadLoan(1)
    expect(0).toStrictEqual(loan.vaultLoan);

    const mgrEvent = close.events.find((o) => o.data.contract_identifier === 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.dlc-manager-v1-1')
    expect(mgrEvent?.data?.value?.data?.outcome).toBeUint(0);
  });

  it("dlc closure cannot be triggered by unknown router wallet", () => {
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
    
    const loan = convertReadLoan(1)
    expect(0).toStrictEqual(loan.vaultLoan);

    //console.log('dlc closure 1: ', util.inspect(loan, false, null, true /* enable colors */));
    
    const dlc = convertReadDLC(hex.decode(loan.uuid!))
    //console.log('dlc closure 2: ', util.inspect(dlc, false, null, true /* enable colors */));
    //console.log('dlc closure protWallet: ', util.inspect(dlc, false, null, true /* enable colors */));

    const functionArgs3 = [
      Cl.buffer(hex.decode(loan.uuid!)),
      Cl.stringAscii(FUNDING_TX),
      Cl.contractPrincipal(deployer, CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1])
    ]
    const p = simnet.callPublicFn(
      CONFIG.VITE_DLC_MANAGER_CID.split('.')[1],
      "post-close", 
      functionArgs3,
      bob);
    expect(p.result).toBeErr(Cl.uint(101));
  });

  it("dlc closure can be triggered by protocol (router) wallet", () => {
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

    const loan = convertReadLoan(1)
    expect(0).toStrictEqual(loan.vaultLoan);

    const dlc = convertReadDLC(hex.decode(loan.uuid!))
    const wallet = (dlc.protocolWallet)

    //console.log('dlc closure 1: ', util.inspect(loan.result.value.data, false, null, true /* enable colors */));
    //console.log('dlc closure 2: ', util.inspect(dlc, false, null, true /* enable colors */));

    console.log('dlc closure protWallet: ', util.inspect(wallet, false, null, true /* enable colors */));

    const functionArgs3 = [
      Cl.buffer(hex.decode(loan.uuid!)),
      Cl.stringAscii(FUNDING_TX),
      Cl.contractPrincipal(deployer, CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1])
    ]
    const p = simnet.callPublicFn(
      CONFIG.VITE_DLC_MANAGER_CID.split('.')[1],
      "post-close", 
      functionArgs3,
      sender);
    expect(p.result).toBeOk(Cl.bool(true));
  });

});
