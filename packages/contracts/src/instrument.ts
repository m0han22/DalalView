import { z } from "zod";

const urlTokenSchema = z
  .string()
  .min(1)
  .max(80)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Must use lowercase URL-safe words separated by hyphens.");

const uppercaseSymbolSchema = z
  .string()
  .min(1)
  .max(32)
  .regex(
    /^[A-Z0-9][A-Z0-9._-]*$/,
    "Must use uppercase letters, digits, dots, underscores, or hyphens.",
  );

const validTimeZone = (timeZone: string) => {
  try {
    Intl.DateTimeFormat("en-US", { timeZone });
    return true;
  } catch {
    return false;
  }
};

export const instrumentAssetTypeSchema = z.enum(["equity", "etf", "index", "crypto"]);
export const instrumentRegionSchema = z.enum(["us", "crypto"]);
export const instrumentStatusSchema = z.enum(["active", "disabled"]);

export const instrumentSchema = z
  .object({
    id: urlTokenSchema,
    slug: urlTokenSchema,
    name: z.string().trim().min(1).max(200),
    symbol: uppercaseSymbolSchema,
    venue: z.string().trim().min(1).max(80),
    assetType: instrumentAssetTypeSchema,
    currency: z
      .string()
      .length(3)
      .regex(/^[A-Z]{3}$/, "Must be a three-letter uppercase currency code."),
    timezone: z.string().refine(validTimeZone, "Must be a valid IANA timezone."),
    tradingViewSymbol: z
      .string()
      .min(3)
      .max(100)
      .regex(
        /^[A-Z0-9_]+:[A-Z0-9._-]+$/,
        "Must use the reviewed PROVIDER:SYMBOL TradingView format.",
      ),
    region: instrumentRegionSchema,
    status: instrumentStatusSchema,
  })
  .strict();

export type Instrument = z.infer<typeof instrumentSchema>;
