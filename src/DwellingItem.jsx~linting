/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './Search.css';
import './js/searchScript';
import { withRouter } from 'react-router-dom';

class DwellingItem extends Component {
  render() {
    const { dwelling } = this.props;
    // ! Pour toi c'est le remplacement de backgroundUrl
    // const [pic] = dwelling.pictures;
    return (
      <div className="dwelling">
        <div className="pic" />
        <div className="text">
          <div className="title-descr">
            <div className="title">{dwelling.title}</div>
            <div className="descr">
              {dwelling.resident}
              {' '}
              étudiants - Studio -
              {dwelling.rooms}
              {' '}
              chambres
              <br />
              {dwelling.services}
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
