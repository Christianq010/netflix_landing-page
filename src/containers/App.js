import React, { Component } from 'react';
import './App.scss';

import Header from './../components/Header/Header';
import Features from './../components/Features/Features';
import Footer from './../components/Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Features />
        <Footer />
      </div>
    );
  }
}

export default App;
