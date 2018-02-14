import React, {Component} from 'react';

import styled from 'styled-components';

import CancelTab from './Cancel/Cancel';
import WatchTab from './Watch/Watch';
import PriceTab from './Price/Price';


const Features = styled.div`
    background-color: #141414;
    border-bottom: 2px solid #3d3d3d;
        .featureNav {
            padding: 35px 0 0 0;
            width: 80%;
            cursor: pointer;
            margin: 0 auto;
            display: flex;
        }
        a {
        text-decoration: none;
        text-align: center;
        font-weight: bold;
        color: #777;
        height: 125px;
        line-height: 20px;
        display: block;
        flex-basis: 0;
        flex-grow: 1;
        flex-shrink: 1;
        &:hover {
            color: white;
            svg {
                fill: white;
            }
        }
        h2 {
            margin: 10px 0 0;
            font-size: 1em;
        }
        svg {
            fill: #777;
        }
        .selected {
            color: white;
            fill: white;
        }
    }
    @media (max-width: 900px) {
        svg {
            width: 100%;
            height: 34px;
        }
    }
`;

const Wrapper = styled.div `
    margin-bottom: 120px; 
`;

// Red Bottom Border on Selected Feature
const Selectedspan = styled.span`
    padding: 15px 0 0 0;
    display: block;
    border-bottom: 5px solid #e50914;
    @media (max-width: 900px) {
        padding: 30px 0 0 0;
    }
`;

