import React, { FC, useState } from "react"
import { DragDropContext, DragUpdate, Droppable, DropResult } from "react-beautiful-dnd"
import Data from "./initialData.js"
import Column from "./Column"
import { Icolumn, IcolumnObj, IintialData, Itask, ItaskObj } from "./interfaces"

const Drag: FC = () => {
  const [initalData, setInitalData] = useState<IintialData>(Data.getList())
  const tasks: ItaskObj = initalData.tasks
  const columns: IcolumnObj = initalData.columns
  const columnOrder: string[] = initalData.columnOrder

  const onDragstart = () => {
    // document.body.style.color = 'orange';
    // document.body.style.transition = 'background-color 0.2s ease';
  }

  const onDragUpdate = (update: DragUpdate): void => {
    // const { destination } = update;
    // const opacity = destination
    //   ? destination.index / Object.keys(tasks).length
    //   : 0;
    // document.body.style.backgroundColor = `rgba( 153, 141, 217, ${opacity})`;
  }

  const onDragend = (result: DropResult) => {
    // document.body.style.color = "inherit"
    // document.body.style.backgroundColor = "inherit"
    const { destination, source, draggableId, type } = result
    /*
     * If drag the element outside the drapable box
     * */
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
      const newColumnOrder = Array.from(columnOrder)
      newColumnOrder.splice(source.index, 1)
      newColumnOrder.splice(destination.index, 0, draggableId)
      const newState = {
        ...initalData,
        columnOrder: newColumnOrder,
      }
      Data.saveList(newState)
      setInitalData(newState)
      return
    }

    const start = columns[source.droppableId]
    const finish = columns[destination.droppableId]

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
      const newState = {
        ...initalData,
        columns: {
          ...columns,
          [newColumn.id]: newColumn,
        },
      }
      Data.saveList(newState)
      setInitalData(newState)
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
    const newState = {
      ...initalData,
      columns: {
        ...columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    }
    Data.saveList(newState)
    setInitalData(newState)
  }

  return (
    <>
      <DragDropContext
        onDragStart={onDragstart}
        onDragUpdate={onDragUpdate}
        onDragEnd={onDragend}
      >
        <Droppable droppableId={"all-coloumns"} direction={"horizontal"} type={"column"}>
          {(provideed) => (
            <div
              {...provideed.droppableProps}
              ref={provideed.innerRef}
              className="flex w-100"
            >
              {columnOrder.map((columnId: string, index: number) => {
                const column: Icolumn = columns[columnId]
                const task: Itask[] = column.taskIds.map(
                  (taskId: string) => tasks[taskId]
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
      <p className={"m-3"}>{JSON.stringify(initalData)}</p>
    </>
  )
}

export default Drag
