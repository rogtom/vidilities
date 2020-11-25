import React, { useState, useEffect } from "react";
import Navigation from "../Navigation";


const Header = ({authUser}) => {
    return (
        <Navigation authUser={authUser}/>
    )
}
export default Header;