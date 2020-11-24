import React, { useState, useEffect } from "react";
import * as ROUTES from "../../constants/routes";
import {Link} from "react-router-dom";


const Landing =() => {
    return (
        <>

            <div className="Landing">
                <h1>Landing Page</h1>
                <button>
                    <Link to={ROUTES.SIGN_IN}>Sign In</Link>
                </button>
            </div>
        </>
    )
}

export default Landing