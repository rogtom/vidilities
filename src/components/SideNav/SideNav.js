import React from "react";
import { Button, Nav } from 'react-bootstrap';
import * as ROUTES from '../../constants/routes';

const SideNaw =({toggle}) => {

  const handleToggle = () => {
    toggle(true)
  }

  return (
    <Nav defaultActiveKey="/home" className="flex-column side-nav" >

      <span style={{cursor: 'pointer', marginBottom: "25px",}} onClick={handleToggle}>User favorites</span>
      <span style={{cursor: 'pointer', marginBottom: "25px"}} onClick={handleToggle}>Change password</span>

    </Nav>
  )
}
export default SideNaw