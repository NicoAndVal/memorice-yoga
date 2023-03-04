import { Card, CardActions, CardContent, CardHeader, CardMedia, Button } from '@mui/material';
import { useContext } from 'react';
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
  const { name, url, variantPosture } = posture


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
      <Card variant='elevation' sx={{ width: 360 }} >
        <CardHeader
          title={variant ? variantPosture?.name : name}
        />
        <CardMedia
          component="img"
          height="300"
          sx={{ objectFit: 'contain', loading: 'lazy' }}
          image={variant ? variantPosture?.url : url}
          alt={variant ? variantPosture?.name : name}
        />
        <CardActions sx={{
          display: 'flex',
          justifyContent: 'space-around'
        }}>

          <Button size="medium" variant='contained' onClick={correctAnswer}>Correcta</Button>
          {position !== 1 &&
            <Button size="medium" variant='contained' onClick={incorrectAnswer}>Incorrecta</Button>
          }
        </CardActions>
      </Card>
      <OpenDialog posture={posture} />
    </>
  )
}
