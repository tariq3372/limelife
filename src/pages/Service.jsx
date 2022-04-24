import { Box, Container, Grid, Typography, Divider, CardMedia, Card } from '@mui/material'
import React from 'react'

const Service = () => {
  return (

    <Box>
      <Box sx={{ backgroundColor: 'black', height: "241px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography fontFamily="muli-bold" color="#FFFFFF" fontSize={30} >SERVICES</Typography>
      </Box>
      <Container disableGutters>
        <Grid container spacing={3} sx={{ my: '2%' }}>
          <Grid item md={6} sm={12}>
            <Typography fontSize={24} fontFamily="muli-bold" >DESIGN</Typography>
            <Typography fontSize={16} fontFamily="muli-light" color="#252525" mt={3}>NAFEEZ offers a limitless range of design options, clients can choose from the suggested designs. Or create newly tailored designs made from the wildest imaginations.</Typography>
          </Grid>
          <Grid item md={6} sm={12}>
            <Card sx={{ height: '75%', width: '75%' }}>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/images/Photo9-Green.jpg')}
                alt="about us"
              />
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ my: '2%' }}>
          <Grid item md={6} sm={12}>
            <Typography fontSize={24} fontFamily="muli-bold" >PUBLISH NFTs</Typography>
            <Typography fontSize={16} fontFamily="muli-light" color="#252525" mt={3}>NFTEEZ will handle the publishment of the NFTs on the block chain via NFT market places.</Typography>
          </Grid>
          <Grid item md={6} sm={12}>
            <Card sx={{ height: '75%', width: '75%' }}>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/images/NFT9-BW.jpg')}
                alt="nft"
              />
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ my: '2%' }}>
          <Grid item md={6} sm={12}>
            <Typography fontSize={24} fontFamily="muli-bold" >ADVERTISE NFTs</Typography>
            <Typography fontSize={16} fontFamily="muli-light" color="#252525" mt={3}>With every NFT project each client gets a complementary social media page and promotional content to launch each project strong from the get go.</Typography>
          </Grid>
          <Grid item md={6} sm={12}>
            <Card sx={{ height: '75%', width: '75%' }}>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/images/NFT9-BW.jpg')}
                alt="nft"
              />
            </Card>
          </Grid>
        </Grid>

      </Container>
    </Box>
  )
}

export default Service

