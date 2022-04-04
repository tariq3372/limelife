import { Box, Button, Card, CardContent, CardMedia, Divider, Grid, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import { FacebookSharp, Twitter, Instagram, FacebookOutlined, Google } from '@mui/icons-material';
const Home = () => {
  const [abc, setAbc] = useState(null);

  return (
    <Grid container sx={{ mt: '100px', mb: '70px' }}>
      <Grid container md={6}>
        <Grid container>
          {/* 1 */}
          <Grid item sm={6} xs={12}>
            <Typography fontSize={18} fontWeight="bold">Kawhi Leonard/Typography</Typography>
            <Typography fontSize={14} color="#707070"> Creative Director</Typography>
            <Grid sx={{ mt: '41px' }}>
              <FacebookOutlined style={{ fontSize: 32, marginRight: 31 }} />
              <Twitter style={{ fontSize: 32, marginRight: 31 }} />
              <Google style={{ fontSize: 32, marginRight: 31 }} />
              <Instagram style={{ fontSize: 32, marginRight: 31 }} />
            </Grid>
          </Grid>
          {/* 2 */}
          <Grid item sm={6} xs={12} sx={{ borderLeft: '1px solid #707070', pl: 3, md: { mt: '41px' } }}>
            <Typography color="#707070">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudanm, totam rem aperiam, eaque.</Typography>
          </Grid>
        </Grid>

        <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
          <Button onMouseEnter={() => setAbc('1')} onMouseLeave={() => setAbc(null)}  sx={{ mr: 2, my: '10%', height: '460px', flexDirection: 'column',display:'flex' }}>
            <CardMedia
              sx={{ height: '100%', width: '100%' }}
              component="img"
              image={require("../assets/images/Banner1-Green.jpg")}
              alt="banner"
            />
            <CardContent>
              <Typography color="#252525">Sandra Jackson</Typography>
              <Typography size={14} color="#707070">art derector</Typography>
            </CardContent>
          </Button>
          <Button onMouseEnter={() => setAbc('2')} onMouseLeave={() => setAbc(null)} sx={{ mr: 2, my: '10%', height: '460px', flexDirection: 'column',display:'flex' }}>
            <CardMedia
              sx={{ height: '100%', width: '100%' }}
              component="img"
              image={require("../assets/images/Banner1-Green.jpg")}
              alt="banner"
            />
            <CardContent>
              <Typography color="#252525">Sandra Jackson</Typography>
              <Typography size={14} color="#707070">art derector</Typography>
            </CardContent>
          </Button>
        </Grid>
      </Grid>

      <Grid container md={6} sx={{ position: 'relative' }}>
        <Grid item md={7} xs={5} sx={{ my: 'auto' }}>
          <Card sx={{ mr: 2, my: '10%', height: 500, width: '100%' }}>
            {abc &&
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
        <Grid item sx={{ bgcolor: 'black', height: '100%', position: 'absolute', right: '0px', width: '70%', zIndex: '-1', justifyContent: 'space-between', display: 'flex', flexDirection: 'column'  }}>
          <Box sx={{ justifyContent: 'center', display: 'flex', width: '100%', my: 'auto' }}>
            <Typography fontSize={20} letterSpacing={15} color="white" sx={{ writingMode: 'tb-rl', transform: 'rotate(180deg)', ml: '40%', mr: '5%' }}>OUR TEAMS</Typography>
            <Typography fontSize={58} color="white">01</Typography>
          </Box>
        </Grid>
        <Button
            onClick={() => { }}
            sx={{ my: 0, color: '#afeb34', display: 'block', minWidth: '98px', minHeight: '36px', mt: 'auto', ml: 'auto', mb: '50px', mr: '50px' }}
          >
            <div className='menu-active-top' />
            {"View Al"}
            <div className='menu-active-bottom' />
          </Button>
      </Grid>
    </Grid>
  );
};

export default Home;