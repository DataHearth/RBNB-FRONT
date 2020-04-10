/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './Search.css';
import './search-script';
import { withRouter, Link } from 'react-router-dom';

class Search extends Component {
  constructor(props) {
    super(props);
    this.city = this.props.match.params.city;
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
        <header className="App-header">
          <div className="logo-header">
            <input id="city" className="custom-input-for-search" type="text" placeholder="Partout" />
          </div>
          <div className="menu-items">
            <div className="collapse-menu">
              <div className="line" />
              <div className="line" />
              <div className="line" />
            </div>
            <div className="items">
              <Link className="item" to="/">Héberger</Link>
              <Link className="item" to="/signup">Inscription</Link>
              <Link className="item" to="/">Connexion</Link>
            </div>
          </div>
        </header>

        <section className="search-section">
          <div>
            <h3 style={{ textAlign: 'left' }}>{this.resultMsg(this.city)}</h3>
          </div>
          <div className="dwelling">
            <div className="pic" />
            <div className="text">
              <div className="title-descr">
                <div className="title">Studio idéal pour étudiant</div>
                <div className="descr">
                  2 étudiants - Studio - 1 lit - 1 canapé lit
                  <br />
                  1 salle de bain - Wifi - Chauffage
                </div>
              </div>
              <div className="mark">
                4.2
              </div>
            </div>
          </div>
          <div className="dwelling">
            <div className="pic" />
            <div className="text">
              <div className="title-descr">
                <div className="title">Studio idéal pour étudiant</div>
                <div className="descr">
                  2 étudiants - Studio - 1 lit - 1 canapé lit
                  <br />
                  1 salle de bain - Wifi - Chauffage
                </div>
              </div>
              <div className="mark">
                4.2
              </div>
            </div>
          </div>
          <div className="dwelling">
            <div className="pic" />
            <div className="text">
              <div className="title-descr">
                <div className="title">Studio idéal pour étudiant</div>
                <div className="descr">
                  2 étudiants - Studio - 1 lit - 1 canapé lit
                  <br />
                  1 salle de bain - Wifi - Chauffage
                </div>
              </div>
              <div className="mark">
                4.2
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}


export default withRouter(Search);
