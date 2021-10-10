import React, { useRef, useState } from "react"
import { Icolumn, Itask } from "../ts/interfaces"

const useInputValue = (edittask: Itask | any | Icolumn) => {
  const textRef = useRef<any>({})
  const [addNewData, setAddNewData] = useState<Itask | any>(edittask)
  const onChangeHandler = function (e: React.ChangeEvent<HTMLTextAreaElement>) {
    const name = e.target.name
    const value = e.target.value
    textRef.current[name].style.height = "0px"
    textRef.current[name].style.height = `${e.target.scrollHeight}px`
    const newAddNewData = {
      ...addNewData,
      [name]: value,
    }
    setAddNewData(newAddNewData)
  }

  return {
    textRef,
    addNewData,
    setAddNewData,
    onChange: onChangeHandler,
  }
}

export default useInputValue
