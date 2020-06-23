/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../lib/axios';
import DwellingItem from './DwellingItem';
import '../css/search.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.msg = '';
    this.state = {
      dwellings: [],
    };
  }

  componentDidMount() {
    axios.get('/dwellings')
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
    if (this.props.match.params.city === 'all') {
      this.msg = 'Voici les resultats de toute la France';
    } else {
      this.msg = `Voici les resultats pour ${this.city}`;
    }

    return <h3 style={{ textAlign: 'left' }}>{this.msg}</h3>;
  }

  render() {
    return (
      <div className="App">
        <input id="city" className="custom-input-for-search" type="text" placeholder="Partout" />
        <section className="search-section">
          <div>
            {this.resultMsg()}
          </div>
          {this.displayDwellings()}
        </section>
      </div>
    );
  }
}

export default withRouter(Search);
