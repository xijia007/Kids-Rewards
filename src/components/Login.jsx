import NaviHome from "../utils/navi-home"
import NaviSignUp from "../utils/navi-signup"
import '../css/Login.css' 
import React, { useState } from 'react'

export default function Login() {

    const [isRegistration, setIsRegistration] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const [authenticating, setAuthenticating] = useState(false)
  
    async function handleAuthenticate() {
  
    }

    return (

        <div className="login-container">
            <div className="home-button-container">
                <NaviHome className="home-button" />
            </div>
            
            <h1 className="login-title">Welcome to Kids Rewards</h1>


            <h1 className="login-subtitle">Login to discover more!</h1>

            <form className="login-form">
                <input 
                type="email" 
                value={email} 
                placeholder="Email" 
                className="login-input" 
                onClick={(e)=>{setEmail(e.target.value)}}
                />
                <input
                type="password"
                value={password} 
                placeholder="Password"
                className="login-input"
                onClick={(e)=>{setPassword(e.target.value)}}
                />
                <button 
                type="submit" 
                className="login-button" 
                onClick={handleAuthenticate}
                >
                Sign In
                </button>
            </form>

            <h4 className="login-subtitle">Don`t have an account? Sign Up to discover more!</h4>
            <NaviSignUp />
  
  
       
  
  
    
      </div>
    )
}