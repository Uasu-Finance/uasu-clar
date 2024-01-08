import { Cl, ClarityType } from "@stacks/transactions";
import { describe, expect, it } from "vitest";
import { hex } from '@scure/base';
import { CONFIG } from "./lib/config";
import { ParsedTransactionResult } from "@hirosystems/clarinet-sdk";
import { FUNDING_TX, UUID_2, registerContract, setupLoanArgs } from "./lib/dlc-helper";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const sender = accounts.get("wallet_1")!;


describe("loan setup tests", () => {
  it("ensure loan contract is registered", () => {
    expect(simnet.blockHeight).toBeGreaterThan(0);

    let p:ParsedTransactionResult = simnet.callReadOnlyFn(CONFIG.VITE_DLC_MANAGER_CID.split('.')[1], 'is-contract-registered', [Cl.contractPrincipal(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[0], CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1])], sender)
    expect(p.result).toBeBool(false);
    registerContract()
    simnet.mineEmptyBlock()
    p = simnet.callReadOnlyFn(CONFIG.VITE_DLC_MANAGER_CID.split('.')[1], 'is-contract-registered', [Cl.contractPrincipal(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[0], CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1])], sender)
    expect(p.result).toBeBool(true);
  });

  it("ensure manager return false if contract is not registered", () => {
    expect(simnet.blockHeight).toBeGreaterThan(0);

    let p:ParsedTransactionResult = simnet.callReadOnlyFn(CONFIG.VITE_DLC_MANAGER_CID.split('.')[1], 'is-contract-registered', [Cl.contractPrincipal(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[0], CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1])], sender)
    expect(p.result).toBeBool(false);
    //registerContract()
    simnet.mineEmptyBlock()
    p = simnet.callReadOnlyFn(CONFIG.VITE_DLC_MANAGER_CID.split('.')[1], 'is-contract-registered', [Cl.contractPrincipal(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[0], CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1])], sender)
    expect(p.result).toBeBool(false);
  });

  it("ensure loan setup fails if contract is not registered", () => {
    expect(simnet.blockHeight).toBeGreaterThan(0);

    const functionArgs = setupLoanArgs(undefined, 100000000, 0, undefined, 1)
    const { result } = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "setup-loan", functionArgs, deployer);
    //console.log(hex.encode(result.value.buffer))
    expect(result).toBeErr(Cl.uint(1001));
  });

  it("ensure loan can be set up", () => {
    registerContract()
    simnet.mineEmptyBlock()

    const functionArgs = setupLoanArgs(undefined, 100000000, 0, undefined, 1)
    const { result } = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "setup-loan", functionArgs, deployer);
    //console.log(hex.encode(result.value.buffer))
    expect(result.type).toBe(ClarityType.ResponseOk);
    expect(result).toStrictEqual(Cl.ok(Cl.bufferFromHex(UUID_2)));
  });

  it("ensure loan can't be locked by random sender", () => {
    registerContract()
    simnet.mineEmptyBlock()

    const functionArgs = setupLoanArgs(undefined, 10000, 0, undefined, 1)
    const { result } = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "setup-loan", functionArgs, deployer);
    expect(result).toStrictEqual(Cl.ok(Cl.bufferFromHex(UUID_2)));

    const functionArgs2 = [
      Cl.buffer(hex.decode(UUID_2)), 
      Cl.stringAscii(FUNDING_TX)
    ]
    const p:ParsedTransactionResult = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "set-status-funded", functionArgs2, sender);
    expect(p.result).toBeErr(Cl.uint(1005));
  }); 

  it("ensure loan can be locked by dlc-manager", () => {
    registerContract()
    const functionArgs1 = [Cl.principal(sender)]
    const p1:ParsedTransactionResult = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "set-protocol-wallet-address", functionArgs1, deployer);
    expect(p1.result).toBeOk(Cl.principal(sender));

    // setup loan
    const functionArgs2 = setupLoanArgs(undefined, 10000, 0, undefined, 1)
    const { result } = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "setup-loan", functionArgs2, deployer);
    const val:any = result
    expect(result).toStrictEqual(Cl.ok(Cl.bufferFromHex(hex.encode(val.value.buffer))));

    // get the manager to callback to the loan contract to simulate funded.
    const functionArgs3 = [
      Cl.buffer(val.value.buffer),
      Cl.stringAscii(FUNDING_TX),
      Cl.contractPrincipal(deployer, CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1])
    ]
    const p:ParsedTransactionResult = simnet.callPublicFn(CONFIG.VITE_DLC_MANAGER_CID.split('.')[1], "set-status-funded", functionArgs3, sender);
    expect(p.result).toBeOk(Cl.bool(true));
    const p2 = simnet.callReadOnlyFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 'get-loan', [Cl.uint(1)], sender)
    expect(p2.result.value.data['btc-tx-id'].value).toStrictEqual(Cl.stringAscii(FUNDING_TX));
  }); 

});
