import { cache } from "react"

import { auth } from "@clerk/nextjs"
import { eq } from "drizzle-orm"

import { database } from "@/db/drizzle"
import { courses, userProgress } from "@/db/schema"

// Get user progress
export const getUserProgress = cache(async () => {
    const { userId } = await auth() // get user id from clerk
    if (!userId) {
        return null
    }

    const data = await database.query.userProgress.findFirst({
        where: eq(userProgress.userId, userId),
        with: {
            activeCourse: true,
        },
    })

    return data
})

// Get all courses
export const getAllCourses = cache(async () => {
    const data = await database.query.courses.findMany()

    return data
})

// Get course by id
export const getCourseById = cache(async (courseId: number) => {
    const data = await database.query.courses.findFirst({
        where: eq(courses.id, courseId),
        // TODO: populate units and lessons
    })

    return data
})
