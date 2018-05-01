/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { Component } from 'react';

export default class SubTestRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    const { counter } = this.state;
    console.log('Render SubTestRender - ', new Date());
    console.log('state: ', this.state);
    console.log('props: ', this.props);
    return (
      <div>
        <b>SubTestRender state:</b> <br />
        counter: {counter} <br />
        <button
          style={{ cursor: 'pointer' }}
          onClick={() => this.setState({ counter: this.state.counter + 1 }) /*eslint-disable-line*/ }
        >
          Increase sub counter
        </button>
      </div>
    );
  }
}
