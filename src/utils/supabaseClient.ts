import { createClient } from '@supabase/supabase-js'
import { Database } from '../interfaces/database'

const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_REACT_APP_SUPABASE_ANON_KEY

export const supabase = createClient<Database>(supabaseUrl!, supabaseAnonKey!)