import React from 'react';
import useForm from 'react-hook-form';

import { BrowserRouter as Route, NavLink } from 'react-router-dom';


const Login = (state) => {
    const { user, loggedInStatus } = state.state.state
    console.log(user, loggedInStatus)

    const { register, handleSubmit, errors } = useForm()


    const onSubmit = (data, e) => {
        alert("Logged in")

        e.target.reset()
    }
    console.log(errors);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
    }

    return (
        <div className="main contact-wrapper">
            <h1 className="sign">Login</h1>
            <div className="form-wrapper">
                <fieldset>
                    <form className="form1" name="contact-me" onSubmit={handleSubmit(onSubmit)} method="POST">

                        <label htmlFor="mail">Email Address</label>
                        <input className="un" type="text" placeholder="Email address" onChange={handleChange} name="email" id="mail" ref={register({ required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
                        <p className="error-msg">{errors.email && 'Please enter in a vaild email address!'}</p>

                        <label htmlFor="pass">Password</label>
                        <input type="text" name="password" className="pass" placeholder="Password" id="pass" onChange={handleChange} ref={register({ required: true, pattern: /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/ })}></input>
                        <p className="error-msg">{errors.password && 'Incorrect password'}</p>

                        <button className="submit " type="submit" value="Submit" name="submit" id="sub">Login</button>
                    </form>
                </fieldset>
                <div>

                    <NavLink to="/signup" className="forgot">New? Sign up here!</NavLink>

                </div>
            </div>
        </div >
    )
}

export default Login;