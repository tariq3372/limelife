import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import PageTitle from '../components/PageTitle';

const Portfolio = () => {
  const data = {
    src: require('../assets/images/NFT5-BW.jpg'),
    colorSrc: require('../assets/images/NFT5-Green.jpg'),
    title: "Faton Ademi Mock-Up",
    description:
      "Lorem ipsum dolor sit amet, an consectetur adipisicing elit, sed do eiusmod tempor incididunt uteax labore et dolore magna aliqua. Ut enim ad minim veniam, quisated nostrud exercitation ullamconted laboris nisi ut aliquip ex eating a commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
    client: "DANIEL",
    date: "09-08-2015",
    location: "United States",
    author: "kawhi leonard",
  };
  const dataArray = [
    {
      src: require('../assets/images/NFT5-BW.jpg'),
      colorSrc: require('../assets/images/NFT5-Green.jpg'),
      title: "Faton Ademi Mock-Up",
      description:
        "Lorem ipsum dolor sit amet, an consectetur adipisicing elit, sed do eiusmod tempor incididunt uteax labore et dolore magna aliqua. Ut enim ad minim veniam, quisated nostrud exercitation ullamconted laboris nisi ut aliquip ex eating a commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
      client: "DANIEL CRAWLER",
      date: "09-08-2015",
      location: "United States",
      author: "kawhi leonard",
    },
    {
      src: require('../assets/images/NFT6-BW.jpg'),
      colorSrc: require('../assets/images/NFT6-Green.jpg'),
      title: "Faton Ademi Mock-Ups",
      description:
        "Lorem ipsum dolor sit amet, an consectetur adipisicing elit, sed do eiusmod tempor incididunt uteax labore et dolore magna aliqua. Ut enim ad minim veniam, quisated nostrud exercitation ullamconted laboris nisi ut aliquip ex eating a commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
      client: "DANIEL CRAWLER",
      date: "09-08-2015",
      location: "United States",
      author: "kawhi leonard",
    },
    {
      src: require('../assets/images/Photo10-BW.jpg'),
      colorSrc: require('../assets/images/Photo10-Green.jpg'),
      title: "Faton Ademi Mock-Upss",
      description:
        "Lorem ipsum dolor sit amet, an consectetur adipisicing elit, sed do eiusmod tempor incididunt uteax labore et dolore magna aliqua. Ut enim ad minim veniam, quisated nostrud exercitation ullamconted laboris nisi ut aliquip ex eating a commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
      client: "DANIEL CRAWLER",
      date: "09-08-2015",
      location: "United States",
      author: "kawhi leonard",
    },
    {
      src: require('../assets/images/Photo10-BW.jpg'),
      colorSrc: require('../assets/images/Photo10-Green.jpg'),
      title: "Faton Ademi Mock-Upss",
      description:
        "Lorem ipsum dolor sit amet, an consectetur adipisicing elit, sed do eiusmod tempor incididunt uteax labore et dolore magna aliqua. Ut enim ad minim veniam, quisated nostrud exercitation ullamconted laboris nisi ut aliquip ex eating a commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
      client: "DANIEL CRAWLER",
      date: "09-08-2015",
      location: "United States",
      author: "kawhi leonard",
    },
  ];
  const [currSelectedItem, setCurrSelectedItem] = useState(data);
  return (
    <Box>
      <PageTitle title="PORTFOLIO"/>
      <Container disableGutters>
        <Grid container spacing={8} sx={{ my: "4%" }}>
          <Grid item md={8} sm={12}>
            <Card sx={{ height: "90%", width: "90%" }}>
              <CardMedia
                component="img"
                height="100%"
                image={currSelectedItem?.colorSrc}
              />
            </Card>
          </Grid>
          <Grid item md={4} sm={12}>
            <Typography fontFamily="muli-bold" fontSize={30}>
              {" "}
              {currSelectedItem?.title}{" "}
            </Typography>
            <Typography
              fontFamily="muli-ligth"
              fontSize={17}
              color="#252525"
              mt={3}
            >
              {" "}
              {currSelectedItem?.description}{" "}
            </Typography>
            <Divider sx={{ mt: 3 }} />
            <Typography
              fontFamily="muli-ligth"
              fontSize={17}
              color="#252525"
              mt={3}
            >
              {" "}
              Client: {currSelectedItem?.client}{" "}
            </Typography>
            <Typography
              fontFamily="muli-ligth"
              fontSize={17}
              color="#252525"
              mt={3}
            >
              {" "}
              Date: {currSelectedItem?.date}{" "}
            </Typography>
            <Typography
              fontFamily="muli-ligth"
              fontSize={17}
              color="#252525"
              mt={3}
            >
              {" "}
              Location: {currSelectedItem?.location}{" "}
            </Typography>
            <Typography
              fontFamily="muli-ligth"
              fontSize={17}
              color="#252525"
              mt={3}
            >
              {" "}
              Author: {currSelectedItem?.author}{" "}
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ my: "3%" }}>
          <Grid item md={12} sm={12}>
            <Carousel
              autoPlay
              infiniteLoop
              stopOnHover
              centerMode
              showThumbs={false}
              centerSlidePercentage={30}
              showIndicators={false}
              showStatus={false}
            >
              {dataArray?.map((item) => (
                <div style={{ cursor: 'pointer' }} onMouseOver={() => setCurrSelectedItem(item)}>
                  <img
                    src={item.src}
                    alt="image"
                    style={{ width: "98%" }}
                  />
                </div>
              ))}
            </Carousel>
          </Grid>

          {/* <Grid item md={4} sm={12}>
            <Card sx={{ height: '100%', width: '100%' }}>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/images/NFT9-BW.jpg')}
                alt="nft"
              />
            </Card>
          </Grid>
          <Grid item md={4} sm={12}>
            <Card sx={{ height: '100%', width: '100%' }}>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/images/NFT9-BW.jpg')}
                alt="nft"
              />
            </Card>
          </Grid>
          <Grid item md={4} sm={12}>
            <Card sx={{ height: '100%', width: '100%' }}>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/images/NFT9-BW.jpg')}
                alt="nft"
              />
            </Card>
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio;