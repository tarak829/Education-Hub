import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = ({ isAuthenticated, logout }) => {
  const guestLinks = (
    <Fragment>
      <Link className='nav-link' to='/'>
        Home
      </Link>
      <Link className='nav-link' to='/login'>
        Login
      </Link>
      <Link className='nav-link' to='/register'>
        Register
      </Link>
    </Fragment>
  );
  const authLinks = (
    <Fragment>
      <Link className='nav-link' to='/dashboard'>
        Home
      </Link>
      <Link className='nav-link' to='/aboutus'>
        About Us
      </Link>
      <Link className='nav-link' to='/courses'>
        Courses
      </Link>
      <Link className='nav-link' to='/contactus'>
        Contact Us
      </Link>
      <Link className='nav-link' to='/login' onClick={logout}>
        Log Out
      </Link>
    </Fragment>
  );
  return (
    <StyledNavbar sticky='top' bg='light' expand='lg'>
      <Container fluid>
        <Link className='navbar-brand' to="/">
          EDUCATION<span>HUB</span>
        </Link>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: "100px" }} navbarScroll>
            {isAuthenticated ? authLinks : guestLinks}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
  logout: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

//styled component

const StyledNavbar = styled(Navbar)`

  #navbarScroll {
    flex-grow: unset;
  }

  .navbar-brand {
    span {
      color: #1dc4e7;
    }
  }

  .nav-link {
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }

  @media only screen and (max-width: 992px) {
    .navbar-brand {
      font-size: 1.7rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .navbar-brand {
      font-size: 2rem;
    }
  }

  @media only screen and (max-width: 425px) {
    .navbar-brand {
      font-size: 2.3rem;
    }
  }

  @media only screen and (max-width: 375px) {
    .navbar-brand {
      font-size: 2.5rem;
    }
  }
`;

export default connect(mapStateToProps, { logout })(Header);
