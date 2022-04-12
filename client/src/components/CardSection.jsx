import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import cardInfo from "./Cardinfo";

const CardSection = () => {

  const renderCard = (card, index) => {
    return (
      <CardBase>
        <Link className='link' to='/courses'>
          <Card key={index}>
            <div>
              <i className={card.icon}></i>
            </div>
            <h5>{card.title}</h5>
            <h6>{card.text}</h6>
          </Card>
        </Link>
      </CardBase>
    );
  };

  return (
    <StyledCards>
      <Header>
        <h1>Courses</h1>
        <h3>Browse Our Online Courses</h3>
      </Header>
      <CardArea>{cardInfo.map(renderCard)}</CardArea>
    </StyledCards>
  );
};

//Styled Components

const CardBase = styled.div`
  margin: 0.3rem;
  width: 13rem;

  .link {
    text-decoration: none;
  }
`;

const CardArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  height: calc(100vh / 2.7);
  padding: 2rem;
  border-radius: 4px;
  background-color: #ffffff;
  i {
    font-size: 5rem;
    color: var(--pale-blue);
  }
  h6 {
    padding: 0.5rem;
    color: var(--pale-blue);
    background-color: #f8f8f8;
    border-radius: 4px;
  }

  :hover {
    cursor: pointer;
    transition: all 0.5s;
    background-color: var(--pale-blue);
    transform: scale(1.08);
    box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.5);
    i {
      color: #ffffff;
    }

    h5 {
      color: #ffffff;
    }
  }

  @media only screen and (max-width: 62em) {
    /* Styles */
    height: calc(100vh / 3);
  }

  @media only screen and (max-width: 52.5em) {
    /* Styles */
    height: calc(100vh / 4);
  }
`;

const StyledCards = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3rem 6rem;
  color: white;
  flex-wrap: wrap;
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
    color: #1dc4e7;
  }
  p {
    color: #a2a2a2;
  }
`;

export default CardSection;
