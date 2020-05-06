import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import './SingUp.css';
import './singup-script.js';
import Header from './Header';

class SingUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    if (document.querySelector("input[name='password']") == document.querySelector("input[name='passwordVerif']")) {
      alert(this.state.valuepwd1);
    } else {
      alert('erreur');
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <Header withSearchBar="false" />
        <section className="signup-section">
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="col-md-4 mb-3">
                <label htmlFor="prenom">Prénom</label>
                <input type="text" className="form-control" id="prenom" placeholder="Pierre" required />
                <div className="valid-feedback">Ok !</div>
                <div className="invalid-feedback">Valeur incorrecte</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="nom">Nom de famille</label>
                <input type="text" className="form-control" id="nom" placeholder="Giraud" required />
                <div className="valid-feedback">Ok !</div>
                <div className="invalid-feedback">Valeur incorrecte</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="pseudo">Pseudo</label>
                <input type="text" className="form-control" id="pseudo" placeholder="PierreGird" required />
                <div className="valid-feedback">Ok !</div>
                <div className="invalid-feedback">Valeur incorrecte</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="pseudo">Adresse mail *</label>
                <input type="text" className="form-control" id="pseudo" placeholder="PierreGird" required />
                <div className="valid-feedback">Ok !</div>
                <div className="invalid-feedback">Valeur incorrecte</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="pseudo">Confirmation Adresse mail</label>
                <input type="text" className="form-control" id="pseudo" placeholder="PierreGird" required />
                <div className="valid-feedback">Ok !</div>
                <div className="invalid-feedback">Valeur incorrecte</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="pseudo">Mot de passe</label>
                <input type="text" className="form-control" id="pseudo" placeholder="PierreGird" required />
                <div className="valid-feedback">Ok !</div>
                <div className="invalid-feedback">Valeur incorrecte</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="pseudo">Confirmation du mot de passe</label>
                <input type="text" className="form-control" id="pseudo" placeholder="PierreGird" required />
                <div className="valid-feedback">Ok !</div>
                <div className="invalid-feedback">Valeur incorrecte</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="pseudo">Date de naissance</label>
                <input type="date" className="form-control" id="pseudo" placeholder="PierreGird" required />
                <div className="valid-feedback">Ok !</div>
                <div className="invalid-feedback">Valeur incorrecte</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="pseudo">Sexe</label>
                <div className="form-check form-check-inline form-control" style={{ justifyContent: 'center' }}>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="radio" id="radio1" value="option1" />
                    <label className="form-check-label" htmlFor="radio1">Option 1</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="radio" id="radio2" value="option2" />
                    <label className="form-check-label" htmlFor="radio2">Option 2</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-4 mb-3">
                <label htmlFor="pseudo">Pays</label>
                <input type="text" className="form-control" id="pseudo" placeholder="PierreGird" required />
                <div className="valid-feedback">Ok !</div>
                <div className="invalid-feedback">Valeur incorrecte</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="pseudo">Code postal</label>
                <input type="text" className="form-control" id="pseudo" placeholder="PierreGird" required />
                <div className="valid-feedback">Ok !</div>
                <div className="invalid-feedback">Valeur incorrecte</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="pseudo">Ville</label>
                <input type="text" className="form-control" id="pseudo" placeholder="PierreGird" required />
                <div className="valid-feedback">Ok !</div>
                <div className="invalid-feedback">Valeur incorrecte</div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="cgu" required />
                <label className="form-check-label" htmlFor="cgu">J'accepte les conditions générales d'utilisation et de vente</label>
                <div className="invalid-feedback">Vous devez accepter les CGU pour continuer</div>
              </div>
            </div>
            <button className="btn btn-primary" type="submit">Envoyer</button>
          </form>
          <script>
            {
             (function () {
               window.addEventListener('load', () => {
                 const forms = document.getElementsByClassName('needs-validation');
                 const validation = Array.prototype.filter.call(forms, (form) => {
                   form.addEventListener('submit', (event) => {
                     if (form.checkValidity() === false) {
                       event.preventDefault();
                       event.stopPropagation();
                     }
                     form.classList.add('was-validated');
                   }, false);
                 });
               }, false);
             }())
           }
          </script>
        </section>
      </div>
    );
  }
}
export default withRouter(SingUp);
