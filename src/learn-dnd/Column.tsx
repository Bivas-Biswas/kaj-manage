import React, { FC } from "react"
import { Icolumn, Itask } from "./interfaces"
import Task from "./Task"
import { Draggable, Droppable } from "react-beautiful-dnd"

interface Iprops {
  column: Icolumn
  tasks: Itask[]
  index: number
}

const Column: FC<Iprops> = ({ column, tasks, index }) => {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <div
          className={"border-solid border-2 m-2 p-2 w-4/12 bg-white"}
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          <h1 className={"text-4xl mb-3"}>{column.title}</h1>
          <Droppable droppableId={column.id} type={"task"}>
            {(provided, snapshot) => (
              <div
                className={`container p-1.5 helel transition-colors duration-100 ease-in ${
                  snapshot.isDraggingOver ? "bg-red-400" : "bg-white"
                }`}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {tasks.map((task, index) => (
                  <Task task={task} key={task.id} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  )
}

export default Column
