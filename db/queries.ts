import { cache } from "react"

import { database } from "@/db/drizzle"

// Get all courses
export const getAllCourses = cache(async () => {
    const data = await database.query.courses.findMany()

    return data
})
