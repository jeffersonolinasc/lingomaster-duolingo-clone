import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"

import * as schema from "@/db/schema"

const sql = neon(process.env.DATABASE_URL!)
// @ts-ignore
export const database = drizzle(sql, { schema })
