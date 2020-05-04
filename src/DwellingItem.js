/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './Search.css';
import './search-script';
import { withRouter, Link } from 'react-router-dom';

class DwellingItem extends Component {
  render() {
    return (
      <div className="dwelling">
        <div className="pic" />
        <div className="text">
          <div className="title-descr">
            <div className="title">Studio idéal pour étudiant</div>
            <div className="descr">
              2 étudiants - Studio - 1 lit - 1 canapé lit
              <br />
              1 salle de bain - Wifi - Chauffage
            </div>
          </div>
          <div className="mark">
            4.2
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(DwellingItem);
