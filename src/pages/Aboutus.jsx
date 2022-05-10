import { Box, Card, CardMedia, Container, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import PageTitle from '../components/PageTitle';
import sizes from '../theme/sizes';
import { styled } from '@mui/material/styles';

const Aboutus = () => {
  const DividerLine = styled(Divider)(({ theme }) => ({
    display: 'block',
    marginBottom: 10,
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
  }));
  return (
    <Box>
      <PageTitle title="ABOUT US" />
      <Container disableGutters>
        <Grid container spacing={8} sx={{ mb: sizes.base }}>
          <Grid item md={6} sm={12}>
            <Card sx={{ height: '100%', width: '100%' }}>
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
            <Typography fontSize={20} fontFamily="muli-light" color="#252525" mt={3}>LIMELIFE Studios is your bridge to the NFT world. We walk our clients through every step of the way. From design to launch, helping individuals and companies connect with their fan/customer base through NFTs.</Typography>
          </Grid>
        </Grid>
        <DividerLine />
        <Grid container spacing={8} sx={{ mb: sizes.base }}>
          <Grid item md={6} sm={12}>
            <Typography fontSize={36} fontFamily="muli-bold" >NFT</Typography>
            <Typography fontSize={20} fontFamily="muli-light" color="#252525" mt={3}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem laudanm, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed ttquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</Typography>
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