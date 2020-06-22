import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../css/search.css';

class DwellingDetail extends Component {
  constructor(props) {
    super(props);
    const { dwelling } = props;
    this.dwelling = dwelling;
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

export default withRouter(DwellingDetail);
