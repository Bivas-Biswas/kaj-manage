import React, { FC } from "react"
import { IprojectItem } from "../../ts/types"
import { doc, deleteDoc } from "firebase/firestore"
import db from "../../config/fbConfg"
import useToggle from "../../hooks/useToggel"
import moment from "moment/moment"
import { useHistory } from "react-router-dom"
import ModifyProjectModal from "./helper/ModifyProjectModal"
import Tippy from "@tippy.js/react"
import { FiMoreVertical } from "react-icons/all"
import ItemWrapper from "../../layout/ProjectPage/ItemWrapper"
import DropDown from "../smallComponents/DropDown"
import { customModalStyles } from "../taskPage/helper/TaskModifyModal"
import Modal from "react-modal"

interface Iprops {
  projectItem: IprojectItem
}

const ProjectSingleItem: FC<Iprops> = ({ projectItem }) => {
  const history = useHistory()
  const [isOptionOpen, setIsOptionOpen] = useToggle(false)
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useToggle(false)
  const [isModalEditOpen, setIsModalEditOpen] = useToggle(false)

  const alloptions = [
    { name: "Edit", setter: setIsModalEditOpen },
    { name: "Delete", setter: setIsModalDeleteOpen },
  ]

  const handleProjectItemDelete = async () => {
    setIsModalDeleteOpen(false)
    const docRef = doc(db, "users", projectItem.projectId)
    await deleteDoc(docRef)
  }

  return (
    <ItemWrapper>
      <Tippy
        content={"click for more options"}
        placement={"top-end"}
        theme={"bg-red-200"}
      >
        <button
          className={`
        text-3xl absolute right-1 z-10 rounded-full p-0.5 transition
        hover:text-purple-600
        hover:duration-500 hover:ease-in-out
        `}
          onClick={() => setIsOptionOpen(!isOptionOpen)}
        >
          <FiMoreVertical />
        </button>
      </Tippy>
      {isOptionOpen && (
        <DropDown
          allOptions={alloptions}
          isOptionOpen={isOptionOpen}
          setIsOptionOpen={setIsOptionOpen}
        />
      )}
      <div
        className={"select-none m-2 text-gray-600 relative"}
        onClick={() => {
          history.push(`/${projectItem.projectName}/${projectItem.projectId}`)
        }}
      >
        <Tippy
          placement={"top"}
          arrow={false}
          content={` Last Updated at ${moment(projectItem.updateDate.toDate()).format(
            "l"
          )}`}
        >
          <p className={"text-xs my-1 inline-block"}>
            {moment(projectItem.updateDate.toDate(), "YYYYMMDD").fromNow()}
          </p>
        </Tippy>

        <h3 className={"text-4xl text-black"}>{projectItem.projectName}</h3>
        <div className={"flex flex-row justify-between my-2 text-sm "}>
          <p>Total Task : {projectItem.totalTask}</p>
          <p>Total Field : {projectItem.totalColumns}</p>
        </div>
        <div className={"flex flex-row justify-between"}>
          <Tippy
            content={`Project End Date ${moment(
              projectItem.endProjectDate.toDate()
            ).format("MMM Do YY")}`}
            placement={"bottom"}
            arrow={false}
          >
            <p className={"text-xs my-1"}>
              {moment(projectItem.endProjectDate.toDate()).format("MMM Do")}
            </p>
          </Tippy>
          <Tippy
            content={`Project created at ${moment(
              projectItem.createdDate.toDate()
            ).calendar()}`}
            placement={"bottom"}
            arrow={false}
          >
            <p className={"text-xs my-1"}>
              {moment(projectItem.createdDate.toDate()).format("MMM Do")}
            </p>
          </Tippy>
        </div>
      </div>

      {isModalEditOpen && (
        <ModifyProjectModal
          isModalEditOpen={isModalEditOpen}
          setIsModalEditOpen={setIsModalEditOpen}
          projectId={projectItem.projectId}
        />
      )}

      {isModalDeleteOpen && (
        <Modal isOpen={true} style={customModalStyles}>
          <p>Are You want to delete the file ?</p>
          <button
            className={"p-2 m-2 bg-green-200"}
            onClick={() => setIsModalDeleteOpen(false)}
          >
            Cancel
          </button>
          <button className={"p-2 bg-red-500"} onClick={handleProjectItemDelete}>
            Ok
          </button>
        </Modal>
      )}
    </ItemWrapper>
  )
}

export default ProjectSingleItem
