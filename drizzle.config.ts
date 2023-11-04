import type { Config } from 'drizzle-kit'

export default {
  schema: "./src/db/schema",
  driver: "pg",
  out: "drizzle",
} satisfies Config