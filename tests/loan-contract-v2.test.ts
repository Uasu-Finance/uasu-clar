import { Cl } from "@stacks/transactions";
import { describe, expect, it } from "vitest";
import { hex } from '@scure/base';
import { CONFIG } from "./lib/config";
import { send } from "vite";
import { ParsedTransactionResult } from "@hirosystems/clarinet-sdk";

const accounts = simnet.getAccounts();
console.log('accounts:', accounts)
const deployer = accounts.get("deployer")!;
const sender = accounts.get("wallet_1")!;

/*
  The test below is an example. Learn more in the clarinet-sdk readme:
  https://github.com/hirosystems/clarinet/blob/develop/components/clarinet-sdk/README.md
*/
function registerContract() {
  const functionArgs = [
    Cl.contractPrincipal(CONFIG.VITE_DLC_SAMPLE_CID.split('.')[0], CONFIG.VITE_DLC_SAMPLE_CID.split('.')[1])
  ]
  let p:ParsedTransactionResult = simnet.callPublicFn(CONFIG.VITE_DLC_MANAGER_CID.split('.')[1], "register-contract", functionArgs, deployer);
  //expect(p.result).toBeBool(true);
  console.log(p.result)
}

function registerAttestors() {
  let attestor = 'http://172.20.128.5:8801'
  let functionArgs = [Cl.stringAscii(attestor)]
  simnet.callPublicFn(CONFIG.VITE_DLC_MANAGER_CID.split('.')[1], "register-attestor", functionArgs, deployer);
  attestor = 'http://172.20.128.6:8802'
  functionArgs = [Cl.stringAscii(attestor)]
  simnet.callPublicFn(CONFIG.VITE_DLC_MANAGER_CID.split('.')[1], "register-attestor", functionArgs, deployer);
  attestor = 'http://172.20.128.7:8803'
  functionArgs = [Cl.stringAscii(attestor)]
  simnet.callPublicFn(CONFIG.VITE_DLC_MANAGER_CID.split('.')[1], "register-attestor", functionArgs, deployer);
}

describe("loan setup tests", () => {
  it("ensure loan contract is registered", () => {
    expect(simnet.blockHeight).toBeGreaterThan(0);
    console.log(simnet.blockHeight)
    console.log(simnet.deployer)

    let p:ParsedTransactionResult = simnet.callReadOnlyFn(CONFIG.VITE_DLC_MANAGER_CID.split('.')[1], 'is-contract-registered', [Cl.contractPrincipal(CONFIG.VITE_DLC_SAMPLE_CID.split('.')[0], CONFIG.VITE_DLC_SAMPLE_CID.split('.')[1])], sender)
    console.log(p.result)
    expect(p.result).toBeBool(false);
    registerContract()
    simnet.mineEmptyBlock()
    p = simnet.callReadOnlyFn(CONFIG.VITE_DLC_MANAGER_CID.split('.')[1], 'is-contract-registered', [Cl.contractPrincipal(CONFIG.VITE_DLC_SAMPLE_CID.split('.')[0], CONFIG.VITE_DLC_SAMPLE_CID.split('.')[1])], sender)
    expect(p.result).toBeBool(true);
    console.log(p.result)
  });

  it("ensure attestors are registered", () => {
    expect(simnet.blockHeight).toBeGreaterThan(0);
    console.log(simnet.blockHeight)
    console.log(simnet.deployer)

    registerContract()
    registerAttestors()
    const p:ParsedTransactionResult = simnet.callReadOnlyFn(CONFIG.VITE_DLC_MANAGER_CID.split('.')[1], 'get-registered-attestor', [Cl.uint(0)], sender)
    expect(p.result).toBeOk(Cl.tuple({dns: Cl.stringAscii('http://172.20.128.5:8801')}))
    console.log(p.result)
  });

/**
  it("shows an example", () => {
     const { result } = simnet.callPublicFn("uasu-sbtc-loan-v2", "borrow", [Cl.uint(1), Cl.uint(10000)], sender);
     console.log(result)
     expect(result).toBeErr(Cl.uint(1006));
  });
   */
});
