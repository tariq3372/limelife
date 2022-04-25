import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Container, Typography } from "@mui/material";

const TeamSlider = () => {
  return (
    <Container
      disableGutters
      maxWidth="xxl"
      className="teambgm"
      sx={{ padding: "75px 40px", mb: "5%", mt: "10%" }}
    >
      <Container>
        <Typography
          sx={{ p: "0px 0px 50px", display: "flex", justifyContent: "center" }}
          fontFamily="muli-bold"
          fontSize={72}
          color="white"
        >
          Meet the team
        </Typography>
      </Container>
      <Carousel
        autoPlay
        infiniteLoop
        stopOnHover
        centerMode
        showThumbs={false}
        centerSlidePercentage={40}
        showIndicators={false}
        showStatus={false}
      >
        <div>
          <img
            src={require("../assets/images/Icon-Abdulrhman-small.png")}
            alt="abdulrehman"
            style={{ width: "80%" }}
          />
          <Typography
            sx={{
              p: "5% 0px 0px",
              display: "flex",
              justifyContent: "center",
            }}
            fontFamily="muli-bold"
            fontSize={22}
            color="white"
          >
            AbdulRehman
          </Typography>
          <Typography sx={{ p: "5% 0px 0px", display: 'flex', justifyContent: 'center' }} fontFamily="muli-italic" fontSize={15} color="white" >
            HR
          </Typography>
        </div>
        <div>
          <img
            src={require("../assets/images/Icon-Sultan-small.png")}
            alt="sultan"
            style={{ width: "80%" }}
          />
          <Typography
            sx={{
              p: "5% 0px 0px",
              display: "flex",
              justifyContent: "center",
            }}
            fontFamily="muli-bold"
            fontSize={22}
            color="white"
          >
            Sultan
          </Typography>
          <Typography sx={{ p: "5% 0px 0px", display: 'flex', justifyContent: 'center' }} fontFamily="muli-italic" fontSize={15} color="white" >
            HR
          </Typography>
        </div>
        <div>
          <img
            src={require("../assets/images/Icon-Khalid-small.png")}
            alt="khalid"
            style={{ width: "80%" }}
          />
          <Typography
            sx={{
              p: "5% 0px 0px",
              display: "flex",
              justifyContent: "center",
            }}
            fontFamily="muli-bold"
            fontSize={22}
            color="white"
          >
            Khalid
          </Typography>
          <Typography sx={{ p: "5% 0px 0px", display: 'flex', justifyContent: 'center' }} fontFamily="muli-italic" fontSize={15} color="white" >
            Graphic Designer
          </Typography>
        </div>
        <div>
          <img
            src={require("../assets/images/Icon-Tariq-small.png")}
            alt="tariq"
            style={{ width: "80%" }}
          />
          <Typography
            sx={{
              p: "5% 0px 0px",
              display: "flex",
              justifyContent: "center",
            }}
            fontFamily="muli-bold"
            fontSize={22}
            color="white"
          >
            Tariq
          </Typography>
          <Typography sx={{ p: "5% 0px 0px", display: 'flex', justifyContent: 'center' }} fontFamily="muli-italic" fontSize={15} color="white" >
            Developer
          </Typography>
        </div>
        <div>
          <img
            src={require("../assets/images/Icon-Mohammed-small.png")}
            alt="muhammad"
            style={{ width: "80%" }}
          />
          <Typography
            sx={{
              p: "5% 0px 0px",
              display: "flex",
              justifyContent: "center",
            }}
            fontFamily="muli-bold"
            fontSize={22}
            color="white"
          >
            Muhammad
          </Typography>
          <img
            src={require('../assets/images/sign1.jpeg')}
            alt="sign1"
            style={{ width: "20%", height: "20%" }}
          />
          <Typography sx={{ p: "2% 0px 0px", display: 'flex', justifyContent: 'center'  }}  fontFamily="muli-italic" fontSize={15} color="white" >
            Graphic Designer
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