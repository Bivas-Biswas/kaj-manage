import React, { FC, useContext } from "react"
import { Icolumn, Itask } from "../../ts/interfaces"
import Tasks from "./Tasks"
import { Draggable, Droppable } from "react-beautiful-dnd"
import TaskModifyModal from "./helper/TaskModifyModal"
import useToggle from "../../hooks/useToggel"
import { TaskGlobalContext } from "../../context"
import handleDeleteColumn from "../../utils/taskPage/handleDeleteColumn"
import ColumnModifyModal from "./helper/ColumnModifyModal"

interface Iprops {
  column: Icolumn
  tasks: Itask[]
  index: number
}

const Column: FC<Iprops> = ({ column, tasks, index }) => {
  const [addTaskmodalIsOpen, setAddTaskmodalIsOpen] = useToggle(false)
  const [editColumnmodalIsOpen, setEditColumnmodalIsOpen] = useToggle(false)
  const { taskData, setTaskData, projectId } = useContext(TaskGlobalContext)

  return (
    <>
      <Draggable draggableId={column.id} index={index}>
        {(provided) => (
          <div
            className={"border-solid border-2 m-2 p-2 bg-white"}
            {...provided.draggableProps}
            ref={provided.innerRef}
            {...provided.dragHandleProps}
          >
            <div className={"flex items-center"}>
              <h1 className={"text-4xl mb-3 select-none"}>{column.title}</h1>
              <p className={"mx-3"}>{column.taskIds.length}</p>
              <button
                className={"bg-red-50 p-1"}
                onClick={() =>
                  handleDeleteColumn({ column, taskData, projectId, setTaskData })
                }
              >
                Del
              </button>
              <button
                className={"bg-pink-400 p-1 ml-1.5"}
                onClick={() => setEditColumnmodalIsOpen(true)}
              >
                Edit
              </button>
              {editColumnmodalIsOpen && (
                <ColumnModifyModal
                  columnId={column.id}
                  setModalIsOpen={setEditColumnmodalIsOpen}
                  modalIsOpen={editColumnmodalIsOpen}
                  btnType={"edit-column-btn"}
                />
              )}
            </div>
            <button
              className={"bg-green-400 px-2 py-1"}
              onClick={() => setAddTaskmodalIsOpen(false)}
            >
              Add
            </button>
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
