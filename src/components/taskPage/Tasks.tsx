import React, { FC, useContext } from "react"
import { Icolumn, Itask } from "../../ts/interfaces"
import { Draggable } from "react-beautiful-dnd"
import { TaskGlobalContext } from "../../context"
import useToggle from "../../hooks/useToggel"
import TaskModifyModal from "./helper/TaskModifyModal"
import handleDeleteTask from "../../utils/taskPage/handleDeleteTask"

interface Iprops {
  task: Itask
  index: number
  column: Icolumn
}

const Tasks: FC<Iprops> = ({ task, index, column }) => {
  const { projectId, taskData, setTaskData } = useContext(TaskGlobalContext)
  const [editTasktModalIsOpen, setEditTaskModalIsOpen] = useToggle(false)
  const [addNextTaskmodalIsOpen, setAddTaskModalIsOpen] = useToggle(false)

  return (
    <>
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

      <Draggable draggableId={task.id} index={index}>
        {(provided, snapshot) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className={`p-1 select-none my-1 flex justify-between items-center border-2 border-gray-500 ${
              snapshot.isDragging ? "bg-green-400" : "bg-white"
            }`}
          >
            <p className={"break-all"}>{task.title}</p>
            <button
              className={"bg-yellow-100 p-1.5"}
              name={"edit"}
              onClick={() => setEditTaskModalIsOpen(true)}
            >
              Edit
            </button>
            <button
              className={"bg-red-400 p-1.5"}
              onClick={() =>
                handleDeleteTask({ task, projectId, column, taskData, setTaskData })
              }
            >
              Delete
            </button>
            <button
              className={"bg-yellow-100 p-1.5"}
              onClick={() => setAddTaskModalIsOpen(true)}
            >
              Add Next
            </button>
          </div>
        )}
      </Draggable>
    </>
  )
}

export default Tasks
