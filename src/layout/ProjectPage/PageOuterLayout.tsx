import React from "react"

const PageOuterLayout: React.FC = ({ children }) => {
  return <div className={"mx-auto px-5 max-w-screen-2xl "}>{children}</div>
}

export default PageOuterLayout
