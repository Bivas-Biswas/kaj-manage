import React, { createContext, ReactNode, useEffect, useState } from "react"
import { DocumentData } from "@firebase/firestore-types"
import fetchDB from "../utils/fetchDB"
import {
  TcontextTaskData,
  TprojectId,
  TsetContextTaskData,
  TsetProjectId,
} from "../ts/types"
import { ItaskData } from "../ts/interfaces"
import { Direction } from "react-beautiful-dnd"

export interface ITaskContexProviderProps {
  children: ReactNode
}

export interface ITaskContextType {
  taskData: TcontextTaskData
  setTaskData: TsetContextTaskData
  projectId: TprojectId
  setProjectId: TsetProjectId
  view: Direction | undefined
  setView: React.Dispatch<React.SetStateAction<Direction | undefined>>
}

export const TaskGlobalContext = createContext({} as ITaskContextType)

const UseTaskGlobalContext = ({ children }: ITaskContexProviderProps) => {
  const [taskData, setTaskData] = useState<DocumentData | ItaskData | undefined>(
    undefined
  )
  const [projectId, setProjectId] = useState<TprojectId>("projectId")

  const [view, setView] = useState<Direction | undefined>("vertical")

  useEffect(() => {
    async function fetch() {
      const data = await fetchDB(projectId)
      if (data !== undefined) {
        setTaskData(data)
      }
    }
    fetch()
  }, [projectId])

  return (
    <TaskGlobalContext.Provider
      value={{
        taskData,
        setTaskData,
        projectId,
        setProjectId,
        view,
        setView,
      }}
    >
      {children}
    </TaskGlobalContext.Provider>
  )
}

export default UseTaskGlobalContext
