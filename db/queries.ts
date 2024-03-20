import { cache } from "react"

import { auth } from "@clerk/nextjs"
import { eq } from "drizzle-orm"

import { database } from "@/db/drizzle"
import { challengeProgress, courses, units, userProgress } from "@/db/schema"

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

// Get units
export const getUnits = cache(async () => {
    const { userId } = await auth()
    const userProgress = await getUserProgress()

    if (!userId || !userProgress?.activeCourseId) {
        return []
    }

    // TODO: Confirm whether order is needed
    const data = await database.query.units.findMany({
        where: eq(units.courseId, userProgress.activeCourseId), // get units for the active course
        with: {
            lessons: {
                with: {
                    challenges: {
                        with: {
                            challengeProgress: {
                                where: eq(challengeProgress.userId, userId),
                            },
                        },
                    },
                },
            },
        },
    })

    // Get matching data based on challenge, length > 0, and every challenge progress has progress completed
    const normalizeData = data.map((unit) => {
        const lessonsWithCompletedStatus = unit.lessons.map((lesson) => {
            const allCompletedChallenges = lesson.challenges.every((challenge) => {
                return (
                    challenge.challengeProgress &&
                    challenge.challengeProgress.length > 0 &&
                    challenge.challengeProgress.every((progress) => progress.completed)
                )
            })

            return { ...lesson, completed: allCompletedChallenges }
        })

        return { ...unit, lessons: lessonsWithCompletedStatus }
    })

    return normalizeData
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
