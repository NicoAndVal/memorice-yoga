import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/system';
import { useContext } from 'react';
import { PositionContext } from '../context/ContexPosition/PositionContext';
import { ModalContext } from '../context/ContextModal/ModalContext';
import { Posture } from '../interfaces/Posture';

interface Props {
  posture: Posture
}

export const OpenDialog = ({ posture }: Props) => {
  const { setPosition } = useContext(PositionContext)
  const { openModal, setOpenModal } = useContext(ModalContext)

  const handleCloseDialog = () => {
    setOpenModal(false)
    setPosition(1)
  }

  return (
    <Dialog
      open={openModal}
      onClose={handleCloseDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth='xs'
      fullWidth={false}
    >
      <DialogTitle id="alert-dialog-title" display="flex">
      <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%'
          }}
        >
        {
          `${posture.name} era la correcta`
        }
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%'
          }}
        >
          <img
            src={posture.url}
            width="50%"
          />
        </Box>
        <DialogContentText id="alert-dialog-description">
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
          }}
        >
        <Button
          size="medium" 
          variant='contained'
          onClick={handleCloseDialog}
          autoFocus>
          Volver a comenzar
        </Button>
        </Box>
      </DialogActions>
    </Dialog>)
}
