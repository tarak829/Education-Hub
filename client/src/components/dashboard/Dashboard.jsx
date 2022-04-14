import React from "react";
import HomePage from "../Homepage";
import AboutSection from "../AboutSection";
import ReactPlayer from "react-player";
import Testimonial from "../Testimonial";
import CardSection from "../CardSection";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Dashboard = () => {
  //use state to render the video
  const [video, setVideo] = useState({
    width: "640px",
    height: "360px",
  });

  //use effect to render the video at different screen sizes
  useEffect(() => {
    if (window.innerWidth < 576) {
      setVideo({
        width: "320px",
        height: "180px",
      });
    } else if (window.innerWidth < 1024) {
      setVideo({
        width: "426px",
        height: "240px",
      });
    } else {
      setVideo({
        width: "640px",
        height: "360px",
      });
    }
  }, [window.innerWidth]);

  return (
    <StyledDashboard>
      <HomePage />
      <AboutSection />
      <ReactPlayer
        className='player'
        width={video.width}
        height={video.height}
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
