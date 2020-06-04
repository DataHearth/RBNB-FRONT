/* eslint-disable no-alert */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import { register } from '../lib/authenticate';

class SingUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      address: '',
      phone: '',
      picture: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.name === 'picture' ? event.target.files[0] : event.target.value,
    });
  }

  handleSubmit(event) {
    // eslint-disable-next-line react/prop-types
    const { history } = this.props;
    event.preventDefault();

    register(this.state).then(() => {
      // eslint-disable-next-line react/prop-types
      history.push('/');
    }).catch((error) => {
      alert(error.message);
    });
  }

  render() {
    return (
      <div className="App">
        <Header withSearchBar="false" />
        <section className="signup-section">
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="col-md-4 mb-3">
                <label htmlFor="firstname">
                  Prénom
                  <input type="text" className="form-control" name="firstname" placeholder="Pierre" value={this.state.firstname} onChange={this.handleChange} required />
                </label>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="lastname">
                  Nom de famille
                  <input type="text" className="form-control" name="lastname" placeholder="Giraud" value={this.state.lastname} onChange={this.handleChange} required />
                </label>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="email">
                  Adresse mail *
                  <input type="email" className="form-control" name="email" placeholder="test@example.com" value={this.state.email} onChange={this.handleChange} required />
                </label>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="password">
                  Mot de passe
                  <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} required />
                </label>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="address">
                  Adresse
                  <input type="text" className="form-control" name="address" placeholder="Route du Cruet, 73550, Les Allues" value={this.state.address} onChange={this.handleChange} required />
                </label>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="phone">
                  Phone
                  <input type="text" className="form-control" name="phone" placeholder="0634546577" value={this.state.phone} onChange={this.handleChange} required />
                </label>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="phone">
                  Photo
                  <input type="file" className="form-control" name="picture" onChange={this.handleChange} required />
                </label>
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
