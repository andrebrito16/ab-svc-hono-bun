import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { Hono } from "hono";
import { logs } from "./db/schema/logs";
import { db, migrationClient } from "./infra/database";

const app = new Hono();

async function main() {
  await migrate(drizzle(migrationClient), {
    migrationsFolder: "drizzle",
    migrationsTable: "drizzle_migrations",
  });

  app.get("/", async (c) => {
    const allLogs = await db.select().from(logs)

    return c.json({
      allLogs
    })
  });

  app.get("health", (c) =>
    c.json({
      status: "ok",
      message: "Hono is healthy",
      environment: process.env.NODE_ENV,
    })
  );
}
main();
export default app;
