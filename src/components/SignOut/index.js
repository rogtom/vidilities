import React from 'react';
import { Button } from 'react-bootstrap';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
const SignOutButton = ({ firebase }) => (


    <Button variant="outline-secondary" className="text-white" size="sm" onClick={firebase.doSignOut}>Sign Out</Button>




);

export default withFirebase(SignOutButton);