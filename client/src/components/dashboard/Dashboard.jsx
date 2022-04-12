import React from "react";
import HomePage from "../Homepage";
import AboutSection from "../AboutSection";
import ReactPlayer from "react-player";
import Testimonial from "../Testimonial";
import CardSection from "../CardSection";
import styled from "styled-components";
const Dashboard = () => {
  return (
    <StyledDashboard>
      <HomePage />
      <AboutSection />
      <ReactPlayer
        className='player'
        url='https://www.youtube.com/watch?v=ZPs3URGs0KQ'
      />
      <CardSection />
      <Testimonial />
    </StyledDashboard>
  );
};

const StyledDashboard = styled.div`
  .player {
    margin: 3rem auto;
  }
`;

export default Dashboard;
