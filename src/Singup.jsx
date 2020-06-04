import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';

class SingUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const password = document.querySelector("input[name='password']");
    const verif = document.querySelector("input[name='passwordVerif']");
    if (password === verif) {
      const { state } = this;
      alert(state.valuepwd1);
    } else {
      alert('erreur');
    }
    event.preventDefault();
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Header withSearchBar="false" />
        <section className="signup-section">
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="col-md-4 mb-3">
                <label htmlFor="prenom">
                  Prénom
                  <input type="text" className="form-control" id="prenom" placeholder="Pierre" required />
                </label>
                <div className="valid-feedback">Ok !</div>
                <div className="invalid-feedback">Valeur incorrecte</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="nom">
                  Nom de famille
                  <input type="text" className="form-control" id="nom" placeholder="Giraud" required />
                </label>
                <div className="valid-feedback">Ok !</div>
                <div className="invalid-feedback">Valeur incorrecte</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="pseudo">
                  Pseudo
                  <input type="text" className="form-control" id="pseudo" placeholder="PierreGird" required />
                </label>
                <div className="valid-feedback">Ok !</div>
                <div className="invalid-feedback">Valeur incorrecte</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="pseudo">
                  Adresse mail *
                  <input type="text" className="form-control" id="pseudo" placeholder="PierreGird" required />
                </label>
                <div className="valid-feedback">Ok !</div>
                <div className="invalid-feedback">Valeur incorrecte</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="pseudo">
                  Confirmation Adresse mail
                  <input type="text" className="form-control" id="pseudo" placeholder="PierreGird" required />
                </label>
                <div className="valid-feedback">Ok !</div>
                <div className="invalid-feedback">Valeur incorrecte</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="pseudo">
                  Mot de passe
                  <input type="text" className="form-control" id="pseudo" placeholder="PierreGird" required />
                </label>
                <div className="valid-feedback">Ok !</div>
                <div className="invalid-feedback">Valeur incorrecte</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="pseudo">
                  Confirmation du mot de passe
                  <input type="text" className="form-control" id="pseudo" placeholder="PierreGird" required />
                </label>
                <div className="valid-feedback">Ok !</div>
                <div className="invalid-feedback">Valeur incorrecte</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="pseudo">
                  Date de naissance
                  <input type="date" className="form-control" id="pseudo" placeholder="PierreGird" required />
                </label>
                <div className="valid-feedback">Ok !</div>
                <div className="invalid-feedback">Valeur incorrecte</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="pseudo">
                  Sexe
                  <div className="form-check form-check-inline form-control" style={{ justifyContent: 'center' }}>
                    <div className="form-check form-check-inline">
                      <label className="form-check-label" htmlFor="radio1">
                        <input className="form-check-input" type="radio" name="radio" id="radio1" value="option1" />
                        Option 1
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <label className="form-check-label" htmlFor="radio2">
                        <input className="form-check-input" type="radio" name="radio" id="radio2" value="option2" />
                        Option 2
                      </label>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-4 mb-3">
                <label htmlFor="pseudo">
                  <input type="text" className="form-control" id="pseudo" placeholder="PierreGird" required />
                  Pays
                </label>
                <div className="valid-feedback">Ok !</div>
                <div className="invalid-feedback">Valeur incorrecte</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="pseudo">
                  <input type="text" className="form-control" id="pseudo" placeholder="PierreGird" required />
                  Code postal
                </label>
                <div className="valid-feedback">Ok !</div>
                <div className="invalid-feedback">Valeur incorrecte</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="pseudo">
                  <input type="text" className="form-control" id="pseudo" placeholder="PierreGird" required />
                  Ville
                </label>
                <div className="valid-feedback">Ok !</div>
                <div className="invalid-feedback">Valeur incorrecte</div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <label className="form-check-label" htmlFor="cgu">
                  J&apos;accepte les conditions générales d&apos;utilisation et de vente
                  <input className="form-check-input" type="checkbox" value="" id="cgu" required />
                </label>
                <div className="invalid-feedback">Vous devez accepter les CGU pour continuer</div>
              </div>
            </div>
            <button className="btn btn-primary" type="submit">Envoyer</button>
          </form>
        </section>
      </div>
    );
  }
}

export default withRouter(SingUp);
