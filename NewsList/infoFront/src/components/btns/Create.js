import React from 'react'
import { ListItem, TextField, Button, Fade, Modal, Box, Backdrop, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { info_create } from '../../redux/actions/actions';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import EditIcon from '@mui/icons-material/Edit';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  borderRadius: '3px',
  boxShadow: 24,
  p: 4,
};

export default function Create() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const dispatch = useDispatch();
    const [info, setInfo] = useState({
      title: "",
      description: "",
    });
  
    const changeData = (prop) => (e) => {
      setInfo({ ...info, [prop]: e.target.value });
    };
  
    const create = (e) => {
      e.preventDefault();
      console.log(info);
      if (info.title && info.description) {
        dispatch(info_create(info));
        setInfo({
          title: "",
          description: "",
          author: "",
          datetime: ""
        });
      }
    };

return (
    <div>
      <Typography 
          component='span' sx={{
          display: 'flex',
          justifyContent: 'center',
          fontSize: '30px',
          color: '#fff',
          margin: '20px auto'}}>
            Create News
        </Typography> 
        <Button 
            sx={{backgroundColor: '#ff5500', marginLeft: '33px'}} 
            onClick={handleClickOpen} 
            variant="contained" 
            endIcon={<EditIcon />}>
              Create
        </Button> 
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
                <form onSubmit={create}>
                    <TextField 
                        sx={{width: '100%', marginBottom: '20px'}}      
                        label="Title"
                        multiline
                        maxRows={4}
                        value={info.title}
                        onChange={changeData("title")}     
                    />
                    <TextField
                        sx={{width: '100%', marginBottom: '20px'}} 
                        label="Description"
                        multiline
                        maxRows={4}
                        value={info.description}
                        onChange={changeData("description")}             
                    />
                    <TextField
                        sx={{width: '100%', fontSize: '14px', marginBottom: '20px'}} 
                        label="Author"
                        multiline
                        maxRows={4}
                        value={info.author}
                        onChange={changeData("author")}             
                    />
                    <TextField
                        sx={{width: '100%', fontSize: '14px', marginBottom: '20px'}} 
                        label="Date"
                        multiline
                        maxRows={4}
                        value={info.datetime}
                        onChange={changeData("datetime")}             
                    />
                    <ListItem sx={{display: 'flex', justifyContent: 'end'}}>
                        <Button
                          sx={{color: '#027c71'}} 
                          onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button
                          sx={{marginRight: '-13px', backgroundColor: '#027c71'}} 
                          autoFocus type='submit' 
                          onClick={handleClose} 
                          variant="contained" 
                          endIcon={<TurnedInIcon />}>
                            Save
                        </Button>
                    </ListItem>
                </form>     
            </Box>
        </Fade>
        </Modal> 
    </div>   
  )
}






// import React from "react";
// import { useSelector } from "react-redux";
// import Avatar from '@mui/material/Avatar';
// import { Typography, Box, Divider, List, ListItem, ListItemText, ListItemAvatar, TextField, Button } from '@mui/material';
// import NewspaperIcon from '@mui/icons-material/Newspaper';
// import Delete from "../btns/Delete";
// import Golink from "../btns/Golink";
// import Create from "../btns/Create";
// import Edit from "@mui/icons-material/Edit";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { info_create } from '../../redux/actions/actions';
// import TurnedInIcon from '@mui/icons-material/TurnedIn';
// import EditIcon from '@mui/icons-material/Edit';

// export default function InfoList({}) {
//   const list = useSelector((state) => state.info_list);


//   const [open, setOpen] = React.useState(false);

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };


//   const dispatch = useDispatch();
//     const [info, setInfo] = useState({
//       title: "",
//       description: "",
//     });
  
//     const changeData = (prop) => (e) => {
//       setInfo({ ...info, [prop]: e.target.value });
//     };
  
//     const create = (e) => {
//       e.preventDefault();
//       console.log(info);
//       if (info.title && info.description) {
//         dispatch(info_create(info));
//         setInfo({
//           title: "",
//           description: "",
//           // author: "",
//           // date: "",
//         });
//       }
//     };
  
