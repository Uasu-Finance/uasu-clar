
import { c32address } from 'c32check';
import { hex } from '@scure/base';
import util from 'util'

export type Loan = {
	uuid?: string;
  loanId?: number;
	liquidityState: { liquidatable: boolean|undefined, error?:number|string, loanId?:number, btcPrice:number };
  status: string;
  vaultLoan: number;
  vaultCollateral: number;
  liquidationRatio: number;
  liquidationFee: number;
  owner: string;
  attestorList?: Array<string>;
  btcTxId?: string;
	formattedVaultLoan?: string; 
	formattedLiquidationFee?: string; 
	formattedLiquidationRatio?: string;
	formattedVaultCollateral?:string;
	closingTXHash?: string;
}

export type DLC = {
  btcFeeBasisPoints: number;
  btcFeeRecipient: string;
  callbackContractAddress: string;
  callbackContractName: string;
  closingTxId: string;
  fundingTxId: string;
  creator: string;
  outcome: number;
  protocolWallet: string;
  refundDelay: number;
  status: number;
  uuid: string;
  valueLocked: number;
}

export function dlcConvertor(contractData:any):DLC {
  const data = contractData.result.value.data
  //console.log('dlcConvertor: ', util.inspect(contractData, false, null, true /* enable colors */));
  return {
    btcFeeBasisPoints: Number(data['btc-fee-basis-points'].value),
    btcFeeRecipient: data['btc-fee-recipient'].data,
    callbackContractAddress: c32address(data['callback-contract'].address.version, data['callback-contract'].address.hash160),
    callbackContractName: data['callback-contract'].contractName.content,
    closingTxId: (data['closing-tx-id'].type !== 9) ? data['closing-tx-id'].value.data : undefined,
    fundingTxId: (data['funding-tx-id'].type !== 9) ? data['funding-tx-id'].value.data : undefined,
    creator: c32address(data['creator'].address.version, data['creator'].address.hash160),
    outcome: (data['outcome'].type !== 9) ? Number(data['outcome'].value.value) : 0,
    protocolWallet: c32address(data['protocol-wallet'].address.version, data['protocol-wallet'].address.hash160),
    refundDelay: Number(data['refund-delay'].value),
    status: Number(data['status'].value),
    uuid: hex.encode(data['uuid'].buffer),
    valueLocked: Number(data['value-locked'].value),
  }
}

export function loanConvertor(contractData:any):Loan {
  const data = contractData.result.value.data
  //console.log('loanConvertor: ', util.inspect(data, false, null, true /* enable colors */));
  const attestorList = []
  for (const att of data['attestors'].list) {
    attestorList.push(att.data.dns.data)
  }
  return {
    attestorList,
    btcTxId: data['btc-tx-id'].value.data,
    liquidationFee: Number(data['liquidation-fee'].value),
    liquidationRatio: Number(data['liquidation-ratio'].value),
    liquidityState: {liquidatable: false, btcPrice: 0 },
    owner: c32address(data['owner'].address.version, data['owner'].address.hash160),
    status: data['status'].data,
    uuid: hex.encode(data['dlc_uuid'].value.buffer),
    vaultCollateral: Number(data['vault-collateral'].value),
    vaultLoan: Number(data['vault-loan'].value),
  }
}
