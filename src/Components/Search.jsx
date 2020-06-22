import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import DwellingItem from './DwellingItem';
import '../css/search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    const { city } = props.match.params;
    this.msg = '';
    this.city = city;
    this.state = {
      dwellings: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/dwellings')
      .then((res) => {
        const dwellingsTab = res.data;
        this.setState({
          dwellings: dwellingsTab,
        });
      });
  }

  displayDwellings() {
    const { dwellings } = this.state;

    return dwellings.map((dwelling) => (
      <DwellingItem key={dwelling.id} dwelling={dwelling} />
    ));
  }

  resultMsg() {
    if (this.city === 'all') {
      this.msg = 'Voici les resultats de toute la France';
    } else {
      this.msg = `Voici les resultats pour ${this.city}`;
    }

    return <h3 style={{ textAlign: 'left' }}>{this.msg}</h3>;
  }

  render() {
    return (
      <div className="App">
        <Header withSearchBar="true" />
        <section className="search-section">
          <div>
            {this.resultMsg}
          </div>
          { this.displayDwellings() }
        </section>
      </div>
    );
  }
}

export default withRouter(Search);
