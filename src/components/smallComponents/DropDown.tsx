import React, { FC, useRef } from "react"
import useOnClickOutside from "../../hooks/useOneClickOutsid"
interface Iprops {
  setIsOptionOpen: any
  isOptionOpen: boolean
  allOptions: allOptions[]
}

export interface allOptions {
  name: string
  setter: any
}

const DropDown: FC<Iprops> = ({ setIsOptionOpen, isOptionOpen, allOptions }) => {
  const ref = useRef(null)

  useOnClickOutside(ref, () => setIsOptionOpen(!isOptionOpen))

  const handelOnClickOptions = (index: number) => {
    setIsOptionOpen(!isOptionOpen)
    if (allOptions) {
      allOptions[index].setter(true)
    }
  }
  return (
    <>
      <div
        className={`
      absolute w-full h-full top-0 left-0 rounded-lg z-20 
      bg-purple-700
      bg-opacity-25
      `}
      />
      <div
        className={`
      absolute right-9 top-6 z-40 bg-white 
      w-36 rounded-md shadow-lg ring-1 ring-black ring-opacity-5
      divide-y-2 divide-purple-700 hover:divide-y-0
      `}
        ref={ref}
      >
        {allOptions &&
          allOptions.map((item, index) => (
            <button
              ref={ref}
              key={index}
              className={`
                block text-left pl-3 py-2 text-base text-purple-700 w-full 
                hover:bg-purple-500 hover:text-white focus:outline-none`}
              role="menuitem"
              onClick={() => handelOnClickOptions(index)}
            >
              {item.name}
            </button>
          ))}
      </div>
    </>
  )
}

export default DropDown
