import BrushIcon from '@mui/icons-material/Brush';
import PublishIcon from '@mui/icons-material/Publish';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Box, Container, Grid, Typography, Divider, CardMedia, Card } from "@mui/material";
import React from "react";
import PageTitle from '../components/PageTitle';
import sizes from '../theme/sizes';

const Service = () => {
  return (
    <Box>
      <PageTitle title="SERVICES" />
      <Container disableGutters>
        <Grid container spacing={1} sx={{ mb: sizes.base }}>
          <Grid item md={6} sm={12}>
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <BrushIcon sx={{ color: "#afeb34" }} />
              <Divider orientation="vertical" color="black" sx={{ mx: 2 }} flexItem />
              <Typography fontSize={24} fontFamily="muli-bold">
                DESIGN
              </Typography>
            </Box>
            <Typography fontSize={20} fontFamily="muli-light" color="#252525" mt={3} >
              LIMELIFE Studios offers a limitless range of design options, clients can
              choose from the suggested designs. Or create newly tailored
              designs made from the wildest imaginations.
            </Typography>
          </Grid>
          <Grid item md={6} sm={12}>
            <Card sx={{ height: "100%", width: "100%" }}>
              <CardMedia
                component="img"
                height="100%"
                image={require("../assets/images/Photo5.jpg")}
                alt="about us"
              />
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={1} sx={{ mb: sizes.base }}>
          <Grid item md={6} sm={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <PublishIcon sx={{ color: "#afeb34" }} />
              <Divider
                orientation="vertical"
                color="black"
                sx={{ mx: 2 }}
                flexItem
              />
              <Typography fontSize={24} fontFamily="muli-bold">
                PUBLISH NFTs
              </Typography>
            </Box>
            <Typography
              fontSize={20}
              fontFamily="muli-light"
              color="#252525"
              mt={3}
            >
              LIMELIFE Studios will handle the publishment of the NFTs on the block chain
              via NFT market places.
            </Typography>
          </Grid>
          <Grid item md={6} sm={12}>
            <Card sx={{ height: "100%", width: "100%" }}>
              <CardMedia
                component="img"
                height="100%"
                image={require("../assets/images/Photo8.jpg")}
                alt="nft"
              />
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={1} sx={{ mb: sizes.base }}>
          <Grid item md={6} sm={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <ThumbUpIcon sx={{ color: "#afeb34" }} />
              <Divider
                orientation="vertical"
                color="black"
                sx={{ mx: 2 }}
                flexItem
              />
              <Typography fontSize={24} fontFamily="muli-bold">
                ADVERTISE NFTs
              </Typography>
            </Box>
            <Typography
              fontSize={20}
              fontFamily="muli-light"
              color="#252525"
              mt={3}
            >
              With every NFT project each client gets a complementary social
              media page and promotional content to launch each project strong
              from the get go.
            </Typography>
          </Grid>
          <Grid item md={6} sm={12}>
            <Card sx={{ height: "100%", width: "100%" }}>
              <CardMedia
                component="img"
                height="100%"
                image={require("../assets/images/Photo4.jpg")}
                alt="nft"
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Service;