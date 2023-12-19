import { Cl } from "@stacks/transactions";
import { describe, expect, it } from "vitest";

const accounts = simnet.getAccounts();
const sender = accounts.get("wallet_1")!;

/*
  The test below is an example. Learn more in the clarinet-sdk readme:
  https://github.com/hirosystems/clarinet/blob/develop/components/clarinet-sdk/README.md
*/

describe("example tests", () => {
  it("ensures simnet is well initalise", () => {
    expect(simnet.blockHeight).toBeGreaterThan(0);
  });

  it("shows an example", () => {
     const { result } = simnet.callPublicFn("uasu-sbtc-loan-v2", "borrow", [Cl.uint(1), Cl.uint(10000)], sender);
     console.log(result)
     expect(result).toBeErr(Cl.uint(1006));
  });
});
