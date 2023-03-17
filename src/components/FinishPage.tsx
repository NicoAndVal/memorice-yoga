
import { Box, Button, Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { PositionContext } from '../context/ContexPosition/PositionContext';

export const FinishPage = () => {
  const {setPosition} = useContext(PositionContext)
  const navigate = useNavigate()

  const handleReturnHome = () =>{
    setPosition(1)
    navigate('/home')
  }

  return (
    // <Box sx={{flexGrow: 1}}>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx= {{
          height: '100vh'
        }}
      >
        <Grid
          sx={{marginBottom: '2em'}}
        >
          <Typography
            variant='h6'
          >Gracias por practicar hoy</Typography>
        </Grid>
        <Grid >
          <Button
            onClick={handleReturnHome}
            variant='contained'
          >
            Volver al comienzo
          </Button>
        </Grid>
      </Grid>
    // </Box>
  )
}
