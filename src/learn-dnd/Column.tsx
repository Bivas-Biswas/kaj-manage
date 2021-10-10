import React, { FC } from "react"
import { Icolumn, Itask } from "../ts/interfaces"
import Task from "./Task"
import { Draggable, Droppable } from "react-beautiful-dnd"
import TaskModifyModal from "../components/TaskModifyModal"
import useToggle from "../hooks/useToggel"

interface Iprops {
  column: Icolumn
  tasks: Itask[]
  index: number
}

const Column: FC<Iprops> = ({ column, tasks, index }) => {
  const [modalIsOpen, setModalIsOpen] = useToggle(false)

  return (
    <>
      {modalIsOpen && (
        <TaskModifyModal
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          column={column}
        />
      )}
      <Draggable draggableId={column.id} index={index}>
        {(provided) => (
          <div
            className={"border-solid border-2 m-2 p-2 w-11/12 bg-white"}
            {...provided.draggableProps}
            ref={provided.innerRef}
            {...provided.dragHandleProps}
          >
            <div className={"flex items-center"}>
              <h1 className={"text-4xl mb-3 select-none"}>{column.title}</h1>
              <p className={"mx-3"}>{column.taskIds.length}</p>
            </div>
            <button
              className={"bg-green-400 px-2 py-1"}
              onClick={() => setModalIsOpen(false)}
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
                    <Task task={task} key={task.id} index={index} column={column} />
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
