import pg from 'pg'
import fs from 'fs'

const { Pool } = pg

export const db = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT) || 5432,
  database: process.env.PGDATABASE,
})

try {
  await db.connect()
  let seedSql = fs.readFileSync('./src/lib/seed.sql', 'utf-8');
  await db.query(seedSql);
  console.log("Database connected and seeded successfully.");
} catch (error) {
  console.error("Error connecting and seeding the database:", error);
}