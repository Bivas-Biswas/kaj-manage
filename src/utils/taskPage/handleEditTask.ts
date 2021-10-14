import { TcontextTaskData, TprojectId, TsetContextTaskData } from "../../ts/types"
import { doc, setDoc } from "firebase/firestore"
import db from "../../config/fbConfg"
import { Itask } from "../../ts/interfaces"

type ThandleEditTask = {
  addNewData: Itask
  projectId: TprojectId
  taskData: TcontextTaskData
  setTaskData: TsetContextTaskData
}
const handleEditTask = async ({
  addNewData,
  projectId,
  taskData,
  setTaskData,
}: ThandleEditTask) => {
  const title = addNewData.title === "" ? "Untitled" : addNewData.title
  const content =
    addNewData.content === "" ? "add your content here...." : addNewData.content
  const docRef = doc(db, "users", projectId)

  const newTask = {
    ...taskData?.tasks[addNewData.id],
    title,
    content,
    // updateDate: new Date(),
  }
  const payload = {
    ...taskData,
    tasks: {
      ...taskData?.tasks,
      [addNewData.id]: newTask,
    },
    // updateDate: new Date(),
  }
  setDoc(docRef, payload)
  setTaskData(payload)
}

export default handleEditTask
