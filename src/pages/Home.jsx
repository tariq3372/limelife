import { Box, Card, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { FacebookSharp, Twitter, Instagram } from '@mui/icons-material';
const home = () => {
  return (
    <Box sx={{ height: 800, padding: "78px 0px 0px 0px" }}>
      <Grid container>
        <Grid lg={4} md={12}>

          <Typography sx={{ fontSize: 30 }} >Kawhi Leonard</Typography>
          <Typography>Creative Director</Typography>
          <div style={{ marginTop: "20px" }} >
            <FacebookSharp />
            <Twitter />
            <Instagram />
          </div>

          <Card sx={{ marginTop: "50px", width: 371, height: 465 }}>
            <CardMedia
              component="img"
              height="200"
              image={require("../assets/images/Banner1-Green.jpg")}
              alt="banner"
            />
            <Typography sx={{ fontWeight: "bold", fontSize: 20 }} >Sandra Jackson</Typography>
            <Typography>Art Director</Typography>
          </Card>

        </Grid>

        <Grid lg={4} md={12}>
          <Typography sx={{ fontSize: 16 }} >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudanm, totam rem aperiam, eaque.</Typography>
          <Card sx={{ marginTop: "120px", width: 371, height: 465 }}>
            <CardMedia
              component="img"
              height="200"
              image={require("../assets/images/Banner1-Green.jpg")}
              alt="banner"
            />
            <Typography sx={{ fontWeight: "bold", fontSize: 20 }} >Sammy Filton</Typography>
            <Typography>Stylelist</Typography>
          </Card>
        </Grid>

        <Grid lg={4} md={12}>
        </Grid>

      </Grid>
    </Box>
  );
};

export default home;
