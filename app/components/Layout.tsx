import type { ComponentWithChildren } from "~/types"
import Body from "./Body"
import Header from "./Header"

interface LayoutProps extends ComponentWithChildren {}
const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <>
      <Header />
      <Body className={`mx-6 md:mx-auto ${className}`}>{children}</Body>
    </>
  )
}

export default Layout
