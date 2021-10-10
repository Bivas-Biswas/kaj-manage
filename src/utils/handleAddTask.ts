import { ThandleAddTask } from "../ts/types"
import { doc, setDoc } from "firebase/firestore"
import db from "../config/fbConfg"

const handleAddTask = async (fn: ThandleAddTask) => {
  const { addNewData, column, taskData, projectId, setTaskData } = fn
  const title = addNewData.title
  const content = addNewData.content
  const totalTask = taskData?.tasks.totalTask + 1
  const newTaskId = `task-${totalTask}`
  const newTask = {
    ...taskData?.tasks,
    [newTaskId]: {
      title: title,
      content: content,
      id: newTaskId,
    },
    totalTask,
  }
  const payload = {
    ...taskData,
    tasks: newTask,
    columns: {
      ...taskData?.columns,
      [column.id]: {
        ...column,
        taskIds: [...column.taskIds, newTaskId],
      },
    },
  }
  const docFef = doc(db, "users", projectId)
  setDoc(docFef, payload)
  setTaskData(payload)
}

export default handleAddTask
