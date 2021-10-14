import React, { useEffect, useState } from "react"
import useToggle from "../hooks/useToggel"
import ProjectSingleItem from "../components/projectPage/ProjectSingleItem"
import { IprojectItem } from "../ts/types"
import ModifyProjectModal from "../components/projectPage/helper/ModifyProjectModal"
import SkeletonProjectPage from "../components/skeleton/SkeletonProjectPage"
import PageOuterLayout from "../layout/ProjectPage/PageOuterLayout"
import fetchAllProjectItems from "../utils/projectPage/fetchAllProjectItems"
import { BiAddToQueue } from "react-icons/all"
import ProjectItemContainer from "../layout/ProjectPage/ItemsContainer"
import OrderByComponent from "../components/projectPage/OrderByComponent"

function Project() {
  const [allProjectItems, setAllProjectItems] = useState<IprojectItem[] | null>(null)
  const [modalIsOpen, setModalIsOpen] = useToggle(false)
  const [skeletonLoading, setSkeletonLoading] = useToggle(true)

  useEffect(() => {
    fetchAllProjectItems({ setAllProjectItems })
    const timer = setTimeout(() => {
      setSkeletonLoading(false)
    }, 1500)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  if (skeletonLoading || allProjectItems === null) {
    return <SkeletonProjectPage />
  }

  return (
    <PageOuterLayout>
      {modalIsOpen && (
        <ModifyProjectModal
          isModalEditOpen={modalIsOpen}
          setIsModalEditOpen={setModalIsOpen}
        />
      )}
      <button
        className={`btn-green`}
        onClick={() => {
          setModalIsOpen(true)
        }}
      >
        <BiAddToQueue className={"mr-1"} />
        Add New
      </button>
      <div className={`grid-cols-1 lg:grid-cols-2 grid mb-2`}>
        <h3 className={"my-2 text-3xl font-bold"}>My Projects</h3>
        <OrderByComponent setAllProjectItems={setAllProjectItems} />
      </div>

      <ProjectItemContainer>
        {allProjectItems &&
          allProjectItems.map((projectItem, index) => (
            <ProjectSingleItem key={index} projectItem={projectItem} />
          ))}
      </ProjectItemContainer>
    </PageOuterLayout>
  )
}

export default Project
