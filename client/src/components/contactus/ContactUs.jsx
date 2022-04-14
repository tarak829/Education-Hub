import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <StyledForm>
      <Header>
        <h1>Need Help? Sure we are Online!</h1>
        <p>
          Let us give you more details about the special offer website you want us. Please fill out the form
          below.
        </p>
        <p>We have million of website owners who happy to work with us!</p>
      </Header>
      {window.innerWidth < 576 ? (
        <Form className='form1'>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='name@example.com' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as='textarea' rows={4} />
          </Form.Group>
          <Button variant='primary' size='lg' type='submit'>
            Submit
          </Button>
        </Form>
      ) : (
        <Form>
          <Form.Group>
            <Row>
              <Col>
                <Form.Control placeholder='First name' />
              </Col>
              <Col>
                <Form.Control placeholder='Last name' />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlInput1'>
            <Form.Control type='email' placeholder='name@example.com' />
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as='textarea' rows={8} />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      )}
    </StyledForm>
  );
};

const StyledForm = styled.div`
  margin: 3rem auto;
  width: 60%;

  @media (max-width: 576px) {
    width: 80%;
    form {
      font-size: 2rem;
      button {
        font-size: 1.5rem;
      }
    }
    .form1 input,
    .form1 textarea {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 375px) {
    width: 80%;
    form {
      font-size: 2rem;
      button {
        font-size: 2rem;
      }
    }
    .form1 input,
    .form1 textarea {
      font-size: 2rem;
    }
  }
`;

const Header = styled.div`
  text-align: center;
  margin: 3rem auto;
  h1 {
    margin-bottom: 2rem;
    font-weight: 700;
  }
  font-size: large;
  p {
    color: #a2a2a2;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;

export default ContactUs;
