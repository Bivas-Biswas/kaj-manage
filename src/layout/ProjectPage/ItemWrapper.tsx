import React, { FC } from "react"

const ItemWrapper: FC = ({ children }) => {
  return (
    <div
      className={`
    p-2.5 rounded-lg shadow-sm w-full bg-white relative cursor-pointer 
    sm:transform sm:transition subpixel-antialiased
    sm:hover:scale-105 sm:hover:shadow-lg
    sm:hover:duration-500 sm:hover:ease-in-out
    `}
    >
      {children}
    </div>
  )
}

export default ItemWrapper
