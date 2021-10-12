import { TcontextTaskData, TprojectId, TsetContextTaskData } from "../../ts/types"
import { doc, setDoc } from "firebase/firestore"
import db from "../../config/fbConfg"

const handleChangeView = (
  projectId: TprojectId,
  taskData: TcontextTaskData,
  setTaskData: TsetContextTaskData
) => {
  const docRef = doc(db, "users", projectId)
  let payload = {}
  switch (taskData?.viewTable) {
    case "horizontal":
      payload = {
        ...taskData,
        viewTable: "vertical",
      }
      break
    case "vertical":
      payload = {
        ...taskData,
        viewTable: "horizontal",
      }
      break
    default:
      break
  }
  setDoc(docRef, payload)
  setTaskData(payload)
}

export default handleChangeView
