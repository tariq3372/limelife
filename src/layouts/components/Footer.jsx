import React from 'react'
import { Grid, Box, Typography, Card, CardContent, TextField, Stack, Button, Divider } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'black', padding: '5%' }}>
      <Grid container spacing={5} sx={{ justifyContent: 'space-between'}} >
        <Grid item lg={4} md={12}>
            <img
              src={require('../../assets/images/logo.png')}
              alt="logo"
              className="footer-logo"
            />
            <Typography sx={{ color: "white" }} > Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollitid est laborum. Sed ut perspiciatis unde qui omnis iste natus error sit voluptatem. </Typography>
            <hr style={{ margin: '30px 0px'}} />
            <Typography sx={{ color: "white" }}><span style={{ color: "#afeb34" }}>A:</span> No 40 Baria Sreet 133/2 NewYork City, </Typography>
            <Typography sx={{ color: "white" }}>NY,  United States</Typography>
            <Typography sx={{ color: "white" }}><span style={{ color: "#afeb34" }}>E:</span> info.contact@gmail.com</Typography>
            <Typography sx={{ color: "white" }}><span style={{ color: "#afeb34" }}>P:</span> (00) 123 456 789</Typography>
        </Grid>
        <Grid item lg={4} md={12}>
          <Card>
            <CardContent>
              <Stack flexDirection='column' >
                <Typography >We will love to hear from you!</Typography>
                <TextField size="small" sx={{ mt: 3 }} label="Name" multiline maxRows={2} />
                <TextField size="small" sx={{ mt: 3 }} label="Email" multiline maxRows={2} />
                <TextField size='small' sx={{ mt: 3 }} label="Comment" multiline rows={4}  defaultValue=""/>

                {/* <TextField size="small" sx={{ mt: 2 }} label="Name" variant="standard" /> */}
                {/* <TextField size="small" sx={{ mt: 2 }} label="Email" variant="standard" /> */}
                {/* <TextField size="small" sx={{ mt: 2 }} label="Comment" variant="standard" /> */}
                <Button sx={{ borderColor: "black", color: "black", mt: 6 }} variant="outlined">Send Message</Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid  sx={{ mt: '34px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Typography sx={{ color: "white", fontSize: '12px' }}>About | Customer Service | Terms & Conditions | Privacy Policy | Site Map | Contact</Typography>
          <Typography sx={{ color: "white", fontSize: '12px' }}>Copyright #LimeLife © 2022. All rights reserved.</Typography>
      </Grid>
    </Box>
  )
}

export default Footer