import { doc, setDoc, Timestamp } from "firebase/firestore"
import db from "../../config/fbConfg"
import defaultData from "../../data/defaultData"
import { TcontextTaskData, TsetContextTaskData } from "../../ts/types"

interface IupdateDefaultData {
  projectId: string
  taskData: TcontextTaskData
  setTaskData: TsetContextTaskData
}

const updateDefaultData = ({ projectId, taskData, setTaskData }: IupdateDefaultData) => {
  const docRef = doc(db, "users", projectId)
  const payload = {
    ...taskData,
    ...defaultData,
    createdDate: Timestamp.fromDate(new Date()),
    updateDate: Timestamp.fromDate(new Date()),
    endProjectDate: Timestamp.fromDate(new Date()),
  }
  setDoc(docRef, payload)
  setTaskData(payload)
}

export default updateDefaultData
