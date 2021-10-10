import React, { FC, useContext, useEffect } from "react"
import Drag from "./components/Drag"
import { TaskGlobalContext } from "./context"
import { doc, setDoc } from "firebase/firestore"
import db from "./config/fbConfg"
import defaultData from "./data/defaultData"

const App: FC = () => {
  const { setProjectId, setTaskData, projectId, taskData } = useContext(TaskGlobalContext)
  const id = "projectId"
  useEffect(() => {
    setProjectId(id)
    if (JSON.stringify(taskData) === "{}") {
      const docRef = doc(db, "users", projectId)
      setDoc(docRef, defaultData)
      setTaskData(defaultData)
    }
  }, [])

  return (
    <>
      <Drag />
    </>
  )
}

export default App
