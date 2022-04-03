import React from 'react'
import { Grid, Box, Typography, Card, CardContent, TextField, Stack, Button } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'black' }}>
      <Grid container sx={{ padding: "80px 0px 100px 99px" }} >
        <Grid item xs={8}>
          <Grid container spacing={10} flexDirection="column" >
            <Grid item xs={4}>
              <img
                src={require('../../assets/images/logo.png')}
                alt="logo"
                className="footer-logo"
              />
              <Typography sx={{ color: "white" }} > Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollitid est laborum. Sed ut perspiciatis unde qui omnis iste natus error sit voluptatem. </Typography>

            </Grid>
            <Grid item xs={4}>
              <Typography sx={{ color: "white" }}> A : No 40 Baria Sreet 133/2 NewYork City, </Typography>
              <Typography sx={{ color: "white" }}> NY, United States </Typography>
              <Typography sx={{ color: "white" }}>E: info.contact@gmail.com </Typography>
              <Typography sx={{ color: "white" }}>  P: (00) 123 456 789 </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Card style={{ marginRight: 100 }} >
            <CardContent>
              <Stack flexDirection='column' spacing={5} >
                <Typography >We will love to hear from you!</Typography>
                <TextField
                  id="outlined-textarea"
                  label="Name"
                  placeholder="Your Name"
                  multiline
                />
                <TextField
                  id="outlined-textarea"
                  label="Email"
                  placeholder="abc@gmail.com"
                  multiline
                />
                <TextField
                  id="outlined-multiline-static"
                  label="Your Comment"
                  multiline
                  rows={4}
                  defaultValue=""
                />
                <Button sx={{ borderColor: "black", color: "black" }} variant="outlined">Send Message</Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container sx={{ padding: "80px 0px 100px 99px" }} >
        <Grid item xs={8}>
          <Typography sx={{ color: "white" }}>About | Customer Service | Terms & Conditions | Privacy Policy | Site Map | Contact</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography style={{ color: "white", fontWeight: 'bold' }}>Copyright #LimeLife © 2022. All rights reserved.</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer

