/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import firebase from './lib/firebase';
import logger from './lib/logger';

import Home from './Components/Home';
import Singup from './Components/Singup';
import Search from './Components/Search';
import Host from './Components/Host';
import Login from './Components/Login';
import Header from './Components/Header';

class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      unsubscribe: null,
    };
  }

  componentDidMount() {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      logger.debug('user state changed', { user });
      if (!user) {
        this.setState({ user: null });
        return;
      }
      const { uid, email } = user;

      this.setState({ user: { uid, email } });
    });

    this.setState({ unsubscribe });
  }

  componentWillUnmount() {
    const { unsubscribe } = this.state;
    if (unsubscribe !== null) {
      unsubscribe();
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Header user={this.state.user} />
          <Route component={Home} exact path="/" />
          <Route component={Singup} exact path="/signup" />
          <Route component={Login} exact path="/login" />
          <Route component={Search} path="/search/:city" />
          <Route component={Host} path="/host" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Root;
