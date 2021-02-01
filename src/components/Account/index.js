import React from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import PasswordChangeForm from '../PasswordChange';
import { Col, Row } from 'react-bootstrap';
import SideNaw from '../SideNav/SideNav';
import UserFilms from '../UserFilms/';
import { AuthUserContext } from '../Session';


import { ACCOUNT, PASSWORD_CHANGE } from '../../constants/routes';


const AccountPage = () => {


  return (
      <AuthUserContext.Consumer>
      {authUser =>
        authUser &&
        <Router>
        <div className="container  account">
          <h1>Account Page</h1>
          <Row className="d-flex justify-content-between ">
            <Col lg={2} className="justify-content-start">
              <SideNaw />
            </Col>
            <Col lg={10}>

              <div className="d-flex flex-column justify-content-between">

                <Switch>

                  <Route path={ACCOUNT} component={UserFilms} />
                  <Route path={PASSWORD_CHANGE} component={PasswordChangeForm} />

                </Switch>

              </div>
            </Col>
          </Row>
        </div>

        </Router>
      }
    </AuthUserContext.Consumer>


  );
};

export default withRouter(AccountPage);