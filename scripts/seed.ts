import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "@/db/schema"

const sql = neon(process.env.DATABASE_URL!)
// @ts-ignore
const db = drizzle(sql, { schema })

const main = async () => {
    try {
        console.info("Seeding database...")

        await db.delete(schema.courses)
        await db.delete(schema.userProgress)

        await db.insert(schema.courses).values([
            { id: 1, title: "Spanish", imageSrc: "/img_spain.svg" },
            { id: 2, title: "Croatian", imageSrc: "/img_croatian.svg" },
            { id: 3, title: "France", imageSrc: "/img_france.svg" },
            { id: 4, title: "Italian", imageSrc: "/img_italia.svg" },
            { id: 5, title: "Japan", imageSrc: "/img_japan.svg" },
        ])

        console.info("Seeding finished!")
    } catch (error) {
        console.error(error)
        throw new Error("Failed to seed database")
    }
}

main()
