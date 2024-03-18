"use client"

import { courses } from "@/db/schema"
import { Card } from "./card"

type ListProps = {
    // $inferSelect is a special keyword that infers the type of the select is same with the schema
    courses: (typeof courses.$inferSelect)[]
    activeCourseId: number
}

export const List = ({ courses, activeCourseId }: ListProps) => {
    return (
        <div className="grid grid-cols-2 pt-6 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
            {courses.map((course) => (
                <Card
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    imageSrc={course.imageSrc}
                    onClick={() => {}}
                    disabled={false}
                    active={course.id === activeCourseId}
                />
            ))}
        </div>
    )
}
