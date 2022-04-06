import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
  return (
    <Carousel
    autoPlay
    infiniteLoop
    showArrows={false}
    showStatus={false}
    showIndicators={false}
    showThumbs={false}
    >
        <img
         src={require('../../assets/images/slider.jpeg')}
         alt="slider"
         height="100%"
        />
         <img
         src={require('../../assets/images/slider1.jpeg')}
         alt="slider1"
         height="100%"
        />
        <img
         src={require('../../assets/images/slider2.jpeg')}
         alt="slider2"
         height="100%"
        />
    </Carousel>
  );
}

export default Slider;
