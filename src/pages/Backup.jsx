import { Box, Button, Card, CardContent, CardMedia, Grid, Typography, Link } from "@mui/material";
import React, { useState } from "react";
import { Twitter, Instagram, FacebookOutlined, Google } from '@mui/icons-material';
import TeamSlider from "../components/TeamSlider";
const Home = () => {
  const [hover, setHover] = useState(null);

  return (
    <>
      <Grid container sx={{ mt: '150px', mb: '70px' }}>
        <Grid container md={6}>
          <Grid container>
            {/* 1 */}
            <Grid item sm={6} xs={12}>
              <Typography fontSize={36} fontFamily="muli-light" color="#252525" >Kawhi Leonard</Typography>
              <Typography fontSize={14} color="#707070"> CREATIVE DIRECTOR</Typography>
              <Grid sx={{ mt: '41px' }}>
                <Link href='https://web.facebook.com/MVPAPPS/?_rdc=1&_rdr' target="_blank" >
                  <FacebookOutlined style={{ fontSize: 32, marginRight: 31 }} />
                </Link>
                <Link href='https://twitter.com/MVPAPPS' target="_blank" >
                  <Twitter style={{ color: "#1e96e8", fontSize: 32, marginRight: 31 }} />
                </Link>
                <Link href='https://mvp-apps.com/' target="_blank" >
                  <Google style={{ color: "#e34134", fontSize: 32, marginRight: 31 }} />
                </Link>
                <Link href='https://www.instagram.com/MVP_APPS/' target="_blank" >
                  <Instagram style={{ color: '#9068cb', fontSize: 32, marginRight: 31 }} />
                </Link>
              </Grid>
            </Grid>
            {/* 2 */}
            <Grid item sm={6} xs={12} sx={{ borderLeft: '1px solid #707070', pl: 3, md: { mt: '41px' } }}>
              <Typography fontSize={16} color="#707070" fontFamily="muli-light" >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudanm, totam rem aperiam, eaque.</Typography>
            </Grid>
          </Grid>

          <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
            <Button onMouseEnter={() => setHover('1')} onMouseLeave={() => setHover(null)} sx={{ mr: 2, my: '10%', height: '460px', flexDirection: 'column', display: 'flex' }}>
              <CardMedia
                sx={{ height: '100%', width: '100%' }}
                component="img"
                image={require("../assets/images/Banner1-Green.jpg")}
                alt="banner"
              />
              <CardContent>
                <Typography fontSize={24} fontFamily="muli-light" color="#252525" >Sandra Jackson</Typography>
                <Typography fontSize={14} color="#707070">ART DIRECTOR</Typography>
              </CardContent>
            </Button>
            <Button onMouseEnter={() => setHover('2')} onMouseLeave={() => setHover(null)} sx={{ mr: 2, my: '10%', height: '460px', flexDirection: 'column', display: 'flex' }}>
              <CardMedia
                sx={{ height: '100%', width: '100%' }}
                component="img"
                image={require("../assets/images/Banner1-Green.jpg")}
                alt="banner"
              />
              <CardContent> 
                <Typography fontSize={24} fontFamily="muli-light" color="#252525">Sammy Filton</Typography>
                <Typography fontSize={14} color="#707070">Stylelist</Typography>
              </CardContent>
            </Button>
          </Grid>
        </Grid>

        <Grid container md={6} sx={{ position: 'relative' }}>
          <Grid item md={7} xs={5} sx={{ my: 'auto' }}>
            <Card sx={{ mr: 2, my: '10%', height: 500, width: '100%' }}>
              {hover &&
                <CardMedia
                  sx={{ height: '100%', width: '100%' }}
                  component="img"
                  height="200"
                  image={require("../assets/images/Banner1-Green.jpg")}
                  alt="banner"
                />
              }
            </Card>
          </Grid>
          <Grid item sx={{ bgcolor: 'black', height: '100%', position: 'absolute', right: '0px', width: '70%', zIndex: '-1', justifyContent: 'space-between', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ justifyContent: 'center', display: 'flex', width: '100%', my: 'auto' }}>
              <Typography fontFamily="muli-light" fontWeight="bold" fontSize={24} letterSpacing={15} color="#FFFFFF" sx={{ writingMode: 'tb-rl', transform: 'rotate(180deg)', ml: '40%', mr: '5%' }}>OUR TEAMS</Typography>
              <Typography fontFamily="ocrastd" fontSize={72} color="#FFFFFF">01</Typography>
            </Box>
          </Grid>
          <Button
            onClick={() => { }}
            sx={{ my: 0, color: '#afeb34', display: 'block', minWidth: '98px', minHeight: '36px', mt: 'auto', ml: 'auto', mb: '50px', mr: '50px' }}
          >
            <div className='menu-active-top' />
            {"View All"}
            <div className='menu-active-bottom' />
          </Button>
        </Grid>
      </Grid>
      
      <TeamSlider />
    </>
  );
};

export default Home;