import { integer, pgEnum, pgTable, serial, uniqueIndex, date, varchar } from 'drizzle-orm/pg-core';
 

export const logs = pgTable('logs', {
  id: serial('id').primaryKey(),
  accessedAt: date('accessed_at').notNull(),
  ipAddress: varchar('ip_address').notNull(),
});
 