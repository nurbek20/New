import { ListItem } from "@mui/material";
import React from "react";
import Create from "../../btns/Create";
import Logout from "../../btns/Logout";

export default function CreateInfo() {
  return (
    <div>
        <ListItem sx={{
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '50px'}}>
          <Create /> 
        </ListItem>
    </div>    
  );
}
