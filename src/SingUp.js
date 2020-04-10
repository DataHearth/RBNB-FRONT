import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import './SingUp.css';
import './singup-script.js';

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
        <header className="App-header">
          <div className="logo-header" />
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
        <Link className="item" to="/">Return</Link>
        <form onSubmit={this.handleSubmit}>
          Identification :
          <label>
            Pseudo :
            <input type="text" name="pseudo" />
          </label>
          <label>
            Adress Email :
            <input type="email" name="email" />
          </label>
          <label>
            Mot de passe :
            <input type="password" name="password" />
          </label>
          <label>
            Vérification de votre mot de passe :
            <input type="password" name="passwordVerif" />
          </label>
          Information :
          <RadioGroup onChange={this.onChange} horizontal>
            <RadioButton value="man">M.</RadioButton>
            <RadioButton value="woman">Mme.</RadioButton>
            <RadioButton value="other">Autre</RadioButton>
          </RadioGroup>
          <label>
            Nom :
            <input type="text" name="name" />
          </label>
          <label>
            Prénom :
            <input type="text" name="subname" />
          </label>
          <label>
            date de naissance
            <input type="date" name="age" />
          </label>
          Adress:
          <label>
            Nom de l'adress :
            <input type="text" name="adress" />
          </label>
          <label>
            code postal :
            <input type="text" name="postalCode" />
          </label>
          <label>
            Ville :
            <input type="text" name="cytie" />
          </label>
          <label>
            Pays :
            <input type="text" name="country" />
          </label>

          <input type="submit" value="Envoyer" />
        </form>
      </div>
    );
  }
}
export default withRouter(SingUp);
