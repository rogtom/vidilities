import React from "react";
import { Button, Nav } from 'react-bootstrap';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';

const SideNaw =({toggle}) => {

  const handleToggle = () => {
    toggle(true)
  }

  return (
    <Nav defaultActiveKey="/home" className="flex-column">


      <span style={{cursor: 'pointer'}} onClick={handleToggle}>Change password</span>
      <span style={{cursor: 'pointer'}} >User favorites</span>

    </Nav>
  )
}
export default SideNaw