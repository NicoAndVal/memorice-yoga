import { Button, Input, Menu, MenuItem, TextField } from "@mui/material"
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom"
import { Posture } from '../interfaces/Posture';
import { useContext, useRef, useEffect, useState } from 'react';
import { PositionContext } from '../context/ContexPosition/PositionContext';
import { PostureContext } from "../context/ContextPostures/PostureContext";

let numberPosture: number;
export const HomeApp = () => {
  const navigate = useNavigate()
  const { setFinalPosition } = useContext(PositionContext)
  const { position, setPosition } = useContext(PositionContext)
  const { postures } = useContext(PostureContext)
  const [value, setValue] = useState('');
  const [postureUp, setPostureUp] = useState('');
  const ref = useRef<String>()
  const handleClick = () => {
    navigate('/first')
  }


  useEffect(() =>{
    if(position !== 1) return setPosition(1)
  },[])

  useEffect(() => {
    if (value === 'A') {
      numberPosture = 11
    }
    if (value === 'B') {
      numberPosture = 29 
    }
    if (value === 'Pie') {
      numberPosture = postures?.filter((posture: Posture) => posture.name === postureUp)[0]?.position
    }
    setFinalPosition(numberPosture)
  }, [value, postureUp])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        placeContent: 'center',
        minHeight: '100vh'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '50vh',
          justifyContent: 'space-around'
        }}
      >
        <h2>En que posturas vas de la serie</h2>

        <Box
          component="form"
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              select
              label="¿En que postura vas?"
              defaultValue=""
              helperText="Selecciona una postura"
              color="primary"
              fullWidth
              value={value}
              onChange={(e) => setValue(e.target.value)}
              inputRef={ref}
            >
              <MenuItem key={100} value="A">
                Saludo al sol A
              </MenuItem>
              <MenuItem key={200} value="B">
                Saludo al sol B
              </MenuItem>
              <MenuItem key={300} value="Pie">
                Posturas de Pie
              </MenuItem>
            </TextField>
            {
              value === 'Pie' && (
                <TextField
                  select
                  style={{ marginTop: '2rem' }}
                  label="¿En que postura vas?"
                  defaultValue=""
                  helperText="Selecciona una postura"
                  color="primary"
                  fullWidth
                  value={postureUp}
                  onChange={(e) => setPostureUp(e.target.value)}
                >
                  {
                    postures?.filter(posture => posture.position>=30).map((posture: Posture) => (
                      <MenuItem key={posture.id} value={posture.name}>
                        {posture.name}
                      </MenuItem>
                    ))
                  }
                </TextField>
              )
            }
          </div>
        </Box>
        <Button
          color="primary"
          variant="contained"
          onClick={handleClick}
          disabled={(value === '') || (value === 'Pie' && postureUp === '')}
        >Comenzar</Button>
      </div>
    </div>

  )
}
