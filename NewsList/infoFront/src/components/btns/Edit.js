import React from 'react'
import Button from '@mui/material/Button';
import BorderColorIcon from '@mui/icons-material/BorderColor';

export default function Edit() {
  return (
    <div>
      <Button 
        sx={{margin: '40px 15px', backgroundColor: '#ff5500'}}
        type='submit' 
        variant="contained" 
        endIcon={<BorderColorIcon />}>
          Edit
      </Button>
    </div>
  )
}
