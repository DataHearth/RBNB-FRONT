import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/prop-types
    const { withSearchBar } = props;

    this.withSearchBar = withSearchBar;
  }

  displayTopSearchBar() {
    if (this.withSearchBar === 'true') {
      return (
        <input id="city" className="custom-input-for-search" type="text" placeholder="Partout" />
      );
    }

    return null;
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
