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
      <img src={`https://picsum.photos/200?random=${Math.random()}`} />
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
      <img src={`https://picsum.photos/200?random=${Math.random()}`} />
    </Carousel>
  );
}

export default Slider;
