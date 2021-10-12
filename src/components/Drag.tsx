import React, { FC, useContext, useEffect } from "react"
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import Column from "./Column"
import { Icolumn, Itask, TRouterParams } from "../ts/interfaces"
import { TaskGlobalContext } from "../context"
import handleChangeView from "../utils/handleViewTable"
import handleOnDrag from "../utils/handleOnDrag"
import useToggle from "../hooks/useToggel"
import ColumnModifyModal from "./ColumnModifyModal"
import updateDefaultData from "../utils/updateDefaultData"
import { useParams, Link } from "react-router-dom"
import fetchDB from "../utils/fetchDB"

const Drag: FC = () => {
  const [modalIsOpen, setModalIsOpen] = useToggle(false)
  const [isDataFetched, setIsDataFetched] = useToggle(false)
  const { projectId } = useParams<TRouterParams>()

  const { setTaskData, taskData, setProjectId } = useContext(TaskGlobalContext)

  const fetchUpdateTaskData = async () => {
    const data = await fetchDB(projectId)
    if (data !== undefined) {
      setTaskData(data)
      setIsDataFetched(true)
    }
  }

  useEffect(() => {
    setProjectId(projectId)
    fetchUpdateTaskData().then(() => console.log("datafecthed"))
  }, [])

  if (!isDataFetched) {
    return <h1>loading</h1>
  }

  return (
    <>
      <Link to={"/"}>
        <button className={"bg-gray-400 p-2 m-2"}>Home</button>
      </Link>
      <button className={"bg-yellow-100 p-2 m-2"} onClick={() => setModalIsOpen(true)}>
        Add column
      </button>
      {modalIsOpen && (
        <ColumnModifyModal
          columnId={"add-new-colomn"}
          btnType={"add-column-btn"}
          setModalIsOpen={setModalIsOpen}
          modalIsOpen={modalIsOpen}
        />
      )}
      <button
        className={"bg-yellow-100 p-2 m-2"}
        onClick={() => handleChangeView(projectId, taskData, setTaskData)}
      >
        Change View
      </button>

      <button
        className={"bg-blue-200 p-2 m-2"}
        onClick={() => updateDefaultData({ projectId, setTaskData })}
      >
        Default Data
      </button>
      <DragDropContext
        onDragEnd={(result) => {
          handleOnDrag({ result, projectId, taskData, setTaskData })
        }}
      >
        <Droppable
          droppableId={"all-coloumns"}
          direction={taskData?.viewTable}
          type={"column"}
        >
          {(provideed) => {
            return (
              <>
                <div
                  {...provideed.droppableProps}
                  ref={provideed.innerRef}
                  className={` flex ${
                    taskData?.viewTable === "horizontal"
                      ? "flex-row items-start"
                      : "flex-col items-center"
                  } min-w-min`}
                >
                  {taskData.columnOrder.map((columnId: string, index: number) => {
                    const column: Icolumn = taskData.columns[columnId]

                    const task: Itask[] = column.taskIds.map(
                      (taskId: string) => taskData.tasks[taskId]
                    )

                    return (
                      <Column
                        key={column.id}
                        column={column}
                        tasks={task}
                        index={index}
                      />
                    )
                  })}
                  {provideed.placeholder}
                </div>
              </>
            )
          }}
        </Droppable>
      </DragDropContext>
      <p className={"m-3"}>{JSON.stringify(taskData)}</p>
    </>
  )
}

export default Drag
