import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import Header from './Header';
import DwellingItem from '../DwellingItem';
import '../css/search.css';
import '../js/searchScript';

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
        console.log('+1');
        const dwellingsTab = res.data;
        this.setState({
          dwellings: dwellingsTab,
        });
        console.log(this.state);
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

Search.propTypes = {
  match: {
    params: {
      city: PropTypes.string,
    },
  },
  msg: PropTypes.string.isRequired,
};

Search.defaultProps = {
  match: {
    params: {
      city: 'annecy',
    },
  },
};

export default withRouter(Search);
