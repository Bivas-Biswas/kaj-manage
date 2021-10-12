import { doc, setDoc } from "firebase/firestore"
import db from "../../config/fbConfg"
import defaultData from "../../data/defaultData"

const editProjectItem = async (
  input: string,
  endProjectDate: Date,
  projectId: string
) => {
  if (projectId && endProjectDate) {
    const collectionRef = doc(db, "users", projectId)
    const payload = {
      ...defaultData,
      projectName: input,
      endProjectDate: new Date(endProjectDate),
      updateDate: new Date(),
    }
    await setDoc(collectionRef, payload)
  }
}

export default editProjectItem
