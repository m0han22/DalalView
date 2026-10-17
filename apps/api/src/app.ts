import { Hono } from "hono";
import { requestLogger } from "./middleware/request-logger.js";
import { healthRoute } from "./routes/health.js";

export const app = new Hono();

app.use("*", requestLogger);
app.route("/", healthRoute);
