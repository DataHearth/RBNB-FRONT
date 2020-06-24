/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../css/search.css';

// eslint-disable-next-line react/prefer-stateless-function
class DwellingItem extends Component {
  constructor(props) {
    super(props);
    const { dwelling } = props;
    this.dwelling = dwelling;

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { history } = this.props;
    history.push(`/dwelling/${this.dwelling.id}`);
  }

  displayServices() {
    let services = '';
    if (this.dwelling.services.indexOf('empty') >= 0) {
      this.dwelling.services.splice(this.dwelling.services.indexOf('empty'));
    }

    for (let index = 0; index < this.dwelling.services.length; index += 1) {
      const element = this.dwelling.services[index];
      if (this.dwelling.services.length === 1 || index === this.dwelling.services.length - 1) {
        services += `${element} `;
      } else {
        services += `${element} - `;
      }
    }
    return services;
  }

  render() {
    return (
      <div onClick={this.handleClick} className="dwelling">
        <div className="pic" style={{ backgroundImage: `url(${this.props.dwelling.pictures === undefined ? require('../images/no-photo.png') : this.props.dwelling.pictures[0]})` }} />
        <div className="text">
          <div className="title-descr">
            <div className="title">{this.props.dwelling.title}</div>
            <div className="descr">
              {this.props.dwelling.resident}
              {' '}
              étudiants -
              {' '}
              {this.dwelling.type}
              {' '}
              {this.dwelling.rooms}
              {' '}
              chambres
              <br />
              { this.displayServices() }
            </div>
          </div>
          <div className="mark">
            <i
              className="fa fa-star"
              style={{ color: '#d3b35c' }}
            />
            {' '}
            Aucune note
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(DwellingItem);
