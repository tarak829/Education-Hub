import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Education from '../img/undraw_education_f8ru.svg'
import Certification from '../img/undraw_certification_aif8.svg'

const AboutSection = () => {
  return (
    <About >
      <div>
        <Header>
          <h1>About</h1>
          <p>
            Molestias doloribus iure. Laborum reiciendis nihil suscipit. Harum
            aut sunt et quis.
          </p>
          <p>Adipisci autem facere non quis ut dolorum voluptate nam.</p>
        </Header>

        <Container>
          <Row className="row">
            <Col>
              <h6>2020 BEST SMART EDUCATION SCHOOL</h6> 
              <h1>Welcome to EducationHub</h1>
              <p>Quaerat debitis quos reprehenderit. Aperiam voluptatem temporibus atque saepe iusto saepe officia. Autem nesciunt aut.</p>
              <p>Doloribus cumque quae qui nam nihil quidem sed ipsum. Doloribus culpa nisi eum aut est modi minus quidem. Id aspernatur laboriosam. Nostrum aliquam provident quia qui odio sit molestiae vero sunt.</p>
            </Col>
            <Col><img className="img1" src={Education} alt="logo"/></Col>
          </Row>
          <Row>
            <Col><img className="img1" src={Certification} alt="certificate"/></Col>
            <Col>
              <h1>Fully Certified Programs</h1>
              <p>Molestiae qui accusamus accusantium soluta iusto ut fuga. Iusto consequatur optio quis ut. Sed at numquam et modi atque sunt voluptatibus.</p>
              <p>Et repudiandae harum suscipit recusandae dolores et et consequatur architecto. Excepturi vel a ut similique repellat est quo omnis. Possimus quas a animi a est omnis facilis dolorem. Non sunt temporibus quis ut amet ut.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </About>
  );
};

// Styled Components


const About = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 5rem 8rem 3rem;
  color: white;

  .row{
    align-items: center;
    text-align: left;
  }

  h6{
    font-weight: 700;
    color: #6C63FF;
  }

  .img1{
    height: 25rem;
    width: 25rem;
    margin-left: 5rem;
  }

  /* Desktops and laptops ----------- */
  @media only screen 
  and (max-width : 160em) {
  /* Styles */
    width: 90%;
    margin: 0 auto;
  }


`;

const Header = styled.div`
  h1 {
    margin-bottom: 2rem;
    font-weight: 700;
  }
  font-size: large;
  p {
    color: #a2a2a2;
  }
`

export default AboutSection;
