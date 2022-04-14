import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <p>
        All Rights Reserved. ⓒ {year}{" "}
        <Link className='edu' to='/contactus'>
          EducationHub
        </Link>{" "}
        By <span>Abhishek Tarak</span>{" "}
      </p>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  background-color: #1f1f1f;

  p {
    color: grey;
    padding: 0.5rem 8rem;
    margin: .5rem 0;
  }

  .edu,span {
    text-decoration: none;
    color: #ffffff;
    transition: all 0.2s;

    :hover {
      cursor: pointer;
      transition: all 0.2s;
      color: var(--pale-blue);
    }
  }

  @media only screen and (max-width: 1024px) {
    p {
      padding: 0.5rem 4rem;
    }
  }

  @media only screen and (max-width: 768px) {
    p {
      padding: 0.5rem 2rem;
    }
  }

  @media only screen and (max-width: 576px) {
    p {
      padding: 0.5rem 1rem;
    }
  }
`;

export default Footer;
