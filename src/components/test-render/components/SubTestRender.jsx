/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SubTestRender extends Component {
  static statique = 0;

  static propTypes = {
    staticValue: PropTypes.number.isRequired,
    sharedCounter: PropTypes.number.isRequired,
    // The goal is to check if a child component is re-render if a prop has changed, even is the prop is not being used
    uselessSharedCounter: PropTypes.number.isRequired, // eslint-disable-line
  }

  constructor(props) {
    super(props);
    this.state = {
      subcounter: 0,
    };
  }

  render() {
    const { subcounter } = this.state;
    const { staticValue, sharedCounter } = this.props;
    console.log('-Render SubTestRender-');
    console.log('state: ', this.state);
    console.log('props: ', this.props);
    return (
      <div>
        TEST SUB RENDER <br />
        static from parent: {staticValue} <br />
        sharedCounter from parent: {sharedCounter} <br />
        subcounter: {subcounter} <br />
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => this.setState({ subcounter: this.state.subcounter + 1 }) /*eslint-disable-line*/ }
        >
          [Increase sub counter!]
        </div>
      </div>
    );
  }
}
