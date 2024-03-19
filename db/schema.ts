import { relations } from "drizzle-orm"
import { boolean, integer, pgEnum, pgTable, serial, text } from "drizzle-orm/pg-core"

//* Define the courses table
export const courses = pgTable("courses", {
    // you can change with uuid, integer, or other type
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    imageSrc: text("image_src").notNull(), // /img_spain.svg
})

// Define relations many to one between courses and user_progress also one to many between courses and units
export const coursesRelations = relations(courses, ({ many }) => ({
    userProgress: many(userProgress),
    units: many(units),
}))

//* Define the user_progress table
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

//* Define the units table
export const units = pgTable("units", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(), // Unit 1
    description: text("description").notNull(), // Learn the basics of Spanish
    courseId: integer("course_id")
        .references(() => courses.id, { onDelete: "cascade" })
        .notNull(),
    order: integer("order").notNull(), // how to display (asc/desc) the units
})

// Define relations one to many between units and courses
export const unitsRelations = relations(units, ({ many, one }) => ({
    course: one(courses, {
        fields: [units.courseId],
        references: [courses.id],
    }),
    lessons: many(lessons),
}))

//* Define the lessons table
export const lessons = pgTable("lessons", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(), // Lesson 1
    unitId: integer("unit_id")
        .references(() => units.id, { onDelete: "cascade" })
        .notNull(),
    order: integer("order").notNull(), // how to display (asc/desc) the lessons
})

// Define relations one to many between lessons and units
export const lessonsRelations = relations(lessons, ({ one, many }) => ({
    unit: one(units, {
        fields: [lessons.unitId],
        references: [units.id],
    }),
    challenges: many(challenges),
}))

export const challengesEnum = pgEnum("type", ["SELECT", "ASSIST"])

//* Define the challenges table
export const challenges = pgTable("challenges", {
    id: serial("id").primaryKey(),
    lessonId: integer("lesson_id")
        .references(() => lessons.id, { onDelete: "cascade" })
        .notNull(),
    type: challengesEnum("type").notNull(),
    question: text("question").notNull(),
    order: integer("order").notNull(), // how to display (asc/desc) the challenges
})

// Define relations one to many between challenges and lessons
export const challengesRelations = relations(challenges, ({ one, many }) => ({
    lesson: one(lessons, {
        fields: [challenges.lessonId],
        references: [lessons.id],
    }),
    challengeOptions: many(challengeOptions),
    challengeProgress: many(challengeProgress),
}))

//* Define the challengeProgress table
export const challengeProgress = pgTable("challenge_progress", {
    id: serial("id").primaryKey(),
    userId: text("user_id").notNull(),
    challengeId: integer("challenge_id")
        .references(() => challenges.id, { onDelete: "cascade" })
        .notNull(),
    completed: boolean("completed").notNull().default(false),
})

// Define relations one to many between challengeProgress and challenges
export const challengeProgressRelations = relations(challengeProgress, ({ one }) => ({
    challenge: one(challenges, {
        fields: [challengeProgress.challengeId],
        references: [challenges.id],
    }),
}))

//* Define challengeOptions table
export const challengeOptions = pgTable("challenge_options", {
    id: serial("id").primaryKey(),
    challengeId: integer("challenge_id")
        .references(() => challenges.id, { onDelete: "cascade" })
        .notNull(),
    text: text("text").notNull(),
    correct: boolean("correct").notNull(),
    imageSrc: text("image_src"),
    audioSrc: text("audio_src"),
})

// Define relations one to many between challengeOptions and challenges
export const challengeOptionsRelations = relations(challengeOptions, ({ one }) => ({
    challenge: one(challenges, {
        fields: [challengeOptions.challengeId],
        references: [challenges.id],
    }),
}))
