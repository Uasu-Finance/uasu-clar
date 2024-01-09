import { Cl } from "@stacks/transactions";
import { describe, expect, it } from "vitest";
import { CONFIG } from "./lib/config";
import { mintSBTCToLoanContract, fundVault, setLiquidationRatio, convertReadLoan, convertReadDLC, setLiquidationFee } from "./lib/dlc-helper";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const sender = accounts.get("wallet_1")!;
const bob = accounts.get("wallet_3")!;

describe("Liquidation attempts ", () => {

  it("Any sender can attempt to liquidate a loan but loan cannot be twice liquidated", () => {
    mintSBTCToLoanContract(100000000000);
    setLiquidationRatio(0)
    fundVault(100);
    simnet.mineEmptyBlocks(5);

    const borrow = simnet.callPublicFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "borrow", 
      [Cl.uint(1), Cl.uint(50)], 
      bob
    );
    expect(borrow.result).toBeOk(Cl.bool(true));

    const liquidate1 = simnet.callPublicFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "attempt-liquidate", 
      [Cl.uint(1)], 
      sender
    );
    expect(liquidate1.result).toBeOk(Cl.bool(true));

    const loan = convertReadLoan(1)
    expect(loan.liquidationRatio).toStrictEqual(0)
    expect(loan.vaultLoan).toStrictEqual(50)
    expect(loan.status).toStrictEqual('pre-liquidated')

    const liquidate2 = simnet.callPublicFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1],
      "attempt-liquidate", 
      [Cl.uint(1)], 
      deployer
    );
    expect(liquidate2.result).toBeErr(Cl.uint(120));

  });

  it("Loan can be liquidated if ratio is 100% and any amount is borrowed", () => {
    mintSBTCToLoanContract(100000000000);
    setLiquidationRatio(10000)
    fundVault(1000000000000000);
    simnet.mineEmptyBlocks(5);

    const borrow = simnet.callPublicFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "borrow", 
      [Cl.uint(1), Cl.uint(1)], 
      bob
    );
    expect(borrow.result).toBeOk(Cl.bool(true));

    const loan = convertReadLoan(1)
    expect(loan.liquidationRatio).toStrictEqual(10000)
    expect(loan.vaultLoan).toStrictEqual(1)
    expect(loan.status).toStrictEqual('funded')

    const liquidate1 = simnet.callReadOnlyFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "check-liquidation", 
      [Cl.uint(1)], 
      sender
    );
    expect(liquidate1.result).toBeOk(Cl.bool(false));

    const dlc = convertReadDLC(loan.uuid!)
    expect(dlc.status).toStrictEqual(1)

  });

  it("Loan can be liquidated if ratio is 70% and amount borrowed is 70% of collateral", () => {
    mintSBTCToLoanContract(100000000000);
    setLiquidationRatio(7000)
    fundVault(100);
    simnet.mineEmptyBlocks(5);

    const borrow = simnet.callPublicFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "borrow", 
      [Cl.uint(1), Cl.uint(70)], 
      bob
    );
    expect(borrow.result).toBeOk(Cl.bool(true));

    const loan = convertReadLoan(1)
    expect(loan.status).toStrictEqual('funded')
    expect(loan.liquidationRatio).toStrictEqual(7000)

    const liquidate1 = simnet.callReadOnlyFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "check-liquidation", 
      [Cl.uint(1)], 
      sender
    );
    expect(liquidate1.result).toBeOk(Cl.bool(true));
  });

  it("Loan cannot be liquidated if ratio is 70% and amount borrowed is 69% of collateral", () => {
    mintSBTCToLoanContract(100000000000);
    setLiquidationRatio(7000)
    fundVault(100);
    simnet.mineEmptyBlocks(5);

    const borrow = simnet.callPublicFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "borrow", 
      [Cl.uint(1), Cl.uint(69)], 
      bob
    );
    expect(borrow.result).toBeOk(Cl.bool(true));

    const loan = convertReadLoan(1)
    expect(loan.status).toStrictEqual('funded')
    expect(loan.liquidationRatio).toStrictEqual(7000)

    const liquidate1 = simnet.callReadOnlyFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "check-liquidation", 
      [Cl.uint(1)], 
      sender
    );
    expect(liquidate1.result).toBeOk(Cl.bool(false));
  });

  it("Loan cannot be liquidated if ratio is 70% and amount borrowed is 69% of collateral", () => {
    mintSBTCToLoanContract(100000000000);
    setLiquidationRatio(7000)
    fundVault(100);
    simnet.mineEmptyBlocks(5);

    const borrow = simnet.callPublicFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "borrow", 
      [Cl.uint(1), Cl.uint(69)], 
      bob
    );
    expect(borrow.result).toBeOk(Cl.bool(true));

    const loan = convertReadLoan(1)
    expect(loan.status).toStrictEqual('funded')
    expect(loan.liquidationRatio).toStrictEqual(7000)

    const liquidate1 = simnet.callPublicFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "attempt-liquidate", 
      [Cl.uint(1)], 
      sender
    );
    expect(liquidate1.result).toBeErr(Cl.uint(1007));
  });

});

