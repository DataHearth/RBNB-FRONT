import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import firebase from '../lib/firebase';

class Header extends Component {
  constructor(props) {
    super(props);

    this.withSearchBar = props.withSearchBar;
    this.user = props.user;
  }

  displayTopSearchBar() {
    if (this.withSearchBar === 'true') {
      return (
        <input id="city" className="custom-input-for-search" type="text" placeholder="Partout" />
      );
    }

    return null;
  }

  displayUser() {
    if (this.props.user !== null) {
      return (
        <div className="items">
          <button onClick={() => firebase.auth().signOut()}>Se deconnecter</button>
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
          {this.displayTopSearchBar()}
        </div>
        <div className="menu-items">
          <div className="collapse-menu">
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </div>
          {this.displayUser()}
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
