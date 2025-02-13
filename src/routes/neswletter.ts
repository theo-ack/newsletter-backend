import { Hono } from "hono";
import { Newsletter } from "../modals/newsletter";

export const newsletter = new Hono();

newsletter.get("/", async (c) => {
  const newsletters = await Newsletter.findAll();

  return c.json(
    {
      data: newsletters,
    },
    200
  );
});

newsletter.get("/:id", async (c) => {
  const id = c.req.param("id");
  const newsletter = await Newsletter.find(id);

  return c.json(
    {
      data: newsletter,
    },
    200
  );
});

newsletter.put("/:id", async (c) => {
  const id = c.req.param("id");
  const body = await c.req.json();

  try {
    const updatedNewsletter = await Newsletter.update(id, body);
    if (updatedNewsletter) {
      return c.json(
        { message: "Newsletter updated successfully", data: updatedNewsletter },
        200
      );
    } else {
      return c.text("Newsletter not foud or Update failed", 404);
    }
  } catch (error) {
    console.error(" Error updating subscriber:", error);
    return c.text("Internal server error", 500);
  }
});

newsletter.post("/", async (c) => {
  const body = await c.req.json();

  try {
    const updatedNewsletter = await Newsletter.create(body);
    if (updatedNewsletter) {
      return c.json(
        { message: "Newsletter created successfully", data: updatedNewsletter },
        200
      );
    } else {
      return c.text("Erorr creating Newsletter", 404);
    }
  } catch (error) {
    console.error(" Error creating Newsletter", error);
    return c.text("internal server error", 500);
  }
});

newsletter.delete("/:id", async (c) => {
  const id = c.req.param("id");
  const newsletter = await Newsletter.delete(id);

  try {
    const deletedNewsletter = await Newsletter.delete(id);

    if (deletedNewsletter) {
      return c.json(
        { message: "Subscriber has deleted", data: deletedNewsletter },
        200
      );
    } else {
      return c.json("subscriber not found", 404);
    }
  } catch (error) {
    console.error("Error deleting Subscriber: ", error);
    return c.json("Internal server Error", 500);
  }
});
