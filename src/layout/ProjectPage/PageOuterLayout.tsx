import React from "react"

const PageOuterLayout: React.FC = ({ children }) => {
  return <div className={"mx-auto p-2.5 md:p-4 max-w-screen-2xl "}>{children}</div>
}

export default PageOuterLayout
