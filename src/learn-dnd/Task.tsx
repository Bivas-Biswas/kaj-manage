import React, { FC, useContext } from "react"
import { Itask } from "../ts/interfaces"
import { Draggable } from "react-beautiful-dnd"
import { TaskGlobalContext } from "../context"
import handleEditTask from "../utils/handleEditTask"

interface Iprops {
  task: Itask
  index: number
}

const Task: FC<Iprops> = ({ task, index }) => {
  const { projectId, taskData, setTaskData } = useContext(TaskGlobalContext)

  return (
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
          <p>{task.content}</p>
          <button
            className={"bg-yellow-100 p-1.5"}
            onClick={() => handleEditTask(task, projectId, taskData, setTaskData)}
          >
            Edit
          </button>
        </div>
      )}
    </Draggable>
  )
}

export default Task
