import { createContext } from "react";

export type PositionContextProps = {
  position: number
  setPosition: any
  finalPosition: number
  setFinalPosition: any
}

export const PositionContext = createContext<PositionContextProps>({} as PositionContextProps)