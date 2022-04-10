import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Aboutus = () => {
  return (
    <Box sx={{ height:"900px", mb: '100px' }} >
      <Box sx={{ backgroundColor: 'black', height: '241px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
        <Typography fontSize={30} fontFamily="muli-bold" color="#FFFFFF" >About Us</Typography>
      </Box>
      <Grid container sx={{ mt: '100px' }}>
        <Grid container md={6} sx={{ backgroundColor: 'black',}}>
          <Typography>one</Typography>
        </Grid>
        <Grid container md={6} sx={{ backgroundColor: 'red'}}>
          <Typography>two</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Aboutus