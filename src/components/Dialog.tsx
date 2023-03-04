import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useContext } from 'react';
import { PositionContext } from '../context/ContexPosition/PositionContext';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);
  const { setPosition } = useContext(PositionContext)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setPosition(1)
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Correcta
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"La postura no es la correcta"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Está es la postura correcta, puedes volver a comenzar
            <img
              src='https://picsum.photos/id/674/2000'
              width="50%"
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Volver a comenzar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}