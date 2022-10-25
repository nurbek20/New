import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { get_personal_list_infos } from "../../../redux/actions/actions";
import Typography from '@mui/material/Typography';
import Header from "../../../components/Header/index.js";
import { Container } from "@mui/system";
import CreateInfo from "../../../components/modals/CreateInfo";
import PersonalInfoList from "../../../components/PersonalInfoList.js";

export default function PersonalPage() {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(get_personal_list_infos())
    },[])

  return (
    <div>
      <Header />
      <Container>
        <CreateInfo />
        <Typography 
          component='span' sx={{
          display: 'flex',
          justifyContent: 'center',
          fontSize: '30px',
          color: '#fff',
          margin: '20px auto'}}>
            Personal News Page
        </Typography>
        <PersonalInfoList />
      </Container>
    </div>
  );
}
