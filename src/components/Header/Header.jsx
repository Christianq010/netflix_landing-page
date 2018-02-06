import React from 'react';

import Nav from './../Nav/Nav';
import SectionPitch from './../Section/Pitch/Pitch'
import './styles.module.scss';

const header = () => {
    return (
      <header className="App-header">
        <Nav />
        <SectionPitch />
      </header>
    )
}

export default header;