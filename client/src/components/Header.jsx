import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styled from 'styled-components'
import { connect } from "react-redux";
import { logout } from "../actions/auth";
const Header = ({ isAuthenticated, logout }) => {
  const guestLinks = (
    <Fragment>
      <li className='nav-link'>
        <Link to='/'>Home</Link>
      </li>
      <li className='nav-link'>
        <Link to='/login'>Login</Link>
      </li>
      <li className='nav-link'>
        <Link to='/register'>Register</Link>
      </li>
    </Fragment>
  );
  const authLinks = (
    <Navlist>
      <li className='nav-link'>
        <Link to='/dashboard'>Home</Link>
      </li>
      <li className='nav-link'>
        <Link to='/aboutus'>About Us</Link>
      </li>
      <li className='nav-link'>
        <Link to='/courses'>Courses</Link>
      </li>
      <li className='nav-link'>
        <Link to='/contactus'>Contact Us</Link>
      </li>
      <li className='nav-link'>
        <Link to='/login' onClick={logout}>
          Log Out
        </Link>
      </li>
    </Navlist>
  );
  return (
    <StyledNav>
      <NavLink style={{ textDecoration: "none" }} to='/'>
        <Styledh1>Education<span>Hub</span></Styledh1>{" "}
      </NavLink>
      <Navlist>
        {isAuthenticated ? authLinks : guestLinks}
      </Navlist>
    </StyledNav>
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

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  position: sticky;
  z-index: 100;
  top:0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  opacity: 85%;
  background-color: var(--dark-color);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
`
const Styledh1 = styled.h1`
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: 800;
  margin-left: 1rem;

  span{
    color: #1DC4E7;
  }
`
const Navlist = styled.div`
 display: flex;
`

export default connect(mapStateToProps, { logout })(Header);
