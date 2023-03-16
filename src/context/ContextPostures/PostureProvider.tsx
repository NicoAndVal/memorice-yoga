
import dayjs from 'dayjs';
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

  const getPosturesFromSupabase = async () => {
    const dataLocal = await localStorage.getItem('postures')
    if (dataLocal) {
      const { date, postures } = JSON.parse(dataLocal)
      if (dayjs().isAfter(date)) {
        console.log('paso un día')
        const { data } = await supabase.from('postures').select().order("position")
        localStorage.setItem('postures', JSON.stringify({
          postures: data ?? [],
          date: dayjs().add(1, 'day')
        }))
        setPostures({ postures: data ?? [] })
        return
      }
      console.log('sigue siendo el mismo día')
      setPostures({postures: postures ?? []})
    }else {
      console.log('No hay data en localstorage')
      const { data } = await supabase.from('postures').select().order("position")
      localStorage.setItem('postures', JSON.stringify({
        postures: data ?? [],
        date: dayjs().add(1, 'day')
      }))
      setPostures({ postures: data ?? [] })
      return
    }
  }



  return (
      <PostureContext.Provider value={postures}>
        {children}
      </PostureContext.Provider>
    )
}
