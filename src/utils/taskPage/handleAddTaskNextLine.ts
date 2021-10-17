import { ThandleAddTask } from "../../ts/types"
import { doc, setDoc, Timestamp } from "firebase/firestore"
import db from "../../config/fbConfg"

const handleAddTaskNextLine = async ({
  currentId,
  btnType,
  addNewData,
  column,
  taskData,
  projectId,
  setTaskData,
}: ThandleAddTask) => {
  const docRef = doc(db, "users", projectId)
  const title = addNewData.title
  const content = addNewData.content
  const totalTask = Object.keys(taskData?.tasks).length
  const newTaskId = `task-${totalTask + 1}`
  let columnId

  const newTask = {
    title: title,
    content: content,
    id: newTaskId,
  }

  const newTasks = {
    ...taskData?.tasks,
    [newTaskId]: { ...newTask },
  }

  if (btnType === "add-btn") {
    columnId = [...column.taskIds, newTaskId]
  }
  // btnType === "add-next-btn"
  else {
    const columnTaskIds = [...column.taskIds]
    columnTaskIds.splice(columnTaskIds.indexOf(currentId) + 1, 0, newTaskId)
    columnId = columnTaskIds
  }

  const payload = {
    ...taskData,
    tasks: newTasks,
    columns: {
      ...taskData?.columns,
      [column.id]: {
        ...column,
        taskIds: columnId,
      },
    },
    updateDate: Timestamp.fromDate(new Date()),
  }

  setDoc(docRef, payload)
  setTaskData(payload)
}

export default handleAddTaskNextLine
