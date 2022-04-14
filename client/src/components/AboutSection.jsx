import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Education from "../img/undraw_education_f8ru.svg";
import Certification from "../img/undraw_certification_aif8.svg";

const AboutSection = () => {
  return (
    <About>
      <div>
        <Header>
          <h1>About</h1>
          <p>Molestias doloribus iure. Laborum reiciendis nihil suscipit. Harum aut sunt et quis.</p>
          <p>Adipisci autem facere non quis ut dolorum voluptate nam.</p>
        </Header>

        <Container>
          <Row className='row1'>
            <Col className="text-container">
              <h6>{new Date().getFullYear()} BEST SMART EDUCATION SCHOOL</h6>
              <h2>Welcome to EducationHub</h2>
              <p>
                Quaerat debitis quos reprehenderit. Aperiam voluptatem temporibus atque saepe iusto saepe
                officia. Autem nesciunt aut.
              </p>
              <p>
                Doloribus cumque quae qui nam nihil quidem sed ipsum. Doloribus culpa nisi eum aut est modi
                minus quidem. Id aspernatur laboriosam. Nostrum aliquam provident quia qui odio sit molestiae
                vero sunt.
              </p>
            </Col>
            <Col>
              <img className='img1' src={Education} alt='logo' />
            </Col>
          </Row>
          {window.innerWidth > 426 ? (
            <Row className='row2'>
              <Col className='img-container'>
                <img className='img2' src={Certification} alt='certificate' />
              </Col>
              <Col className="text-container">
                <h2>Fully Certified Programs</h2>
                <p>
                  Molestiae qui accusamus accusantium soluta iusto ut fuga. Iusto consequatur optio quis ut.
                  Sed at numquam et modi atque sunt voluptatibus.
                </p>
                <p>
                  Et repudiandae harum suscipit recusandae dolores et et consequatur architecto. Excepturi vel
                  a ut similique repellat est quo omnis. Possimus quas a animi a est omnis facilis dolorem.
                  Non sunt temporibus quis ut amet ut.
                </p>
              </Col>
            </Row>
          ) : (
            <Row className='row2'>
              <Col className="text-container">
                <h2>Fully Certified Programs</h2>
                <p>
                  Molestiae qui accusamus accusantium soluta iusto ut fuga. Iusto consequatur optio quis ut.
                  Sed at numquam et modi atque sunt voluptatibus.
                </p>
                <p>
                  Et repudiandae harum suscipit recusandae dolores et et consequatur architecto. Excepturi vel
                  a ut similique repellat est quo omnis. Possimus quas a animi a est omnis facilis dolorem.
                  Non sunt temporibus quis ut amet ut.
                </p>
              </Col>
              <Col className='img-container'>
                <img className='img2' src={Certification} alt='certificate' />
              </Col>
            </Row>
          )}
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

  .row1,
  .row2 {
    align-items: center;
    .text-container {
      text-align: left;
    }
  }

  h6 {
    font-weight: 700;
    color: #6c63ff;
  }

  .img1 {
    height: 25rem;
    width: 25rem;
    margin-left: 5rem;
  }

  .img2 {
    height: 25rem;
    width: 25rem;
    margin-right: 5rem;
  }

  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: #6c63ff;
  }

  @media only screen and (max-width: 1024px) {
    /* Styles */
    padding: 5rem 4rem 3rem;

    .img1 {
      height: 20rem;
      width: 20rem;
      margin-left: 2rem;
    }

    .img2 {
      height: 20rem;
      width: 20rem;
      margin-right: 2rem;
    }
  }

  @media only screen and (max-width: 768px) {
    /* Styles */
    padding: 5rem 2rem 3rem;

    .img1,
    .img2 {
      height: 15rem;
      width: 15rem;
      margin: 0 auto;
    }

    h2 {
      font-size: 2.5rem;
    }
  }

  @media only screen and (max-width: 426px) {
    /* Styles */
    .row1,
    .row2 {
      .text-container {
        text-align: center;
      }
    }

    .img1,
    .img2 {
      height: 20rem;
      width: 20rem;
      margin: 0 auto;
    }

    h6 {
      font-size: 1.3rem;
    }
  }
`;

const Header = styled.div`
  margin-bottom: 3rem;
  font-size: large;
  h1 {
    margin-bottom: 2rem;
    font-weight: 700;
  }
  p {
    color: #a2a2a2;
  }
`;

export default AboutSection;
