import { TcontextTaskData, TprojectId, TsetContextTaskData } from "../ts/types"
import { doc, setDoc } from "firebase/firestore"
import db from "../config/fbConfg"

const handleChangeView = (
  projectId: TprojectId,
  taskData: TcontextTaskData,
  setTaskData: TsetContextTaskData
) => {
  const docFef = doc(db, "users", projectId)
  let payload = {}
  switch (taskData?.viewTable) {
    case "horizontal":
      payload = {
        ...taskData,
        viewTable: "vertical",
      }

      setDoc(docFef, payload)
      setTaskData(payload)
      break
    case "vertical":
      payload = {
        ...taskData,
        viewTable: "horizontal",
      }
      setDoc(docFef, payload)
      setTaskData(payload)
      break
    default:
      break
  }
}

export default handleChangeView
