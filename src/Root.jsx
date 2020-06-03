import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home2';

// eslint-disable-next-line react/prefer-stateless-function
class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route component={Home} path="/" />
      </BrowserRouter>
    );
  }
}

export default Root;
