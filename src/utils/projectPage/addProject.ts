import { addDoc, collection } from "firebase/firestore"
import db from "../../config/fbConfg"
import defaultData from "../../data/defaultData"

const addProject = async (input: string, endProjectDate: Date) => {
  const collectionRef = collection(db, "users")
  const payload = {
    ...defaultData,
    projectName: input,
    endProjectDate: new Date(endProjectDate),
  }
  await addDoc(collectionRef, payload)
}

export default addProject
