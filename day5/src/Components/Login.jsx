import React, { useState } from 'react'
import"./Login.css"
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate();
  const [popupStyle, showPopup] = useState("hide")
  const popup = () =>{
    showPopup("login-popup")
    setTimeout(() => showPopup("hide"), 3000)
  }
  navigate('/');
  return (
    <div className="cover">
    <h1>Login</h1>
    <input type="email" id="email" placeholder="username"/>
    <input type="password" placeholder="password"/>
    
    <div className="login-btn" onClick={popup}>Login</div>
    <p className='text'>or login using</p><br></br>
    <div className="alt-login">
    <div className="facebook"></div>
    <div className="google"></div>
    </div>
    <p className="reg">Don't have an Account</p>
    <Link to="/register"><button className="log">Sign Up</button></Link>
    
    <div className={popupStyle}>
    <h3>Login Failed</h3>
    <p>Username or password incorrect</p>
    </div>
    </div>
  )
}

export default Login