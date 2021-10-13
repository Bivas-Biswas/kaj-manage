import React, { FC } from "react"

const ItemWrapper: FC = ({ children }) => {
  return (
    <div
      className={`
    p-2.5 rounded-lg shadow-sm w-full bg-white relative cursor-pointer 
    transform transition subpixel-antialiased
    hover:scale-105 hover:shadow-lg
    hover:duration-500 hover:ease-in-out
    `}
    >
      {children}
    </div>
  )
}

export default ItemWrapper
