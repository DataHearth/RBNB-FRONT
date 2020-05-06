/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './css/home.css';
import './js/home';
import { withRouter } from 'react-router-dom';
import $ from 'jquery';
import Header from './Header';

class Home extends Component {
  submitForm(e) {
    e.preventDefault();
    const city = $('#city')[0].value;
    const { history } = this.props;
    if (city !== '') {
      history.push(`/search/${city}`);
    } else {
      history.push('/search/all');
    }
  }

  render() {
    return (
      <div className="App">
        <Header withSearchBar="false" />
        <section className="home">
          <div className="home-contain home-contain-left">
            <div className="home-description">
              <h3>Qu&apos;est ce que RBNB ?</h3>
              <p>
                RBNB est une plateforme qui s&apos;adresse uniquement aux étudiants.
                Elle leur permet de louer un logement simplement et en toute tranquillité,
                afin de faciliter au maximum leur recherche de logement.
              </p>
            </div>
          </div>
          <div className="home-contain home-contain-right">
            <form onSubmit={this.submitForm.bind(this)}>
              <div className="quick-search">
                <div className="quick-search-item quick-search-item-title">
                  Réserver des logements et bien plus encore
                </div>
                <div className="quick-search-item quick-search-item-input">
                  <div className="quick-search-item-input-title">Où</div>
                  <div className="quick-search-item-input-input">
                    <input id="city" className="custom-input" type="text" placeholder="Partout" />
                  </div>
                </div>
                <div className="quick-search-item quick-search-item-input">
                  <div className="quick-search-item-input-title">
                    <div className="quick-search-item-input-title-split">Arrivée</div>
                    <div className="quick-search-item-input-title-split">Départ</div>
                  </div>
                  <div className="quick-search-item-input-input">
                    <input className="custom-input custom-input-split" type="date" placeholder="jj/mm/aaaa" />
                    <input className="custom-input custom-input-split" type="date" placeholder="jj/mm/aaaa" />
                  </div>
                </div>
                <div className="quick-search-item quick-search-item-input">
                  <div className="quick-search-item-input-title">Nombre d&apos;étudiant(s)</div>
                  <div className="quick-search-item-input-input">
                    <select className="custom-input" placeholder="Partout">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
                <div className="quick-search-item quick-search-item-button">
                  <div className="quick-search-item-button-button">
                    <button type="button" className="custom-button">Rechercher</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(Home);
