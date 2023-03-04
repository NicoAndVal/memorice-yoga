import { useState } from "react"
import { PositionContext } from "./PositionContext"


interface props {
  children: JSX.Element | JSX.Element[]
}

export const PositionProvider = ({children}: props) => {

  const [position, setPosition] = useState(1)
  const [finalPosition, setFinalPosition] = useState(0)

  return (
      <PositionContext.Provider value={{position, setPosition, finalPosition, setFinalPosition}}>
        {children}
      </PositionContext.Provider>
    )
}
