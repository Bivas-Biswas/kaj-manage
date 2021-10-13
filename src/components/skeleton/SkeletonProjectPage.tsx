import React from "react"
import SkeletonProjectItem from "./helper/SketetonProjectItem"
import Skeleton from "react-loading-skeleton"
import PageOuterLayout from "../../layout/ProjectPage/PageOuterLayout"
import ProjectItemContainer from "../../layout/ProjectPage/ItemsContainer"

const SkeletonProjectPage = () => {
  return (
    <PageOuterLayout>
      <div className={"w-40 p-2 shadow-md rounded-b p-2 bg-white"}>
        <Skeleton height={30} />
      </div>

      <div className={"w-50 p-2 my-2 shadow-md rounded-b p-2 bg-white"}>
        <Skeleton height={30} />
      </div>
      <ProjectItemContainer>
        {[...Array(9)].map((_, index) => (
          <SkeletonProjectItem key={index} />
        ))}
      </ProjectItemContainer>
    </PageOuterLayout>
  )
}

export default SkeletonProjectPage
