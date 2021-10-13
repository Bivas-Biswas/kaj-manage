import React, { FC } from "react"

const ProjectItemContainer: FC = ({ children }) => {
  return (
    <section
      className={"grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid"}
    >
      {children}
    </section>
  )
}

export default ProjectItemContainer
