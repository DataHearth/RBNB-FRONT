import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';

// eslint-disable-next-line react/prefer-stateless-function
class Root extends Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <BrowserRouter>
        <Route component={Home} path="/" />
      </BrowserRouter>
    );
  }
}

export default Root;
