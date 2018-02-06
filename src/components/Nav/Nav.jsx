import React from 'react';

import styled, { css } from styled-components

import netflixlogo from './img/logo.svg';
import './styles.module.css';

const Button = styled.button`
  color: white;
  background-color: #e50914;
  line-height: normal;
  margin: 18px 3% 0 0;
  padding: 7px 17px;
  font-weight: 400;
  border-radius: 3px;
  font-size: 16px;
  text-decoration: one;
  
  ${props => props.right && css`
    float: right;
  `}
`;

const nav = () => {
    return (
      <nav>
        <a href={"www.google.lk"} className="logo">
            <img src={netflixlogo} alt="Netflix Logo" />
        </a>
        <Button right>Sign In</Button>
      </nav>
    )
}

export default nav;