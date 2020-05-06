/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './Search.css';
import './search-script';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';


class Host extends Component {
  render() {
    return (
      <div className="App">
        <Header withSearchBar="false" />
        <section className="host-section">
          <div>
            <h3 style={{ textAlign: 'left' }}>Devenir hôte</h3>
          </div>
          <div className="host-input">
            <form id="host-form" style={{display: 'flex'}}>
              <div>
                <div className="quick-search-item quick-search-item-input">
                  <div className="quick-search-item-input-title">Titre de l'annonce</div>
                  <div className="quick-search-item-input-input">
                    <input id="city" className="custom-input" type="text" placeholder="Votre titre" />
                  </div>
                </div>
                <div className="quick-search-item quick-search-item-input" style={{ marginBottom: '70px' }}>
                  <div className="quick-search-item-input-title">Description</div>
                  <div className="quick-search-item-input-input">
                    <textarea className="custom-input" style={{ height: '100px' }} placeholder="Votre description" />
                  </div>
                </div>
                <div className="quick-search-item quick-search-item-input">
                  <div className="quick-search-item-input-title">Adresse de l'annonce</div>
                  <div className="quick-search-item-input-input">
                    <input id="city" className="custom-input" type="text" placeholder="Adresse du logement" />
                  </div>
                </div>
                <div className="quick-search-item quick-search-item-input">
                  <div className="quick-search-item-input-title">Nombre de chambre(s)</div>
                  <div className="quick-search-item-input-input">
                    <select className="custom-input" placeholder="Partout">
                      <option>Selectionner un nombre</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
                <div className="quick-search-item quick-search-item-input">
                  <div className="quick-search-item-input-title">Nombre de resident(s)</div>
                  <div className="quick-search-item-input-input">
                    <select className="custom-input" placeholder="Partout">
                      <option>Selectionner un nombre</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
                <div className="quick-search-item quick-search-item-input">
                  <div className="quick-search-item-input-title">Fumeur</div>
                  <div className="quick-search-item-input-input" style={{ display: 'flex' }}>
                    <div className="smoking-radio-btn">
                      <input
                        type="radio"
                        id="smoking-yes"
                        name="smoking"
                        value="yes"
                        checked
                      />
                      <label htmlFor="smoking-yes">Oui</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="smoking-no"
                        name="smoking"
                        value="no"
                        checked
                      />
                      <label htmlFor="smoking-no">Non</label>
                    </div>
                  </div>
                </div>
                <div className="quick-search-item quick-search-item-input">
                  <div className="quick-search-item-input-title">Services proposés</div>
                  <div className="quick-search-item-input-input" style={{ display: 'flex' }}>
                    <div className="services-checkbox">
                      <input
                        type="checkbox"
                        id="service-1"
                        name="service-1"
                      />
                      <label htmlFor="service-1">Micro-ondes</label>
                    </div>
                    <div className="services-checkbox">
                      <input
                        type="checkbox"
                        id="service-2"
                        name="service-2"
                      />
                      <label htmlFor="service-2">Lave-vaisselle</label>
                    </div>
                    <div className="services-checkbox">
                      <input
                        type="checkbox"
                        id="service-3"
                        name="service-3"
                      />
                      <label htmlFor="service-3">Lave-linge</label>
                    </div>
                    <div className="services-checkbox">
                      <input
                        type="checkbox"
                        id="service-4"
                        name="service-4"
                      />
                      <label htmlFor="service-4">Four</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="service-5"
                        name="service-5"
                      />
                      <label htmlFor="service-5">Piscine</label>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="quick-search-item quick-search-item-input">
                  <div className="quick-search-item-input-title">Selectionner une photo</div>
                  <div className="quick-search-item-input-input">
                    <input
                      type="file"
                      id="pictures"
                      name="pictures"
                      accept="image/png, image/jpeg"
                    />
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


export default withRouter(Host);
