import React, { FC, useContext, useEffect } from "react"
import Modal from "react-modal"
import useInputValue from "../../../hooks/useTextAreaValue"
import { TaskGlobalContext } from "../../../context"
import { customModalStyles } from "./TaskModifyModal"
import handleEditColumn from "../../../utils/taskPage/handleEditColumn"

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
      <div className={"modal-wrapper"}>
        <h3 className={"modal-heading mb-2 "}>Field Title :</h3>
        <textarea
          ref={(el) => (textRef.current.title = el)}
          onChange={onChange}
          className={"rounded-md border-2 p-2 overflow-hidden min-h-0"}
          name={"title"}
          value={addNewData.title}
          placeholder={"Field Title..."}
        />

        <div className={"btn-wrapper"}>
          <button className={"btn-secondary"} onClick={() => setModalIsOpen(false)}>
            Cancel
          </button>
          <button className={"btn-primary"} onClick={handleOnSaveTask}>
            Save
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default ColumnModify
