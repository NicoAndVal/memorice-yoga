import { useState } from "react"
import { ModalContext } from "./ModalContext"


interface props {
  children: JSX.Element | JSX.Element[]
}

export const ModalProvider = ({children}: props) => {

  const [openModal, setOpenModal] = useState(false)

  return (
      <ModalContext.Provider value={{openModal, setOpenModal}}>
        {children}
      </ModalContext.Provider>
    )
}
