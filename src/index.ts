import { Hono } from "hono";
import { subscriber } from "./routes/subscriber";
import { newsletter } from "./routes/neswletter";
import * as os from "os";
//load env and deps for node enviroment
import { serve } from "@hono/node-server";
import * as dotenv from "dotenv";

dotenv.config();

const PORT = 8080;
const app = new Hono();

//connect routes
app.route("/subscriber", subscriber);
app.route("/newsletter", newsletter);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default {
  fetch: app,
  PORT: PORT,
};
