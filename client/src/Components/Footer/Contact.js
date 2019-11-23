import React from 'react';
import useForm from 'react-hook-form';

const Contact = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (state, e) => {
        alert("Logged in")
        e.target.reset()
    }
    console.log(errors);
    return (
        <form name="contact" method="POST" onSubmit={handleSubmit(onSubmit)} className="contact-form column-right">
            <label htmlFor="form-label" htmlFor="user_name">Full Name</label>
            <input type="text" className="form-control" placeholder="Full Name" name="full_name" id="fname" ref={register({ required: true, min: 5, pattern: /^[a-zA-z']([^0-9]*)$/ })} />
            <p className="error-msg">{errors.full_name && "Please enter in your full name! Make sure you're only submitting in letter characters in this field!!!"}</p>

            <label htmlFor="mail" className="form-label mt-3">Email Address</label>
            <input type="text" className="form-control" placeholder="Email address" name="email" id="mail" ref={register({ required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
            <p className="error-msg">{errors.email && 'Please enter in a vaild email address!'}</p>

            <label htmlFor="msg" className="form-label mt-3">Message</label>
            <textarea name="message" className="form-control" placeholder="Write your message in here!" id="msg" ref={register({ required: true, min: 2, max: 1000, maxLength: 200 })}></textarea>
            <p className="error-msg">{errors.message && 'Please enter in a message!'}</p>

            <button className="btn btn-light mt-2" type="submit" value="Submit" id="sub">Submit</button>
        </form>
    )
}

export default Contact;