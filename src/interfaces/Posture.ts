import { Database } from "./database"


export type Posture = Database['public']['Tables']['postures']['Row']

export interface VarientPosture {
  id: number  
  position: number
  url: string
  description: string
  name: string
}

