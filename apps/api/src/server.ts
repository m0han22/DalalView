import { serve } from "@hono/node-server";
import { logger } from "@dalalvue/config";
import { app } from "./app.js";

const port = Number(process.env.API_PORT ?? 8787);
serve({ fetch: app.fetch, port }, (info) => {
  logger.info("api.started", { port: info.port });
});

export default app;
