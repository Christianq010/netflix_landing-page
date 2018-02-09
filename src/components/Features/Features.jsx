import React, {Component} from 'react';

import styled, { css } from 'styled-components';

import CancelIcon from './icons/cancel';
import WatchIcon from './icons/watch';
import PriceIcon from './icons/price';

import  './styles.module.scss';
import "./../../scss/global.scss";
import "./../../scss/flex.scss";


const Link = styled.a`
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    color: $feature-grey-font;
    height: 125px;
    line-height: 20px;
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;

    &:hover {
        color: white;
    }

`;

// Our H2 for Each Feature
const Heading = styled.h2`
    color: #777;
    margin: 10px 0 0;
    font-size: 1em;
    &:hover { 
        color: white;
    }

    ${props => props.selected && css`
    color: white;
    `}
`;

// Red Bottom Border on Selected Feature
const Selectedspan = styled.span`
    padding: 15px 0 0 0;
    display: block;
    border-bottom: 5px solid #e50914;
`;

class features extends Component {
    constructor () {
        super()
    this.state = {
        // true = hidden , by default cancelContent is loaded
        cancelContent: false,
        watchContent: true,
        priceContent: true
        }
    }
    toggleContent () {
        this.setState({
          cancelContent: false,
          watchContent: true,
          priceContent: true
        })
    }
    toggleWatch () {
        this.setState({
          watchContent: false,
          cancelContent: true,
          priceContent: true
        })
    }
    togglePrice () {
        this.setState({
          priceContent: false,
          watchContent: true,
          cancelContent: true
        })
    }

    render () {

        return (
            <div id="features">
                <div className="featureNav center columns size80">

                    <Link onClick={this.toggleContent.bind(this)}>
                        <CancelIcon />
                        <Heading >
                            No commitments
                            <br />
                            Cancel online at anytime
                        </Heading>
                        {!this.state.cancelContent && <Selectedspan />}
                    </Link>

                    <Link onClick={this.toggleWatch.bind(this)}>
                        <WatchIcon />
                        <Heading>
                            Watch anywhere
                        </Heading>
                        <br />
                        {!this.state.watchContent && <Selectedspan />}
                    </Link>
                    
                    <Link onClick={this.togglePrice.bind(this)}>
                        <PriceIcon />
                        <Heading>
                            Pick your price
                        </Heading>
                        <br />
                        {!this.state.priceContent && <Selectedspan />}
                    </Link>
                
                </div>
            </div>
        )
    }
}

export default features;