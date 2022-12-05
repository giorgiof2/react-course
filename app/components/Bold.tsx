import React from "react"
import type { ComponentWithChildren } from "~/types"

interface BoldProps extends ComponentWithChildren {}

const Bold: React.FC<BoldProps> = ({ children, className }) => {
  return <span className={`font-medium ${className}`}>{children}</span>
}

export default Bold
