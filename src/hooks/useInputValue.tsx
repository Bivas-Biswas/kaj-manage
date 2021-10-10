import React, { useState } from "react"

const UseInputValue = () => {
  const [value, setValue] = useState<string>()
  return {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value || e.target.innerText)
    },
  }
}

export default UseInputValue
