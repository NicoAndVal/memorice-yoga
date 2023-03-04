import { Button, Input, MenuItem, TextField } from "@mui/material"
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom"
import { Posture } from '../interfaces/Posture';
import { useContext, useRef, useEffect, useState } from 'react';
import { PositionContext } from '../context/ContexPosition/PositionContext';
import { PostureContext } from "../context/ContextPostures/PostureContext";


export const HomeApp = () => {

  const navigate = useNavigate()
  const {setFinalPosition} = useContext(PositionContext)
  const {postures} = useContext(PostureContext)
  const [value, setValue] = useState('');
  const ref = useRef<String>()
  const handleClick = () => {
    navigate('/first')
  }

  useEffect(() =>{
    value 
    let numberPosture : number = postures?.filter((posture:Posture) => posture.name === value)[0]?.position
    setFinalPosition(numberPosture)
  },[value])

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
          sx={{
            '& .MuiTextField-root': { m: 1, width: '40ch' },
            '.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root': { color: '#fff' },
            '.css-md26zr-MuiInputBase-root-MuiOutlinedInput-root': { color: '#fff' },
            '.css-1wc848c-MuiFormHelperText-root': { color: '#fff' }
          }}
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
              {
                postures?.map((posture: Posture) =>(
                  <MenuItem key={posture.id} value={posture.name}>
                    {posture.name}
                  </MenuItem>
                ))
              }
            </TextField>
          </div>
        </Box>
        <Button
          color="primary"
          variant="contained"
          onClick={handleClick}
          disabled={value === ''}
        >Comenzar</Button>
      </div>
    </div>

  )
}
