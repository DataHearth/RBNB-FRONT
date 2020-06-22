import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Components/Home';
import Singup from './Components/Singup';
import Search from './Components/Search';
import Host from './Components/Host';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={Singup} exact path="/signup" />
      <Route component={Search} path="/search/:city" />
      <Route component={Host} path="/host" />
    </Switch>
  </BrowserRouter>
);
