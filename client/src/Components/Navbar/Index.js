// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { Link } from "react-router-dom";
import './Index.css';
import { Button } from 'react-bootstrap';

const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div>
            {!isAuthenticated && (
                <div className="auth">
                    <img src="./slade3.png" alt="logo" />
                    <h1>Please Log In to use app</h1>
                    <button onClick={() => loginWithRedirect({})}>
                        Log In
                </button>
                </div>
            )}
            {isAuthenticated && (
                <div>
                    <span>
                        <nav className="menu">
                            <img src="./slade3.png" alt="logo" />
                            <ul>
                                <li><Button variant="outline-primary"><Link to="/run">Add Run</Link></Button></li>
                                <li><Button variant="outline-primary"><Link to="/profile">Profile</Link></Button></li>
                                <li><Button variant="outline-primary"><Link to="/search">Search Student</Link></Button></li>
                                <li onClick={() => logout()}><Button variant="outline-primary">Log out</Button></li>
                            </ul>
                        </nav>
                    </span>
                </div >
            )}
        </div >
    );
};

export default NavBar;