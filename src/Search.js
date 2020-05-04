/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './Search.css';
import './search-script';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import DwellingItem from './DwellingItem';


class Search extends Component {
  constructor(props) {
    super(props);
    this.city = this.props.match.params.city;
    this.state = {};
  }

  // eslint-disable-next-line class-methods-use-this
  resultMsg(city) {
    let msg = '';

    if (city === 'all') msg = 'Voici les resultats de toute la France';
    else msg = `Voici les resultats pour ${city}`;

    return msg;
  }

  getDwellings() {
    axios.get('http://localhost:8080/dwellings')
      .then((res) => {
        const dwellings = res.data;
        this.setState({dwellings});
        return dwellings;
      });
  }

  render() {
    axios.get('http://localhost:8080/dwellings')
      .then((res) => {
        const dwellings = res.data;
        dwellings.map(dwelling => {
          return(
            
          );
        })
      });
    return (
      <div className="App">
        <Header withSearchBar="true" />

        <section className="search-section">
          <div>
            <h3 style={{ textAlign: 'left' }}>{this.resultMsg(this.city)}</h3>
          </div>
          <DwellingItem />
        </section>
      </div>
    );
  }
}


export default withRouter(Search);
