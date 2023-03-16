import { Card, CardActions, CardHeader, CardMedia, Button, Box, CircularProgress } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { PositionContext } from '../context/ContexPosition/PositionContext';
import { OpenDialog } from './OpenDialog';
import { ModalContext } from '../context/ContextModal/ModalContext';
import { Posture } from '../interfaces/Posture';

type Props = {
  posture: Posture
  variant?: boolean
}

export const CardPostura = ({ posture, variant }: Props) => {
  const { position, setPosition } = useContext(PositionContext)
  const { setOpenModal } = useContext(ModalContext)
  const [loadImage, setLoadImage] = useState(true)
  const { name, url, variantPosture } = posture
  const [image, setImage] = useState(url)
  
  useEffect(() => {
    console.log('useEffect', position)
    console.log('image', image)
    console.log('url', url)
    if(url === image || position === 1) return setLoadImage(false)
    if(variant) return setImage(variantPosture?.url); // cambiar la imagen
    setImage(url); // cambiar la imagen
    setLoadImage(true); // mostrar el estado de carga
  }, [posture, url, position]);

  const correctAnswer = () => {
    if (variant) return setOpenModal(true)
    setPosition(position + 1)
  }

  const incorrectAnswer = () => {
    if (!variant) return setOpenModal(true)
    setPosition(position + 1)
  }


  return (
      <>
       {loadImage && (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 300 }}>
          <CircularProgress />
        </Box>
      )}
        <Card variant='elevation' sx={{ width: 360, display: loadImage ? 'none' : 'block' }} >
          <CardHeader
            title={variant ? variantPosture?.name : name}
          />
          <CardMedia
            component="img"
            height="300"
            sx={{ objectFit: 'contain' }}
            image={variant ? variantPosture?.url : url }
            alt={variant ? variantPosture?.name : name}
            onLoad={() =>setLoadImage(false)}
          />
          <CardActions sx={{
            display: 'flex',
            justifyContent: 'space-around'
          }}>

            {position !== 1 &&
              <Button size="medium" variant='contained' onClick={incorrectAnswer}>Incorrecta</Button>
            }
            <Button size="medium" variant='contained' onClick={correctAnswer}>Correcta</Button>
          </CardActions>
        </Card>
        <OpenDialog posture={posture} />
      </> 
  )
}
