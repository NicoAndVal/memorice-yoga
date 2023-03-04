import { createContext } from 'react';
import { Posture } from '../../interfaces/Posture';


export type PostureContextProps = {
  postures:Posture[] | []
}

export const PostureContext = createContext<PostureContextProps>({} as PostureContextProps)