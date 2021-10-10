import React, { FC, useContext } from "react"
import { Icolumn, Itask } from "../ts/interfaces"
import { Draggable } from "react-beautiful-dnd"
import { TaskGlobalContext } from "../context"
import { doc, setDoc } from "firebase/firestore"
import db from "../config/fbConfg"
import useToggle from "../hooks/useToggel"
import TaskModifyModal from "../components/TaskModifyModal"

interface Iprops {
  task: Itask
  index: number
  column: Icolumn
}

const Task: FC<Iprops> = ({ task, index, column }) => {
  const { projectId, taskData, setTaskData } = useContext(TaskGlobalContext)
  const [modalIsOpen, setModalIsOpen] = useToggle(false)

  const handleDeleteTask = async () => {
    const { [task.id]: removeTask, ...newTasks } = taskData?.tasks
    const newColumn = column.taskIds.filter((taskId) => taskId !== task.id)

    const payload = {
      ...taskData,
      tasks: {
        ...newTasks,
        totalTask: taskData?.tasks.totalTask - 1,
      },
      columns: {
        ...taskData?.columns,
        [column.id]: {
          ...column,
          taskIds: newColumn,
        },
      },
    }
    const docRef = doc(db, "users", projectId)
    setDoc(docRef, payload)
    setTaskData(payload)
  }

  return (
    <>
      {modalIsOpen && (
        <TaskModifyModal
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          edittask={task}
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
            <p>{task.content}</p>
            <button
              className={"bg-yellow-100 p-1.5"}
              onClick={() => setModalIsOpen(true)}
            >
              Edit
            </button>
            <button className={"bg-red-400 p-1.5"} onClick={() => handleDeleteTask()}>
              Delete
            </button>
          </div>
        )}
      </Draggable>
    </>
  )
}

export default Task
