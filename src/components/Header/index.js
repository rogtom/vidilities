import React, { useState, useEffect } from "react";
import Navigation from "../Navigation";
import Logo, {ReactComponent as Oczy} from "../../assets/Logo.svg"
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';

const Header = ({authUser}) => {
    return (
      <div className="d-flex justify-content-between align-items-center">
        <Link to={ROUTES.LANDING}>
          <div className="d-flex align-items-center">
          <Oczy height="100px" style={{marginLeft: "50px", marginRight: "20px"}}/>
          <h1>L<span className="doble-oo">oo</span>K</h1>
        </div>
        </Link>

          <Navigation authUser={authUser} />
      </div>
    )
}
export default Header;