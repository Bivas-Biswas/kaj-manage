import React, { FC } from "react"
import { IprojectItem } from "../../ts/types"
import { useHistory } from "react-router-dom"
import { doc, deleteDoc } from "firebase/firestore"
import db from "../../config/fbConfg"

interface Iprops {
  projectItem: IprojectItem
}
const ProjectSingleItem: FC<Iprops> = ({ projectItem }) => {
  const history = useHistory()

  const handleProjectItemDelete = async () => {
    const docRef = doc(db, "users", projectItem.projectId)
    await deleteDoc(docRef)
  }

  return (
    <div className={"flex flex-row mx-auto items-center justify-center cursor-pointer"}>
      <div
        className={"bg-blue-300 w-3/12 my-2 p-2"}
        onClick={() => {
          history.push(`/${projectItem.projectName}/${projectItem.projectId}`)
        }}
      >
        <p>{projectItem.projectName}</p>
      </div>
      <button className={"bg-red-500 p-2 ml-2"} onClick={handleProjectItemDelete}>
        Del
      </button>
    </div>
  )
}

export default ProjectSingleItem
