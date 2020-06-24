/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Formik, Field, ErrorMessage, Form,
} from 'formik';
import axios from '../lib/axios';
import firebase from '../lib/firebase';
import logger from '../lib/logger';
import editAccountSchema from './models/editAccount';
import { statusHandler, firebaseAuthHandler } from '../lib/errorHandler';

class EditAccount extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteAccount = this.deleteAccount.bind(this);
    this.deleteRGPD = this.deleteRGPD.bind(this);
    this.state = {
      user: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        address: '',
        phone: '',
        picture: '',
      },
    };
    this.dbUser = {};
  }

  componentDidMount() {
    axios.get(`/users/${firebase.auth().currentUser.uid}`).then((res) => {
      this.setState({ user: res.data });
      this.dbUser = res.data;
    });
  }

  deleteAccount() {
    const { history } = this.props;
    firebase.auth().currentUser.delete().then(() => {
      axios.delete(`/users/${this.dbUser.id}`)
        .then((res) => {
          statusHandler(res.status);
          history.push('/');
        })
        .catch((error) => {
          if (error.code) {
            if (error.code.startsWith('api/')) {
              alert(error.message);
            }
          } else {
            alert('Erreur interne...');
          }
          history.push('/');
        });
    })
      .catch((error) => {
        firebaseAuthHandler(error);
      })
      .catch((error) => {
        alert(error.message);
        history.push('/');
      });
  }

  deleteRGPD() {
    const { history } = this.props;
    firebase.auth().currentUser.delete().then(() => {
      axios.delete(`/rgpd/${this.dbUser.id}`)
        .then((res) => {
          statusHandler(res.status);
          history.push('/');
        })
        .catch((error) => {
          logger.error(error.message, { error });
          if (error.code) {
            if (error.code.startsWith('api/')) {
              alert(error.message);
            }
          } else {
            alert('Erreur interne...');
          }
          history.push('/');
        });
    })
      .catch((error) => {
        firebaseAuthHandler(error);
      })
      .catch((error) => {
        logger.error(error.message, { error });
        alert(error.message);
        history.push('/');
      });
  }

  handleSubmit(values, { setSubmitting }) {
    const { history } = this.props;
    const userForm = new FormData();

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(values)) {
      if (key === 'badges') {
        // TODO: find a solution for this
        userForm.append('badges', 'no badge');
        userForm.append('badges', 'no badge');
      } else {
        userForm.append(key, value);
      }
    }
    userForm.delete('id');

    // TODO: ugly af, change that made: antoine, to change: antoine
    if (values.password !== this.dbUser.password) {
      firebase.auth().currentUser.updatePassword(values.password)
        .then(() => {
          axios.post(`/users/${this.dbUser.id}`, userForm).then((res) => {
            statusHandler(res.status);

            history.push('/');
          }).catch((error) => {
            logger.error(error.message, { error });
            alert(error.message);
            history.push('/');
          });
        })
        .catch(firebaseAuthHandler)
        .catch((error) => {
          logger.error(error.message, { error });
          alert(error.message);
          history.push('/');
        });

      setSubmitting(false);
      return;
    }

    axios.post(`/users/${this.dbUser.id}`, userForm).then((res) => {
      if (res.status === 400) {
        const apiPayloadError = new Error('Erreur de validation, veuillez contacter un administrateur');
        apiPayloadError.code = 'api/wrong-payload';
        throw apiPayloadError;
      } else if (res.status === 500) {
        const apiInternalError = new Error('Erreur serveur, veuillez contacter un administrateur');
        apiInternalError.code = 'api/internal-error';
        throw apiInternalError;
      }

      history.push('/');
    }).catch((error) => {
      alert(error.message);
      history.push('/');
    });

    setSubmitting(false);
  }

  render() {
    return (
      <div>
        <h3>Account informations</h3>
        <Formik
          enableReinitialize
          initialValues={this.state.user}
          onSubmit={this.handleSubmit}
          validationSchema={editAccountSchema}
        >
          {(props) => (
            <Form>
              <div className="form-row">
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

        <h3>Account settings</h3>
        <button type="button" className="btn btn-danger" onClick={this.deleteAccount}>Supprimer le compte</button>
        <button type="button" className="btn btn-danger" onClick={this.deleteRGPD}>
          Suppression de toute les données utilisateurs (locations, compte, badges, etc...)
        </button>
      </div>
    );
  }
}

export default withRouter(EditAccount);
