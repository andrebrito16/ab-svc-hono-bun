
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
 
export const migrationClient = postgres(process.env.POSTGRES_CONNECTION_STRING!, { max: 1 });
 
export const queryClient = postgres(process.env.POSTGRES_CONNECTION_STRING!);
export const db = drizzle(queryClient);