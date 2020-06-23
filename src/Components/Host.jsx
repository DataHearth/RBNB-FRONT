import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Formik, Field, ErrorMessage, Form,
} from 'formik';
import axios from '../lib/axios';
import hostSchema from './models/host';
import '../css/host.css';
import { statusHandler } from '../lib/errorHandler';

class Host extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.values = {
      user: '',
      title: '',
      description: '',
      price: '',
      resident: '',
      rentalType: '',
      smoking: '',
      type: '',
      pictures: '',
      rooms: '',
      services: '',
    };
  }

  handleSubmit(values, { setSubmitting }) {
    const { history } = this.props;
    const hostForm = new FormData();

    // * Append all missing data (not implemented functionnalities)
    // * Loop is necessary to create an array with FormData()
    for (let index = 0; index < 2; index += 1) {
      hostForm.append('badges', `badges_object_id${index}`);
    }
    hostForm.append('location', 'location_object_id');

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(values)) {
      if (key === 'user') {
        hostForm.append(key, 'user_object_id');
      } else if (key === 'rentalType') {
        hostForm.append(key, 'rental_type');
      } else if (key === 'services') {
        if (Array.isArray(values.services)) {
          for (let index = 0; index < values.services.length; index += 1) {
            hostForm.append(key, values.services[index]);
          }
          if (values.services.length === 1) {
            hostForm.append(key, 'empty');
          }
        } else {
          hostForm.append(key, values.services);
          hostForm.append(key, 'empty');
        }
      } else {
        hostForm.append(key, value);
      }
    }

    axios.put('/dwellings', hostForm).then((res) => {
      statusHandler(res.status);

      history.push('/search/all');
    }).catch((error) => {
      if (error.code) {
        if (error.code.startsWith('api/')) {
          alert(error.message);
        }
      } else {
        alert('Erreur interne...');
      }
    });

    setSubmitting(false);
  }

  render() {
    return (
      <div className="App">
        <section className="host-section">
          <div className="section-title">
            <h3 style={{ textAlign: 'left' }}>Devenir hôte</h3>
          </div>
          <Formik
            initialValues={this.values}
            onSubmit={this.handleSubmit}
            validationSchema={hostSchema}
            className="form-horizontal"
          >
            {(props) => (
              <Form className="form-horizontal">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="col-sm-3 control-label">
                        <div className="col-sm-8">
                          <Field
                            type="hidden"
                            className="form-control"
                            name="user"
                          />
                          <ErrorMessage name="user" />
                        </div>
                      </label>
                    </div>
                    <div className="form-group">
                      <label htmlFor="title" className="col-sm-3 control-label">
                        Titre de l&apos;annonce :
                      </label>
                      <div className="col-sm-8">
                        <Field
                          type="text"
                          className="form-control"
                          name="title"
                        />
                        <ErrorMessage name="title" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="description"
                        className="col-sm-3 control-label"
                      >
                        Description de l&apos;annonce :
                      </label>
                      <div className="col-sm-8">
                        <Field
                          as="textarea"
                          className="form-control"
                          name="description"
                        />
                        <ErrorMessage name="description" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="price" className="col-sm-3 control-label">
                        Prix :
                      </label>
                      <div className="col-sm-8">
                        <div className="icon-price">€</div>
                        <Field
                          type="number"
                          className="form-control"
                          name="price"
                        />
                        <ErrorMessage name="price" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="resident" className="col-sm-3 control-label">
                        Nombre de resident :
                      </label>
                      <div className="col-sm-8">
                        <Field
                          as="select"
                          className="form-control"
                          name="resident"
                        >
                          <option value="0">-</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </Field>
                        <ErrorMessage name="resident" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="rentalType"
                        className="col-sm-3 control-label"
                      />
                      <div className="col-sm-8">
                        <Field
                          type="hidden"
                          className="form-control"
                          name="rentalType"
                        />
                        <ErrorMessage name="rentalType" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="smoking" className="col-sm-3 control-label">
                        Fumeur :
                      </label>
                      <div className="col-sm-3">
                        <div className="checkbox inline">
                          <label>
                            <Field type="radio" name="smoking" value="true" />
                            <span className="cc">
                              <i className="cc-icon glyphicon glyphicon-ok" />
                            </span>
                            {' '}
                            Oui
                          </label>
                        </div>
                        <div className="checkbox inline">
                          <label>
                            <Field type="radio" name="smoking" value="false" />
                            <span className="cc">
                              <i className="cc-icon glyphicon glyphicon-ok" />
                            </span>
                            {' '}
                            Non
                          </label>
                        </div>
                        <ErrorMessage name="smoking" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="type" className="col-sm-3 control-label">
                        Type de bien :
                      </label>
                      <div className="col-sm-8">
                        <Field
                          type="text"
                          className="form-control"
                          name="type"
                        />
                        <ErrorMessage name="type" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="pictures" className="col-sm-3 control-label">
                        Photo :
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="file"
                          className="form-control"
                          name="pictures"
                          style={{ padding: '3px' }}
                          onChange={(event) => {
                            props.setFieldValue('pictures', event.currentTarget.files[0]);
                          }}
                        />
                        <ErrorMessage name="pictures" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="rooms" className="col-sm-3 control-label">
                        Nombre de chambre :
                      </label>
                      <div className="col-sm-8">
                        <Field as="select" className="form-control" name="rooms">
                          <option value="0">-</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </Field>
                        <ErrorMessage name="rooms" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="services" className="col-sm-3 control-label">
                        Service(s) proposé(s) :
                      </label>
                      <div className="col-sm-3">
                        <div className="checkbox inline">
                          <label>
                            <Field type="checkbox" name="services" value="Micro-ondes" />
                            <span className="cc">
                              <i className="cc-icon glyphicon glyphicon-ok" />
                            </span>
                            {' '}
                            Micro-ondes
                          </label>
                        </div>
                        <div className="checkbox inline">
                          <label>
                            <Field type="checkbox" name="services" value="Lave-vaisselle" />
                            <span className="cc">
                              <i className="cc-icon glyphicon glyphicon-ok" />
                            </span>
                            {' '}
                            Lave-vaisselle
                          </label>
                        </div>
                        <div className="checkbox inline">
                          <label>
                            <Field type="checkbox" name="services" value="Piscine" />
                            <span className="cc">
                              <i className="cc-icon glyphicon glyphicon-ok" />
                            </span>
                            {' '}
                            Piscine
                          </label>
                        </div>
                        <ErrorMessage name="services" />
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-primary" type="submit">Envoyer</button>
                </div>
              </Form>
            )}
          </Formik>
        </section>
      </div>
    );
  }
}

export default withRouter(Host);
