import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Styledregister>
    <Fragment>
        <div className="form-wrapper">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary center" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
      </div>
    </Fragment>
    </Styledregister>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

//Styled Component

const Styledregister = styled.div`
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
`

export default connect(mapStateToProps, { setAlert, register })(Register);