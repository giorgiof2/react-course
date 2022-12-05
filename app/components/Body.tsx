import type { ComponentWithChildren } from "~/types"

interface BodyProps extends ComponentWithChildren {}

const Body: React.FC<BodyProps> = ({ children, className }) => {
  return (
    <main className={`container w-auto ${className}`}>{children}</main>
  )
}

export default Body
