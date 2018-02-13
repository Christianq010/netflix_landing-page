import React from 'react';


import styled from 'styled-components';

const Section = styled.section`
    color: white;
    margin: 0 3%;
    position: absolute;
    top: 35%;
    font-size: 1.8vw;
    @media (max-width: 1000px) {
        top: 55%;
        font-size: 1.9vw;
    }
    @media (max-width: 800px) {
        top: 60%;
        font-size: 3.2vw;
        margin: 0 4em;
        text-align: center;
    }
`;

const Title = styled.h1`
    font-size: 3em;
    margin: 0 0 0.2em;
    font-weight: 700;
`;

const Subtitle = styled.p`
    margin: 0 0 0.5em;
    font-weight: 300;
`;

const MainJoinButton = styled.button`
    font-size: 14px;
    letter-spacing: 1.9px;
    font-weight: 100;
    margin: 0.5em 0.5em 0.5em 0;
    padding: 12px 2em;
    color: white;
    background-color: #e50914;
    cursor: pointer;
    text-decoration: none;
    vertical-align: middle;
    font-family: Arial, sans-serif;
    border-radius: 2px;
    user-select: none;
    text-align: center;
    border: 0;

    &:hover {
      background-color: #E53935;
    }
`;

const pitch = () => {
    return (
      <Section>
        <Title>See what's next.</Title>
        <Subtitle>WATCH ANYWHERE. CANCEL ANYTIME.</Subtitle>
          <MainJoinButton>JOIN FREE FOR A MONTH</MainJoinButton>
      </Section>
    )
}

export default pitch;