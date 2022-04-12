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
        Design By : <span>Group7</span>{" "}
      </p>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  position: absolute;
  text-align: center;
  width: 100%;
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
`;

export default Footer;
