import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authorization } from '../../../redux/actions/actions'
import { Button, Box, TextField, ListItem, Typography, Fade, Modal, Backdrop, IconButton, Tooltip } from "@mui/material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  borderRadius: '3px',
  boxShadow: 24,
  p: 4,
};

export default function Login() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const dispatch = useDispatch()
    const [data, setData] = useState({
      email: '',
      password: '',
    })

    const changeData = (prop) => (event) => {
      setData({ ...data, [prop]: event.target.value })
    }

    const auth = (e) => {
      e.preventDefault()
      console.log('You authorized!')
      if (data.email && data.password) {
        dispatch(authorization(data))
      }
    }

return (
    <div>
        <Tooltip title="Login" placement="bottom">
            <IconButton 
                sx={{color: '#027c71'}}
                onClick={handleClickOpen}>
                <AccountCircleIcon sx={{width: '30px', height: '30px'}} />
            </IconButton>
        </Tooltip> 
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
        <Fade in={open}>
            <Box sx={style}>
                <Typography 
                    sx={{fontSize: '35px', 
                    color: '#027c71', 
                    textAlign: 'center'}}>
                        Authorization
                </Typography>
                <Typography 
                    sx={{fontSize: '14px', 
                    marginBottom: '25px', 
                    color: '#000', 
                    textAlign: 'center'}}>
                        Welcome, please login to your news page
                </Typography>
                <form onSubmit={auth}>
                    <TextField 
                        sx={{width: '100%', marginBottom: '20px'}}  
                        color='success'    
                        type='email'
                        label="Email"
                        required
                        variant="outlined"
                        value={data.email}
                        onChange={changeData("email")}
                        placeholder="Enter your email"     
                    />
                    <TextField
                        sx={{width: '100%', marginBottom: '20px'}}
                        color='success'  
                        type='password'
                        label="Password"
                        required
                        variant="outlined"
                        value={data.password}
                        onChange={changeData("password")}
                        placeholder="Enter your password"             
                    />
                    <ListItem
                      sx={{display: 'flex', justifyContent: 'end'}}>
                        <Button sx={{color: '#027c71'}} onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button 
                          sx={{marginRight: '-13px', backgroundColor: '#027c71'}} 
                          autoFocus type='submit' 
                          onClick={handleClose} 
                          variant="contained" 
                          endIcon={<AccountBoxIcon />}>
                            Login
                        </Button>
                    </ListItem>
                </form>     
            </Box>
        </Fade>
      </Modal> 
    </div>   
  )
}






// import { Button} from "@mui/material";
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { authorization } from "../../../redux/actions/actions";
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';


// export default function AuthPage() {

//   const dispatch = useDispatch();
//   const [data, setData] = useState({
//     email: "",
//     password: "",
//   });

//   const changeData = (prop) => (event) => {
//     setData({ ...data, [prop]: event.target.value });
//   };

//   const auth = (e) => {
//     e.preventDefault();
//     if (data.email && data.password) {
//       dispatch(authorization(data));
//     }
//   };

//   const style = {
//     textAlign: 'center',
//     display: 'flex',
//     flexDirection: 'column',
//     width: '320px',
//     margin: '10% auto 0px'
//   }

//   return (
//     <Box sx={style} variant='fullscreen'>
//       <Typography sx={{fontSize: '45px', color: '#fff', marginBottom: '10px'}}>Authorization</Typography>
//       <Typography sx={{marginBottom: '30px', color: '#fff'}}>Welcome, please login to your Todo List</Typography>
//       <Card sx={{boxShadow: '12px 13px 14px 7px rgba(53,54,56,0.77)'}}>
//           <CardContent sx={{
//             width: '100%', 
//             padding: '10% 6%',
//             backgroundColor: '#fff',}}
//           >
//             <form onSubmit={auth}>
//               <TextField    
//                 sx={{width: '95%', marginBottom: '30px'}}         
//                 type='email'
//                 label="Email"
//                 required
//                 variant="outlined"
//                 value={data.email}
//                 onChange={changeData("email")}
//                 placeholder="Enter your email"  
//               />
//               <TextField   
//                 sx={{width: '95%', marginBottom: '20px'}}                  
//                 type='password'
//                 label="Password"
//                 required
//                 variant="outlined"
//                 value={data.password}
//                 onChange={changeData("password")}
//                 placeholder="Enter your password" 
//               />
//               <CardActions>
//                 <Button sx={{width: '100%', height: '50px', marginBottom: '10px'}} type="submit" variant="contained">Login</Button>
//               </CardActions>
//             </form>
//             <Link to="/reg">
//               <Typography sx={{fontSize: '16px', color: '#2b6cb0'}}>Create Account</Typography>
//             </Link>   
//           </CardContent>        
//       </Card>
//     </Box> 
//   );
// }