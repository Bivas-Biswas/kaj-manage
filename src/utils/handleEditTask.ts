import { TcontextTaskData, TprojectId, TsetContextTaskData } from "../ts/types"
import { doc, setDoc } from "firebase/firestore"
import db from "../config/fbConfg"
import { Itask } from "../ts/interfaces"

const handleEditTask = async (
  task: Itask,
  projectId: TprojectId,
  taskData: TcontextTaskData,
  setTaskData: TsetContextTaskData
) => {
  const title = task.title
  const content = task.content
  const docFef = doc(db, "users", projectId)

  const newTask = {
    ...taskData?.tasks[task.id],
    title,
    content,
  }
  const payload = {
    ...taskData,
    tasks: {
      ...taskData?.tasks,
      [task.id]: newTask,
    },
  }
  setDoc(docFef, payload)
  setTaskData(payload)
}

export default handleEditTask
