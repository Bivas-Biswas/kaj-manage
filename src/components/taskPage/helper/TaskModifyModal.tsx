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

export const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
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
      <h3 className={"text-3xl my-2"}>Title :</h3>
      <textarea
        ref={(el) => (textRef.current.title = el)}
        onChange={onChange}
        className={"rounded-md border-2 p-2 overflow-hidden "}
        name={"title"}
        value={addNewData.title}
      />
      <h3 className={"text-3xl my-3"}>Content :</h3>
      <textarea
        ref={(el) => (textRef.current.content = el)}
        className={"rounded-md border-2 p-2 overflow-hidden"}
        onChange={onChange}
        name={"content"}
        value={addNewData.content}
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

export default TaskModifyModal
