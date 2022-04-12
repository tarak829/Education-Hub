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
              longer.Repellendus alias quis qui. Enim et et et non voluptas et
              eaque in quia. Distinctio consectetur id ea hic enim natus.
              Voluptatum expedita porro voluptatem recusandae.
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
              Voluptatum expedita porro voluptatem recusandae in atque optio
              eveniet. Voluptatibus non similique aut vel et fugiat facilis aut.
              Facilis illo sunt enim.
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
              than the first to show that equal height action.Distinctio
              consectetur id ea hic enim natus. Voluptatum expedita porro
              voluptatem recusandae in atque optio eveniet.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </Styledmvh>
  );
};

const Styledmvh = styled.div`
  min-height: 55vh;
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
`;

export default mvhSection;
