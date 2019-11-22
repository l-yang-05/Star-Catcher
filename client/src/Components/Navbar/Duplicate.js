// src/components/NavBar.js

import React from "react";
import { Link } from "react-router-dom";
import './Index.css';
import { Button } from 'react-bootstrap';

const Duplicate = () => {
    return (
        <div>
            <span>
                <nav className="menu">
                    <img src="./slade3.png" alt="logo" />
                    <ul>
                        <li><Button variant="outline-primary"><Link to="/run">Add Run</Link></Button></li>
                        <li><Button variant="outline-primary"><Link to="/profile">Profile</Link></Button></li>
                        <li><Button variant="outline-primary"><Link to="/search">Search Student</Link></Button></li>
                        <li><Button variant="outline-primary"><Link to="/">Log out</Link></Button></li>
                    </ul>
                </nav>
            </span>
        </div>
    );
};

export default Duplicate;