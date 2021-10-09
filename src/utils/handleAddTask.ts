import { Icolumn } from "../ts/interfaces"
import { doc, setDoc } from "firebase/firestore"
import db from "../config/fbConfg"
import { TcontextTaskData, TprojectId, TsetContextTaskData } from "../ts/types"

const handleAddTask = async (
  column: Icolumn,
  taskData: TcontextTaskData,
  projectId: TprojectId,
  setTaskData: TsetContextTaskData
) => {
  const title = "Adding"
  const content = "Adding data in column"
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
  const newColumn = {
    ...column,
    taskIds: column.taskIds.push(newTaskId),
  }
  const payload = {
    ...taskData,
    tasks: newTask,
    columns: {
      ...taskData?.columns,
      taskIds: newColumn,
    },
  }
  const docFef = doc(db, "users", projectId)
  setDoc(docFef, payload)
  setTaskData(payload)
}

export default handleAddTask
