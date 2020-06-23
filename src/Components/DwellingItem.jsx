/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../css/search.css';

// eslint-disable-next-line react/prefer-stateless-function
class DwellingItem extends Component {
  render() {
    return (
      <div className="dwelling">
        <div className="pic" />
        <div className="text">
          <div className="title-descr">
            <div className="title">{this.props.dwelling.title}</div>
            <div className="descr">
              {this.props.dwelling.resident}
              {' '}
              étudiants - Studio -
              {this.props.dwelling.rooms}
              {' '}
              chambres
              <br />
              {this.props.dwelling.services}
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
