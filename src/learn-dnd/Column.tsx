import React, { FC, useContext } from "react"
import { Icolumn, Itask } from "../ts/interfaces"
import Task from "./Task"
import { Draggable, Droppable } from "react-beautiful-dnd"
import { TaskGlobalContext } from "../context"
import handleAddTask from "../utils/handleAddTask"

interface Iprops {
  column: Icolumn
  tasks: Itask[]
  index: number
}

const Column: FC<Iprops> = ({ column, tasks, index }) => {
  const { projectId, taskData, setTaskData } = useContext(TaskGlobalContext)

  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <div
          className={"border-solid border-2 m-2 p-2 w-11/12 bg-white"}
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          <h1 className={"text-4xl mb-3 select-none"}>{column.title}</h1>
          <button
            className={"bg-green-400 px-2 py-1"}
            onClick={() => handleAddTask(column, taskData, projectId, setTaskData)}
          >
            Add
          </button>
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
