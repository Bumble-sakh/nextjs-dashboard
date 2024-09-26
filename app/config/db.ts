import { neon } from "@neondatabase/serverless";

const DB_URL = process.env.POSTGRES_URL ?? "";
export const sql = neon(DB_URL);
