import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/search.css';
import '../js/searchScript';

class DwellingItem extends Component {
  constructor(props) {
    super(props);
    const { dwelling } = props;

    this.dwelling = dwelling;
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

DwellingItem.propTypes = {
  dwelling: PropTypes.shape({
    resident: PropTypes.number.isRequired,
    rooms: PropTypes.number.isRequired,
    services: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(DwellingItem);
