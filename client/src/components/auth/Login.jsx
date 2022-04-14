import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import styled from "styled-components";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Styledlogin>
      <Fragment>
        <div className='form-wrapper'>
          <h1 className='large text-primary'>Sign In</h1>
          <p className='lead'>
            <i className='fas fa-user' /> Sign Into Your Account
          </p>
          <form className='form' onSubmit={onSubmit}>
            <div className='form-group'>
              <input
                type='email'
                placeholder='Email Address'
                name='email'
                value={email}
                onChange={onChange}
                required
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                placeholder='Password'
                name='password'
                value={password}
                onChange={onChange}
                minLength='6'
              />
            </div>
            <input type='submit' className='btn btn-primary center' value='Login' />
          </form>
          <p className='my-1'>
            Don't have an account? <Link to='/register'>Sign Up</Link>
          </p>
        </div>
      </Fragment>
    </Styledlogin>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

//Styled component

const Styledlogin = styled.div`
  min-height: 83vh;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
    .form-wrapper {
      padding: 2rem;
      width: 50%;
      .lead {
        font-size: 1.5rem;
        .fa-user {
          font-size: 2.5rem;
        }
      }
      .text-primary {
        font-size: 4.5rem;
      }
    }
  }

  @media only screen and (max-width: 425px) {
    font-size: 2rem;
    .form-wrapper {
      padding: 2rem;
      width: 85%;
      .lead {
        font-size: 1.5rem;
        .fa-user {
          font-size: 2.5rem;
        }
      }
      .text-primary {
        font-size: 4.5rem;
      }
    }
  }
`;

export default connect(mapStateToProps, { login })(Login);
