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
      <div className="App">
        <section className="signup-section">
          <div className="section-title">
            <h3 style={{ textAlign: 'left' }}>Informations du compte</h3>
          </div>
          <Formik
            enableReinitialize
            initialValues={this.state.user}
            onSubmit={this.handleSubmit}
            validationSchema={editAccountSchema}
          >
            {(props) => (
              <Form>
                <div className="form-horizontal">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="col-sm-3 control-label" htmlFor="password">
                          Mot de passe *
                        </label>
                        <div className="col-sm-8">
                          <Field type="password" name="password" className="form-control" />
                          <ErrorMessage name="password" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-sm-3 control-label" htmlFor="address">
                          Adresse
                        </label>
                        <div className="col-sm-8">
                          <Field type="text" name="address" placeholder="Route du Cruet, 73550, Les Allues" className="form-control" />
                          <ErrorMessage name="address" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-sm-3 control-label" htmlFor="phone">
                          Téléphone
                        </label>
                        <div className="col-sm-8">
                          <Field type="text" name="phone" placeholder="0634546577" className="form-control" />
                          <ErrorMessage name="phone" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-sm-3 control-label" htmlFor="picture">
                          Photo *
                        </label>
                        <div className="col-sm-8">
                          <input
                            type="file"
                            name="picture"
                            style={{ padding: '3px' }}
                            onChange={(event) => {
                              props.setFieldValue('picture', event.currentTarget.files[0]);
                            }}
                            className="form-control"
                          />
                          <ErrorMessage name="picture" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mutliple-btn"><button className="btn btn-primary" type="submit">Modifier</button></div>
                  <div className="mutliple-btn"><button type="button" className="btn btn-danger" onClick={this.deleteAccount}>Supprimer le compte</button></div>
                  <div className="mutliple-btn">
                    <button type="button" className="btn btn-danger" onClick={this.deleteRGPD}>
                      Suppression de toutes les données utilisateurs (locations, compte, badges, etc...)
                    </button>
                  </div>
                </div>

              </Form>
            )}
          </Formik>
        </section>
      </div>
    );
  }
}

export default withRouter(EditAccount);
