import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import loginSchema from './models/login';
import { authenticate } from '../lib/authenticate';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.values = {
      email: '',
      password: '',
    };
  }

  handleSubmit(values, { setSubmitting }) {
    const { history } = this.props;
    const { email, password } = values;

    authenticate(email, password)
      .then(() => history.push('/'))
      .catch((error) => {
        alert(error.message);
      });

    setSubmitting(false);
  }

  render() {
    return (
      <div className="App">
        <section className="host-section">
          <div className="section-title">
            <h3 style={{ textAlign: 'left' }}>Se connecter</h3>
          </div>
          <Formik
            initialValues={this.values}
            onSubmit={this.handleSubmit}
            validationSchema={loginSchema}
          >
            {() => (
              <Form className="form-horizontal">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="email" className="col-sm-4 control-label">
                        Email:
                        <Field type="email" name="email" placeholder="example@email.com" className="form-control" />
                        <ErrorMessage name="email" />
                      </label>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" className="col-sm-4 control-label">
                        Mot de passe:
                        <Field type="password" name="password" className="form-control" />
                        <ErrorMessage name="password" />
                      </label>
                    </div>
                    <div className="form-group">
                      <button className="btn btn-primary" type="submit" style={{marginLeft:'15px'}}>Envoyer</button>
                    </div>
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

export default withRouter(Login);
