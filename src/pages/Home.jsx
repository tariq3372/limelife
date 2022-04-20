import { Box, Button, Card, CardContent, CardMedia, Grid, Typography, Link } from "@mui/material";
import React, { useState } from "react";
import { Twitter, Instagram, FacebookOutlined, Google } from '@mui/icons-material';
import TeamSlider from "../components/TeamSlider";
const Home = () => {
  const [hover, setHover] = useState(null);

  return (
    <>
      <TeamSlider />
    </>
  );
};

export default Home;