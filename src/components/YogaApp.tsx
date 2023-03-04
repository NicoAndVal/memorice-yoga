
import { useContext, useEffect, useState } from 'react'
import { PositionContext } from '../context/ContexPosition/PositionContext'
import { CardPostura } from './CardPostura'
import { PostureContext } from '../context/ContextPostures/PostureContext';
import { random } from '../utils/numberRandom';
import { useNavigate } from 'react-router-dom';
import { Posture } from '../interfaces/Posture';

const InitialDataPosture : Posture = {
  "created_at": "",
  variantPosture: {},
  "id": 0,
  "position": 0,
  "url": "",
  "name": "",
  "variante": false
}

export const YogaApp = () => {
  const { position, finalPosition} = useContext(PositionContext)
  const {postures} = useContext(PostureContext)
  const [showVariant, setShowVariant] = useState(false)
  const [posture, setPosture] = useState<Posture>(InitialDataPosture) 
  const navigate = useNavigate()
  
  useEffect(() => {
    let postureFilter = postures?.filter((posture:Posture) => posture.position <= finalPosition)
    let posture: Posture | undefined = postureFilter && postureFilter[position - 1]
    if(!posture) {
      navigate('/finish')
    }
    setPosture(posture)
    if (posture?.variante) {
      let randonNumber = random(0, 10)
      if (randonNumber > 2) {
        setShowVariant(true)
      }
    } else {
      setShowVariant(false)
    }
  }, [position, finalPosition])


  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <CardPostura posture={posture} variant={showVariant} />
    </div>

  )
}
