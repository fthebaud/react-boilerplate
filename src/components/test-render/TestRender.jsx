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
    this.value = 0;
  }

  render() {
    console.log('1 - Render TestRender - ', new Date());
    console.log('state: ', this.state);
    console.log('props: ', this.props);
    return (
      <div className={style.container}>
        <div>
          <b>testRender state:</b> <br />
          primitive: {this.state.primitive} <br />
          obj.message: {this.state.obj.message} <br />
        </div>
        <br />
        <div>
          <b>Modify testRender state:</b>
          <div className={style.buttons}>
            <button onClick={() => this.setState({ primitive: this.state.primitive + 1 })}>
              Change Primitive
            </button>
            <button onClick={() => this.setState({ uselessPrimitive: this.state.uselessPrimitive + 1 })}>
              Change Uselesss Primitive
            </button>
            <button onClick={() => this.setState({ obj: { message: 'zzzzz' } })}>
              Change Object
            </button>
            <button onClick={() => this.setState({ uselessObj: { message: `${this.state.uselessObj.message}z` } })}>
              Change Useless Object
            </button>
            <button onClick={() => {
              this.state.obj.message = 'trololo';
            }}
            >
              Mutate Object
            </button>
          </div>
        </div>
        <div>
          <b>Modify SubTestRender props:</b>
          <div className={style.buttons}>
            <button onClick={() => { this.value = this.value + 1; }} >
              Change props for children comp
            </button>
          </div>
        </div>
        <SubTestRender value={this.value} />
      </div>
    );
  }
}

/*
A React component get rendered:
- When the state changes (even if the part of the state the changes is not used)
- When the parent changes
*/

/*
A React component DOES NOT get rendered When the props change (unless the state is updated from the props)
=> Since props usually come from a parent state, the whole tree gets re-rendered anyway because of parent
=> in the case of redux, the connect function creates a wrapper component which subscribes to the store
   and gets force-re-rendered when there is a change in the store. see: https://gist.github.com/gaearon/1d19088790e70ac32ea636c025ba424e
*/
