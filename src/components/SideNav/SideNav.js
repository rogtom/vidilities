import React from 'react';
import { Nav } from 'react-bootstrap';
import { USER_FAVORITE, PASSWORD_CHANGE } from '../../constants/routes';
import {  withRouter, Link } from "react-router-dom";

const SideNaw = () => {

  return (

    <Nav defaultActiveKey="/home" className="flex-column side-nav">


      <Link to={USER_FAVORITE}>User favorite</Link>
      <Link to={PASSWORD_CHANGE}>Change password</Link>

    </Nav>

  );
};
export default withRouter(SideNaw);