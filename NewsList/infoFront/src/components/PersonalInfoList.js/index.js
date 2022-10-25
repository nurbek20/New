import React from "react";
import { useSelector } from "react-redux";
import Delete from "../btns/Delete";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import GoDetail from "../btns/GoDetail";

export default function PersonalInfoList({}) {
  const list = useSelector((state) => state.personal_info_list);

  return (
    <List sx={{ width: '100%', maxWidth: '100%', marginBottom: '80px' }}>
      {list.length > 0 &&
        list.map((el, i) => {
          return (
            <div
              key={i}
              style={
                el.status
                  ? { backgroundColor: "lightgray" }
                  : { backgroundColor: "#fff" }
              }
            >
              <ListItem sx={{
                padding: '15px 10px 15px 10px', 
                marginBottom: '30px'}}>
                <ListItemAvatar>
                  <Avatar>
                    <NewspaperIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>
                  <Typography sx={{fontSize: '20px', fontWeight: '600'}}>
                    {el?.title}
                  </Typography>
                  <Divider sx={{
                    backgroundColor: 'gray', 
                    border: '1px solid gray', 
                    margin: '5px auto'}}>
                  </Divider>
                  <Typography>
                    {el?.description}
                  </Typography>
                  <Divider sx={{
                    backgroundColor: 'gray', 
                    border: '1px solid gray', 
                    margin: '5px auto'}}>
                  </Divider>
                  <Typography>
                    {el?.author}
                  </Typography>
                  <Divider sx={{
                    backgroundColor: 'gray', 
                    border: '1px solid gray', 
                    margin: '5px auto'}}>
                  </Divider>
                  <Typography>
                    {el?.datetime}
                  </Typography>
                </ListItemText>
                <Typography component='span'>
                  <Delete id={el._id} />
                  <GoDetail id={el._id} />
                </Typography>
              </ListItem>
            </div>
          );
        })}
  </List>
  );
}
