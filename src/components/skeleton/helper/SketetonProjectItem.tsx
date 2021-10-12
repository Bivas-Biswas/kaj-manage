import React from "react"
import Skeleton from "react-loading-skeleton"

const SkeletonProjectItem = () => {
  return (
    <>
      <div className={"w-56 shadow-md rounded-b p-2 my-2 mx-auto"}>
        <div className={"w-full flex justify-between items-start flex-row"}>
          <p className={"w-full"}>
            <Skeleton height={"60px"} />
          </p>
        </div>
        <div className={"mt-3 w-full flex flex-row justify-between"}>
          <p className={"w-5/12"}>
            <Skeleton height={"30px"} />
          </p>
          <p className={"w-5/12"}>
            <Skeleton height={"30px"} />
          </p>
        </div>
      </div>
    </>
  )
}

export default SkeletonProjectItem
