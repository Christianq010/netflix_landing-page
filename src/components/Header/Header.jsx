import React from 'react';

// import styled from 'styled-components';
import Nav from './../Nav/Nav';
import classes from './styles.module.scss';

const header = () => {
    return (
      <header className="App-header">
        <Nav />
        <h1 className={classes.default}>See whats next</h1>
        <p>Some random content</p>
      </header>
    )
}

export default header;