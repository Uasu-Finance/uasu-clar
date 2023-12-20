import { Cl } from "@stacks/transactions";
import { describe, expect, it } from "vitest";
import { hex } from '@scure/base';
import { CONFIG } from "./lib/config";
import { ParsedTransactionResult } from "@hirosystems/clarinet-sdk";

const accounts = simnet.getAccounts();
console.log('accounts:', accounts)
const deployer = accounts.get("deployer")!;
const protocol_wallet = accounts.get("deployer")!;
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

    let p:ParsedTransactionResult = simnet.callReadOnlyFn(CONFIG.VITE_DLC_MANAGER_CID.split('.')[1], 'is-contract-registered', [Cl.contractPrincipal(CONFIG.VITE_DLC_SAMPLE_CID.split('.')[0], CONFIG.VITE_DLC_SAMPLE_CID.split('.')[1])], sender)
    expect(p.result).toBeBool(false);
    registerContract()
    simnet.mineEmptyBlock()
    p = simnet.callReadOnlyFn(CONFIG.VITE_DLC_MANAGER_CID.split('.')[1], 'is-contract-registered', [Cl.contractPrincipal(CONFIG.VITE_DLC_SAMPLE_CID.split('.')[0], CONFIG.VITE_DLC_SAMPLE_CID.split('.')[1])], sender)
    expect(p.result).toBeBool(true);
  });

  it("ensure attestors are registered", () => {
    expect(simnet.blockHeight).toBeGreaterThan(0);

    registerContract()
    registerAttestors()
    let p:ParsedTransactionResult = simnet.callReadOnlyFn(CONFIG.VITE_DLC_MANAGER_CID.split('.')[1], 'get-registered-attestor', [Cl.uint(0)], sender)
    expect(p.result).toBeOk(Cl.tuple({dns: Cl.stringAscii('http://172.20.128.5:8801')}))
    p = simnet.callReadOnlyFn(CONFIG.VITE_DLC_MANAGER_CID.split('.')[1], 'get-registered-attestor', [Cl.uint(1)], sender)
    expect(p.result).toBeOk(Cl.tuple({dns: Cl.stringAscii('http://172.20.128.6:8802')}))
    p = simnet.callReadOnlyFn(CONFIG.VITE_DLC_MANAGER_CID.split('.')[1], 'get-registered-attestor', [Cl.uint(2)], sender)
    expect(p.result).toBeOk(Cl.tuple({dns: Cl.stringAscii('http://172.20.128.7:8803')}))
  });

  it("ensure loan can be set up", () => {
    registerContract()
    simnet.mineEmptyBlock()
    registerAttestors()
    simnet.mineEmptyBlock()
    const attestorIds = hex.decode('02')
    const functionArgs = [Cl.uint(10000), Cl.buffer(attestorIds)]
    const { result } = simnet.callPublicFn(CONFIG.VITE_DLC_SAMPLE_CID.split('.')[1], "setup-loan", functionArgs, deployer);
    expect(result).toStrictEqual(Cl.ok(Cl.bufferFromHex("94b2f8ba3b84d829cf951f9b1dbafc97b54aa2418cfaffaa016c51d77e0c6e00")));
  });

  it("ensure loan can't be locked by random sender", () => {
    registerContract()
    simnet.mineEmptyBlock()
    registerAttestors()
    simnet.mineEmptyBlock()

    const attestorIds = hex.decode('02')
    let functionArgs = [Cl.uint(10000), Cl.buffer(attestorIds)]
    const { result } = simnet.callPublicFn(CONFIG.VITE_DLC_SAMPLE_CID.split('.')[1], "setup-loan", functionArgs, deployer);
    expect(result).toStrictEqual(Cl.ok(Cl.bufferFromHex("94b2f8ba3b84d829cf951f9b1dbafc97b54aa2418cfaffaa016c51d77e0c6e00")));

    functionArgs = [Cl.buffer(hex.decode('94b2f8ba3b84d829cf951f9b1dbafc97b54aa2418cfaffaa016c51d77e0c6e00'))]
    const p:ParsedTransactionResult = simnet.callPublicFn(CONFIG.VITE_DLC_SAMPLE_CID.split('.')[1], "set-status-funded", functionArgs, sender);
    expect(p.result).toBeErr(Cl.uint(1005));
  }); 

  it("ensure loan can be locked by dlc-manager", () => {
    registerContract()
    registerAttestors()

    //change protocol wallet address to wallet_1.
    //const functionArgs1 = [Cl.principal(sender)]
    //const p1:ParsedTransactionResult = simnet.callPublicFn(CONFIG.VITE_DLC_SAMPLE_CID.split('.')[1], "set-protocol-wallet-address", functionArgs1, deployer);
    //expect(p1.result).toBeOk(Cl.principal(sender));

    // setup loan
    const attestorIds = hex.decode('02')
    const functionArgs2 = [Cl.uint(10000), Cl.buffer(attestorIds)]
    const { result } = simnet.callPublicFn(CONFIG.VITE_DLC_SAMPLE_CID.split('.')[1], "setup-loan", functionArgs2, deployer);
    const val:any = result
    console.log(hex.encode(val.value.buffer))
    expect(result).toStrictEqual(Cl.ok(Cl.bufferFromHex(hex.encode(val.value.buffer))));

    // get the manager to callback to the loan contract to simulate funded.
    console.log((val.value.buffer))
    console.log(Cl.bufferFromHex('badd65ae692ebb71d71965e0e89112a73fe29ccf1793df63ddcaa03349ed3ed8'))
    console.log(Cl.contractPrincipal(deployer, CONFIG.VITE_DLC_SAMPLE_CID.split('.')[1]))
    const functionArgs3 = [
      Cl.buffer(val.value.buffer),
      Cl.contractPrincipal(deployer, CONFIG.VITE_DLC_SAMPLE_CID.split('.')[1])
    ]
    const p:ParsedTransactionResult = simnet.callPublicFn(CONFIG.VITE_DLC_MANAGER_CID.split('.')[1], "set-status-funded", functionArgs3, protocol_wallet);
    console.log(p.result)
    //expect(p.result).toBeOk(Cl.bool(true));
  }); 

});
