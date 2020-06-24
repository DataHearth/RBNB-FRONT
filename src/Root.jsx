/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import firebase from './lib/firebase';

import Home from './Components/Home';
import Singup from './Components/Singup';
import Search from './Components/Search';
import Host from './Components/Host';
import DwellingDetail from './Components/DwellingDetail';
import Login from './Components/Login';
import Header from './Components/Header';
import EditAccount from './Components/EditAccount';

class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      unsubscribe: null,
    };
  }

  componentDidMount() {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({ loggedIn: false });
        return;
      }

      this.setState({ loggedIn: true });
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
        <Header loggedIn={this.state.loggedIn} />
        <Switch>
          <Route component={EditAccount} path="/account/edit" />
          <Route component={Home} exact path="/" />
          <Route component={Singup} exact path="/signup" />
          <Route component={Login} exact path="/login" />
          <Route component={Search} path="/search/:city" />
          <Route component={Host} path="/host" />
          <Route component={DwellingDetail} path="/dwelling/:id" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Root;
