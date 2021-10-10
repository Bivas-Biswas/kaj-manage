import React, { FC, useContext, useEffect } from "react"
import Modal from "react-modal"
import useInputValue from "../hooks/useTextAreaValue"
import { TaskGlobalContext } from "../context"
import { customModalStyles } from "./TaskModifyModal"
import handleEditColumn from "../utils/handleEditColumn"

Modal.setAppElement("#root")

interface Iprops {
  columnId: string
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  modalIsOpen: boolean
  btnType: string
}
const initialColumnTitle = { title: "" }
const ColumnModify: FC<Iprops> = ({ columnId, btnType, modalIsOpen, setModalIsOpen }) => {
  const { textRef, addNewData, setAddNewData, onChange } =
    useInputValue(initialColumnTitle)
  const { taskData, setTaskData, projectId } = useContext(TaskGlobalContext)
  useEffect(() => {
    if (btnType === "edit-column-btn") {
      console.log(taskData?.columns[columnId])
      setAddNewData({ title: taskData?.columns[columnId]?.title })
    }
  }, [])

  const handleOnSaveTask = () => {
    setModalIsOpen(false)
    if (btnType === "add-column-btn") {
      handleEditColumn({
        columnId,
        btnType,
        addNewData,
        taskData,
        projectId,
        setTaskData,
      })
    } else {
      handleEditColumn({
        columnId,
        btnType,
        addNewData,
        taskData,
        projectId,
        setTaskData,
      })
    }
  }

  return (
    <Modal isOpen={modalIsOpen} style={customModalStyles}>
      <h3 className={"text-3xl my-2"}>Title :</h3>
      <textarea
        ref={(el) => (textRef.current.title = el)}
        onChange={onChange}
        className={"rounded-md border-2 p-2 overflow-hidden "}
        name={"title"}
        value={addNewData.title}
      />

      <div className={"my-2"}>
        <button className={"bg-red-500 p-1.5 mr-2"} onClick={() => setModalIsOpen(false)}>
          cancel
        </button>
        <button className={"bg-green-200 p-1.5 mr-2"} onClick={handleOnSaveTask}>
          Save
        </button>
      </div>
    </Modal>
  )
}

export default ColumnModify
