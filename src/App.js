import React, { Component } from 'react';

import AppContext from 'AppContext.js';
import { componentsList, COMPONENT_TYPE } from 'componentsRegistry.js';

import style from './app.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedComponent: COMPONENT_TYPE.TEST_RENDER,
    };
  }

  renderComponent = (selectedComponent) => {
    const Module = componentsList[selectedComponent];
    if (Module) {
      return <Module />;
    }
    return null;
  }

  render() {
    // Context here is useless, state was sufficient. I'm using it to test the feature.
    const { Provider, Consumer } = AppContext;
    return (
      <React.StrictMode>
        <div className={style.container}>
          <div className={style.header}>
            <button onClick={() => this.setState({ selectedComponent: COMPONENT_TYPE.TEST_FRAGMENTS })}>
              {COMPONENT_TYPE.TEST_FRAGMENTS}
            </button>
            <button onClick={() => this.setState({ selectedComponent: COMPONENT_TYPE.TEST_IMPORT })}>
              {COMPONENT_TYPE.TEST_IMPORT}
            </button>
            <button onClick={() => this.setState({ selectedComponent: COMPONENT_TYPE.TEST_RENDER })}>
              {COMPONENT_TYPE.TEST_RENDER}
            </button>
            <button onClick={() => this.setState({ selectedComponent: COMPONENT_TYPE.TEST_STYLING })}>
              {COMPONENT_TYPE.TEST_STYLING}
            </button>
          </div>
          <Provider value={this.state.selectedComponent}>
            <div className={style.content}>
              <Consumer>
                {
                  (value) => this.renderComponent(value)
                }
              </Consumer>
            </div>
          </Provider>
        </div>
      </React.StrictMode>
    );
  }
}

export default App;
