/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { Component } from 'react';

import SubTestRender from './components/SubTestRender.jsx';
import style from './testRender.module.css';


export default class TestRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      primitive: 0,
      uselessPrimitive: 0, // never displayed
      obj: { message: 'a' },
      uselessObj: { message: 'b' }, // never displayed
    };
  }

  render() {
    console.log('Render TestRender - ', new Date());
    console.log('state: ', this.state);
    console.log('props: ', this.props);
    return (
      <div className={style.container}>
        <div>
          <b>testRender state:</b> <br />
          primitive: {this.state.primitive} <br />
          obj.message: {this.state.obj.message} <br />
        </div>
        <div className={style.buttons}>
          <button onClick={() => this.setState({ primitive: this.state.primitive + 1 })}>
            Change Primitive
          </button>
          <button onClick={() => this.setState({ uselessPrimitive: this.state.uselessPrimitive + 1 })}>
            Change Uselesss Primitive
          </button>
          <button onClick={() => this.setState({ obj: { message: `${this.state.obj.message}z` } })}>
            Change Object
          </button>
          <button onClick={() => this.setState({ uselessObj: { message: `${this.state.uselessObj.message}z` } })}>
            Change Useless Object
          </button>
          <button onClick={() => {
            const sameRef = this.state.obj;
            sameRef.message = 'trololo';
            this.setState({ obj: sameRef });
          }}
          >
            Mutate Object
          </button>
        </div>
      </div>
    );
  }
}
