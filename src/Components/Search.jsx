/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import '../css/search.css';
import '../js/searchScript';
import { withRouter } from 'react-router-dom';
import Header from './Header';

class Search extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/prop-types
    const { match } = this.props;
    // eslint-disable-next-line react/prop-types
    this.city = match.params.city;
    this.state = {
      // eslint-disable-next-line react/no-unused-state
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
