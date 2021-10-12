import { doc, setDoc } from "firebase/firestore"
import db from "../../config/fbConfg"
import { ThandleDeleteTask } from "../../ts/types"

const handleDeleteTask = async ({
  task,
  projectId,
  column,
  taskData,
  setTaskData,
}: ThandleDeleteTask) => {
  const docRef = doc(db, "users", projectId)
  delete taskData?.tasks[task.id]
  const newColumn = column.taskIds.filter((taskId) => taskId !== task.id)

  const payload = {
    ...taskData,
    tasks: {
      ...taskData?.tasks,
    },
    columns: {
      ...taskData?.columns,
      [column.id]: {
        ...column,
        taskIds: newColumn,
      },
    },
  }

  setDoc(docRef, payload)
  setTaskData(payload)
}

export default handleDeleteTask
