import { Grid, Typography } from "@mui/material";
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

  const LineBox = styled('div')(({ theme }) => ({
    height: '100%',
    border: '15px solid #afeb34',
    position: 'absolute',
    right: '0px',
    zIndex: -1,
    width: '75%',
    [theme.breakpoints.up('xl')]: {
      width: '85%',
      height: '180%'
    },
  }))

  return (
    <Grid container sx={{ height: "576px", position: "relative" }}>
      <Grid item sm={12} md={8} sx={{ position: "relative", m: "10%", display: "flex", alignItems: "center" }}>
        <TextBox>
          <Typography fontSize={20} sx={{ letterSpacing: "01px" }}>WELCOME TO</Typography>
          <Typography fontSize={40} color="#252525" fontFamily="muli-bold">LIMELIFE STUDIOS.</Typography>
          <Typography fontSize={40} color="#252525" fontFamily="muli-bold" lineHeight="35px">THE FIRST NFT</Typography>
          <Typography fontSize={27} color="#252525" sx={{ letterSpacing: "01px" }}  >STUDIO IN KSA</Typography>
        </TextBox>
        <LineBox />
      </Grid>
      <SliderBox>
        <Slider />
      </SliderBox>
    </Grid>
  );
};

export default HomeHeader;
