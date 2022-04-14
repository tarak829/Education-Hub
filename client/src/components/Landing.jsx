import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <StyledSection className='landing'>
      <div className='dark-overlay'>
        <Header className='landing-inner'>
          <h1 className='x-large'>EducationHub</h1>
          <p className='lead'>A place to Learn.</p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </Header>
      </div>
    </StyledSection>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

//Styled components

const StyledSection = styled.section`
  min-height: 50vh;
`;

const Header = styled.h1`
  h1 {
    color: var(--light-color);
  }
  p {
    color: var(--light-color);
  }

  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 4rem;
    }
    p {
      font-size: 2rem;
    }
    .btn {
      font-size: 1.2rem;
    }
  }

  @media only screen and (max-width: 425px) {
    h1 {
      font-size: 4.5rem;
    }
    p {
      font-size: 2.5rem;
    }
    .btn {
      margin-top: .5rem;
      font-size: 1.5rem;
    }
  }

  @media only screen and (max-width: 375px) {
    h1 {
      font-size: 5.5rem;
    }
    p {
      font-size: 3rem;
    }
    .btn {
      font-size: 2rem;
    }
  }
`;

export default connect(mapStateToProps)(Landing);
