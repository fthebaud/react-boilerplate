/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { Component } from 'react';

import SubTestRender from './components/SubTestRender.jsx';


export default class TestRender extends Component {
  static statique = 313;

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      sharedCounter: 0,
      uselessSharedCounter: 0,
    };
  }

  render() {
    const { counter, sharedCounter, uselessSharedCounter } = this.state;
    console.log('Render TestRender');
    console.log('state: ', this.state);
    return (
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px', marginBottom: '50px' }}>
        <div>
          TEST RENDER <br />
          counter: {counter} <br />
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => this.setState({ counter: this.state.counter + 1 })}
          >
            [Increase counter!]
          </div>
          sharedCounter: {sharedCounter} <br />
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => this.setState({ sharedCounter: this.state.sharedCounter + 1 })}
          >
          [Increase sharedCounter!]
          </div>
          uselessSharedCounter: {uselessSharedCounter} <br />
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => this.setState({ sharedCounter: this.state.sharedCounter + 1 })}
          >
          [Increase sharedCounter!]
          </div>
        </div>
        <SubTestRender
          staticValue={TestRender.statique}
          sharedCounter={sharedCounter}
          uselessSharedCounter={uselessSharedCounter}
        />
      </div>
    );
  }
}
