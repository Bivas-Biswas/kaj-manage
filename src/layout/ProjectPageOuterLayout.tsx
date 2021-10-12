import React from "react"

const ProjectPageOuterLayout: React.FC = ({ children }) => {
  return (
    <div className={"max-w-3xl m-auto px-3 flex flex-col items-start"}>{children}</div>
  )
}

export default ProjectPageOuterLayout
