import React from "react";
import './Index.css';
import { useAuth0 } from "../../react-auth0-spa";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';


const TeacherProfile = ({ component: Component, path, ...rest }) => {
    const { isAuthenticated, logout } = useAuth0();

    return (
        <React.Fragment>
            <div className="flex-wrap">
                <img src="./slade3.png" alt="logo" className="logo" />
                <ul className="nav-back">
                    <li><Link to="/"><Button>Go back</Button></Link></li>
                    {isAuthenticated && <li onClick={() => logout()}><Button>Log out</Button></li>}
                    {!isAuthenticated && <li onClick={() => logout()}><Button>Log out</Button></li>}
                </ul>
            </div>
            <div className="card">
                <div className="content">
                    <img className="avatar" src="http://accetedu.in/wp-content/uploads/2017/08/empty-profile-grey.jpg" alt="avatar" />
                    <h2>Lucy Yang</h2>
                    <h3>Role: Teacher</h3>
                </div>
            </div>
        </React.Fragment>
    );
};

export default TeacherProfile;