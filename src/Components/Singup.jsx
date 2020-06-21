import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Formik, Field, ErrorMessage, Form,
} from 'formik';
import signupSchema from './models/signup';
import Header from './Header';
import { register } from '../lib/authenticate';

class SingUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.values = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      address: '',
      phone: '',
      picture: '',
    };
  }

  handleSubmit(values, { setSubmitting }) {
    const { history } = this.props;

    register(values).then(() => {
      history.push('/');
    }).catch((error) => {
      alert(error.message);
    });

    setSubmitting(false);
  }

  render() {
    return (
      <div className="App">
        <Header withSearchBar="false" />
        <section className="signup-section">
          <Formik
            initialValues={this.values}
            onSubmit={this.handleSubmit}
            validationSchema={signupSchema}
          >
            {(props) => (
              <Form className="form-horizontal">
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
        </section>
      </div>
    );
  }
}

export default withRouter(SingUp);
