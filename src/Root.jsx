// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Singup from './Singup';
import Search from './Search';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={Singup} exact path="/signup" />
      <Route component={Search} path="/search/:city" />
    </Switch>
  </BrowserRouter>
);