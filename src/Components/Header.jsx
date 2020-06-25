/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import firebase from '../lib/firebase';

class Header extends Component {
  displayLoggedInMenu() {
    if (this.props.loggedIn) {
      return (
        <span>
          <Link className="item" to="/account/edit">Editer compte</Link>
          <button type="button" onClick={() => {firebase.auth().signOut(); this.props.history.push('/')}} className="item">Se deconnecter</button>
        </span>
      );
    }

    return (
      <span>
        <Link className="item" to="/signup">Inscription</Link>
        <Link className="item" to="/login">Connexion</Link>
      </span>
    );
  }

  displayHost() {
    if (this.props.loggedIn) {
      return (
        <span>
          <Link className="item" to="/host">Héberger</Link>
        </span>
      );
    }
  }

  render() {
    return (
      <header className="App-header">
        <div className="logo-header">
          <a id="logo-rbnb" href={process.env.NODE_ENV === 'production' ? 'https://rbnb-30af7.web.app/' : 'http://localhost:3000/'} />
        </div>
        <div className="menu-items">
          <div className="collapse-menu">
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </div>
          <div className="items">
            <Link className="item" to="/search/all">Rechercher</Link>
            {this.displayHost()}
            {this.displayLoggedInMenu()}
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
