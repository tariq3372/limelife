import { Box, Button, Card, CardContent, TextField, Typography, Grid, CardMedia, Container } from "@mui/material";
import React from "react";

const Contactus = () => {
  return (
    <Box>
      <Box sx={{ backgroundColor: "black", height: "241px",  display: 'flex', justifyContent: "center", alignItems: "center" }} >
        <Typography fontFamily="muli-bold" color="#FFFFFF" fontSize={30}>
          CONTACT US
        </Typography>
      </Box>

      <Container>
        <Grid container spacing={5} sx={{ my: "5%" }}>
          <Grid item md={4} sm={12} sx={{ display: "flex", justifyContent: "flex-end" }} >
            <Card sx={{ height: "100%", width: "100%" }}>
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

          <Grid item md={8} sm={12}>
            <Card sx={{ height: "100%", width: "100%" }}>
              <CardMedia
                component="img"
                height="100%"
                image={require("../assets/images/muruj.png")}
                alt="muruj"
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contactus;
