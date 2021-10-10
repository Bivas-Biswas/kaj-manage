import { doc, setDoc } from "firebase/firestore"
import db from "../config/fbConfg"
import { ThandleOnDragEnd } from "../ts/types"

const handleOnDrag = ({ result, projectId, taskData, setTaskData }: ThandleOnDragEnd) => {
  const { destination, source, draggableId, type } = result
  /*
   * If drag the element outside the drapable box
   * */
  const docRef = doc(db, "users", projectId)
  if (!destination) {
    return
  }
  // if element have same postion
  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return
  }

  if (type === "column") {
    const newColumnOrder = Array.from(taskData.columnOrder)
    newColumnOrder.splice(source.index, 1)
    newColumnOrder.splice(destination.index, 0, draggableId)
    const payload = {
      ...taskData,
      columnOrder: newColumnOrder,
    }

    setTaskData(payload)
    setDoc(docRef, payload)
    return
  }

  const start = taskData.columns[source.droppableId]
  const finish = taskData.columns[destination.droppableId]

  if (start === finish) {
    const newTaskIds = Array.from(start.taskIds)

    // delete the element in source index
    newTaskIds.splice(source.index, 1)

    // add the element in add index
    newTaskIds.splice(destination.index, 0, draggableId)

    // update the column
    const newColumn = {
      ...start,
      taskIds: newTaskIds,
    }
    // update whole state
    const payload = {
      ...taskData,
      columns: {
        ...taskData.columns,
        [newColumn.id]: newColumn,
      },
    }
    setTaskData(payload)
    setDoc(docRef, payload)
    return
  }

  // for different columns
  const startTaskIds = Array.from(start.taskIds)
  startTaskIds.splice(source.index, 1)
  const newStart = {
    ...start,
    taskIds: startTaskIds,
  }
  const finishTaskIds = Array.from(finish.taskIds)
  finishTaskIds.splice(destination.index, 0, draggableId)
  const newFinish = {
    ...finish,
    taskIds: finishTaskIds,
  }
  const payload = {
    ...taskData,
    columns: {
      ...taskData.columns,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish,
    },
  }

  setTaskData(payload)
  setDoc(docRef, payload)
}

export default handleOnDrag
