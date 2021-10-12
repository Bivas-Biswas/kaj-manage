import React, { useEffect, useState } from "react"
import { collection, onSnapshot } from "firebase/firestore"
import db from "../config/fbConfg"
import NewProjectModal from "../components/smallComponents/NewProjectModal"
import useToggle from "../hooks/useToggel"
import ProjectSingleItem from "../components/smallComponents/ProjectSingleItem"
import { IprojectItem } from "../ts/types"

function Allproject() {
  const [allProjectItems, setAllProjectItems] = useState<IprojectItem[]>([])
  const [modalIsOpen, setModalIsOpen] = useToggle(false)
  useEffect(() => {
    async function fetchAllProjectItems() {
      await onSnapshot(collection(db, "users"), (snapshot) => {
        const newAllProjects = snapshot.docs.map((doc) => ({
          projectId: doc.id,
          projectName: doc.data().projectName,
        }))
        setAllProjectItems(newAllProjects)
      })
    }
    fetchAllProjectItems()
  }, [])

  return (
    <>
      {modalIsOpen && (
        <NewProjectModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      )}
      <button className={"bg-green-200 p-1.5 mr-2"} onClick={() => setModalIsOpen(true)}>
        Add New
      </button>
      {allProjectItems &&
        allProjectItems.map((projectItem, index) => (
          <ProjectSingleItem key={index} projectItem={projectItem} />
        ))}
      <p className={"mx-auto"}>{JSON.stringify(allProjectItems)}</p>
    </>
  )
}

export default Allproject
