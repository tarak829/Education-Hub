import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <StyledForm>
      <Header>
        <h1>Need Help? Sure we are Online!</h1>
        <p>
        Let us give you more details about the special offer website you want us. Please fill out the form below.
        </p>
        <p>We have million of website owners who happy to work with us!</p>
      </Header>

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
    </StyledForm>
  );
};

const StyledForm = styled.div`
  height: 90vh;
  margin: 3rem auto;
  width: 60%;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  h1 {
    margin-bottom: 2rem;
    font-weight: 700;
  }
  font-size: large;
  p {
    color: #a2a2a2;
  }
`;

export default ContactUs;
