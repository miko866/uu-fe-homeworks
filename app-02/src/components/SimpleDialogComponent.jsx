import React, {useState} from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const SimpleDialogComponent = ({open, handleClose, handleAdd}) => {
  const [title, setTitle] = useState('');
  const [maxValue, setMaxValue] = useState('');

  return (
    <>
      {open ? (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add new store</DialogTitle>
          <DialogContent>
            <form action="">
              <TextField
                autoFocus
                margin="dense"
                id="title"
                label="Name"
                type="text"
                fullWidth
                variant="standard"
                onChange={(event) => setTitle(event.target.value)}
              />

              <TextField
                margin="dense"
                id="maxValue"
                label="Max value"
                type="number"
                fullWidth
                variant="standard"
                onChange={(event) => setMaxValue(event.target.value)}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" onClick={() => handleAdd(title, maxValue)}>
              Add
            </Button>
          </DialogActions>
        </Dialog>
      ) : null}
    </>
  );
}

export default SimpleDialogComponent;
