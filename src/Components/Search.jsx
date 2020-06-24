/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../lib/axios';
import DwellingItem from './DwellingItem';
import '../css/search.css';
import { statusHandler } from '../lib/errorHandler';

class Search extends Component {
  constructor(props) {
    super(props);

    this.msg = '';
    this.state = {
      dwellings: [],
    };
  }


  componentDidMount() {
    const { history } = this.props;

    axios.get('/dwellings')
      .then((res) => {
        statusHandler(res.status);

        this.setState({
          dwellings: res.data,
        });
      })
      .catch((error) => {
        if (error.code) {
          if (error.code.startsWith('api/')) {
            alert(error.message);
          }
        } else {
          alert('Erreur interne...');
        }

        history.push('/');
      });
  }

  displayDwellings() {
    const { dwellings } = this.state;

    return dwellings.map((dwelling) => (
      <DwellingItem key={dwelling.id} dwelling={dwelling} />
    ));
  }

  resultMsg() {
    let msg = '';
    if (this.props.match.params.city === 'all') {
      msg = 'Voici les resultats de toute la France';
    } else {
      msg = `Voici les resultats pour ${this.city}`;
    }

    return <h3 style={{ textAlign: 'left' }}>{msg}</h3>;
  }

  render() {
    return (
      <div className="App">
        <input id="city" className="custom-input-for-search" type="text" placeholder={`${this.props.match.params.city === 'all' ? 'Partout' : this.props.match.params.city}`} />
        <section className="search-section">
          <div>
            { this.resultMsg() }
          </div>
          { this.displayDwellings() }
        </section>
      </div>
    );
  }
}

export default withRouter(Search);
