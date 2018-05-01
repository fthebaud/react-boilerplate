import React from 'react';

// Create a context (there's no real need for a context here, I'm just testing the context feature)
export default React.createContext();

// A context is an object with a Provider and a Consumer
// const { Provider, Consumer } = Context;

// The provider is given a value prop. This value will be passed to all Consumers that are children of this provider.
// The provider provides the values to the context
/*
<Provider value={some value}>
*/

// The consumer is a component that subscribe to the context changes
// The consumer renders something based on the context value
// The consumer requires a function as a child. This function receives the current context value and returns a react node
/*
<Consumer>
  {value => React Node}
</Consumer>
*/
