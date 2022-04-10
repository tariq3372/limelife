import { Box, Button, Card, CardContent, TextField, Typography, Grid, CardMedia } from '@mui/material'
import React from 'react'
const Contactus = () => {
  return (
    <Box sx={{ height: "900px", mb: '100px' }}>
      <Box sx={{ backgroundColor: 'black', height: '241px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography fontFamily="muli-bold" color="#FFFFFF" fontSize={30}>CONTACT US</Typography>
      </Box>

      <Grid container sx={{ mt: '100px' }}>
        <Grid container md={4} sx={{ display: 'flex', justifyContent: 'flex-end' }} >
          <Card sx={{ height: '550px', width: '350px' }}>
            <CardContent>
              <Typography fontFamily="muli-bold" fontSize={24}>Contact us by email!</Typography>
              <Typography fontFamily="muli-light" fontSize={14} color="#252525" sx={{ mt: 3 }}>At vero eos et accusamus et iusto odios un dignissimos ducimus qui blan ditiis prasixer esentium voluptatum.</Typography>
              <TextField fullWidth size="small" sx={{ mt: 3 }} label="Full Name" multiline maxRows={2} />
              <TextField fullWidth size="small" sx={{ mt: 3 }} label="Phone Number" multiline maxRows={2} />
              <TextField fullWidth size="small" sx={{ mt: 3 }} label="Email-address" multiline maxRows={2} />
              <TextField fullWidth size='small' sx={{ mt: 3 }} label="Message" multiline rows
                ={4} defaultValue="" />
              <Button sx={{ borderColor: "black", color: "black", mt: 3 }} variant="outlined">SUBMIT FORM</Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid container md={8}>
          <Card sx={{ height: '550px', width: '700px', ml: '28px' }}>
            <CardMedia
              component="img"
              height="100%"
              image={require('../assets/images/muruj.png')}
              alt="muruj"
            />
          </Card>
        </Grid>
      </Grid>

    </Box>
  )
}

export default Contactus


{/* <Box sx={{ mt: '160px', ml: "200px", height: '350px', width: '300px'}}>
<Card >
  <CardContent>
    <Typography fontFamily="muli-bold" fontSize={24}>Contact us by email!</Typography>
    <Typography fontFamily="muli-light" fontSize={14} color="#252525" sx={{ mt: 3 }}>At vero eos et accusamus et iusto odios un dignissimos ducimus qui blan ditiis prasixer esentium voluptatum.</Typography>
    <TextField fullWidth size="small" sx={{ mt: 3 }} label="Full Name" multiline maxRows={2} />
    <TextField fullWidth size="small" sx={{ mt: 3 }} label="Phone Number" multiline maxRows={2} />
    <TextField fullWidth size="small" sx={{ mt: 3 }} label="Email-address" multiline maxRows={2} />
    <TextField fullWidth size='small' sx={{ mt: 3 }} label="Message" multiline rows
      ={4} defaultValue="" />
    <Button sx={{ borderColor: "black", color: "black", mt: 3 }} variant="outlined">SUBMIT FORM</Button>
  </CardContent>
</Card>
</Box> */}

// ml: '375px', mr: '375px' 