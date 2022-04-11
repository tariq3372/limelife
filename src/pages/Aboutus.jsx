import { Box, Card, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Aboutus = () => {
  return (
    <Box>
      <Box sx={{ backgroundColor: 'black', height: "241px", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Typography fontFamily="muli-bold" color="#FFFFFF" fontSize={30} >ABOUT US</Typography>
      </Box>
      <Container disableGutters>
        <Grid container spacing={8} sx={{ my: '5%' }}>
          <Grid item md={6} sm={12}>
            <Card sx={{ height: '100%', width: '100%'}}>
              <CardMedia
                component="img"
                height="100%"
                image={require('../assets/images/Photo9-Green.jpg')}
                alt="about us"
              />
            </Card>
          </Grid>
          <Grid item md={6} sm={12}>
            <Typography fontSize={36} fontFamily="muli-bold" >ABOUT US</Typography>
            <Typography fontSize={18} fontFamily="muli-light" color="#252525" mt={3}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem laudanm, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed ttquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={8} sx={{ my: '5%' }}>
          <Grid item md={6} sm={12}>
            <Typography fontSize={36} fontFamily="muli-bold" >NFT</Typography>
            <Typography fontSize={18} fontFamily="muli-light" color="#252525" mt={3}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem laudanm, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed ttquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</Typography>
          </Grid>
          <Grid item md={6} sm={12}>
            <Card sx={{ height: '100%', width: '100%' }}>
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

export default Aboutus