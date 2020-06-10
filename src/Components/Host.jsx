/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Form, Formik, Field, ErrorMessage,
} from 'formik';
import hostSchema from './models/host';
import Header from './Header';
import '../js/searchScript';
import '../css/search.css';

class Host extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.values = {

    };
  }

  handleSubmit(values, { setSubmitting }) {
    setSubmitting(false);
  }

  render() {
    return (
      <div className="App">
        <Header withSearchBar="false" />
        <section className="host-section">
          <div className="section-title">
            <h3 style={{ textAlign: 'left' }}>Devenir hôte</h3>
          </div>
          <Formik
            initialValues={this.values}
            onSubmit={this.handleSubmit}
            validationSchema={hostSchema}
          >
            {(props) => (
              <Form className="form-horizontal">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="col-sm-3 control-label">
                        Civilité :
                        <div className="col-sm-8">
                          <Field type="text" name="civilite" className="form-control" required />
                        </div>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-3 control-label">
                        Nom :
                        <div className="col-sm-8">
                          <Field type="text" className="form-control" name="lastname" required />
                        </div>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-3 control-label">
                        Prenom :
                        <div className="col-sm-8">
                          <Field type="text" className="form-control" name="firstname" required />
                        </div>
                      </label>
                    </div>
                    <div className="form-group">
                      <label htmlFor="mail" className="col-sm-3 control-label">
                        Email :
                        <div className="col-sm-8">
                          <Field type="email" className="form-control" name="email" required />
                        </div>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-3 control-label">
                        Téléphone :
                        <div className="col-sm-8">
                          <Field type="text" className="form-control" name="phone" required />
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="societe" className="col-sm-3 control-label">
                        Société
                      </label>
                      <div className="col-sm-8">
                        <input type="text" className="form-control" name="societe" id="societe" required="" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="adresse" className="col-sm-3 control-label">
                        Adresse
                      </label>
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
                      <label htmlFor="ville" className="col-sm-3 control-label">
                        Ville
                      </label>
                      <div className="col-sm-8">
                        <input type="text" name="ville" className="form-control" id="ville" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="pays" className="col-sm-3 control-label">
                        Pays
                      </label>
                      <div className="col-sm-8">
                        <input type="text" className="form-control" name="pays" id="pays" />
                      </div>
                    </div>
                    {/* <div className="form-group">
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
                      <input type="checkbox" value={this.state.myValue} onChange={this.handleChange} checked="" />
                      <span className="cc"><i className="cc-icon glyphicon glyphicon-ok" /></span>
                      {' '}
                      Option 3
                    </label>
                  </div>
                </div> */}
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


export default withRouter(Host);
