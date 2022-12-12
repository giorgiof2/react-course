// interfaces
export interface ComponentWithChildren {
  children?: React.ReactElement | string
  className?: string
}

export interface Lesson {
  title: string
  description: string
  slug: string
  illustration: string
}
