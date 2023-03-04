import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
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
    >
      <DialogTitle id="alert-dialog-title">
        {
          `La ${posture.name} era la correcta`
        }
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <img
            src={posture.url}
            width="50%"
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleCloseDialog}
          autoFocus>
          Volver a comenzar
        </Button>
      </DialogActions>
    </Dialog>)
}
