import { relations } from "drizzle-orm"
import { integer, pgTable, serial, text } from "drizzle-orm/pg-core"

export const courses = pgTable("courses", {
    // you can change with uuid, integer, or other type
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    imageSrc: text("image_src").notNull(),
})

// Define relations many to many between courses and user_progress
export const coursesRelations = relations(courses, ({ many }) => ({
    userProgress: many(userProgress),
}))

export const userProgress = pgTable("user_progress", {
    userId: text("user_id").primaryKey(), // because auth() returns string
    userName: text("user_name").notNull().default("User"),
    userImageSrc: text("user_image_src").notNull().default("/ic_mascot.svg"),
    activeCourseId: integer("active_course_id").references(() => courses.id, { onDelete: "cascade" }),
    hearts: integer("hearts").notNull().default(5),
    points: integer("points").notNull().default(0),
})

// Define relations one to many between user_progress and courses
export const userProgressRelations = relations(userProgress, ({ one }) => ({
    activeCourse: one(courses, {
        fields: [userProgress.activeCourseId],
        references: [courses.id],
    }),
}))
