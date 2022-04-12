import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";

const Homepage = () => {
  return (
    <Slider>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img className='d-block w-100' src={img1} alt='First slide' />

          <Carousel.Caption className='text-center'>
            <h1 className='heading-carousel'>Smart Education at Home.</h1>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className='d-block w-100' src={img2} alt='Second slide' />

          <Carousel.Caption className='text-center'>
            <h1 className='heading-carousel'>
              Reaching Out to Millions of People.
            </h1>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className='d-block w-100' src={img3} alt='Third slide' />

          <Carousel.Caption className='text-center'>
            <h1 className='heading-carousel'>You Can Learn Anything.</h1>
            {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Slider>
  );
};

const Slider = styled.div`
  max-height: 95vh;
  overflow: hidden;

  .text-center {
    position: absolute;
    margin: 0;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
  }
`;

export default Homepage;
