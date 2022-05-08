import { Box, Grid, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import React from "react";
import Slider from "./Slider";
const HomeHeader = () => {

  const SliderBox = styled('div')(({ theme }) => ({
    position: "absolute",
    right: "0px",
    height: "100%",
    backgroundColor: "black",
    width: "100%",
    zIndex: -1,
    [theme.breakpoints.up('sm')]: {
      width: '50%',
    },
  }));

  const TextBox = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.main,
    opacity: 0.5,
    padding: 20,
    borderRadius: 10,
    [theme.breakpoints.up('sm')]: {
      opacity: 1,
      padding: 0,
      backgroundColor: "transparent",
    },
  }));

  return (
    <Grid container sx={{ height: "576px", position: "relative" }}>
      <Grid item sm={12} md={8} sx={{ position: "relative", m: "10%", display: "flex", alignItems: "center" }}>
        <TextBox>
          <Typography fontSize={20} sx={{ mb: "10px", letterSpacing: "02px" }}>WE LOVE TO</Typography>
          <Typography fontSize={55} color="#252525" fontFamily="muli-extralight"> <span style={{ color: "#afeb34" }}>#</span>UNIQUE</Typography>
          <Typography fontSize={55} color="#252525" fontFamily="muli-bold" lineHeight="35px">CREATIVE</Typography>
          <Typography fontSize={55} color="#252525" fontFamily="muli-bold" >PASSION</Typography>
        </TextBox>
        <Box sx={{ height: "100%", border: '15px solid #afeb34', width: "75%", position: 'absolute', right: '0px', zIndex: -1 }}>
        </Box>
      </Grid>
      <SliderBox>
        <Slider />
      </SliderBox>
    </Grid>
  );
};

export default HomeHeader;
