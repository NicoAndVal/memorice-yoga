
import { useState, useEffect } from 'react';
import { Posture } from '../../interfaces/Posture';
import { supabase } from "../../utils/supabaseClient"
import { PostureContext } from './PostureContext';


interface props {
  children: JSX.Element | JSX.Element[]
}

type PostureContextProps = {
  postures: Posture[]
}


export const PostureProvider = ({children}: props) => {

  const [postures, setPostures] = useState<PostureContextProps>({postures:[]})

  useEffect(() =>{
    getPosturesFromSupabase()
  },[])

  const getPosturesFromSupabase = async() =>{
    const {data} = await supabase.from('postures').select().order("position")
    console.log(data)
    setPostures({postures: data ?? []})
  }



  return (
      <PostureContext.Provider value={postures}>
        {children}
      </PostureContext.Provider>
    )
}
