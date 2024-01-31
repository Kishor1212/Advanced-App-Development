// import React from 'react'
import { useState } from "react";
import './Signup.css';
import { useNavigate } from "react-router-dom";
 
export default function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const navigate=useNavigate();

    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };
 

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };
 
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };
 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || email === "" || password === "") {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };
 
    
   
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? "block" : "none",
                }}
            >
                <h1>User {name} successfully registered!!</h1>
            </div>
        );
    };
 
    
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? "" : "none",
                }}
            >
                <h4>Please enter all the fields</h4>
            </div>
        );
    };
 
    return (
        <div className="form1">
            <div>
                <h1>User Registration</h1>
            </div>
 
            {/* Calling to the methods */}
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>
 
            <form>
                {/* Labels and inputs for form data */}
                <label className="label">Name</label>
                <input
                    onChange={handleName}
                    className="input"
                    value={name}
                    id="name"
                    type="text"
                />
 
                <label className="label">Email</label>
                <input
                    onChange={handleEmail}
                    className="input"
                    value={email}
                    id="email"
                    type="email"
                />
 
                <label className="label">Password</label>
                <input
                    onChange={handlePassword}
                    className="input"
                    value={password}
                    type="password"
                />
                
 
             <button onClick={handleSubmit} className="btn" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

// export default Signup