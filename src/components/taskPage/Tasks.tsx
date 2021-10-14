import React, { FC, useContext } from "react"
import { Icolumn, Itask } from "../../ts/interfaces"
import { Draggable } from "react-beautiful-dnd"
import { TaskGlobalContext } from "../../context"
import useToggle from "../../hooks/useToggel"
import TaskModifyModal, { customModalStyles } from "./helper/TaskModifyModal"
import handleDeleteTask from "../../utils/taskPage/handleDeleteTask"
import { FiMoreVertical } from "react-icons/all"
import DropDown from "../smallComponents/DropDown"
import Modal from "react-modal"

interface Iprops {
  task: Itask
  index: number
  column: Icolumn
}

const Tasks: FC<Iprops> = ({ task, index, column }) => {
  const { projectId, taskData, setTaskData } = useContext(TaskGlobalContext)
  const [editTasktModalIsOpen, setEditTaskModalIsOpen] = useToggle(false)
  const [addNextTaskmodalIsOpen, setAddTaskModalIsOpen] = useToggle(false)
  const [deleteTaskModal, setDeleteTaskModal] = useToggle(false)
  const [isOptionOpen, setIsOptionOpen] = useToggle(false)

  const alloptions = [
    { name: "Edit", setter: setEditTaskModalIsOpen, icon: "fa-edit" },
    { name: "Delete", setter: setDeleteTaskModal, icon: "fa-trash-alt" },
    { name: "Add Next", setter: setAddTaskModalIsOpen, icon: "fa-plus" },
  ]
  return (
    <>
      <Draggable draggableId={task.id} index={index}>
        {(provided, snapshot) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className={`
                relative
                font-semibold
                rounded-lg shadow-sm flex flex-row select-none shadow-2xl 
                sm:hover:shadow-lg
                sm:duration-200 sm:ease-in-out
                border
                my-1
            ${snapshot.isDragging ? "bg-purple-200" : "bg-white"}`}
          >
            <div
              className={`flex relative items-center w-full  px-1.5 py-2 ${
                taskData.viewTable === "horizontal" && "min-h-8 justify-center"
              }`}
            >
              <p
                className={`break-all pr-4
                 ${taskData.viewTable === "horizontal" && "text-center w-72"}
                
                `}
              >
                {task.title}
              </p>
            </div>
            <button
              className={`
                      text-xl absolute sm:text-3xl rounded-full p-0.5 ml-1.5 transition
                      right-0
                      top-1
                      hover:text-purple-600
                      hover:duration-500 hover:ease-in-out
                      cursor-pointer`}
              onClick={() => {
                setIsOptionOpen(!isOptionOpen)
              }}
            >
              <FiMoreVertical />
            </button>
            {isOptionOpen && (
              <DropDown
                allOptions={alloptions}
                isOptionOpen={isOptionOpen}
                setIsOptionOpen={setIsOptionOpen}
              />
            )}
          </div>
        )}
      </Draggable>

      {editTasktModalIsOpen && (
        <TaskModifyModal
          btnType={"edit-task-btn"}
          modalIsOpen={editTasktModalIsOpen}
          setModalIsOpen={setEditTaskModalIsOpen}
          edittask={task}
          column={column}
        />
      )}

      {addNextTaskmodalIsOpen && (
        <TaskModifyModal
          btnType={"add-next-btn"}
          edittask={task}
          modalIsOpen={addNextTaskmodalIsOpen}
          setModalIsOpen={setAddTaskModalIsOpen}
          column={column}
        />
      )}
      {deleteTaskModal && (
        <>
          <Modal isOpen={true} style={customModalStyles}>
            <div className={"modal-wrapper"}>
              <p className={"modal-heading"}>Are You want to delete this task ?</p>
              <div className={"btn-wrapper"}>
                <button
                  className={"btn-secondary"}
                  onClick={() => setDeleteTaskModal(false)}
                >
                  Cancel
                </button>
                <button
                  className={"w-20 btn-primary"}
                  onClick={() => {
                    setDeleteTaskModal(false)
                    handleDeleteTask({ task, projectId, column, taskData, setTaskData })
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </Modal>
        </>
      )}
    </>
  )
}

export default Tasks
