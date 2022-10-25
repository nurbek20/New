import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { delete_info } from "../../redux/actions/actions";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import HandshakeIcon from '@mui/icons-material/Handshake';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Delete({ id }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const delete_btn = () => {
    dispatch(delete_info(id)); 
    handleClose(); 
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return ( 
    <div>
      <Tooltip title="Delete" placement="top">
        <IconButton sx={{color: '#027c71'}} aria-label="delete" onClick={handleClickOpen}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
      <DialogTitle>
        {"Attention"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Do you want to delete this line?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Cancel
        </Button>
        <Button 
          onClick={delete_btn} 
          variant="contained" 
          endIcon={<HandshakeIcon />}
          type='submit'>
          Delete
        </Button>
      </DialogActions>
      </Dialog>
    </div> 
  )    
}
