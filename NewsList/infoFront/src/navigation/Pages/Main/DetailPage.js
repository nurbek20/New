import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Container } from "@mui/material";
import EditInfo from "../../../components/modals/EditInfo";

export default function DetailPage() {
  const list = useSelector((state) => state.personal_info_list);
  const [info, setInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setInfo(list.find((el) => el._id === id));
  }, [id, list]);

  return (
    <div>
        <Container>
          <Typography 
            component='span' 
            sx={{color: '#fff', 
              display: 'flex',
              justifyContent: 'center', 
              fontSize: '30px',
              margin: '25px'}}>
              Edit News Page
          </Typography>
          <List sx={{ width: '100%', maxWidth: '100%'}}>
            <ListItem sx={{
              backgroundColor: '#fff',
              padding: '15px 10px 15px 10px', 
              marginBottom: '30px'}}>
              <ListItemText>
                <Typography sx={{fontSize: '22px'}}>
                Title: {info?.title}
                </Typography>
                
                <Divider sx={{
                  backgroundColor: 'gray', 
                  border: '1px solid gray', 
                  margin: '5px auto'}}>
                </Divider>

                <Typography sx={{fontSize: '18px'}}>
                  Description: {info?.description}
                </Typography>

                <Divider sx={{
                  backgroundColor: 'gray', 
                  border: '1px solid gray', 
                  margin: '5px auto'}}>
                </Divider>

                <Typography sx={{fontSize: '14px'}}>
                  Author: {info?.author}
                </Typography>

                <Divider sx={{
                  backgroundColor: 'gray', 
                  border: '1px solid gray', 
                  margin: '5px auto'}}>
                </Divider>

                <Typography sx={{fontSize: '14px'}}>
                  Date: {info?.datetime}
                </Typography>
              </ListItemText>         
            </ListItem>
          </List>
          <EditInfo elem={info}/>
        </Container>
    </div>
  );
}
