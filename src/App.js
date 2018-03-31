import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';


import TestStyling from './components/test-styling/TestStyling.jsx';
import TestImport from './components/test-import/TestImport.jsx';
import TestFragments from './components/test-fragments/TestFragments.jsx';

class App extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TestStyling />
        <TestImport />
        <TestFragments />
      </div>
    );
  }
}

export default App;
