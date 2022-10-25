import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function GoBack() {
    let route = useNavigate()

    const go_back = ()=> {route('/')}

    return (
        <div>
            <Button 
                sx={{margin: '40px 15px', backgroundColor: '#027c71'}}
                onClick={go_back} 
                variant="contained" 
                startIcon={<ArrowBackIcon />}>
                Go back
            </Button>
        </div>
    )
}
