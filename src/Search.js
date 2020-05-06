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
    this.state = {
      dwellings: [],
    };
  }

  // eslint-disable-next-line class-methods-use-this
  resultMsg(city) {
    let msg = '';

    if (city === 'all') msg = 'Voici les resultats de toute la France';
    else msg = `Voici les resultats pour ${city}`;

    return msg;
  }

  
  // getAllDwellings() {
  //   axios.get('https://rbnb-back.herokuapp.com/dwellings')
  //     .then((res) => {
  //       const dwellingsTab = res.data;
  //       this.setState({
  //         dwellings: dwellingsTab,
  //       });
  //     });
  //   const dwellings = this.state.dwellings.map((dwelling) => (
  //     <DwellingItem key={dwelling.id} dwelling={dwelling} />
  //   ));
  //   return dwellings;
  // }


  render() {
    return (
      <div className="App">
        <Header withSearchBar="true" />
        <section className="search-section">
          <div>
            <h3 style={{ textAlign: 'left' }}>{this.resultMsg(this.city)}</h3>
          </div>
          {/* {this.getAllDwellings()} */}
        </section>
      </div>
    );
  }
}


export default withRouter(Search);
