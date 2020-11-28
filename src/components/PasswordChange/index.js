import React, { Component } from 'react';

import { withFirebase } from '../Firebase';
import { Button, Form } from 'react-bootstrap';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';

    return (
      <form onSubmit={this.onSubmit} className="form-pass-change">


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

        <Button variant="primary" type="submit" disabled={isInvalid}>
          Reset My Password
        </Button>


        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withFirebase(PasswordChangeForm);