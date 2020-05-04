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
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <fieldset>
            <div id="legend">
              <legend className="">Identification</legend>
            </div>
            <div className="form-group">
              <label htmlFor="email_user" className="col-md-4 control-label">Adresse mail *</label>
              {' '}
              <div className="col-md-6"><input id="email_user" type="email" name="email_user" value="" required="required" className="form-control" /></div>
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="pseudo">Pseudo</label>
              <input type="text" id="pseudo" name="pseudo" placeholder="Pseudo" className="input-xlarge" />
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="mail">Adresse mail</label>
              <input type="text" id="mail" name="mail" placeholder="Mail" className="input-xlarge" />
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="mdp">Mot de passe</label>
              <input type="text" id="mdp" name="mdp" placeholder="Mot de passe" className="input-xlarge" />
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="verif-mdp">Vérification mot de passe</label>
              <input type="text" id="verif-mdp" name="verif-mdp" placeholder="Confirmer votre mot de passe" className="input-xlarge" />
            </div>
            Information :
            <RadioGroup onChange={this.onChange} horizontal>
              <RadioButton value="man">M.</RadioButton>
              <RadioButton value="woman">Mme.</RadioButton>
              <RadioButton value="other">Autre</RadioButton>
            </RadioGroup>
            <div className="control-group">
              <label className="control-label" htmlFor="name">Nom</label>
              <input type="text" id="name" name="name" placeholder="Nom" className="input-xlarge" />
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="fisrtname">Prénom</label>
              <input type="text" id="fisrtname" name="fisrtname" placeholder="Prénom" className="input-xlarge" />
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="birthday">Date de naissance</label>
              <input type="date" id="birthday" name="birthday" placeholder="" className="input-xlarge" />
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="zip-code">Code postale</label>
              <input type="text" id="zip-code" name="zip-code" placeholder="Code postal" className="input-xlarge" />
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="city">Ville</label>
              <input type="text" id="city" name="city" placeholder="Ville" className="input-xlarge" />
            </div>
            <div className="control-group">
              <label className="control-label" htmlFor="country">Pays</label>
              <input type="text" id="country" name="country" placeholder="Pays" className="input-xlarge" />
            </div>
            <div className="control-group">
              <div className="controls">
                <Link className="item" to="/">Return</Link>
                <button className="btn btn-success">Confirmer</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
export default withRouter(SingUp);
