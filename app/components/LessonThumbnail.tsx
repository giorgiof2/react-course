import { Link } from "@remix-run/react"
import React from "react"
import type { Lesson } from "~/types"

interface LessonThumbnailProps {
  lessson: Lesson
}
const LessonThumbnail: React.FC<LessonThumbnailProps> = ({ lessson }) => {
  return (
    <Link
      to={lessson.slug}
      key="el">
      <div className="w-32 h-32">
        <img
          src={lessson.illustration}
          alt="lezione"
        />
      </div>
      {lessson.title}
      <p>{lessson.description}</p>
    </Link>
  )
}

export default LessonThumbnail