//   return (
//     <div>
//       <Box sx={{width: '100%'}}>
//         <form onSubmit={create}>
//           <Typography sx={{color: '#fff'}}>
//             Title
//           </Typography>
//           <TextField 
//             sx={{
//               width: '100%', 
//               backgroundColor: '#fff',
//               marginBottom: '20px',
//               borderRadius: '5px'}}      
//                 multiline
//                 maxRows={4}
//                 value={info.title}
//                 onChange={changeData("title")}     
//             />
//             <Typography sx={{color: '#fff'}}>
//               Description
//             </Typography>
//             <TextField
//               sx={{
//                 width: '100%', 
//                 backgroundColor: '#fff',
//                 marginBottom: '20px',
//                 borderRadius: '5px'}} 
//                   multiline
//                   maxRows={5}
//                   value={info.description}
//                   onChange={changeData("description")}             
//               />
//               <ListItem sx={{display: 'flex', justifyContent: 'space-between'}}>
//                 <TextField 
//                   sx={{
//                     width: '50%', 
//                     backgroundColor: '#fff',
//                     marginBottom: '20px',
//                     borderRadius: '5px'}}      
//                       multiline
//                       maxRows={4}
//                       value={info.title}
//                       onChange={changeData("title")}     
//                   />   
//                   <Button 
//                     sx={{marginRight: '-13px',}} 
//                       autoFocus type='submit' 
//                       onClick={handleClose} 
//                       variant="contained" 
//                       endIcon={<EditIcon />}>
//                         Create
//                   </Button>
//               </ListItem>
//         </form>         
//       </Box>








//     <List sx={{ width: '100%', maxWidth: '100%' }}>
//       {list.length > 0 &&
//         list.map((el, i) => {
//           return (
//             <div
//               key={i}
//               style={
//                 el.status
//                   ? { backgroundColor: "lightgray" }
//                   : { backgroundColor: "#fff" }
//               }
//             >
//               <ListItem sx={{
//                 padding: '15px 10px 15px 10px', 
//                 marginBottom: '10px'}}>
//                 <ListItemAvatar>
//                   <Avatar>
//                     <NewspaperIcon />
//                   </Avatar>
//                 </ListItemAvatar>
//                 <ListItemText>
//                   <Typography sx={{fontSize: '20px', fontWeight: '600'}}>
//                     {el?.title}
//                   </Typography>
//                   <Divider sx={{
//                     backgroundColor: 'gray', 
//                     border: '1px solid gray', 
//                     margin: '5px auto'}}>
//                   </Divider>
//                   <Typography>
//                     {el?.description}
//                   </Typography>
//                   <Typography>
//                     Author: John Doe
//                   </Typography>
//                   <Typography>
//                     Date: 24.06.2022
//                   </Typography>
//                   <Typography component='span'>
//                   <Delete id={el._id} />
//                   <Golink id={el._id} />
//                 </Typography>
//                 </ListItemText>
//               </ListItem>
//             </div>
//           );
//         })}
//   </List>



//   {/* <Box sx={{ width: '100%', backgroundColor: '#fff' }}>
//       <Typography variant="h5" gutterBottom component="div">
//         h5. Heading
//       </Typography>
//       <Typography variant="subtitle1" gutterBottom component="div">
//         subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
//         blanditiis tenetur
//       </Typography>
//       <Typography variant="subtitle2" gutterBottom component="div">
//         subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
//         blanditiis tenetur
//       </Typography>
//       <Typography variant="body1" gutterBottom>
//         body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
//         blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
//         neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
//         quasi quidem quibusdam.
//       </Typography>
//       <Typography variant="body2" gutterBottom>
//         body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
//         blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
//         neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
//         quasi quidem quibusdam.
//       </Typography>
//       <Typography variant="button" display="block" gutterBottom>
//         button text
//       </Typography>
//       <Typography variant="caption" display="block" gutterBottom>
//         caption text
//       </Typography>
//       <Typography variant="overline" display="block" gutterBottom>
//         overline text
//       </Typography>
//     </Box> */}

//   </div>
//   );
// }
