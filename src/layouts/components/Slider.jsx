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
        src={require('../../assets/images/Photo2.jpg')}
        alt="Photo2"
        height="100%"
      />
      <img
        src={require('../../assets/images/Photo4.jpg')}
        alt="Photo4"
        height="100%"
      />
      <img
        src={require('../../assets/images/Photo9.jpg')}
        alt="Photo9"
        height="100%"
      />
    </Carousel>
  );
}

export default Slider;
