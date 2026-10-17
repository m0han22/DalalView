import type { MiddlewareHandler } from "hono";
import { logger } from "@dalalvue/config";

export const requestLogger: MiddlewareHandler = async (c, next) => {
  const startedAt = performance.now();
  const requestId = c.req.header("x-request-id") ?? crypto.randomUUID();

  c.header("x-request-id", requestId);
  await next();

  logger.info("http.request", {
    requestId,
    method: c.req.method,
    path: new URL(c.req.url).pathname,
    status: c.res.status,
    durationMs: Math.round(performance.now() - startedAt),
  });
};
