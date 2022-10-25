import React from 'react'
import { Link } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import ViewListIcon from '@mui/icons-material/ViewList';
import Tooltip from '@mui/material/Tooltip';

export default function GoDetail({id}) {
  return (
    <div>
      <Link to={`/detail/${id}`}>
        <Tooltip sx={{color: '#027c71'}} title="Details" placement="bottom">
          <IconButton>
            <ViewListIcon />
          </IconButton>
        </Tooltip>  
      </Link>
    </div>  
  )
}
