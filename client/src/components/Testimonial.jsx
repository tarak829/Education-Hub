import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import person1 from "../img/avatar-01.jpg";
import person2 from "../img/avatar-02.jpg";
import person3 from "../img/avatar-03.jpg";

const Testimonial = () => {
  return (
    <TestimonialArea>
      <Header>
        <h1>Testimonial</h1>
        <h3>Our Successful Students</h3>
      </Header>

      <Carousel>
        <Carousel.Item className="area" interval={3000}>
        
          <TestimonialBox>
            <StyledPerson>
              <img src={person1} alt='person'></img>
              <i className="fas fa-quote-left"></i>
              <div>
                <h5>NAVEEN VAISHNAV</h5>
                <h6>SOFTWARE DEVELOPER</h6>
              </div>
            </StyledPerson>
            <p>
              Quas non distinctio possimus iure quae numquam tempora aliquam
              delectus. Deserunt laborum repellat. Nobis sit et ad vitae aut.
            </p>
          </TestimonialBox>
          
          <TestimonialBox>
            <StyledPerson>
              <img src={person2} alt='person'></img>
              <i className="fas fa-quote-left"></i>
              <div>
                <h5>SHIVAM SHARMA</h5>
                <h6>DATA SCIENTIST</h6>
              </div>
            </StyledPerson>
            <p>
              Quas non distinctio possimus iure quae numquam tempora aliquam
              delectus. Deserunt laborum repellat. Nobis sit et ad vitae aut.
            </p>
          </TestimonialBox>

          <TestimonialBox>
            <StyledPerson>
              <img src={person3} alt='person'></img>
              <i className="fas fa-quote-left"></i>
              <div>
                <h5>VARUN CHANDRA</h5>
                <h6>WEB DEVELOPER</h6>
              </div>
            </StyledPerson>
            <p>
              Quas non distinctio possimus iure quae numquam tempora aliquam
              delectus. Deserunt laborum repellat. Nobis sit et ad vitae aut.
            </p>
          </TestimonialBox>

        </Carousel.Item>

        <Carousel.Item className="area" interval={3000}>
        
          <TestimonialBox>
            <StyledPerson>
              <img src={person2} alt='person'></img>
              <i className="fas fa-quote-left"></i>
              <div>
                <h5>SHIVAM SHARMA</h5>
                <h6>DESIGNER</h6>
              </div>
            </StyledPerson>
            <p>
              Quas non distinctio possimus iure quae numquam tempora aliquam
              delectus. Deserunt laborum repellat. Nobis sit et ad vitae aut.
            </p>
          </TestimonialBox>
          
          <TestimonialBox>
            <StyledPerson>
              <img src={person3} alt='person'></img>
              <i className="fas fa-quote-left"></i>
              <div>
                <h5>VARUN CHANDRA</h5>
                <h6>DATABASE ADMINISTRATOR</h6>
              </div>
            </StyledPerson>
            <p>
              Quas non distinctio possimus iure quae numquam tempora aliquam
              delectus. Deserunt laborum repellat. Nobis sit et ad vitae aut.
            </p>
          </TestimonialBox>

          <TestimonialBox>
            <StyledPerson>
              <img src={person1} alt='person'></img>
              <i className="fas fa-quote-left"></i>
              <div>
                <h5>NAVEEN VAISHNAV</h5>
                <h6>MARKETING MANAGER</h6>
              </div>
            </StyledPerson>
            <p>
              Quas non distinctio possimus iure quae numquam tempora aliquam
              delectus. Deserunt laborum repellat. Nobis sit et ad vitae aut.
            </p>
          </TestimonialBox>

        </Carousel.Item>
      </Carousel>
    </TestimonialArea>
  );
};

const TestimonialArea = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3rem 6rem;
  margin-bottom: 8rem;
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
  h6{
      font-size: .8rem;
      font-weight: 500;
      color: var(--pale-blue);
  }
`;

const TestimonialBox = styled.div`
  text-align: left;
  padding: 2rem;
  background-color: #ffffff;
  width: 30%;
  margin-right: 2rem;
  float: right;

  i{
      position: relative;
      top: 1.7rem;
      right: 1.7rem;
      padding: .5rem;
      background-color: var(--pale-blue);
      border-radius: 5rem;
  }
`;
export default Testimonial;
