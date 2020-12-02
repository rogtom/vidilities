import React, { useState } from 'react';

import PasswordChangeForm from '../PasswordChange';
import { Col, Row } from 'react-bootstrap';
import SideNaw from '../SideNav/SideNav';
import UserFilms from '../UserFilms';

import { AuthUserContext } from '../Session';



const AccountPage = () => {

  const [pasShow, setPasShow] = useState(false)

  const toggleClass = () => {

    setPasShow( prevState => !prevState)
  }

  return (

  <AuthUserContext.Consumer>
    {authUser =>
      authUser &&
      <div  className="container  account">
        <h1>Account Page</h1>
        <Row className="d-flex justify-content-between ">
          <Col lg={2} className="justify-content-start">
          <SideNaw toggle={toggleClass} />
        </Col>
          <Col lg={10}>

            <div className="d-flex flex-column justify-content-between">
              {!pasShow &&<UserFilms />}
              {pasShow && <PasswordChangeForm />}
            </div>
          </Col>
        </Row>
      </div>


    }
  </AuthUserContext.Consumer>


)




};

export default AccountPage;