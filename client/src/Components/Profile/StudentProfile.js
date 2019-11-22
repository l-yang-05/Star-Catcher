import React, { useState, useEffect } from "react";
import './Index.css';
import { useAuth0 } from "../../react-auth0-spa";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

import BarGraph from "./BarGraph";
import LineGraph from "./LineGraph";

const StudentProfile = ({ component: Component, path, ...rest }) => {
    const { isAuthenticated, logout } = useAuth0();

    const [student, setStudent] = useState([]);
    const [run, setRun] = useState([]);

    const getProfile = async () => {
        try {
            const res = await fetch('/students/1');
            const text = await res.text();
            const response = text.length ? JSON.parse(text) : {}
            setStudent(response)
        }
        catch (error) {
            throw error;
        }
    }

    const getRun = async () => {
        try {
            const res = await fetch('/category/1/1');
            const text = await res.text();
            const response = text.length ? JSON.parse(text) : {}
            setRun(response)
        }
        catch (error) {
            throw error;
        }
    }

    // the profile information and the run information
    useEffect(() => {
        getProfile()
    }, []);

    useEffect(() => {
        getRun()
    }, []);
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

            <div className="card-1">
                <img className="avatar" src="http://accetedu.in/wp-content/uploads/2017/08/empty-profile-grey.jpg" alt="avatar" />
                {student.map(p => {
                    return <>
                        <h2>{p.full_name}</h2>
                        <h3>Previous Rank: {p.previous_rank}</h3>
                    </>
                })
                }
                <hr />
                {run.map(p => {
                    return <>
                        <h3>Run Number: {p.run_number}</h3>
                        <h3>Notes: {p.notes}</h3>
                    </>
                })
                }
            </div>
            <div>
                <BarGraph />
                <LineGraph />
            </div>
        </React.Fragment>


    );
};

export default StudentProfile;