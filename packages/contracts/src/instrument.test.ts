import { describe, expect, it } from "vitest";
import { instrumentSchema } from "./instrument.js";

const appleInstrument = {
  id: "us-equity-aapl",
  slug: "apple",
  name: "Apple Inc.",
  symbol: "AAPL",
  venue: "NASDAQ",
  assetType: "equity",
  currency: "USD",
  timezone: "America/New_York",
  tradingViewSymbol: "NASDAQ:AAPL",
  region: "us",
  status: "active",
} as const;

describe("instrumentSchema", () => {
  it("accepts a reviewed US equity", () => {
    expect(instrumentSchema.parse(appleInstrument)).toEqual(appleInstrument);
  });

  it("accepts a reviewed crypto instrument", () => {
    expect(
      instrumentSchema.parse({
        ...appleInstrument,
        id: "crypto-btc-usd",
        slug: "bitcoin",
        name: "Bitcoin",
        symbol: "BTCUSD",
        venue: "COINBASE",
        assetType: "crypto",
        timezone: "UTC",
        tradingViewSymbol: "COINBASE:BTCUSD",
        region: "crypto",
      }),
    ).toMatchObject({ assetType: "crypto", region: "crypto" });
  });

  it.each([
    ["an empty name", { name: "" }],
    ["an unsupported asset type", { assetType: "forex" }],
    ["an unsafe slug", { slug: "Apple Inc." }],
    ["an invalid currency", { currency: "US" }],
    ["an invalid timezone", { timezone: "Moon/Base" }],
    ["an unreviewed TradingView mapping", { tradingViewSymbol: "AAPL" }],
  ])("rejects %s", (_reason, override) => {
    expect(instrumentSchema.safeParse({ ...appleInstrument, ...override }).success).toBe(false);
  });

  it("rejects unexpected fields", () => {
    expect(instrumentSchema.safeParse({ ...appleInstrument, price: 200 }).success).toBe(false);
  });
});
