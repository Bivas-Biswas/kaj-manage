import React from "react"
import SkeletonProjectItem from "./helper/SketetonProjectItem"
import Skeleton from "react-loading-skeleton"
import ProjectPageOuterLayout from "../../layout/ProjectPageOuterLayout"

const SkeletonProjectPage = () => {
  return (
    <ProjectPageOuterLayout>
      <div className={"w-40 p-2 shadow-md m-auto"}>
        <Skeleton height={30} />
      </div>
      <div className={"flex flex-start flex-wrap mx-auto"}>
        {[...Array(9)].map((_, index) => (
          <SkeletonProjectItem key={index} />
        ))}
      </div>
    </ProjectPageOuterLayout>
  )
}

export default SkeletonProjectPage
