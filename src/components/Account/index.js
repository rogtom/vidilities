import React, { useState } from 'react';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { Button, Col, Row } from 'react-bootstrap';
import SideNaw from '../SideNav/SideNav';

import UserFilms from '../UserFilms';
import { AuthUserContext } from '../Session';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';


const AccountPage = () => {

  const [pasShow, setPasShow] = useState(false)

  const toggleClass = () => {
    setPasShow( prevState => !prevState)
  }

  return (




  <AuthUserContext.Consumer>
    {authUser =>
      authUser &&
      <div  className="container">
        <Row className="d-flex"/>
        <Col sm={2} className="justify-content-start">
          <SideNaw toggle={toggleClass}/>
        </Col>
        <Col sm={10} >
          <h1>Account Page</h1>
          <div>
            <UserFilms/>
            {pasShow && < PasswordChangeForm />}
          </div>
        </Col>
      </div>


    }
  </AuthUserContext.Consumer>


)




};

export default AccountPage;