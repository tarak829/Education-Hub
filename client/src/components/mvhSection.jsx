import React from "react";
import styled from "styled-components";
import { Card, CardDeck } from "react-bootstrap";

const mvhSection = () => {
  return (
    <Styledmvh>
      <CardDeck>
        <Card className='card'>
          <i class='flaticon-achievement'></i>
          <Card.Body>
            <Card.Title className='title'>Mission</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.Repellendus alias quis qui. .
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='card'>
          <i class='flaticon-eye'></i>
          <Card.Body>
            <Card.Title className='title'>Vision</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.Distinctio consectetur id ea hic enim natus.
              Voluptatum expedita porro voluptatem recusandae in.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='card'>
          <i class='flaticon-book'></i>
          <Card.Body>
            <Card.Title className='title'>History</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </Styledmvh>
  );
};

const Styledmvh = styled.div`
  min-height: 45vh;
  display: flex;
  width: 75%;
  margin: 2rem auto;

  .title {
    font-size: 1.7rem;
    font-weight: 700;
    transition: all .2s;
  }
  i {
    font-size: 4rem;
    width: 30%;
    text-align: center;
    color: #4babb1;
    display: inline-block;
    border-radius: 5px;
    margin: 1rem 0 0 1rem;
    border: 0.15rem solid #eea412;
  }
  .card {
    :hover {
      i {
        transition: all .2s;
        color: #eea412;
        border: 0.15rem solid #4babb1;
      }

      .title {
        transition: all .2s;
        color: #eea412;
      }
    }
  }

  @media only screen and  (max-width: 1024px) {
    width: 90%;
    margin: 0 auto;

  }

  @media only screen and  (max-width: 768px) {
    min-height: 35vh;
    width: 90%;
  }

  @media only screen and  (max-width: 576px) {
    width: 55%;
    text-align: center;
    i {
      font-size: 3rem;
      width: 20%;
      margin: 1rem auto;
    }
  }

  @media only screen and  (max-width: 425px) {
    width: 60%;
    text-align: center;
    i {
      font-size: 3rem;
      width: 20%;
      margin: 1rem auto;
    }
  }
  
`;

export default mvhSection;
