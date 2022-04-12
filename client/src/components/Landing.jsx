import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from 'styled-components'

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="landing">
      <div className="dark-overlay">
        <Header className="landing-inner">
          <h1 className="x-large">EducationHub</h1>
          <p className="lead">A place to Learn.</p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </Header>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

//Styled components

const Header = styled.h1`
  h1{
    color: var(--light-color);
  }
  p{
    color: var(--light-color);
  }
`

export default connect(mapStateToProps)(Landing);
