import React, { FC, useContext, useEffect } from "react"
import { Icolumn, Itask } from "../../../ts/interfaces"
import { TaskGlobalContext } from "../../../context"
import handleAddTaskNextLine from "../../../utils/taskPage/handleAddTaskNextLine"
import { ThandleAddTask } from "../../../ts/types"
import handleEditTask from "../../../utils/taskPage/handleEditTask"
import Modal from "react-modal"
import useInputValue from "../../../hooks/useTextAreaValue"

Modal.setAppElement("#root")

interface Iprops {
  btnType?: string
  edittask?: Itask
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  column: Icolumn
  handleAddTask?: (fn: ThandleAddTask) => void
  modalIsOpen: boolean
}

const intialAddNewData = {
  id: "",
  title: "",
  content: "",
  totalTask: 0,
}

export const customModalStyles: Modal.Styles | undefined = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    zIndex: 1000,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    padding: 0,
  },
}

/*
 * when need to add new task the edittask is intialAddNewData(dummy data)
 * when need to edit the task the edittask get the data from props (dummy data)
 * */

const TaskModifyModal: FC<Iprops> = ({
  btnType,
  edittask = intialAddNewData,
  setModalIsOpen,
  column,
  modalIsOpen,
}) => {
  const { projectId, taskData, setTaskData } = useContext(TaskGlobalContext)

  const { textRef, addNewData, setAddNewData, onChange } = useInputValue(edittask)

  // for inline add task button
  const currentId: string = edittask.id

  useEffect(() => {
    if (btnType === "add-next-btn") {
      setAddNewData(intialAddNewData)
    }
  }, [])

  const handleOnSaveTask = () => {
    setModalIsOpen(false)
    // check the task id emty or not
    if (btnType === "edit-task-btn") {
      handleEditTask({ addNewData, projectId, taskData, setTaskData })
    } else {
      handleAddTaskNextLine({
        currentId,
        btnType,
        addNewData,
        column,
        taskData,
        projectId,
        setTaskData,
      })
    }
  }

  return (
    <Modal isOpen={modalIsOpen} style={customModalStyles}>
      <div className={"modal-wrapper"}>
        <h3 className={"modal-heading text-left"}>Field Name :</h3>
        <textarea
          ref={(el) => (textRef.current.title = el)}
          onChange={onChange}
          className={"rounded-md border-2 p-2 overflow-hidden "}
          name={"title"}
          value={addNewData.title}
        />
        <h3 className={"modal-heading text-left"}>Content :</h3>
        <textarea
          ref={(el) => (textRef.current.content = el)}
          className={"rounded-md border-2 p-2 overflow-hidden"}
          onChange={onChange}
          name={"content"}
          value={addNewData.content}
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

export default TaskModifyModal
