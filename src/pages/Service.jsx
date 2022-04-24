import { Box, Container, Grid, Typography, Divider } from '@mui/material'
import React from 'react'
import BrushIcon from '@mui/icons-material/Brush';

const Service = () => {
  return (
    <Box>
      <Box sx={{ backgroundColor: 'black', height: '241px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography fontFamily="muli-bold" color="#FFFFFF" fontSize={30} >SERVICES</Typography>
      </Box>

      <Container>
        <Grid container spacing={5} sx={{ my: "5%" }} >
          <Grid item md={4}>
            {/* <BrushIcon sx={{ display: 'flex', justifyContent: 'center' }} fontSize="large" /> */}
            <Typography sx={{ display: 'flex', justifyContent: 'center' }} fontFamily="muli-bold" color="#252525" fontSize={16} >DESIGN </Typography>
            <Typography fontFamily="muli-light" color="#707070" fontSize={16} sx={{ mt: '3%' }} >NAFEEZ offers a limitless range of design options, clients can choose from the suggested designs. Or create newly tailored designs made from the wildest imaginations.</Typography>
          </Grid>
          <Grid item md={4}>
            <Typography sx={{ display: 'flex', justifyContent: 'center', mb: '3%' }} fontFamily="muli-bold" color="#252525" fontSize={16} >PUBLISH NFTs</Typography>
            <Typography fontFamily="muli-light" color="#707070" fontSize={16} >NFTEEZ will handle the publishment of the NFTs on the block chain via NFT market places.</Typography>
          </Grid>
          <Grid item md={4} >
            <Typography sx={{ display: 'flex', justifyContent: 'center', mb: '3%' }} fontFamily="muli-bold" color="#252525" fontSize={16} >ADVERTISE NFTs</Typography>
            <Typography fontFamily="muli-light" color="#707070" fontSize={16}>With every NFT project each client gets a complementary social media page and promotional content to launch each project strong from the get go.</Typography>
          </Grid>

        </Grid>
      </Container>

    </Box>
  )
}

export default Service