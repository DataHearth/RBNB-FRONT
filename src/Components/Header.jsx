/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import firebase from '../lib/firebase';

class Header extends Component {
  displayLoggedInMenu() {
    if (this.props.loggedIn) {
      return (
        <div className="items">
          <button type="button" onClick={() => firebase.auth().signOut()}>Se deconnecter</button>
          <Link className="item" to="/host">Héberger</Link>
        </div>
      );
    }

    return (
      <div className="items">
        <Link className="item" to="/host">Héberger</Link>
        <Link className="item" to="/signup">Inscription</Link>
        <Link className="item" to="/login">Connexion</Link>
      </div>
    );
  }

  render() {
    return (
      <header className="App-header">
        <div className="logo-header">
          <a id="logo-rbnb" href="http://localhost:3000/" />
        </div>
        <div className="menu-items">
          <div className="collapse-menu">
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </div>
          {this.displayLoggedInMenu()}
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
