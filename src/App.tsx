import React, { FC, useContext, useEffect } from "react"
import Drag from "./learn-dnd/Drag"
import { TaskGlobalContext } from "./context"

const App: FC = () => {
  const { setProjectId } = useContext(TaskGlobalContext)
  const id = "projectId"
  useEffect(() => {
    setProjectId(id)
  })
  return (
    <>
      <Drag />
    </>
  )
}

export default App
