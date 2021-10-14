import { deleteDoc, doc } from "firebase/firestore"
import db from "../config/fbConfg"

const handleProjectItemDelete = async (projectId: string, setIsModalDeleteOpen: any) => {
  setIsModalDeleteOpen(false)
  const docRef = doc(db, "users", projectId)
  await deleteDoc(docRef)
}
export default handleProjectItemDelete
