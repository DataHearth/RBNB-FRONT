import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Formik, Field, ErrorMessage, Form,
} from 'formik';
import signupSchema from './models/signup';
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
      actype: 'host',
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
        <section className="signup-section">
          <div className="section-title">
            <h3 style={{ textAlign: 'left' }}>S'inscrire</h3>
          </div>
          <Formik
            initialValues={this.values}
            onSubmit={this.handleSubmit}
            validationSchema={signupSchema}
          >
            {(props) => (
              <Form className="form-horizontal">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="col-sm-3 control-label" htmlFor="firstname">
                        Prénom *
                      </label>
                      <div className="col-sm-8">
                        <Field type="text" name="firstname" placeholder="Gérard" className="form-control" />
                        <ErrorMessage name="firstname" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-3 control-label" htmlFor="lastname">
                        Nom *
                      </label>
                      <div className="col-sm-8">
                        <Field type="text" name="lastname" placeholder="Dupond" className="form-control" />
                        <ErrorMessage name="lastname" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-3 control-label" htmlFor="email">
                        Email *
                      </label>
                      <div className="col-sm-8">
                        <Field type="email" name="email" placeholder="email@example.com" className="form-control" />
                        <ErrorMessage name="email" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-3 control-label" htmlFor="password">
                        Mot de passe *
                      </label>
                      <div className="col-sm-8">
                        <Field type="password" name="password" className="form-control" />
                        <ErrorMessage name="password" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
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
                      <label className="col-sm-3 control-label" htmlFor="phone">
                        Type de compte
                      </label>
                      <div className="col-sm-8">
                        <Field as="select" name="actype" className="form-control">
                          <option value="host" selected>Herbergeur</option>
                          <option value="student">Étudiant</option>
                        </Field>
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
