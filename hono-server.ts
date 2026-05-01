import { Hono } from "hono";
import { serve } from "@hono/node-server";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ message: "Hello, Hono!" });
});

app.get("/users", (c) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
  return c.json(users);
});

app.get("/users/:id", (c) => {
  const id = Number(c.req.param("id"));
  return c.json({ id, name: `User ${id}` });
});

app.post("/users", async (c) => {
  const body = await c.req.json<{ name: string }>();
  return c.json({ id: 3, name: body.name }, 201);
});

serve({ fetch: app.fetch, port: 3000 }, (info) => {
  console.log(`Server running at http://localhost:${info.port}`);
});
