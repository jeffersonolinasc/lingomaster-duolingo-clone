import React from "react"

import { List } from "./list"

import { getAllCourses, getUserProgress } from "@/db/queries"

export default async function CoursesPage() {
    const coursesData = getAllCourses()
    const userProgressData = getUserProgress()

    // If you want to fetch data in parallel, you can use Promise.all
    const [courses, userProgress] = await Promise.all([coursesData, userProgressData])

    return (
        <div className="h-full max-w-[912px] px-3 mx-auto">
            <h1 className="text-2xl font-bold text-neutral-700">Language Courses</h1>
            <List courses={courses} activeCourseId={userProgress?.activeCourseId} />
        </div>
    )
}
