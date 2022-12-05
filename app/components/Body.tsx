import type { ComponentWithChildren } from "~/types"

interface BodyProps extends ComponentWithChildren {}

const Body: React.FC<BodyProps> = ({ children }) => {
  return <main className="container mx-auto">{children}</main>
}

export default Body
