import type { ComponentWithChildren } from "~/types"
import Body from "./Body"
import Header from "./Header"

interface LayoutProps extends ComponentWithChildren {}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Body>{children}</Body>
    </>
  )
}

export default Layout
