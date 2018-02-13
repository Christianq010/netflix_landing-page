import React from 'react';

import styled from 'styled-components';

import CancelImage from './cancel.png'


const Wrapper = styled.section`
    width: 70%;
    margin: 0 auto;
`;

const Columns = styled.div`
    display: flex;
    @media (max-width: 900px) {
        flex-direction: column;
        text-align: center;
    }
`;

const Column = styled.div`
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    img {
        max-width: 100%;
    }
`;

const H2 = styled.h2`
    font-size: 32px;
    color: white;
    font-weight: 400;
    margin: 60px 0 20px;
    @media (max-width: 900px) {
        font-size: 22px;
        font-weight: 100;
    }

`;

const JoinButton2 = styled.button`
    font-size: 14px;
    letter-spacing: 1.9px;
    font-weight: 100;
    margin: 0.5em 0.5em 0.5em 0;
    padding: 18px 20px;
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

const cancelContent = () => {
    return (
        <Wrapper>
            <Columns>
                <Column>
                    <H2>If you decide Netflix isn't for you - no problem. No commitment. Cancel online anytime.</H2>
                    <JoinButton2>JOIN FREE FOR A MONTH</JoinButton2>
                </Column>
                <Column>
                    <img src={CancelImage} alt="cancel subscription anytime" />
                </Column>
            </Columns>

        </Wrapper>
    )
}

export default cancelContent;