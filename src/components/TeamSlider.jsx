import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Button, Container, Typography } from '@mui/material';

const TeamSlider = () => {
    return (
        <Container disableGutters className='teambgm' sx={{ padding: '75px 40px', mb: '5%' }}>
            <Container>
                <Typography sx={{ p: '0px 0px 50px'}} fontFamily='muli-bold' fontSize={72} color="white">So that's us. Meet the MVPs</Typography>
            </Container>
            <Carousel
                autoPlay
                infiniteLoop
                stopOnHover
                centerMode
                showThumbs={false}
                centerSlidePercentage={50}
                showIndicators={false}
                showStatus={false}
            >
                <img
                    src={require('../assets/images/teamdevelopers.webp')}
                    alt="teamdevelopers"
                    style={{width: '80%'}}
                />
                <img
                    src={require('../assets/images/teamdesigner.webp')}
                    alt="teamdesigner"
                    style={{width: '80%'}}
                />
                <img
                    src={require('../assets/images/teammanagement.webp')}
                    alt="teammanagement"
                    style={{width: '80%'}}
                />
            </Carousel>
            <Container sx={{ display: 'flex', justifyContent: 'center', my: '50px' }}>
                <Button sx={{ bgcolor: 'white', border: '2px solid #555', fontSize: '16px', borderRadius: '50px', height: '60px', width: '390px', color: 'black' }}>See The Team</Button>
            </Container>
        </Container>
    );
}

export default TeamSlider;
