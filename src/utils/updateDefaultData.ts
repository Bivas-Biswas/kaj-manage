import { doc, setDoc } from "firebase/firestore"
import db from "../config/fbConfg"
import defaultData from "../data/defaultData"
import { TsetContextTaskData } from "../ts/types"

interface IupdateDefaultData {
  projectId: string
  setTaskData: TsetContextTaskData
}

const updateDefaultData = ({ projectId, setTaskData }: IupdateDefaultData) => {
  const docRef = doc(db, "users", projectId)
  const payload = { ...defaultData }
  setDoc(docRef, payload)
  setTaskData(payload)
}

export default updateDefaultData
