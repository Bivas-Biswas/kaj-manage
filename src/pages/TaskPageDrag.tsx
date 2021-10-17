import React, { FC, useContext, useEffect } from "react"
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import Column from "../components/taskPage/Column"
import { Icolumn, Itask, TRouterParams } from "../ts/interfaces"
import { TaskGlobalContext } from "../context"
import handleChangeView from "../utils/taskPage/handleViewTable"
import handleOnDrag from "../utils/taskPage/handleOnDrag"
import useToggle from "../hooks/useToggel"
import ColumnModifyModal from "../components/taskPage/helper/ColumnModifyModal"
import updateDefaultData from "../utils/taskPage/updateDefaultData"
import { useParams, useHistory } from "react-router-dom"
import fetchDB from "../utils/fetchDB"
import TaskPageContainer from "../layout/TaskPage/TaskPageContainer"
import { AiOutlinePlusSquare, FaHome, IoOptionsOutline } from "react-icons/all"
import DropDown from "../components/smallComponents/DropDown"
import { customModalStyles } from "../components/taskPage/helper/TaskModifyModal"
import Modal from "react-modal"
import handleProjectItemDelete from "../utils/handleProjectItemDelete"
import ModifyProjectModal from "../components/projectPage/helper/ModifyProjectModal"
import Tippy from "@tippy.js/react"
import SkeletonProjectPage from "../components/skeleton/SkeletonProjectPage"

const TaskPageDrag: FC = () => {
  const { setTaskData, taskData, setProjectId } = useContext(TaskGlobalContext)
  const history = useHistory()
  const [modalIsOpen, setModalIsOpen] = useToggle(false)
  const [isDataFetched, setIsDataFetched] = useToggle(false)
  const { projectId, projectName } = useParams<TRouterParams>()
  const [isOptionOpen, setIsOptionOpen] = useToggle(false)
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useToggle(false)
  const [isModalEditOpen, setIsModalEditOpen] = useToggle(false)
  const [isDefaultData, setIsDefaultData] = useToggle(false)
  const alloptions = [
    { name: "Edit", setter: setIsModalEditOpen, icon: "fa-edit" },
    { name: "Delete", setter: setIsModalDeleteOpen, icon: "fa-trash-alt" },
    { name: "Default", setter: setIsDefaultData, icon: "fa-table" },
  ]

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
    return <SkeletonProjectPage />
  }

  return (
    <TaskPageContainer>
      <div
        className={
          "flex p-2 flex-row justify-between items-center border-2 rounded-lg bg-white"
        }
      >
        <Tippy content={"Project Name"} arrow={false}>
          <h3 className={"text-xl sm:text-3xl font-bold "}>{projectName}</h3>
        </Tippy>

        <div className={"relative"}>
          <button
            className={`
        text-xl sm:text-3xl rounded-full p-0.5 ml-1.5 transition
        hover:text-purple-600
        hover:duration-500 hover:ease-in-out
        cursor-pointer
        `}
            onClick={() => {
              setIsOptionOpen(!isOptionOpen)
            }}
          >
            <IoOptionsOutline />
          </button>
          {isOptionOpen && (
            <DropDown
              allOptions={alloptions}
              isOptionOpen={isOptionOpen}
              setIsOptionOpen={setIsOptionOpen}
            />
          )}
          {isModalEditOpen && (
            <ModifyProjectModal
              isModalEditOpen={isModalEditOpen}
              setIsModalEditOpen={setIsModalEditOpen}
              projectId={projectId}
              history={history}
            />
          )}
          {isModalDeleteOpen && (
            <>
              <Modal isOpen={true} style={customModalStyles}>
                <div className={"modal-wrapper"}>
                  <p className={"modal-heading"}>
                    Are You want to delete the project{" "}
                    <b>&apos;{taskData.projectName}&apos;</b> ?
                  </p>
                  <p className={"modal-text"}>
                    Project have <b>{Object.keys(taskData.tasks).length}</b> task and{" "}
                    <b>{taskData.columnOrder.length}</b> field.
                  </p>
                  <div className={"btn-wrapper"}>
                    <button
                      className={"btn-secondary"}
                      onClick={() => setIsModalDeleteOpen(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className={"w-20 btn-primary"}
                      onClick={() => {
                        history.push("/")
                        setIsModalDeleteOpen(false)
                        handleProjectItemDelete(projectId, setIsModalDeleteOpen)
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </Modal>
            </>
          )}
          {isDefaultData && (
            <>
              <Modal isOpen={true} style={customModalStyles}>
                <div className={"modal-wrapper"}>
                  <p className={"modal-heading"}>
                    Are you sure about load default template ?
                  </p>
                  <p className={"modal-text"}>
                    Currently Project have <b>{Object.keys(taskData.tasks).length}</b>{" "}
                    task and <b>{taskData.columnOrder.length}</b> field.
                  </p>
                  <div className={"btn-wrapper"}>
                    <button
                      className={"btn-secondary"}
                      onClick={() => {
                        setIsDefaultData(false)
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      className={"btn-primary"}
                      onClick={() => {
                        updateDefaultData({ projectId, taskData, setTaskData })
                        setIsDefaultData(false)
                      }}
                    >
                      Load Data
                    </button>
                  </div>
                </div>
              </Modal>
            </>
          )}
        </div>
      </div>

      <div className={"flex flex-col sm:flex-row my-2 justify-between"}>
        <button className={"btn-green my-2"} onClick={() => history.push("/")}>
          <FaHome className={"pr-1"} />
          Home
        </button>

        <div className={"flex flex-row items-center"}>
          <Tippy content={"Click to add New Field"}>
            <button
              className={"text-4xl text-purple-500 mr-4 hover:text-black "}
              onClick={() => setModalIsOpen(true)}
            >
              <AiOutlinePlusSquare />
            </button>
          </Tippy>
          <select
            className={"p-1 rounded-sm"}
            onChange={(e) =>
              handleChangeView(projectId, taskData, setTaskData, e.target.value)
            }
          >
            <option value="vertical">Board View</option>
            <option value="horizontal">List View</option>
          </select>
        </div>

        {modalIsOpen && (
          <ColumnModifyModal
            columnId={"add-new-colomn"}
            btnType={"add-column-btn"}
            setModalIsOpen={setModalIsOpen}
            modalIsOpen={modalIsOpen}
          />
        )}
      </div>

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
                  className={` flex h-full pb-10 overflow-x-scroll ${
                    taskData?.viewTable === "horizontal"
                      ? "flex-row items-start"
                      : "flex-col"
                  } `}
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
    </TaskPageContainer>
  )
}

export default TaskPageDrag
