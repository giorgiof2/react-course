import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

import LessonThumbnail from "~/components/LessonThumbnail"
import IllustrazioneLezione1 from "~/images/1.svg"
import type { Lesson } from "~/types"
import * as Lezione1 from "./1.mdx"

const AttachIllustration = (page: any) => {
  return {
    illustration: IllustrazioneLezione1,
    slug: page.filename.replace(/\.mdx?$/, ""),
    title: page.meta.title,
    description: page.meta.descrizione,
  }
}

export const loader = async () => {
  return json([AttachIllustration(Lezione1)])
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
