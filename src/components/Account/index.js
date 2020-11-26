import React from 'react';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { Col, Row } from 'react-bootstrap';
import SideNaw from '../SideNav/SideNav';

const AccountPage = () => (
  <div  className="container">
    <Row/>
    <Col sm={2} className="justify-content-start">
      <SideNaw/>
    </Col>
    <Col sm={10} >
      <h1>Account Page</h1>
      <PasswordChangeForm />
    </Col>




  </div>
);

export default AccountPage;