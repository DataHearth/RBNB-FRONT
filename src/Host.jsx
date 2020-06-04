/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './Search.css';
import './js/searchScript';
import { withRouter } from 'react-router-dom';
import Header from './Header';


class Host extends Component {
  render() {
    return (
      <div className="App">
        <Header withSearchBar="false" />
        <section className="host-section">
          <div className="section-title">
            <h3 style={{ textAlign: 'left' }}>Devenir hôte</h3>
          </div>
          <form className="form-horizontal">
            <div className="row">
              <div className="col-lg-6">

                <div className="form-group">
                  <label htmlFor="civilite" className="col-sm-3 control-label">Civilité :</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" lname="civilite;" id="civilite" required="" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="nom" className="col-sm-3 control-label">Nom :</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" name="name" id="name" required="" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="prenom" className="col-sm-3 control-label">Prenom :</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" name="prenom" id="prenom" required="" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="mail" className="col-sm-3 control-label">Email :</label>
                  <div className="col-sm-8">
                    <input type="email" className="form-control" name="email" id="email" required="" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="tel" className="col-sm-3 control-label">Téléphone :</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" name="tel" id="tel" required="" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="mobile" className="col-sm-3 control-label">Mobile :</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" name="mobile" id="mobile" required="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="societe" className="col-sm-3 control-label">Société</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" name="societe" id="societe" required="" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="adresse" className="col-sm-3 control-label">Adresse</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" name="adresse" id="adresse" required="" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="cp" className="col-sm-3 control-label">Code Postal</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" name="cp" id="cp" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="ville" className="col-sm-3 control-label">Ville</label>
                  <div className="col-sm-8">
                    <input type="text" name="ville" className="form-control" id="ville" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="pays" className="col-sm-3 control-label">Pays</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" name="pays" id="pays" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="checkbox inline">
                    <label>
                      <input type="checkbox" value="" checked="" />
                      <span className="cc"><i className="cc-icon glyphicon glyphicon-ok" /></span>
                      {' '}
                      Option1
                    </label>
                  </div>
                  <div className="checkbox inline">
                    <label>
                      <input type="checkbox" value="" checked="" />
                      <span className="cc"><i className="cc-icon glyphicon glyphicon-ok" /></span>
                      {' '}
                      Option 2
                    </label>
                  </div>
                  <div className="checkbox inline">
                    <label>
                      <input type="checkbox" value="" checked="" />
                      <span className="cc"><i className="cc-icon glyphicon glyphicon-ok" /></span>
                      {' '}
                      Option 3
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    );
  }
}


export default withRouter(Host);
