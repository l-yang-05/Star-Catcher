import React, { useEffect, useState } from 'react';
import { useAuth0 } from "../../react-auth0-spa";
import './Index.css';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

const Search = () => {
    const { isAuthenticated, logout } = useAuth0();

    //function for searching items
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    //function to get students from api
    const [students, setStudents] = useState([]);
    const fetchStudents = async () => {
        try {
            const res = await fetch('/students');
            const text = await res.text();
            const response = text.length ? JSON.parse(text) : {}
            setStudents(response)
        }
        catch (error) {
            throw error;
        }
    }

    //filtering search terms and setting them in state
    useEffect(() => {
        const results = students.map(s => s.full_name).filter(s =>
            s.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results)
    }, [searchTerm]);

    useEffect(() => {
        fetchStudents()
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
            <div className="wrapper-search">
                <form>
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleChange}
                    />

                    {/* if search results are empty show students list
                else show the searchresults */}
                    <table>
                        <thead>
                            <tr>
                                <th>Students</th>
                            </tr>
                        </thead>
                        {
                            (searchTerm === "") ?
                                students.map(item => {
                                    return <tr>
                                        <td>
                                            <Link to={{ pathname: `student-profile/${item.full_name}`, query: { id: item.student_id, name: item.full_name, rank: item.previous_rank } }}>{item.full_name}</Link>
                                        </td>
                                    </tr>

                                })
                                :
                                searchResults.map(item => (
                                    <tr>
                                        <td>
                                            <Link to={{ pathname: `student-profile/${item}`, query: { id: item.student_id, name: item.full_name, rank: item.previous_rank } }}>{item}</Link>
                                        </td>
                                    </tr>
                                ))
                        }
                    </table>
                </form>
            </div>
        </React.Fragment >

    )
}

export default Search;