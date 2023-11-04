CREATE TABLE IF NOT EXISTS "logs" (
	"id" serial PRIMARY KEY NOT NULL,
	"accessed_at" date NOT NULL,
	"ip_address" varchar NOT NULL
);
