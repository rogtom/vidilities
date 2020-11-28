import React, { Component } from 'react';
import { Link, withRouter  } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import SignOutButton from '../SignOut';

const SignUpPage = () => (
  <div className="container d-flex flex-column align-items-center justify-content-center">
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);


const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};



class SignUpFormBase  extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE }
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {

    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;


    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';


    return (
      <div >
        <form onSubmit={this.onSubmit} className="sign-up-form">

          <Form.Group controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text"
                          name="username"
                          value={username}
                          placeholder="Enter Full Name"
                          onChange={this.onChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email"
                          placeholder="Enter email"
                          name="email"
                          value={email}
                          onChange={this.onChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPasswordOne">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="password"
                          name="passwordOne"
                          value={passwordOne}
                          placeholder="Enter password"
                          onChange={this.onChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPasswordTwo">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"
                          name="passwordTwo"
                          value={passwordTwo}
                          placeholder="Enter password again"
                          onChange={this.onChange}
            />
          </Form.Group>

          <Button variant="outline-secondary" type="submit" disabled={isInvalid} className="submit-btn text-white">
            Submit
          </Button>

          {error && <p>{error.message}</p>}

        </form>
      </div>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };













