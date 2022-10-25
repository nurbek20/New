import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { edit_info } from "../../../redux/actions/actions";
import Edit from "../../btns/Edit";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import { ButtonGroup, FormGroup } from "@mui/material";
import GoBack from "../../btns/GoBack";

export default function EditInfo ({ elem }) {
  const [info, setInfo] = useState(null);
  const [status, setStatus] = useState(false);
  
  const dispatch = useDispatch();
  useEffect(() => {
    setInfo(elem);
    setStatus(elem?.status);
  }, [elem]);

  const saveEdit = (e) => {
    e.preventDefault();
    let data = {
      title: info.title,
      description: info.description,
      author: info.author,
      datetime: info.datetime
    };
    console.log(data);
    dispatch(edit_info(elem._id, data));
  };

  const changeData = (prop) => (e) => {
    setInfo({ ...info, [prop]: e.target.value });
  };

  return (
    <Box>
      <form onSubmit={saveEdit}>
        <FormGroup sx={{width: '100%'}}>
        <InputLabel sx={{color: '#fff'}}>
          Edit Title:
        </InputLabel>
        <TextField
          sx={{backgroundColor: '#fff', borderRadius: '4px', marginBottom: '10px'}}
          multiline
          rows={1}
          value={info?.title} 
          onChange={changeData("title")}
          variant="outlined"
        />
        <InputLabel sx={{color: '#fff'}}>
          Edit Descripton:
        </InputLabel>
        <TextField
          sx={{backgroundColor: '#fff', borderRadius: '4px', marginBottom: '10px'}}
          multiline
          rows={2}
          value={info?.description}
          onChange={changeData("description")}
          variant="outlined"
        />
        <InputLabel sx={{color: '#fff'}}>
          Edit Author:
        </InputLabel>
        <TextField
          sx={{backgroundColor: '#fff', borderRadius: '4px', marginBottom: '10px'}}
          multiline
          rows={1}
          value={info?.author}
          onChange={changeData("author")}
          variant="outlined"
        />
        <InputLabel sx={{color: '#fff'}}>
          Edit Date:
        </InputLabel>
        <TextField
          sx={{backgroundColor: '#fff', borderRadius: '4px', marginBottom: '10px'}}
          multiline
          rows={1}
          value={info?.datetime}
          onChange={changeData("datetime")}
          variant="outlined"
        />
        </FormGroup>
        
        <ButtonGroup sx={{display: 'flex', justifyContent: 'center'}}>
          <Edit />
          <GoBack />
        </ButtonGroup>
      </form>
    </Box>   
  );
}
