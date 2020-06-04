/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './css/search.css';
import './js/searchScript';
import { withRouter } from 'react-router-dom';

class DwellingItem extends Component {
  constructor(props) {
    super(props);
    this.dwelling = this.props.dwelling;
    // ! Pour toi c'est le remplacement de backgroundUrl
    // const [pic] = dwelling.pictures;
  }


  render() {
    return (
      <div className="dwelling">
        <div className="pic" />
        <div className="text">
          <div className="title-descr">
            <div className="title">{this.dwelling.title}</div>
            <div className="descr">
              {this.dwelling.resident}
              {' '}
              étudiants - Studio -
              {this.dwelling.rooms}
              {' '}
              chambres
              <br />
              {this.dwelling.services}
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
