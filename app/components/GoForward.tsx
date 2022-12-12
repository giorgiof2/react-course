import { Link } from "@remix-run/react"

const GoForward = (href: string) => {
  return (
    <Link to={href}>
      <span>{href}</span>
    </Link>
  )
}

export default GoForward
