import { doc, setDoc } from "firebase/firestore"
import db from "../../config/fbConfg"
import { TcontextTaskData, TprojectId, TsetContextTaskData } from "../../ts/types"

interface IhandleEditColumn {
  columnId: string
  btnType: string
  taskData: TcontextTaskData
  projectId: TprojectId
  setTaskData: TsetContextTaskData
  addNewData: any
}

const handleEditColumn = ({
  columnId,
  btnType,
  addNewData,
  taskData,
  projectId,
  setTaskData,
}: IhandleEditColumn) => {
  const docRef = doc(db, "users", projectId)
  let payload
  if (addNewData.title === "") {
    addNewData.title = "Untitled"
  }
  if (btnType === "add-column-btn") {
    const noOfColumn = taskData?.columnOrder.length
    const newColumnId = `column-${noOfColumn + 1}`
    const newColumn = {
      id: newColumnId,
      ...addNewData,
      taskIds: [],
    }

    payload = {
      ...taskData,
      columns: {
        ...taskData?.columns,
        [newColumnId]: newColumn,
      },
      columnOrder: [...taskData?.columnOrder, newColumnId],
    }
  } else {
    // foredit-column-btn
    payload = {
      ...taskData,
      columns: {
        ...taskData?.columns,
        [columnId]: {
          ...taskData?.columns[columnId],
          ...addNewData,
        },
      },
    }
  }
  setDoc(docRef, payload)
  setTaskData(payload)
}

export default handleEditColumn
