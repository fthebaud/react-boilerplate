/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SubTestRender extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('component will receive props', nextProps);
  }

  render() {
    const { counter } = this.state;
    const { value } = this.props;
    console.log('2 - Render SubTestRender - ', new Date());
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
        <br />
        <b>SubTestRender props:</b> <br />
        value: {value} <br />
      </div>
    );
  }
}
