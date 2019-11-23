import React from 'react';
import useForm from 'react-hook-form';

import { BrowserRouter as Route, NavLink } from 'react-router-dom';

const SignUp = (state) => {
    const { user, loggedInStatus } = state.state.state
    console.log(user, loggedInStatus)
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (state, e) => {
        alert("Signed up")
        e.target.reset()
    }
    console.log(errors);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
    }

    return (
        <div className="main contact-wrapper">
            <h1 className="sign">Sign up</h1>
            <div className="form-wrapper">
                <fieldset>
                    <form className="form1" onSubmit={handleSubmit(onSubmit)} method="POST">

                        <label htmlFor="fname">Full Name</label>
                        <input className="un" type="text" placeholder="Full Name" onChange={handleChange} name="full_name" id="fname" ref={register({ required: true, min: 5, pattern: /^[a-zA-z']([^0-9]*)$/ })} />
                        <p className="error-msg">{errors.full_name && "Please enter in your full name! Make sure you're only submitting in letter characters in this field!!!"}</p>

                        <label htmlFor="mail">Email Address</label>
                        <input  className="un" type="text" placeholder="Email address" onChange={handleChange} name="email" id="mail" ref={register({ required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
                        <p className="error-msg">{errors.email && 'Please enter in a vaild email address!'}</p>

                        <label htmlFor="msg">Password</label>
                        <input  className="pass" type="text" name="message" placeholder="Password" id="msg" onChange={handleChange} ref={register({ required: true, pattern: /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/ })}></input>
                        <p className="error-msg">{errors.message && 'Please enter in a valid password. (Needs to have 1 capital letter, 1 number, and 1 special character'}</p>

                        <button className="submit "type="submit" value="Submit" name="submit" id="sub">Sign up</button>
                    </form>
                </fieldset>
                <NavLink to="/login" className="forgot">New? Sign up here!</NavLink>
            </div>
        </div >


    )

}

export default SignUp;