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
    // eslint-disable-next-line react/prop-types
    const { history } = this.props;
    const { email, password } = values;
    console.log('here');
    authenticate(email, password)
    // eslint-disable-next-line react/prop-types
      .then(() => history.push('/'))
      .catch((error) => {
        alert(error.message);
      });
    setSubmitting(false);
  }

  render() {
    return (
      <div>
        <Formik
          initialValues={this.values}
          onSubmit={this.handleSubmit}
          validationSchema={loginSchema}
        >
          {() => (
            <Form className="form-horizontal">
              <label htmlFor="email">
                Email:
                <Field type="email" name="email" placeholder="example@email.com" className="form-control" />
                <ErrorMessage name="email" />
              </label>
              <label htmlFor="password">
                Mot de passe:
                <Field type="password" name="password" className="form-control" />
                <ErrorMessage name="password" />
              </label>
              <button className="btn btn-primary" type="submit">Envoyer</button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default withRouter(Login);
