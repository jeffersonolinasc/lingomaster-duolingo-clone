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
        await db.delete(schema.units)
        await db.delete(schema.lessons)
        await db.delete(schema.challenges)
        await db.delete(schema.challengeOptions)
        await db.delete(schema.challengeProgress)

        await db.insert(schema.courses).values([
            { id: 1, title: "Spanish", imageSrc: "/img_spain.svg" },
            { id: 2, title: "Croatian", imageSrc: "/img_croatian.svg" },
            { id: 3, title: "France", imageSrc: "/img_france.svg" },
            { id: 4, title: "Italian", imageSrc: "/img_italia.svg" },
            { id: 5, title: "Japan", imageSrc: "/img_japan.svg" },
        ])

        await db.insert(schema.units).values([
            {
                id: 1,
                courseId: 1, // Spanish
                title: "Unit 1",
                description: "Basic Spanish",
                order: 1,
            },
        ])

        await db.insert(schema.lessons).values([
            {
                id: 1,
                unitId: 1, // Unit 1 (Basic Spanish)
                order: 1,
                title: "Greetings",
            },
            {
                id: 2,
                unitId: 1, // Unit 1 (Basic Spanish)
                order: 2,
                title: "Numbers",
            },
            {
                id: 3,
                unitId: 1, // Unit 1 (Basic Spanish)
                order: 3,
                title: "Food",
            },
            {
                id: 4,
                unitId: 1, // Unit 1 (Basic Spanish)
                order: 4,
                title: "Family",
            },
        ])

        await db.insert(schema.challenges).values([
            {
                id: 1,
                lessonId: 1, // Greetings
                type: "SELECT",
                order: 1,
                question: 'Which one of these is "hello"?',
            },
            {
                id: 2,
                lessonId: 1, // Greetings
                type: "ASSIST",
                order: 2,
                question: "viva la vida?",
            },
            {
                id: 3,
                lessonId: 1, // Greetings
                type: "SELECT",
                order: 3,
                question: 'Which one of these is "goodbye"?',
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                id: 1,
                challengeId: 1, // Which one of these is "hello"?
                imageSrc: "/img_man.svg",
                correct: true,
                text: "el hombre",
                audioSrc: "/es_man.mp3",
            },
            {
                id: 2,
                challengeId: 1, // Which one of these is "hello"?
                imageSrc: "/img_woman.svg",
                correct: false,
                text: "la mujer",
                audioSrc: "/es_woman.mp3",
            },
            {
                id: 3,
                challengeId: 1, // Which one of these is "hello"?
                imageSrc: "/img_robot.svg",
                correct: false,
                text: "el robot",
                audioSrc: "/es_robot.mp3",
            },
        ])

        console.info("Seeding finished!")
    } catch (error) {
        console.error(error)
        throw new Error("Failed to seed database")
    }
}

main()
