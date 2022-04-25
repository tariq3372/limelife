import { Box, Button, Card, CardContent, TextField, Typography, Grid, CardMedia, Container } from "@mui/material";
import React from "react";
import PageTitle from '../components/PageTitle';

const Contactus = () => {
  return (
    <Box>
      <PageTitle title="CONTACT US"/>
      <Container>
        <Grid container spacing={5} sx={{ my: "5%" }}>
          <Grid item md={12} sm={12} sx={{ display: "flex", justifyContent: "center" }} >
            <Card sx={{ height: "100%", width: "50%" }}>
              <CardContent>
                <Typography fontFamily="muli-bold" fontSize={24}>
                  Contact us by email!
                </Typography>
                <Typography
                  fontFamily="muli-light"
                  fontSize={14}
                  color="#252525"
                  sx={{ mt: 3 }}
                >
                  At vero eos et accusamus et iusto odios un dignissimos ducimus
                  qui blan ditiis prasixer esentium voluptatum.
                </Typography>
                <TextField
                  fullWidth
                  size="small"
                  sx={{ mt: 3 }}
                  label="Full Name"
                  multiline
                  maxRows={2}
                />
                <TextField
                  fullWidth
                  size="small"
                  sx={{ mt: 3 }}
                  label="Phone Number"
                  multiline
                  maxRows={2}
                />
                <TextField
                  fullWidth
                  size="small"
                  sx={{ mt: 3 }}
                  label="Email-address"
                  multiline
                  maxRows={2}
                />
                <TextField
                  fullWidth
                  size="small"
                  sx={{ mt: 3 }}
                  label="Message"
                  multiline
                  rows={4}
                  defaultValue=""
                />
                <Button
                  sx={{ borderColor: "black", color: "black", mt: 3 }}
                  variant="outlined"
                >
                  SUBMIT FORM
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contactus;
