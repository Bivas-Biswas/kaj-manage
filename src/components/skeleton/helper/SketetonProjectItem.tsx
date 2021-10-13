import React, { FC } from "react"
import Skeleton from "react-loading-skeleton"
import ItemWrapper from "../../../layout/ProjectPage/ItemWrapper"

const SkeletonProjectItem: FC = () => {
  return (
    <>
      <ItemWrapper>
        <p>
          <Skeleton height={"0.75rem"} />
        </p>
        <p>
          <Skeleton height={"2.25rem"} />
        </p>

        <div className={"flex flex-row justify-between my-1"}>
          <p className={"w-4/12"}>
            <Skeleton height={"0.75rem"} />
          </p>
          <p className={"w-3/12"}>
            <Skeleton height={"0.75rem"} />
          </p>
        </div>

        <div className={"w-full flex flex-row justify-between"}>
          <p className={"w-5/12"}>
            <Skeleton height={"100%"} />
          </p>
          <p className={"w-5/12"}>
            <Skeleton height={"100%"} />
          </p>
        </div>
      </ItemWrapper>
    </>
  )
}

export default SkeletonProjectItem
