import React, { FC } from "react"
import { IprojectItem } from "../../ts/types"
import { doc, deleteDoc } from "firebase/firestore"
import db from "../../config/fbConfg"
import useToggle from "../../hooks/useToggel"
import moment from "moment/moment"
import { useHistory } from "react-router-dom"
import ModifyProjectModal from "../taskPage/helper/ModifyProjectModal"

interface Iprops {
  projectItem: IprojectItem
}

const ProjectSingleItem: FC<Iprops> = ({ projectItem }) => {
  const history = useHistory()
  const [modalIsOpen, setModalIsOpen] = useToggle(false)
  const handleProjectItemDelete = async () => {
    const docRef = doc(db, "users", projectItem.projectId)
    await deleteDoc(docRef)
  }

  return (
    <div className={"m-2 border-2 rounded-lg w-auto  "}>
      <div
        className={"cursor-pointer select-none p-3"}
        onClick={() => {
          history.push(`/${projectItem.projectName}/${projectItem.projectId}`)
        }}
      >
        <h3 className={"text-2xl"}>{projectItem.projectName}</h3>
        <div className={"mt-1"}>
          <p className={"text-xs my-1"}>TotalTask : {projectItem.totalTask}</p>
          <p className={"text-xs my-1"}>TotalColumn : {projectItem.totalColumns}</p>
          <p className={"text-xs my-1"}>
            Updated At : {moment(projectItem.updateDate.toDate()).calendar()}
          </p>
          <p className={"text-xs my-1"}>
            Created At : {moment(projectItem.createdDate.toDate()).calendar()}
          </p>
          <p className={"text-xs my-1"}>
            End Project Date : {moment(projectItem.endProjectDate.toDate()).calendar()}
          </p>
        </div>
      </div>
      <div className={"px-3 pb-3"}>
        <button className={"bg-red-500 p-2 z-40"} onClick={handleProjectItemDelete}>
          Del
        </button>
        <button
          className={"bg-yellow-100 p-2 ml-2 z-40"}
          onClick={() => setModalIsOpen(true)}
        >
          Edit
        </button>
      </div>

      {modalIsOpen && (
        <ModifyProjectModal
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          projectId={projectItem.projectId}
        />
      )}
    </div>
  )
}

export default ProjectSingleItem
