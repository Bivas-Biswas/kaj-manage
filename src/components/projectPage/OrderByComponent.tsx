import React, { FC, useState } from "react"
import { IprojectItem } from "../../ts/types"
import fetchAllProjectItems from "../../utils/projectPage/fetchAllProjectItems"
import { OrderByDirection } from "@firebase/firestore-types"

interface Iprops {
  setAllProjectItems: React.Dispatch<React.SetStateAction<IprojectItem[] | null>>
}
const OrderByComponent: FC<Iprops> = ({ setAllProjectItems }) => {
  const [optionField, setOptionField] = useState<string>("createdDate")
  const [optionSort, setOptionSort] = useState<OrderByDirection | undefined>("asc")
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    const name = e.target.name
    switch (name) {
      case "field":
        setOptionField(value)
        break
      case "sort":
        if (value === "asc" || value === "desc") {
          setOptionSort(value)
        }
        break
      default:
        return
    }
    fetchAllProjectItems({ optionSort, optionField, setAllProjectItems })
    console.log(optionField, optionSort)
  }
  return (
    <div
      className={`flex flex-row justify-between mb-2 sm:justify-start md:justify-start`}
    >
      <div className={`flex flex-col sm:flex-row sm:items-center`}>
        <p className={`text-base text-gray-600 mr-2`}>Filter by field</p>
        <select
          value={optionField}
          onChange={handleChange}
          name={"field"}
          className={`p-1 rounded-sm`}
        >
          <option value="createdDate">By CreatedDate</option>
          <option value="updateDate">By UpdatedDate</option>
          <option value="endProjectDate">By EndDate</option>
          <option value="projectName">By Name</option>
        </select>
      </div>
      <div className={"flex flex-col sm:flex-row sm:items-center"}>
        <p className={`text-base text-gray-600 mx-2`}>Sort Result</p>
        <select
          value={optionSort}
          onChange={handleChange}
          name={"sort"}
          className={`p-1 rounded-sm outline-purple`}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  )
}

export default OrderByComponent
