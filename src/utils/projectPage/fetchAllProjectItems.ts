import { OrderByDirection } from "@firebase/firestore-types"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import db from "../../config/fbConfg"
import { IprojectItem } from "../../ts/types"
import React from "react"

interface Iarug {
  order?: OrderByDirection | undefined
  name?: string
  setAllProjectItems: React.Dispatch<React.SetStateAction<IprojectItem[] | null>>
}

const fetchAllProjectItems = async ({
  order = "desc",
  name = "updateDate",
  setAllProjectItems,
}: Iarug) => {
  const q = query(collection(db, "users"), orderBy(name, order))
  await onSnapshot(q, (snapshot) => {
    const newAllProjects = snapshot.docs.map((doc) => ({
      projectId: doc.id,
      projectName: doc.data().projectName,
      updateDate: doc.data().updateDate,
      createdDate: doc.data().createdDate,
      endProjectDate: doc.data().endProjectDate,
      totalTask: Object.keys(doc.data().tasks).length,
      totalColumns: doc.data().columnOrder.length,
    }))
    setAllProjectItems(newAllProjects)
  })
}

export default fetchAllProjectItems
