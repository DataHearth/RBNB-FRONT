/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './Search.css';
import './search-script';
import { withRouter } from 'react-router-dom';

class Search extends Component {
  render() {
    const { city } = this.props.match.params;
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo-header">
            <input id="city" className="custom-input-for-search" type="text" placeholder="Partout" />
          </div>
          <div className="menu-items">
            <div className="collapse-menu">
              <div className="line" />
              <div className="line" />
              <div className="line" />
            </div>
            <div className="items">
              <a className="item">Héberger</a>
              <a className="item">Inscription</a>
              <a className="item">Connexion</a>
            </div>
          </div>
        </header>
        <div>
          <h2>{this.props.match.params.city}</h2>
        </div>
      </div>
    );
  }
}


export default withRouter(Search);
