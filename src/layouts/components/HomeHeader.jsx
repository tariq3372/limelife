import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Slider from "./Slider";
const HomeHeader = () => {
  return (
    <Grid container sx={{ height: "576px", position: "relative" }}>
      <Grid item md={8} sx={{  position: "relative", m: "10%", display: "flex", alignItems: "center"}}>
        <div>
          <Typography fontSize={20} sx={{ mb: "10px", letterSpacing:"02px" }}>WE LOVE TO</Typography>
          <Typography fontSize={55} color="#252525" letterSpacing="02px" fontWeight="100"> <span style={{ color: "#afeb34" }}>#</span>UNIQUE</Typography>
          <Typography fontSize={55} fontWeight="bold" color="#252525" lineHeight="25px" letterSpacing="02px" >CREATIVE</Typography>
          <Typography fontSize={55} fontWeight="bold" color="#252525" letterSpacing="02px">PASSION</Typography>
        </div>
        <Box sx={{ height:"150%", border: '15px solid #afeb34', width: "80%", position: 'absolute', right: '0px', zIndex: -1}}>
        </Box>
      </Grid>
      <Box sx={{ position: "absolute", right: "0px", height: "100%", backgroundColor:"black", width: "50%", zIndex: -1}}>
      <Slider/>
      </Box>
    </Grid>
  );
};

export default HomeHeader;
