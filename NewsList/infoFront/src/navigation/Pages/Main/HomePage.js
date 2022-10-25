import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { get_list_infos } from "../../../redux/actions/actions";
import Typography from '@mui/material/Typography';
import Header from "../../../components/Header/index.js";
import { Container } from "@mui/system";
import InfoList from "../../../components/InfoList.js/index.js";

export default function HomePage() {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(get_list_infos())
    },[])

  return (
    <div>
      <Header />
      <Container>
        <Typography 
          component='span' sx={{
          display: 'flex',
          justifyContent: 'center',
          fontSize: '30px',
          color: '#fff',
          margin: '20px auto'}}>
            News Page
        </Typography>
        <InfoList />
      </Container>
    </div>
  );
}
