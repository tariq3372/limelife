import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Container, Typography } from "@mui/material";
import sizes from "../theme/sizes";
import { styled } from '@mui/material/styles';

const TeamSlider = () => {
  const [isMobile, setIsMobile] = useState(false)
 
  const handleResize = () => {
    if (window.innerWidth < 720) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  const Text = styled('div')(({ theme }) => ({
    padding: '0px 0px 50px',
    display: "flex",
    justifyContent: "center",
    fontFamily: "muli-bold",
    fontSize: 25,
    color:"white",
    [theme.breakpoints.up('md')]: {
      fontSize: 40,
    },
  }));

  return (
    <Container
      disableGutters
      maxWidth="xxl"
      className="teambgm"
      sx={{ padding: "25px 50px 10px", mb: sizes.base, mt: '10%' }}
    >
      <Container>
        {/* <Typography
          sx={{ p: "0px 0px 50px", display: "flex", justifyContent: "center" }}
          fontFamily="muli-bold"
          fontSize={72}
          color="white"
        >
          Meet the team
        </Typography> */}
        <Text>
        Meet the team
        </Text>
      </Container>
      <Carousel
        autoPlay
        infiniteLoop
        stopOnHover
        centerMode
        showThumbs={false}
        centerSlidePercentage={isMobile ? 100 : 40}
        showIndicators={false}
        showStatus={false}
      >
        <div>
          <img
            src={require("../assets/images/Icon-Abdulrhman-small.png")}
            alt="abdulrehman"
            style={{ width: "30%" }}
          />
          <Typography
            sx={{
              p: "5% 0px 0px",
              display: "flex",
              justifyContent: "center",
            }}
            fontFamily="muli"
            fontSize={30}
            color="white"
          >
            AbdulRehman
          </Typography>
          <Typography sx={{  display: 'flex', justifyContent: 'center' }} fontFamily="muli" fontSize={13} color="white" >
            OWNER
          </Typography>
        </div>
        <div>
          <img
            src={require("../assets/images/Icon-Sultan-small.png")}
            alt="sultan"
            style={{ width: "30%" }}
          />
          <Typography
            sx={{
              p: "5% 0px 0px",
              display: "flex",
              justifyContent: "center",
            }}
            fontFamily="muli-bold"
            fontSize={30}
            color="white"
          >
            Sultan
          </Typography>
          <Typography sx={{ display: 'flex', justifyContent: 'center' }} fontFamily="muli" fontSize={13} color="white" >
            HEAD GRAPHIC DESIGN
          </Typography>
        </div>
        <div>
          <img
            src={require("../assets/images/Icon-Khalid-small.png")}
            alt="khalid"
            style={{ width: "30%" }}
          />
          <Typography
            sx={{
              p: "5% 0px 0px",
              display: "flex",
              justifyContent: "center",
            }}
            fontFamily="muli-bold"
            fontSize={30}
            color="white"
          >
            Khalid
          </Typography>
          <Typography sx={{ display: 'flex', justifyContent: 'center' }} fontFamily="muli" fontSize={13} color="white" >
            PROJECT MANAGER
          </Typography>
        </div>
        <div>
          <img
            src={require("../assets/images/Icon-Tariq-small.png")}
            alt="tariq"
            style={{ width: "30%" }}
          />
          <Typography
            sx={{
              p: "5% 0px 0px",
              display: "flex",
              justifyContent: "center",
            }}
            fontFamily="muli-bold"
            fontSize={30}
            color="white"
          >
            Tariq
          </Typography>
          <Typography sx={{  display: 'flex', justifyContent: 'center' }} fontFamily="muli" fontSize={13} color="white" >
            HEAD DEVELOPER
          </Typography>
        </div>
        <div>
          <img
            src={require("../assets/images/Icon-Mohammed-small.png")}
            alt="muhammad"
            style={{ width: "30%" }}
          />
          <Typography
            sx={{
              p: "5% 0px 0px",
              display: "flex",
              justifyContent: "center",
            }}
            fontFamily="muli-bold"
            fontSize={30}
            color="white"
          >
            Muhammad
          </Typography>

          <Typography sx={{  display: 'flex', justifyContent: 'center'  }}  fontFamily="muli" fontSize={13} color="white" >
          GRAPHIC DESIGNER
          </Typography>

        </div>
      </Carousel>
      {/* <Container sx={{ display: 'flex', justifyContent: 'center', my: '50px' }}>
                <Button sx={{ bgcolor: 'white', border: '2px solid #555', fontSize: '16px', borderRadius: '50px', height: '60px', width: '390px', color: 'black' }}>See The Team</Button>
            </Container> */}
    </Container>
  );
};

export default TeamSlider;