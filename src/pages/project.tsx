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
        className={`
        px-3 py-2 text-2xl flex flex-row items-center border-2 rounded-lg shadow-md
        border-green-500 text-green-500 transtion
        hover:text-white hover:bg-green-500 
        hover:transition-all hover:duration-1000 hover:ease-in-out 
        `}
        onClick={() => {
          setModalIsOpen(true)
        }}
      >
        <BiAddToQueue className={"mr-1"} />
        Add New
      </button>
      <h3 className={"mx-2 my-4 text-3xl underline"}>My Projects : </h3>
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
