/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './Search.css';
import './search-script';
import { withRouter, Link } from 'react-router-dom';

class DwellingItem extends Component {
  render() {
    // console.log(this.props.dwelling);
    let background_url = "";
    if(this.props.dwelling.pictures != undefined)
      background_url = this.props.dwelling.pictures[0];
    return (
      <div className="dwelling">
        <div className="pic" />
        <div className="text">
          <div className="title-descr">
            <div className="title">{this.props.dwelling.title}</div>
            <div className="descr">
              {this.props.dwelling.resident} étudiants - Studio - {this.props.dwelling.rooms} chambres
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
