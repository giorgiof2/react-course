import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

import LessonThumbnail from "~/components/LessonThumbnail"
import type { Lesson } from "~/types"
import * as Lezione1 from "./1.mdx"
import IllustrationLesson1 from "~/images/1.svg"

const AttachIllustration = (page: any, illustration: string) => {
  return {
    illustration,
    slug: page.filename.replace(/\.mdx?$/, ""),
    title: page.meta.title,
    description: page.meta.descrizione,
  }
}

export const loader = async () => {
  return json([AttachIllustration(Lezione1, IllustrationLesson1)])
}

const CoursesLayout = () => {
  const lessons = useLoaderData<Lesson[]>()

  return (
    <div>
      {lessons.map(lesson => {
        return (
          <LessonThumbnail
            key={lesson.slug}
            lessson={lesson}
          />
        )
      })}
    </div>
  )
}

export default CoursesLayout
