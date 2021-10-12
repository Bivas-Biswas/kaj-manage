import { doc, getDoc } from "firebase/firestore"
import db from "../config/fbConfg"

const fetchDB = async (id: string) => {
  const docRef = doc(db, "users", id)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    return await docSnap.data()
  }
}

export default fetchDB
