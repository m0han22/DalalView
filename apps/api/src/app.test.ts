import { describe, expect, it } from "vitest";
import { app } from "./app";

describe("API health", () => {
  it("reports that the API is available", async () => {
    const response = await app.request("http://localhost/health");

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({
      status: "ok",
      service: "dalalvue-api",
    });
  });
});
