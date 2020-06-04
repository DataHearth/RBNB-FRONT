/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './css/search.css';
import './js/searchScript';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import DwellingItem from './DwellingItem';

class Search extends Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    this.city = match.params.city;
    this.state = {
      dwellings: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/dwellings')
      .then((res) => {
        console.log('+1');
        const dwellingsTab = res.data;
        this.setState({
          dwellings: dwellingsTab,
        });
        console.log(this.state);
      });
  }

  displayDwellings() {
    const dwellings = this.state.dwellings.map((dwelling) => (
      <DwellingItem key={dwelling.id} dwelling={dwelling} />
    ));
    return dwellings;
  }


  // eslint-disable-next-line class-methods-use-this
  resultMsg(city) {
    let msg = '';

    if (city === 'all') msg = 'Voici les resultats de toute la France';
    else msg = `Voici les resultats pour ${city}`;

    return msg;
  }


  render() {
    return (
      <div className="App">
        <Header withSearchBar="true" />
        <section className="search-section">
          <div>
            <h3 style={{ textAlign: 'left' }}>{this.resultMsg(this.city)}</h3>
          </div>
          { this.displayDwellings() }
        </section>
      </div>
    );
  }
}
export default withRouter(Search);
