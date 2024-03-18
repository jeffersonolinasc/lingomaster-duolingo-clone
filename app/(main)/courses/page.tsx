import React from "react"

import { List } from "@/app/(main)/courses/list"
import { getAllCourses } from "@/db/queries"

export default async function CoursesPage() {
    const courses = await getAllCourses()

    return (
        <div className="h-full max-w-[912px] px-3 mx-auto">
            <h1 className="text-2xl font-bold text-neutral-700">Language Courses</h1>
            <List courses={courses} activeCourseId={1} />
        </div>
    )
}
