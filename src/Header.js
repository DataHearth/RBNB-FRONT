/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
// import './Header.css';
// import './header-script';
import { withRouter, Link } from 'react-router-dom';
import logger from './lib/logger';

class Header extends Component {
  displayTopSearchBar() {
    if (this.props.withSearchBar == 'true') {
      return (
        <input id="city" className="custom-input-for-search" type="text" placeholder="Partout" />
      );
    }
  }

  render() {
    return (
      <header className="App-header">
        <div className="logo-header">
          {this.displayTopSearchBar()}
        </div>
        <div className="menu-items">
          <div className="collapse-menu">
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </div>
          <div className="items">
            <Link className="item" to="/host">Héberger</Link>
            <Link className="item" to="/signup">Inscription</Link>
            <Link className="item" to="/">Connexion</Link>
          </div>
        </div>
      </header>
    );
  }
}


export default withRouter(Header);
