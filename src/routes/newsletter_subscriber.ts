import { Hono } from "hono";
import { Subscriber } from "../modals/subscriber";

export const newsletter_subscriber = new Hono();

newsletter_subscriber.get("/", async (c) => {
  const subscribers = await Subscriber.findAll();

  return c.json(
    {
      data: subscribers,
    },
    200
  );
});
