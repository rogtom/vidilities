import React, { useState, useEffect } from 'react';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Landing = () => {
  return (
    <>

      <div className="Landing">
        <h1>Landing Page</h1>

        <Link to={ROUTES.SIGN_IN}><Button variant="primary" size="lg">
          Sign In
        </Button>{' '}</Link>

      </div>
    </>
  );
};

export default Landing;