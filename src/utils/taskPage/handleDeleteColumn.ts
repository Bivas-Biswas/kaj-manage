import { doc, setDoc, Timestamp } from "firebase/firestore"
import db from "../../config/fbConfg"
import { Icolumn } from "../../ts/interfaces"
import { TcontextTaskData, TprojectId, TsetContextTaskData } from "../../ts/types"

interface IhandleDeleteColumn {
  column: Icolumn
  taskData: TcontextTaskData
  projectId: TprojectId
  setTaskData: TsetContextTaskData
}

const handleDeleteColumn = ({
  column,
  taskData,
  projectId,
  setTaskData,
}: IhandleDeleteColumn) => {
  const docRef = doc(db, "users", projectId)
  const { [column.id]: deleteColumn, ...newColumns } = taskData?.columns
  const newColumnOrder = [...taskData?.columnOrder].filter(
    (order) => order !== deleteColumn.id
  )

  const copyOfTasks = {
    ...taskData.tasks,
  }
  taskData.columns[column.id].taskIds.forEach((taskId: string) => {
    delete copyOfTasks[taskId]
  })

  const payload = {
    ...taskData,
    columns: newColumns,
    columnOrder: newColumnOrder,
    tasks: copyOfTasks,
    updateDate: Timestamp.fromDate(new Date()),
  }

  setDoc(docRef, payload)
  setTaskData(payload)
}

export default handleDeleteColumn
