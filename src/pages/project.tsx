import React, { useEffect, useState } from "react"
import { collection, onSnapshot } from "firebase/firestore"
import db from "../config/fbConfg"
import useToggle from "../hooks/useToggel"
import ProjectSingleItem from "../components/projectPage/ProjectSingleItem"
import { IprojectItem } from "../ts/types"
import ModifyProjectModal from "../components/taskPage/helper/ModifyProjectModal"
import SkeletonProjectPage from "../components/skeleton/SkeletonProjectPage"
import ProjectPageOuterLayout from "../layout/ProjectPageOuterLayout"

function Project() {
  const [allProjectItems, setAllProjectItems] = useState<IprojectItem[] | null>(null)
  const [modalIsOpen, setModalIsOpen] = useToggle(false)
  const [isLoading, setIsLoading] = useToggle(false)
  const [skeletonLoading, setSkeletonLoading] = useToggle(true)
  const fetchAllProjectItems = async () => {
    await onSnapshot(collection(db, "users"), (snapshot) => {
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

  useEffect(() => {
    fetchAllProjectItems().then(() => console.log("projectFetched"))
    setIsLoading(true)
    const timer = setTimeout(() => {
      setSkeletonLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) {
    return <SkeletonProjectPage />
  } else if (skeletonLoading || allProjectItems === null) {
    return <SkeletonProjectPage />
  }

  return (
    <ProjectPageOuterLayout>
      {modalIsOpen && (
        <ModifyProjectModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      )}
      <button className={"bg-green-200 p-1.5 m-2"} onClick={() => setModalIsOpen(true)}>
        Add New
      </button>
      <div className={"flex "}>
        {allProjectItems &&
          allProjectItems.map((projectItem, index) => (
            <ProjectSingleItem key={index} projectItem={projectItem} />
          ))}
      </div>
      <p className={"mx-auto"}>{JSON.stringify(allProjectItems)}</p>
    </ProjectPageOuterLayout>
  )
}

export default Project
