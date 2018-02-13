import React from 'react';

import styled, {css} from 'styled-components';

import TVimg from './img/asset_TV_UI.png'
import Mobileimg from './img/asset_mobile_tablet_UI_2.png'
import PCimg from './img/asset_website_UI.png'

const Wrapper = styled.section`
    width: 80%;
    margin: 0 auto;
    @media (max-width: 900px) {
        width: 100%;
    }
`;

const Columns = styled.div`
    display: flex;

    ${props => props.width90 && css`
        width: 90%;
    `}
    ${props => props.center && css`
        margin: 0 auto;
    `}
    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

const Column = styled.div`
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    
    ${props => props.center && css`
        text-align: center;
    `}

    ${props => props.narrow && css`
        flex: none;
    `}

    ${props => props.mb60 && css`
        margin-bottom: 60px;
    `}
    @media (max-width: 1200px) {
        text-align: center;
    }
`;

const IMG = styled.img`
    max-width: 75%;

    ${props => props.eighty && css`
        max-width: 80%;
    `}
`;

const H2 = styled.h2`
    font-size: 22px;
    color: white;
    padding-right: 1em;
    font-weight: 200;
    margin: 2em 0 20px;

    ${props => props.inline && css`
        display: inline-flex;
    `}
`;

const JoinButton3 = styled.button`
    font-size: 14px;
    letter-spacing: 1.9px;
    font-weight: 100;
    margin: 0.5em 0.5em 0.5em 1.7em;
    padding: 16px 1.5em;
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

    ${props => props.column && css`
        /* display: block; */
        flex-basis: 0;
        flex-grow: 1;
        flex-shrink: 1;
    `}

    ${props => props.narrow && css`
        flex: none;
    `}
`;

const H3 = styled.h3`
    color: white;
    text-align: center;
`;

const Des = styled.p`
    color: #999;
    text-align: center;
    font-size: 16px;
    direction: ltr;
    font-weight: 100;
`;




const watchContent = () => {
    return (
        <Wrapper>
            <Columns width90 center >
                <Column mb60>
                    <H2 inline>Watch TV shows and movies anytime, anywhere — personalized for 
                        <br />
                        you.
                    </H2>
                    <JoinButton3 column narrow>JOIN FREE FOR A MONTH</JoinButton3>
                </Column>
            </Columns>

            <Columns>
                <Column center>
                    <IMG src={TVimg} alt="Watch on your TV" />
                    <H3>Watch on your TV</H3>
                    <Des>Smart TVs, PlayStation, Xbox,
                        <br />
                        Chromecast, Apple TV, Blu-ray players and more.
                    </Des>
                </Column>

                <Column center>
                    <br />
                    <IMG src={Mobileimg} alt="Watch on your Mobile, Tablet Device" />
                    <H3>Watch instantly or download for
                        later
                    </H3>
                    <Des>Available on phone and tablet, wherever
                        you go.
                    </Des>
                </Column>

                <Column center>
                    < br/>
                    <IMG  src={PCimg} alt="Watch on your PC or MAC" />
                    <H3>Use any computer</H3>
                    <Des>Watch right on Netflix.com.</Des>
                </Column>

            </Columns>
        </Wrapper>
    )
}

export default watchContent;