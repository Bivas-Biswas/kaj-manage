import React from "react"
import { DocumentData } from "@firebase/firestore-types"
import { Icolumn, Itask, ItaskData } from "./interfaces"
import handleAddTask from "../utils/handleAddTask"

// context types

export type TprojectId = string

export type TsetProjectId = React.Dispatch<React.SetStateAction<string>>

export type TcontextTaskData = DocumentData | undefined | ItaskData

export type TsetContextTaskData = React.Dispatch<
  React.SetStateAction<DocumentData | undefined | ItaskData>
>

export type ThandleAddTask = {
  addNewData: Itask
  column: Icolumn
  taskData: TcontextTaskData
  projectId: TprojectId
  setTaskData: TsetContextTaskData
}
