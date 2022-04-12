import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import person1 from "../../img/avatar-01.jpg";
import CardSection from "../CardSection";
import courseInfo from "../Courseinfo";

const CourseSection = () => {
  const renderCourse = (card, index) => {
    return (
      <Card key={index}>
        <div className='detail'>
          <div>
            <i className={card.icon}></i>
          </div>
          <div className='ma-left'>
            <h3>{card.title}</h3>
            <span className={card.fullrating}></span>
            <span className={card.fullrating}></span>
            <span className={card.fullrating}></span>
            <span className={card.fullrating}></span>
            <span className={card.halfrating}></span>
            <span>{card.totalrating}</span>
            <main>
              <img src={person1} alt='person'></img>
              <h6>{card.name}</h6>
            </main>
            <h6 className='duration'>{card.duration}</h6>
          </div>
        </div>
        <div className='price'>
          <h6>
            <s>{card.originalprice}</s>
            {card.discountprice}
          </h6>
        </div>
        <Button variant='outline-info'>Enroll Now!</Button>
      </Card>
    );
  };

  return (
    <CourseArea>
      <Header>
        <h1>Explore Courses</h1>
        <p>
          Molestias doloribus iure. Laborum reiciendis nihil suscipit. Harum aut
          sunt et quis.
        </p>
        <p>Adipisci autem facere non quis ut dolorum voluptate nam.</p>
      </Header>
      <CardArea>{courseInfo.map(renderCourse)}</CardArea>
      <div className='next'>
        <p>Prev</p>
        <p className='active'>1</p>
        <p>2</p>
        <p>3</p>
        <p>...</p>
        <p>75</p>
        <p>Next</p>
      </div>
      <CardSection />
    </CourseArea>
  );
};

const Header = styled.div`
  text-align: center;
  margin: 3rem;
  h1 {
    margin-bottom: 2rem;
    font-weight: 700;
  }
  font-size: large;
  p {
    color: #a2a2a2;
  }
`;

const Card = styled.div`
  width: 28%;
  margin: 0.7rem;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 5px;

  .detail {
    display: flex;
    margin-bottom: 1.5rem;
    .ma-left {
      margin-left: 1rem;

      span {
        color: var(--pale-blue);
      }

      .duration {
        font-size: 0.8rem;
        color: var(--pale-blue);
      }
    }
    i {
      font-size: 4rem;
      background-color: var(--pale-blue);
      color: #ffffff;
      border-radius: 50rem;
      padding: 0 0.7rem;
    }
  }

  main {
    display: flex;
    align-items: center;
    margin: 0.5rem 0;

    img {
      height: 2rem;
      width: 2rem;
      border-radius: 50%50%;
    }

    h6 {
      margin: 0.1rem 0 0 0.5rem;
    }
  }

  .price {
    text-align: center;
    padding-top: 0.5rem;
    background-color: #f8f8f8;
    margin-bottom: 1rem;
    border-radius: 5px;

    h6,
    s {
      color: var(--pale-blue);
    }
  }
`;

const CardArea = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;
const CourseArea = styled.div`
  min-height: 95vh;

  .next {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem;
    p {
      margin: 0.5rem 0.2rem;
      padding: 0.5rem 0.9rem;
      border: 1px solid lightgray;
      transition: all 0.2s;
      border-radius: 5px;

      :hover {
        cursor: pointer;
        transition: all 0.2s;
        color: #ffffff;
        background-color: var(--pale-blue);
      }
    }

    .active {
      color: #ffffff;
      background-color: var(--pale-blue);
    }
  }
`;

export default CourseSection;
