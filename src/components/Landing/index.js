import React, { useState, useEffect } from 'react';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Landing = () => {
  return (
    <>

      <div className="Landing">
        <h1 className="landing-title">go and find your favourite films and TV series</h1>

        <Link  to={ROUTES.HOME} ><button>enter</button></Link>


      </div>
    </>
  );
};

export default Landing;