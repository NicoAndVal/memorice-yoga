import { createContext } from "react";

export type ModalContextProps = {
  openModal: boolean
  setOpenModal: any
}

export const ModalContext = createContext<ModalContextProps>({} as ModalContextProps)