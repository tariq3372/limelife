import { Box, Card, CardMedia, Container, Grid, Typography, Divider } from '@mui/material'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Portfolio = () => {
  const data = {
    title: 'Faton Ademi Mock-Up',
    description: 'Lorem ipsum dolor sit amet, an consectetur adipisicing elit, sed do eiusmod tempor incididunt uteax labore et dolore magna aliqua. Ut enim ad minim veniam, quisated nostrud exercitation ullamconted laboris nisi ut aliquip ex eating a commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
    client: 'DANIEL CRAWLER',
    date: '09-08-2015',
    location: "United States",
    author: 'kawhi leonard'
  }
  return (
    <Box>
      <Box sx={{ backgroundColor: 'black', height: "241px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography fontFamily="muli-bold" color="#FFFFFF" fontSize={30} >PORTFOLIO</Typography>
      </Box>
      <Container disableGutters>
        <Grid container spacing={8} sx={{ my: '5%' }}>
          <Grid item md={8} sm={12}>
            <Card sx={{ height: '100%', width: "100%" }}>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/images/NFT9-BW.jpg')}
              />
            </Card>
          </Grid>
          <Grid item md={4} sm={12}>
            <Typography fontFamily="muli-bold" fontSize={32} > {data.title} </Typography>
            <Typography fontFamily="muli-ligth" fontSize={18} color="#252525" mt={3}>  {data.description} </Typography>
            <Divider sx={{ mt: 3 }} />
            <Typography fontFamily="muli-ligth" fontSize={18} color="#252525" mt={3}> Client: {data.client} </Typography>
            <Typography fontFamily="muli-ligth" fontSize={18} color="#252525" mt={3}> Date: {data.date} </Typography>
            <Typography fontFamily="muli-ligth" fontSize={18} color="#252525" mt={3}> Location: {data.location} </Typography>
            <Typography fontFamily="muli-ligth" fontSize={18} color="#252525" mt={3}> Author: {data.author} </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ my: '5%' }}>
          <Grid item md={12} sm={12}>
            <Carousel
              autoPlay
              infiniteLoop
              stopOnHover
              centerMode
              showThumbs={false}
              centerSlidePercentage={50}
              showIndicators={false}
              showStatus={false}
            >
              <img
                src={require('../assets/images/NFT9-BW.jpg')}
                alt="teamdevelopers"
                style={{ width: '80%' }}
              />
              <img
                src={require('../assets/images/NFT9-BW.jpg')}
                alt="teamdesigner"
                style={{ width: '80%' }}
              />
              <img
                src={require('../assets/images/NFT9-BW.jpg')}
                alt="teammanagement"
                style={{ width: '80%' }}
              />
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
  )
}

export default Portfolio