class features extends Component {
    constructor (props) {
        super(props)
    this.state = {
        // For Mobile Layout 
        width: window.innerWidth,
        // For Content
        // true = hidden
        cancelContent: false,
        watchContent: true,
        priceContent: true
        }
    }
    // method for Mobile view or Desktop
    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }
    // make sure to remove the listener
    // when the component is not mounted anymore
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }
    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };
    // Toggle Content for 3 Tabs 
    toggleContent (e) {
        e.preventDefault();
        this.setState({
            cancelContent: false,
            watchContent: true,
            priceContent: true
        })
    }
    toggleContent2 (e) {
        e.preventDefault();
        this.setState({
            cancelContent: true,
            watchContent: false,
            priceContent: true
        })
    }
    toggleContent3 (e) {
        e.preventDefault();
        this.setState({
            watchContent: true,
            cancelContent: true,
            priceContent: false
        })
    }

    render () {

        const {cancelContent} = this.state;
        const {watchContent} = this.state;
        const {priceContent} = this.state;

        const { width } = this.state;
        const isMobile = width <= 800;

        if (isMobile) {
        return (
            <Wrapper>
                <Features>  
                    <div className="featureNav">

                        <a onClick={(e) => this.toggleContent(e)}>
                            <svg className={!cancelContent ? 'selected' : ''} viewBox="0 0 40 48" width="100%" height="34px" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M29.55 18.7v-4.6c-5.2.4-4.6 2.8-4.6 2.8.3 1.7 2.35 2.35 2.35 2.35.6-.35 2.25-.55 2.25-.55zm3.7 1L33 21.3c-9.15-.3-8.7-3.75-8.7-3.75l.15 5.2c1.1 4.05 8.35 4.2 8.2 4.2l-.2 1.5 6.9-3.8-6.1-4.95zm-20.3 6.25c-.5-.5-1.3-.45-1.8.05-.45.5-.45 1.25.05 1.75s1.3.45 1.75-.05c.5-.5.5-1.25 0-1.75zm2.35-15.9L1.5 1.45V38.9l2.6 1.45 11.2 6.2v-36.5zM1.5 40.35C.4 39.85 0 39.7 0 38.9l1.5 1.45zM28.05 28.1h1.45v10.8c0 .8-.65 1.45-1.45 1.45H16.8v6.15c0 .849-.65 1.5-1.45 1.5L1.5 40.35 0 38.9V1.45C0 .65.65 0 1.5 0h26.55c.8 0 1.45.65 1.45 1.45v11.2h-1.45V1.45H4.1L15.6 8.6c.95.35 1.2.65 1.2 1.45V38.9h11.25V28.1z"></path>
                                </g>
                            </svg>
                            <h2 className={!cancelContent ? 'selected' : ''}>
                                Cancel
                            </h2>
                            <br />
                            {!this.state.cancelContent && <Selectedspan />}
                        </a>

                        <a onClick={(e) => this.toggleContent2(e)}>
                            <svg className={!watchContent ? 'selected' : ''} viewBox="0 0 91 48" width="100%" height="34px" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M70.979 45.508V48h-1.396v-2.542H49.895v-1.395h19.688c.798 0 1.396.647 1.396 1.445zM90.717 1.396V41.62c0 .748-.648 1.396-1.495 1.396H49.895V41.62h39.327V1.396H20.088v13.109h-1.397V1.395C18.691.599 19.29 0 20.088 0h69.134c.847 0 1.495.598 1.495 1.396zm-39.078 45.01v.697c0 .498-.798.897-1.744.897H13.608v-1.595h38.031zM5.035 44.71c0-.398.299-.747.698-.747.398 0 .747.349.747.747 0 .4-.349.697-.747.697a.68.68 0 0 1-.698-.697zm-.947-20.037v-6.728c0-.799.648-1.447 1.445-1.447h41.221c.748 0 1.396.648 1.396 1.447v26.018c0 .797-.648 1.395-1.396 1.395H13.608v-1.395h33.096V17.894H5.534v6.78H4.087zM1.446 46.604h8.772V27.913H1.446v18.691zm10.218-18.691v18.642c0 .797-.598 1.445-1.446 1.445H1.396C.648 48 0 47.352 0 46.555V27.913c0-.797.648-1.397 1.396-1.397h8.822c.848 0 1.446.6 1.446 1.397z"></path>
                                </g>
                            </svg>
                            <h2 className={!watchContent ? 'selected' : ''}>
                                Devices
                            </h2>
                            <br />
                            {!this.state.watchContent && <Selectedspan />}
                        </a>
                        
                        <a onClick={(e) => this.toggleContent3(e)}>
                            <svg className={!priceContent ? 'selected' : ''} viewBox="0 0 63 48" width="100%" height="34px" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M35.752 7.65c-1.1 0-2.1.45-2.85 1.2a3.97 3.97 0 0 0 .1 5.651c.75.7 1.7 1.1 2.75 1.1a4.01 4.01 0 0 0 2.851-1.2c.75-.8 1.149-1.8 1.1-2.85 0-1.05-.451-2.05-1.201-2.8a4.072 4.072 0 0 0-2.75-1.1m-.002 9.15c-1.35 0-2.65-.5-3.6-1.45-2.05-1.95-2.101-5.25-.15-7.3 1-1.05 2.3-1.6 3.75-1.6 1.35 0 2.6.5 3.6 1.45.95.95 1.55 2.25 1.55 3.65.05 1.35-.5 2.65-1.45 3.65-.95 1.05-2.3 1.6-3.7 1.6m-2.148 9.701a.727.727 0 0 1-1.05 0l-5.3-5.05c-.3-.3-.3-.75 0-1.05.25-.3.75-.3 1.05-.05l5.25 5.1c.3.3.3.75.05 1.05m-5.95-10.05l-4.55.098v-1.799c0-.4-.35-.7-.75-.7-.401 0-.701.3-.701.7l.05 2.55c0 .3.2.55.45.65.101.05.15.05.25.05l5.301-.1c.4 0 .7-.3.7-.7 0-.4-.35-.75-.75-.75m.1 16.15a.723.723 0 0 1-1.05 0l-5.301-5.099c-.3-.25-.3-.75 0-1.05.25-.25.75-.3 1 0l5.301 5.1c.3.25.3.75.05 1.05m-5.951-10.05l-4.55.1v-1.8c-.05-.4-.35-.75-.75-.75-.4.05-.75.35-.7.75v2.55c.05.3.2.55.5.65.05.05.15.05.25.05l5.25-.1c.4 0 .75-.35.75-.75s-.35-.7-.75-.7m.25 15.95c-.299.3-.75.3-1.049 0l-5.301-5.1c-.3-.25-.3-.75 0-1.05.3-.25.75-.3 1.05 0l5.251 5.1c.299.25.35.75.049 1.05m-5.95-10.05l-4.5.1-.05-1.8c0-.4-.35-.75-.75-.75-.401.05-.7.35-.7.75l.049 2.55c0 .3.201.55.451.65.1.05.2.05.3.05l5.25-.1c.4 0 .7-.35.7-.75s-.35-.7-.75-.7M43.903 4.9c0-.5-.122-.876-.35-1.1-.279-.274-.65-.3-.85-.3H42.402c-.799.05-1.85.05-3.049.05-5.551 0-13.151-.35-13.851-.35-.15 0-.3.05-.45.2L1.4 27.952c-.1.15-.2.3-.2.5s.1.35.25.5l18.301 17.65c.25.25.751.25 1.001-.05l23.651-24.55c.153-.197.198-.488.2-.7M20.252 48.002a1.937 1.937 0 0 1-1.351-.55L.6 29.801c-.35-.349-.6-.799-.6-1.299 0-.55.2-1 .55-1.4L24.202 2.548c.3-.299.699-.5 1.15-.549h.15c.1 0 8.1.35 13.851.35 1.149 0 2.149 0 3-.05h.35c.7 0 1.3.2 1.75.65.45.45.65 1.1.65 1.95.05.85.705 14.126.65 16.551-.011.502-.15 1-.5 1.4L21.602 47.403c-.35.35-.85.6-1.35.6"></path>
                                    <path d="M62.004 0c-2.95 6.4-12.651 6.4-12.651 6.4-7.05.1-10.951 2.25-12.751 3.601-.7-.351-1.55-.2-2.1.35-.7.7-.65 1.85.05 2.549.7.651 1.85.651 2.5-.049.55-.55.65-1.3.4-1.951 5.05-3.5 11.9-3.299 11.9-3.299C60.105 7.601 62.855.6 62.855.6l-.85-.6z"></path>
                                </g>
                            </svg>
                            <h2 className={!priceContent ? 'selected' : ''}>
                                Price
                            </h2>
                            <br />
                            {!this.state.priceContent && <Selectedspan />}
                        </a>
                    
                    </div>
                </Features>
                {!this.state.cancelContent && <CancelTab />}
                {!this.state.watchContent && <WatchTab />}
                {!this.state.priceContent && <PriceTab />}
            </Wrapper>
                )
        } else {
            return (
                <Wrapper>
                    <Features>  
                        <div className="featureNav">

                            <a onClick={(e) => this.toggleContent(e)}>
                                <svg className={!cancelContent ? 'selected' : ''} viewBox="0 0 40 48" width="60px" height="49px" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M29.55 18.7v-4.6c-5.2.4-4.6 2.8-4.6 2.8.3 1.7 2.35 2.35 2.35 2.35.6-.35 2.25-.55 2.25-.55zm3.7 1L33 21.3c-9.15-.3-8.7-3.75-8.7-3.75l.15 5.2c1.1 4.05 8.35 4.2 8.2 4.2l-.2 1.5 6.9-3.8-6.1-4.95zm-20.3 6.25c-.5-.5-1.3-.45-1.8.05-.45.5-.45 1.25.05 1.75s1.3.45 1.75-.05c.5-.5.5-1.25 0-1.75zm2.35-15.9L1.5 1.45V38.9l2.6 1.45 11.2 6.2v-36.5zM1.5 40.35C.4 39.85 0 39.7 0 38.9l1.5 1.45zM28.05 28.1h1.45v10.8c0 .8-.65 1.45-1.45 1.45H16.8v6.15c0 .849-.65 1.5-1.45 1.5L1.5 40.35 0 38.9V1.45C0 .65.65 0 1.5 0h26.55c.8 0 1.45.65 1.45 1.45v11.2h-1.45V1.45H4.1L15.6 8.6c.95.35 1.2.65 1.2 1.45V38.9h11.25V28.1z"></path>
                                    </g>
                                </svg>
                                <h2 className={!cancelContent ? 'selected' : ''}>
                                    No commitments
                                    <br />
                                    Cancel online at anytime
                                </h2>
                                {!this.state.cancelContent && <Selectedspan />}
                            </a>

                            <a onClick={(e) => this.toggleContent2(e)}>
                                <svg className={!watchContent ? 'selected' : ''} viewBox="0 0 145 48" width="140px" height="49px"  version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M138.211 44.009c-.398 0-.697.349-.697.748 0 .398.3.698.697.698.4 0 .749-.3.749-.698 0-.4-.35-.748-.749-.748zm-4.19 2.593h8.682V28.191h-8.682v18.411zm-.05-19.807h8.732c.798 0 1.396.598 1.396 1.396v18.362c0 .798-.598 1.447-1.396 1.447h-8.732c-.749 0-1.397-.649-1.397-1.447V28.191c0-.798.648-1.396 1.397-1.396zM74.095 44.009h48.7V13.173h-48.7v30.836zm0-32.233h48.75c.748 0 1.396.648 1.396 1.446v30.787c0 .798-.648 1.396-1.397 1.396H74.095c-.797 0-1.396-.598-1.396-1.396V13.222c0-.798.599-1.446 1.396-1.446zm56.583 34.677v.649c0 .499-.799.898-1.747.898H67.66c-.998 0-1.746-.4-1.746-.898v-.649h64.764zm-111.567.898v-2.445c0-.798.648-1.446 1.396-1.446h29.688c.799 0 1.397.648 1.397 1.446v2.445h-1.397v-2.494H20.557v2.494H19.11zM1.397 41.065h68.208V1.397H1.397v39.668zM1.397 0h68.208c.799 0 1.447.599 1.447 1.397v39.668c0 .748-.648 1.396-1.447 1.396H1.397A1.394 1.394 0 0 1 0 41.065V1.397C0 .599.599 0 1.397 0z"></path>
                                    </g>
                                </svg>
                                <h2 className={!watchContent ? 'selected' : ''}>
                                    Watch anywhere
                                </h2>
                                <br />
                                {!this.state.watchContent && <Selectedspan />}
                            </a>
                            
                            <a onClick={(e) => this.toggleContent3(e)}>
                                <svg className={!priceContent ? 'selected' : ''} viewBox="0 0 63 48" width="60px" height="49px" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M35.752 7.65c-1.1 0-2.1.45-2.85 1.2a3.97 3.97 0 0 0 .1 5.651c.75.7 1.7 1.1 2.75 1.1a4.01 4.01 0 0 0 2.851-1.2c.75-.8 1.149-1.8 1.1-2.85 0-1.05-.451-2.05-1.201-2.8a4.072 4.072 0 0 0-2.75-1.1m-.002 9.15c-1.35 0-2.65-.5-3.6-1.45-2.05-1.95-2.101-5.25-.15-7.3 1-1.05 2.3-1.6 3.75-1.6 1.35 0 2.6.5 3.6 1.45.95.95 1.55 2.25 1.55 3.65.05 1.35-.5 2.65-1.45 3.65-.95 1.05-2.3 1.6-3.7 1.6m-2.148 9.701a.727.727 0 0 1-1.05 0l-5.3-5.05c-.3-.3-.3-.75 0-1.05.25-.3.75-.3 1.05-.05l5.25 5.1c.3.3.3.75.05 1.05m-5.95-10.05l-4.55.098v-1.799c0-.4-.35-.7-.75-.7-.401 0-.701.3-.701.7l.05 2.55c0 .3.2.55.45.65.101.05.15.05.25.05l5.301-.1c.4 0 .7-.3.7-.7 0-.4-.35-.75-.75-.75m.1 16.15a.723.723 0 0 1-1.05 0l-5.301-5.099c-.3-.25-.3-.75 0-1.05.25-.25.75-.3 1 0l5.301 5.1c.3.25.3.75.05 1.05m-5.951-10.05l-4.55.1v-1.8c-.05-.4-.35-.75-.75-.75-.4.05-.75.35-.7.75v2.55c.05.3.2.55.5.65.05.05.15.05.25.05l5.25-.1c.4 0 .75-.35.75-.75s-.35-.7-.75-.7m.25 15.95c-.299.3-.75.3-1.049 0l-5.301-5.1c-.3-.25-.3-.75 0-1.05.3-.25.75-.3 1.05 0l5.251 5.1c.299.25.35.75.049 1.05m-5.95-10.05l-4.5.1-.05-1.8c0-.4-.35-.75-.75-.75-.401.05-.7.35-.7.75l.049 2.55c0 .3.201.55.451.65.1.05.2.05.3.05l5.25-.1c.4 0 .7-.35.7-.75s-.35-.7-.75-.7M43.903 4.9c0-.5-.122-.876-.35-1.1-.279-.274-.65-.3-.85-.3H42.402c-.799.05-1.85.05-3.049.05-5.551 0-13.151-.35-13.851-.35-.15 0-.3.05-.45.2L1.4 27.952c-.1.15-.2.3-.2.5s.1.35.25.5l18.301 17.65c.25.25.751.25 1.001-.05l23.651-24.55c.153-.197.198-.488.2-.7M20.252 48.002a1.937 1.937 0 0 1-1.351-.55L.6 29.801c-.35-.349-.6-.799-.6-1.299 0-.55.2-1 .55-1.4L24.202 2.548c.3-.299.699-.5 1.15-.549h.15c.1 0 8.1.35 13.851.35 1.149 0 2.149 0 3-.05h.35c.7 0 1.3.2 1.75.65.45.45.65 1.1.65 1.95.05.85.705 14.126.65 16.551-.011.502-.15 1-.5 1.4L21.602 47.403c-.35.35-.85.6-1.35.6"></path>
                                        <path d="M62.004 0c-2.95 6.4-12.651 6.4-12.651 6.4-7.05.1-10.951 2.25-12.751 3.601-.7-.351-1.55-.2-2.1.35-.7.7-.65 1.85.05 2.549.7.651 1.85.651 2.5-.049.55-.55.65-1.3.4-1.951 5.05-3.5 11.9-3.299 11.9-3.299C60.105 7.601 62.855.6 62.855.6l-.85-.6z"></path>
                                    </g>
                                </svg>
                                <h2 className={!priceContent ? 'selected' : ''}>
                                    Pick your price
                                </h2>
                                <br />
                                {!this.state.priceContent && <Selectedspan />}
                            </a>
                        
                        </div>
                    </Features>
                    {!this.state.cancelContent && <CancelTab />}
                    {!this.state.watchContent && <WatchTab />}
                    {!this.state.priceContent && <PriceTab />}
                </Wrapper>

            );
        }
    }
}

export default features;