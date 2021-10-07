import React, { FC } from "react"
import { Itask } from "./interfaces"
import { Draggable } from "react-beautiful-dnd"

interface Iprops {
  task: Itask
  index: number
}

const Task: FC<Iprops> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <p
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`m-2 p-2 select-none cursor-pointer border-2 border-gray-500 ${
            snapshot.isDragging ? "bg-green-400" : "bg-white"
          }`}
          ref={provided.innerRef}
        >
          {task.content}
        </p>
      )}
    </Draggable>
  )
}

export default Task
