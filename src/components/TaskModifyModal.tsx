import React, { FC, useContext, useRef, useState } from "react"
import { Icolumn, Itask } from "../ts/interfaces"
import { TaskGlobalContext } from "../context"
import handleAddTask from "../utils/handleAddTask"
import { ThandleAddTask } from "../ts/types"
import handleEditTask from "../utils/handleEditTask"
import Modal from "react-modal"

Modal.setAppElement("#root")
interface Iprops {
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

const customStyles = {
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
  edittask = intialAddNewData,
  setModalIsOpen,
  column,
  modalIsOpen,
}) => {
  const { projectId, taskData, setTaskData } = useContext(TaskGlobalContext)
  const textRef = useRef<any>({})
  const [addNewData, setAddNewData] = useState<Itask>(edittask)

  const onChangeHandler = function (e: React.ChangeEvent<HTMLTextAreaElement>) {
    const name = e.target.name
    const value = e.target.value
    textRef.current[name].style.height = "0px"
    textRef.current[name].style.height = `${e.target.scrollHeight}px`
    const newAddNewData = {
      ...addNewData,
      [name]: value,
    }
    setAddNewData(newAddNewData)
  }

  return (
    <Modal isOpen={modalIsOpen} style={customStyles}>
      <h3 className={"text-3xl my-2"}>Title :</h3>
      <textarea
        ref={(el) => (textRef.current.title = el)}
        onChange={onChangeHandler}
        className={"rounded-md border-2 p-2 overflow-hidden "}
        name={"title"}
        value={addNewData.title}
      />
      <h3 className={"text-3xl my-3"}>Content :</h3>
      <textarea
        ref={(el) => (textRef.current.content = el)}
        className={"rounded-md border-2 p-2 overflow-hidden"}
        onChange={onChangeHandler}
        name={"content"}
        value={addNewData.content}
      />
      <div className={"my-2"}>
        <button className={"bg-red-500 p-1.5 mr-2"} onClick={() => setModalIsOpen(false)}>
          cancel
        </button>
        <button
          className={"bg-green-200 p-1.5 mr-2"}
          onClick={() => {
            // check the task id emty or not
            if (edittask.id) {
              // true - user need to add new data
              handleEditTask(addNewData, projectId, taskData, setTaskData)
            } else {
              // false - user need to edit the exiting data
              handleAddTask({ addNewData, column, taskData, projectId, setTaskData })
            }
            setModalIsOpen(false)
          }}
        >
          Save
        </button>
      </div>
    </Modal>
  )
}

export default TaskModifyModal
