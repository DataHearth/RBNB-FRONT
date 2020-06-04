import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class Header extends Component {
  displayTopSearchBar() {
    // eslint-disable-next-line react/prop-types
    if (this.props.withSearchBar !== 'true') { // eslint-disable-line react/destructuring-assignment
      return null;
    }
    return (
      <input id="city" className="custom-input-for-search" type="text" placeholder="Partout" />
    );
  }

  render() {
    return (
      <header className="App-header">
        <div className="logo-header">
          <a href="http://localhost:3000">
            <img id="logo-rbnb" src="http://localhost:3000/static/media/logo-RBNB.0aa157cc.png" />
          </a>
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
