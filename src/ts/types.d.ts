import React from "react"
import { DocumentData } from "@firebase/firestore-types"
import { ItaskData } from "./interfaces"

// context types

export type TprojectId = string

export type TsetProjectId = React.Dispatch<React.SetStateAction<string>>

export type TcontextTaskData = DocumentData | undefined | ItaskData

export type TsetContextTaskData = React.Dispatch<
  React.SetStateAction<DocumentData | undefined | ItaskData>
>
