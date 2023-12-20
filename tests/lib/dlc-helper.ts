import { ParsedTransactionResult } from "@hirosystems/clarinet-sdk";
import { Cl } from "@stacks/transactions";
import { expect } from "vitest";
import { CONFIG } from "./config";
import { hex } from '@scure/base';

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const sender = accounts.get("wallet_1")!;

export function mintSBTCToLoanContract(amountSats:number) {
  const functionArgs = [Cl.uint(amountSats), Cl.contractPrincipal(CONFIG.VITE_DLC_DEPLOYER, CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1])]
  const response = simnet.callPublicFn(CONFIG.VITE_SBTC_COORDINATOR_CID.split('.')[1], "mint-to", functionArgs, deployer);
  expect(response.events).toHaveLength(1);
  const printEvent = response.events[0];
  expect(printEvent.event).toBe('ft_mint_event');
  //console.log('Event.:', printEvent)
  expect(printEvent.data).toStrictEqual({
    amount: '100000000000',
    asset_identifier: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.asset::sbtc',
    recipient: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.uasu-sbtc-loan-v2',
  });
}

export function registerContract() {
  const functionArgs = [
    Cl.contractPrincipal(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[0], CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1])
  ]
  let p:ParsedTransactionResult = simnet.callPublicFn(CONFIG.VITE_DLC_MANAGER_CID.split('.')[1], "register-contract", functionArgs, deployer);
  //expect(p.result).toBeBool(true);
}

export function registerAttestors() {
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
  
  
export function setupAndFundLoan(amountSats:number) {
    registerContract()
    registerAttestors()

    //change protocol wallet address to wallet_1.
    const functionArgs1 = [Cl.principal(sender)]
    const p1:ParsedTransactionResult = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "set-protocol-wallet-address", functionArgs1, deployer);
    expect(p1.result).toBeOk(Cl.principal(sender));

    // setup loan
    const attestorIds = hex.decode('02')
    const functionArgs2 = [Cl.uint(amountSats), Cl.buffer(attestorIds)]
    const { result } = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "setup-loan", functionArgs2, deployer);
    const val:any = result
    expect(result).toStrictEqual(Cl.ok(Cl.bufferFromHex(hex.encode(val.value.buffer))));

    // get the manager to callback to the loan contract to simulate funded.
    //console.log((val.value.buffer))
    //console.log(Cl.bufferFromHex('badd65ae692ebb71d71965e0e89112a73fe29ccf1793df63ddcaa03349ed3ed8'))
    //console.log(Cl.contractPrincipal(deployer, CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1]))
    const functionArgs3 = [
      Cl.buffer(val.value.buffer),
      Cl.contractPrincipal(deployer, CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1])
    ]
    const p:ParsedTransactionResult = simnet.callPublicFn(CONFIG.VITE_DLC_MANAGER_CID.split('.')[1], "set-status-funded", functionArgs3, sender);
    //console.log(p.result)
    expect(p.result).toBeOk(Cl.bool(true));
}

