import { Cl } from "@stacks/transactions";
import { expect } from "vitest";
import { CONFIG } from "./config";
import { hex } from '@scure/base';
import { dlcConvertor, loanConvertor } from "./dlc_types";
import util from 'util'

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const sender = accounts.get("wallet_1")!;
const bob = accounts.get("wallet_3")!;

export const FUNDING_TX = 'f605baef5b5c5a01ba8bc89bacca24a7eea8b0672d36a22964789b06e9608cea'
export const UUID_1 = '363a1ce7885a4baaf737916fd4a7bd0909c5d46c8606e21a9d7550afdb80c839'
export const UUID_2 = 'fe57c7fd8853285812a5e21fd31294908aadb20e8712e36dd30f5454df8152d2'

export function convertReadDLC(uuid:string) {
  const dlc = simnet.callReadOnlyFn(CONFIG.VITE_DLC_MANAGER_CID.split('.')[1], 'get-dlc', [Cl.buffer(hex.decode(uuid))], sender)
  return dlcConvertor(dlc)
}

export function convertReadLoan(loanId:number) {
  const loan = simnet.callReadOnlyFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 'get-loan', [Cl.uint(loanId)], sender)
  return loanConvertor(loan)
}

export function mintSBTCToLoanContract(amountSats:number) {
  const functionArgs = [Cl.uint(amountSats), Cl.contractPrincipal(CONFIG.VITE_DLC_DEPLOYER, CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1])]
  const response = simnet.callPublicFn(CONFIG.VITE_SBTC_COORDINATOR_CID.split('.')[1], "mint-to", functionArgs, deployer);
  //console.log('response.:', response)
  expect(response.result).toBeOk(Cl.bool(true));
  expect(response.events).toHaveLength(1);
  const printEvent = response.events[0];
  expect(printEvent.event).toBe('ft_mint_event');
  expect(printEvent.data).toStrictEqual({
    amount: amountSats + '',
    asset_identifier: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.asset-3::sbtc',
    recipient: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.uasu-sbtc-loan-v2',
  });
}

export function printLoan(id:number) {
  const p1 = simnet.callReadOnlyFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 'get-loan', [Cl.uint(id)], sender)
  console.log('printLoan: ', p1.result.value.data)
}

export function getCurrentInterestAndLiquidationFee(id:number, print:booleann) {
  const loan = convertReadLoan(1)
  if (print) console.log('printLoan: ', loan)
  
  const p1 = simnet.callReadOnlyFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 'calc-liquidation-fee', [Cl.uint(loan.result.value.data['vault-loan'].value), Cl.uint(loan.result.value.data['vault-collateral'].value), Cl.uint(loan.result.value.data['liquidation-fee'].value)], sender)
  if (print) console.log('calc-liquidation-fee: ', p1.result)
  
  const p0 = simnet.callReadOnlyFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 'calc-interest', [Cl.uint(loan.result.value.data['vault-loan'].value), Cl.uint(loan.result.value.data['interest-start-height'].value), Cl.uint(loan.result.value.data['interest-rate'].value)], sender)
  if (print) console.log('calc-interest: ', p0.result)
  
  if (print) console.log('block-height: ' +  simnet.blockHeight)

  return {fee: p1.result, interest: p0.result, loan: loan, height: simnet.blockHeight}
}
//(value-locked uint) (refund-delay uint) (btc-fee-recipient (string-ascii 64)) (btc-fee-basis-points uint)
export function setupLoanArgs(attestors:Array<any>|undefined, valueLocked:number, refundDelay:number, btcFeeRecipient:string|undefined, btcFeeBasisPoints:number|undefined) {
  if (!attestors) {
    attestors = [];
    attestors.push(Cl.tuple({"dns": Cl.stringAscii('http://172.20.128.5:8801')}));
  }
  if (!btcFeeRecipient) btcFeeRecipient = 'tb1q9j0660jr3v8leqhr2tptvcw0jtr538n0fcp878'
  if (!btcFeeBasisPoints) btcFeeBasisPoints = 1
  const functionArgs = [Cl.list(attestors), Cl.uint(valueLocked), Cl.uint(refundDelay), Cl.stringAscii(btcFeeRecipient), Cl.uint(btcFeeBasisPoints)]
  return functionArgs
}

export function registerContract() {
  const functionArgs = [
    Cl.contractPrincipal(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[0], CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1])
  ]
  let p = simnet.callPublicFn(CONFIG.VITE_DLC_MANAGER_CID.split('.')[1], "register-contract", functionArgs, deployer);
  //expect(p.result).toBeBool(true);
}

export function setLiquidationRatio(ratio:number) {
  const functionArgs = [
    Cl.uint(ratio)
  ]
  let p = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "set-liquidation-ratio", functionArgs, deployer);
  //expect(p.result).toBeBool(true);
}

export function setLiquidationFee(fee:number) {
  const functionArgs = [
    Cl.uint(fee)
  ]
  let p = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "set-liquidation-fee", functionArgs, deployer);
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
  
  
export function fundVault(lockValue:number) {
    registerContract()

    //change protocol wallet address to wallet_1.
    const functionArgs1 = [Cl.principal(sender)]
    const p1 = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "set-protocol-wallet-address", functionArgs1, deployer);
    expect(p1.result).toBeOk(Cl.principal(sender));

    // setup loan
    const functionArgs2 = setupLoanArgs(undefined, lockValue, 0, undefined, 1)
    const p0 = simnet.callPublicFn(CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], "setup-loan", functionArgs2, bob);
    expect(p0.result).toStrictEqual(Cl.ok(Cl.bufferFromHex(hex.encode(p0.result.value.buffer))));
    //console.log('= 1. setup-loan ========================================================')
    //console.log('uuid: ', hex.encode(p0.result.value.buffer))
    //console.log('dlclink:create-dlc:v1: ', util.inspect(p0.events[0], false, null, true /* enable colors */));
    //console.log('nft_mint_event: ', p0.result.value.buffer);
    // get the manager to callback to the loan contract to simulate funded.
    const functionArgs3 = [
      Cl.buffer(p0.result.value.buffer),
      Cl.stringAscii(FUNDING_TX),
      Cl.contractPrincipal(deployer, CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1])
    ]

    const p = simnet.callPublicFn(CONFIG.VITE_DLC_MANAGER_CID.split('.')[1], "set-status-funded", functionArgs3, sender);
    //console.log('= 2. set-status-funded ========================================================')
    //console.log('set-status-funded dlc-manager-v1-1: ', util.inspect(p.events[0], false, null, true /* enable colors */));
    //console.log('set-status-funded : uasu-sbtc-loan-v2', util.inspect(p.events[1], false, null, true /* enable colors */));
    expect(p.result).toBeOk(Cl.bool(true));
    simnet.mineEmptyBlocks(15)

    const loan = convertReadLoan(1)
    expect(loan.status).toStrictEqual('funded');
    expect(loan.btcTxId).toStrictEqual(FUNDING_TX);

}