describe("Liquidation outcomes ", () => {

  // A value of 0 represents all value locked in the DLC to return to the user, 100,00 means all BTC goes to the protocol (the other party in the DLC)
  it("Loan is liquidated with correct outcome at 10% fee", () => {
    mintSBTCToLoanContract(100000000000);
    setLiquidationRatio(7000)
    fundVault(100);
    simnet.mineEmptyBlocks(5);

    const borrow = simnet.callPublicFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "borrow", 
      [Cl.uint(1), Cl.uint(70)], 
      bob
    );
    expect(borrow.result).toBeOk(Cl.bool(true));


    let loan = convertReadLoan(1)
    expect(loan.status).toStrictEqual('funded')
    expect(loan.liquidationRatio).toStrictEqual(7000)

    const liquidate1 = simnet.callPublicFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "attempt-liquidate", 
      [Cl.uint(1)], 
      sender
    );
    expect(liquidate1.result).toBeOk(Cl.bool(true));

    loan = convertReadLoan(1)
    expect(loan.status).toStrictEqual('pre-liquidated')
    const dlc = convertReadDLC(loan.uuid!)
    expect(dlc.status).toStrictEqual(2)
    expect(dlc.outcome).toStrictEqual(7700)

  });

  it("Loan is liquidated with correct outcome at 20% fee", () => {
    mintSBTCToLoanContract(100000000000);
    setLiquidationRatio(7000)
    setLiquidationFee(2000)
    fundVault(100);
    simnet.mineEmptyBlocks(5);

    const borrow = simnet.callPublicFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "borrow", 
      [Cl.uint(1), Cl.uint(70)], 
      bob
    );
    expect(borrow.result).toBeOk(Cl.bool(true));


    let loan = convertReadLoan(1)
    expect(loan.status).toStrictEqual('funded')
    expect(loan.liquidationRatio).toStrictEqual(7000)

    const liquidate1 = simnet.callPublicFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "attempt-liquidate", 
      [Cl.uint(1)], 
      sender
    );
    expect(liquidate1.result).toBeOk(Cl.bool(true));

    loan = convertReadLoan(1)
    expect(loan.status).toStrictEqual('pre-liquidated')
    const dlc = convertReadDLC(loan.uuid!)
    expect(dlc.status).toStrictEqual(2)
    expect(dlc.outcome).toStrictEqual(8400)

  });

  it("Loan is liquidated with 100% returned to protocol", () => {
    mintSBTCToLoanContract(100000000000);
    setLiquidationRatio(10000)
    setLiquidationFee(1000)
    fundVault(100);
    simnet.mineEmptyBlocks(5);

    const borrow = simnet.callPublicFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "borrow", 
      [Cl.uint(1), Cl.uint(100)], 
      bob
    );
    expect(borrow.result).toBeOk(Cl.bool(true));


    let loan = convertReadLoan(1)
    expect(loan.status).toStrictEqual('funded')
    expect(loan.liquidationRatio).toStrictEqual(10000)

    const liquidate1 = simnet.callPublicFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "attempt-liquidate", 
      [Cl.uint(1)], 
      sender
    );
    expect(liquidate1.result).toBeOk(Cl.bool(true));

    loan = convertReadLoan(1)
    expect(loan.status).toStrictEqual('pre-liquidated')
    const dlc = convertReadDLC(loan.uuid!)
    expect(dlc.status).toStrictEqual(2)
    expect(dlc.outcome).toStrictEqual(10000)

  });

  it("Loan with low liquidated ratio returns collateral to protocol", () => {
    mintSBTCToLoanContract(100000000000);
    setLiquidationRatio(100)
    setLiquidationFee(1000)
    fundVault(100);
    simnet.mineEmptyBlocks(5);

    const borrow = simnet.callPublicFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "borrow", 
      [Cl.uint(1), Cl.uint(90)], 
      bob
    );
    expect(borrow.result).toBeOk(Cl.bool(true));


    let loan = convertReadLoan(1)
    expect(loan.status).toStrictEqual('funded')
    expect(loan.liquidationRatio).toStrictEqual(100)

    const liquidate1 = simnet.callPublicFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "attempt-liquidate", 
      [Cl.uint(1)], 
      sender
    );
    expect(liquidate1.result).toBeOk(Cl.bool(true));

    loan = convertReadLoan(1)
    expect(loan.status).toStrictEqual('pre-liquidated')
    const dlc = convertReadDLC(loan.uuid!)
    expect(dlc.status).toStrictEqual(2)
    expect(dlc.outcome).toStrictEqual(9900)

  });

  it("Loan with medium liquidation leds to even split of collateral between borrower and protocol", () => {
    mintSBTCToLoanContract(100000000000);
    setLiquidationRatio(5000)
    setLiquidationFee(1000)
    fundVault(100);
    simnet.mineEmptyBlocks(5);

    const borrow = simnet.callPublicFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "borrow", 
      [Cl.uint(1), Cl.uint(50)], 
      bob
    );
    expect(borrow.result).toBeOk(Cl.bool(true));


    let loan = convertReadLoan(1)
    expect(loan.status).toStrictEqual('funded')

    const liquidate1 = simnet.callPublicFn(
      CONFIG.VITE_DLC_UASU_LOAN_CONTRACT.split('.')[1], 
      "attempt-liquidate", 
      [Cl.uint(1)], 
      sender
    );
    expect(liquidate1.result).toBeOk(Cl.bool(true));

    loan = convertReadLoan(1)
    expect(loan.status).toStrictEqual('pre-liquidated')
    const dlc = convertReadDLC(loan.uuid!)
    expect(dlc.status).toStrictEqual(2)
    expect(dlc.outcome).toStrictEqual(5500)

  });

});
