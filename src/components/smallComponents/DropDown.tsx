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
      absolute w-full h-full top-0 left-0 rounded-lg z-40 
      bg-purple-700
      bg-opacity-50
      sm:bg-opacity-25
      `}
      />
      <div
        className={`
      absolute top-4 right-1/4 sm:right-1/4 sm:top-6 z-40 bg-white 
      w-36 rounded-md hover:rounded-sm shadow-lg 
      divide-y-2 divide-purple-700
      `}
        ref={ref}
      >
        {allOptions &&
          allOptions.map((item, index) => (
            <button
              ref={ref}
              key={index}
              className={`
                block text-center py-2 text-base text-purple-700 w-full 
                hover:bg-purple-500 hover:text-white focus:outline-none`}
              role="menuitem"
              onClick={() => handelOnClickOptions(index)}
            >
              {item.name}
            </button>
          ))}
        <button
          className={`
                block text-center py-2 text-md text-red-400 w-full
                hover:bg-red-400 hover:text-white focus:outline-none`}
          onClick={() => {
            setIsOptionOpen(!isOptionOpen)
          }}
        >
          Close
        </button>
      </div>
    </>
  )
}

export default DropDown
