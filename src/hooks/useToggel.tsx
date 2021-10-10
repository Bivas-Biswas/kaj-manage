import { useState, useCallback } from "react"

const useToggle = (initialState: boolean = false): [boolean, any] => {
  const [state, setState] = useState<boolean>(initialState)
  const toggle = useCallback((): void => setState((status) => !status), [])
  return [state, toggle]
}

export default useToggle
