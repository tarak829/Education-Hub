import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import testimonialinfo from "./Testimonialinfo";

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    className: "d-flex",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <TestimonialArea>
      <Header>
        <h1>Testimonial</h1>
        <h3>Our Successful Students</h3>
      </Header>

      <Slider {...settings}>
        {testimonialinfo.map((card, index) => (
          <TestimonialBox key={index}>
            <StyledPerson>
              <img src={card.image} alt='person'></img>
              <i className='fas fa-quote-left'></i>
              <div>
                <h5>{card.name}</h5>
                <h6>{card.occupation}</h6>
              </div>
            </StyledPerson>
            <p>{card.paragraph}</p>
          </TestimonialBox>
        ))}
      </Slider>
    </TestimonialArea>
  );
};

const TestimonialArea = styled.div`
  padding: 50px 0;
  text-align: center;

  .slick-list {
    margin: 0 5rem;
  }
  .slick-slide > div {
    padding: 0.3rem 0.6rem;
  }
`;

const Header = styled.div`
  margin-bottom: 5rem;

  h1 {
    margin-bottom: 2rem;
    font-weight: 700;
  }
  h3:hover {
    cursor: pointer;
    transition: all 0.2s;
    color: var(--pale-blue);
  }
`;

const StyledPerson = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  margin-bottom: 2rem;
  img {
    height: 5rem;
    width: 5rem;
    border-radius: 50rem;
  }
  h6 {
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--pale-blue);
  }
`;

const TestimonialBox = styled.div`
  text-align: left;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  i {
    position: relative;
    top: 1.7rem;
    right: 1.7rem;
    padding: 0.5rem;
    background-color: var(--pale-blue);
    border-radius: 5rem;
  }
`;

export default Testimonial;
