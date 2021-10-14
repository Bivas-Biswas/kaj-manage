import React, { FC, useContext } from "react"
import { Icolumn, Itask } from "../../ts/interfaces"
import Tasks from "./Tasks"
import { Draggable, Droppable } from "react-beautiful-dnd"
import TaskModifyModal, { customModalStyles } from "./helper/TaskModifyModal"
import useToggle from "../../hooks/useToggel"
import { TaskGlobalContext } from "../../context"
import handleDeleteColumn from "../../utils/taskPage/handleDeleteColumn"
import ColumnModifyModal from "./helper/ColumnModifyModal"
import DropDown from "../smallComponents/DropDown"
import { FiMoreVertical, GrAdd } from "react-icons/all"
import Modal from "react-modal"
import Tippy from "@tippy.js/react"

interface Iprops {
  column: Icolumn
  tasks: Itask[]
  index: number
}

const Column: FC<Iprops> = ({ column, tasks, index }) => {
  const [addTaskmodalIsOpen, setAddTaskmodalIsOpen] = useToggle(false)
  const [editColumnmodalIsOpen, setEditColumnmodalIsOpen] = useToggle(false)
  const [deleteColumnmodalIsOpen, setDeleteColumnmodalIsOpen] = useToggle(false)
  const [isOptionOpen, setIsOptionOpen] = useToggle(false)
  const { taskData, setTaskData, projectId } = useContext(TaskGlobalContext)

  const alloptions = [
    { name: "Edit", setter: setEditColumnmodalIsOpen, icon: "fa-edit" },
    { name: "Delete", setter: setDeleteColumnmodalIsOpen, icon: "fa-trash-alt" },
  ]
  return (
    <>
      <Draggable draggableId={column.id} index={index}>
        {(provided) => (
          <div
            className={"m-2 px-3 py-2 bg-white shadow-xl rounded-lg "}
            {...provided.draggableProps}
            ref={provided.innerRef}
            {...provided.dragHandleProps}
          >
            <div className={"flex items-center justify-between"}>
              <div className={"flex flex-row items-center"}>
                <h1 className={"text-3xl sm:text-4xl mb-3 select-none"}>
                  {column.title}
                </h1>
                <p className={"mx-3"}>{column.taskIds.length}</p>
                <Tippy content={"Add Task"}>
                  <button
                    className={"text-2xl p-1 shadow-sm rounded-sm border hover:shadow-xl"}
                    onClick={() => setAddTaskmodalIsOpen(false)}
                  >
                    <GrAdd />
                  </button>
                </Tippy>
              </div>
              <div className={"relative"}>
                <button
                  className={`text-xl sm:text-3xl rounded-full p-0.5 ml-1.5 transition
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

              {editColumnmodalIsOpen && (
                <ColumnModifyModal
                  columnId={column.id}
                  setModalIsOpen={setEditColumnmodalIsOpen}
                  modalIsOpen={editColumnmodalIsOpen}
                  btnType={"edit-column-btn"}
                />
              )}

              {deleteColumnmodalIsOpen && (
                <>
                  <Modal isOpen={true} style={customModalStyles}>
                    <div className={"modal-wrapper"}>
                      <p className={"modal-heading"}>
                        Are You want to delete this Field ?
                      </p>
                      <div className={"btn-wrapper"}>
                        <button
                          className={"btn-secondary"}
                          onClick={() => setDeleteColumnmodalIsOpen(false)}
                        >
                          Cancel
                        </button>
                        <button
                          className={"w-20 btn-primary"}
                          onClick={() => {
                            setDeleteColumnmodalIsOpen(false)
                            handleDeleteColumn({
                              column,
                              taskData,
                              projectId,
                              setTaskData,
                            })
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </Modal>
                </>
              )}
            </div>

            {addTaskmodalIsOpen && (
              <TaskModifyModal
                btnType={"add-task-btn"}
                modalIsOpen={addTaskmodalIsOpen}
                setModalIsOpen={setAddTaskmodalIsOpen}
                column={column}
              />
            )}
            <Droppable droppableId={column.id} type={"task"}>
              {(provided, snapshot) => (
                <div
                  className={`container my-1.5 helel transition-colors duration-100 ease-in ${
                    snapshot.isDraggingOver ? "bg-red-400" : "bg-white"
                  }`}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {tasks.map((task, index) => (
                    <Tasks task={task} key={task.id} index={index} column={column} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        )}
      </Draggable>
    </>
  )
}

export default Column
