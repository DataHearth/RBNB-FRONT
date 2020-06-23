import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import logger from '../lib/logger';
import userSchema from './models/user';

class EditAccount extends Component {
  constructor(props) {
    super(props);
    this.user = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      address: '',
      phone: '',
      picture: '',
    };
  }

  componentDidMount() {
    const { history } = this.props;
    axios.get('http://localhost:8080/')
      .then((res) => {
        if (res.status === 204) {
          alert('L\'utilisateur n\'existe pas, veuillez reessayer plus tard...');
          history.push('/');
        } else if (res.status === 500) {
          alert('Une erreur interne au serveur est survenue. Veuillez contacter un adminstrateur...');
          history.push('/');
        }
        // eslint-disable-next-line no-restricted-syntax
        for (const [key, value] of res.data) {
          this.user[key] = value;
        }
      }).catch((error) => {
        logger.error(error.message, { error });
        alert('Erreur interne...');
        history.push('/');
      });
  }

  render() {
    return (
      <div>
        <h3>Account informations</h3>
        <Formik
          initialValues={this.user}
          onSubmit={this.handleSubmit}
          validationSchema={userSchema}
        >
          {(props) => (
            <Form>
              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="firstname">
                    Prénom *
                    <Field type="text" name="firstname" placeholder="Gérard" className="form-control" />
                    <ErrorMessage name="firstname" />
                  </label>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="lastname">
                    Nom *
                    <Field type="text" name="lastname" placeholder="Dupond" className="form-control" />
                    <ErrorMessage name="lastname" />
                  </label>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="email">
                    Email *
                    <Field type="email" name="email" placeholder="email@example.com" className="form-control" />
                    <ErrorMessage name="email" />
                  </label>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="password">
                    Mot de passe *
                    <Field type="password" name="password" className="form-control" />
                    <ErrorMessage name="password" />
                  </label>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="address">
                    Adresse
                    <Field type="text" name="address" placeholder="Route du Cruet, 73550, Les Allues" className="form-control" />
                    <ErrorMessage name="address" />
                  </label>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="phone">
                    Téléphone
                    <Field type="text" name="phone" placeholder="0634546577" className="form-control" />
                    <ErrorMessage name="phone" />
                  </label>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="picture">
                    Photo *
                    <input
                      type="file"
                      name="picture"
                      onChange={(event) => {
                        props.setFieldValue('picture', event.currentTarget.files[0]);
                      }}
                      className="form-control"
                    />
                    <ErrorMessage name="picture" />
                  </label>
                </div>
              </div>
              <button className="btn btn-primary" type="submit">Envoyer</button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default withRouter(EditAccount);
