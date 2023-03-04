export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      messages: {
        Row: {
          content: string | null
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          user_id?: string
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          user_id?: string
        }
      }
      postures: {
        Row: {
          created_at: string | null
          id: number
          name: string
          position: number
          url: string
          variante: boolean
          variantPosture: any
        }
        Insert: {
          created_at?: string | null
          id?: number
          name: string
          position: number
          url: string
          variante: boolean
          variantPosture?: any
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
          position?: number
          url?: string
          variante?: boolean
          variantPosture?: Json | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
