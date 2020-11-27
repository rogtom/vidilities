import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { Button, Form } from 'react-bootstrap';
import { PasswordForgetLink } from '../PasswordForget';
import "./signin.scss"

const SignInPage = () => (
  <div className="container d-flex flex-column align-items-center justify-content-center ">
    <h1>SignIn</h1>
    <SignInForm/>
    <div>
      <SignUpLink/>
      <PasswordForgetLink/>
    </div>

  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <form  onSubmit={this.onSubmit} className="dupa">
        <Form.Group controlId="formBasicEmail">
          <Form.Label >Email address</Form.Label>
          <Form.Control type="email"
                        placeholder="Enter email"
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        className="email-signIn"
          />
          <Form.Text className="text-muted email-description" >
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>


        <Form.Group controlId="formBasicPasswordTwo">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"
                        name="password"
                        value={password}
                        placeholder="Enter password again"
                        onChange={this.onChange}
          />
        </Form.Group>


        <Button variant="outline-secondary" type="submit" disabled={isInvalid} size="sm" className="signIn-btn text-white">
          Sign In
        </Button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };