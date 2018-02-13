import React from 'react';

import Nav from './../Nav/Nav';
import SectionPitch from './../Section/Pitch/Pitch'

import bgimg from './img/bg.jpg'
import styled from 'styled-components';

const Header = styled.header`
    background: linear-gradient(
                to right,
                rgba(0, 0, 0, 0.75), 
                rgba(0, 0, 0, 0.09)
                ),
                url(${bgimg});
                height: 100vh;
    @media (max-width: 1000px) {
      height: 90vh;
    }
`;

const header = () => {
    return (
      <Header>
        <Nav />
        <SectionPitch />
      </Header>
    )
}

export default header;