import React, { FC, useContext, useEffect } from "react"
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd"
import Column from "./Column"
import { Icolumn, Itask } from "../ts/interfaces"
import { doc, setDoc } from "firebase/firestore"
import db from "../config/fbConfg"
import { TaskGlobalContext } from "../context"
import defaultData from "../data/defaultData"

const Drag: FC = () => {
  const { taskData, setTaskData, projectId } = useContext(TaskGlobalContext)

  if (!taskData || JSON.stringify(taskData) === "{}") {
    console.log(taskData)
    useEffect(() => {
      const docRef = doc(db, "users", projectId)
      if (JSON.stringify(taskData) === "{}") {
        setDoc(docRef, defaultData)
        setTaskData(defaultData)
      }
    }, [])
    return <h1>loading</h1>
  }
  const onDragend = (result: DropResult) => {
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

    // @ts-ignore
    const start = taskData.columns[source.droppableId]
    // @ts-ignore
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

  return (
    <>
      <DragDropContext onDragEnd={onDragend}>
        <Droppable droppableId={"all-coloumns"} direction={"horizontal"} type={"column"}>
          {(provideed) => (
            <div
              {...provideed.droppableProps}
              ref={provideed.innerRef}
              className="flex items-start min-w-min"
            >
              {taskData.columnOrder.map((columnId: string, index: number) => {
                const column: Icolumn = taskData.columns[columnId]

                const task: Itask[] = column.taskIds.map(
                  (taskId: string) => taskData.tasks[taskId]
                )

                return (
                  <Column key={column.id} column={column} tasks={task} index={index} />
                )
              })}
              {provideed.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <p className={"m-3"}>{JSON.stringify(taskData)}</p>
    </>
  )
}

export default Drag
