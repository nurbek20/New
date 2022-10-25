import React, { useEffect, useState } from 'react'
import { AppBar, Toolbar, Typography, Stack, Box, } from '@mui/material'
import Register from '../../navigation/Pages/Auth/Register';
import Login from '../../navigation/Pages/Auth/Login';
import Logout from '../btns/Logout';
import { getToken } from '../../configs/localstorage';

export default function Header() {
    const [token, setToken] = useState('')
    useEffect(() => {
      setToken(getToken())
    }, [])
    return (
        <div>
            <AppBar sx={{backgroundColor: '#fff'}} position='static'>
                <Toolbar sx={{padding: '40px auto'}}>
                <Box
                    component="img"
                    sx={{
                    height: 50,
                    width: 50,
                    }}
                    alt="logo"
                    src='https://static-s.aa-cdn.net/img/gp/20600003804666/_74Ibw1lXZm13k-SXly32rNpuM_HmUZ5tfOeXFwtTAWSt0pJguC8DAnV_41qsK8Z1ig=w300?v=1'
                />
                    <Typography 
                        variant='h6' 
                        component='div'
                        sx={{flexGrow: '1', color: '#027c71', marginLeft: '10px'}}>
                        AKIpress
                    </Typography>
                    {token ? <Logout /> : <Stack direction='row' spacing={2}>
                        <Register /> 
                        <Login />
                    </Stack>}
                </Toolbar>
            </AppBar>
        </div>
    )
}
