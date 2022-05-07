import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { CardMedia } from "@mui/material";
import {useNavigate} from 'react-router-dom';

export default function AppBarComp() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
           <CardMedia
           onClick={() => navigate("/")}
              sx={{ cursor: "pointer", width: 160, mr: 2 }}
              component="img"
              src="https://ik.imagekit.io/duniakeramik/Dunia_Keramik-removebg-preview_fpSPnSdMd.png"
              alt="logo"
            />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
