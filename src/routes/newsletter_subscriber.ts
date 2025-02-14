import { Hono } from "hono";
import { Newsletter_subscriber } from "../modals/newsletter_subscriber";

export const newsletter_subscriber = new Hono();

newsletter_subscriber.get("/", async (c) => {
  const newsletter_subscribers = await Newsletter_subscriber.findAll();

  return c.json(
    {
      data: newsletter_subscribers,
    },
    200
  );
});
