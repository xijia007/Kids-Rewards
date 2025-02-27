import React, { useState } from 'react'
import NaviHome from '../utils/navi-home'
import '../css/Signup.css'
import NaviLogin from '../utils/navi-login'

function Signup() {

  const [isRegistration, setIsRegistration] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [authenticating, setAuthenticating] = useState(false)

  async function handleAuthenticate() {

  }


  return (
    <div className="signup-container">
      <div className="home-button-container">
        <NaviHome className="home-button" />
      </div>
      <h1 className="signup-title">Welcome to Kids Rewards</h1>
      <h4 className="signup-subtitle">Sign Up to discover more!</h4>

      <form className="signup-form">
        <input type="text" placeholder="Username" className="signup-input" />
        <input 
          type="email" 
          value={email} 
          placeholder="Email" 
          className="signup-input" 
          onClick={(e)=>{setEmail(e.target.value)}}
        />
        <input
          type="password"
          value={password} 
          placeholder="Password"
          className="signup-input"
          onClick={(e)=>{setPassword(e.target.value)}}
        />
        <button 
          type="submit" 
          className="signup-button" 
          onClick={handleAuthenticate}
        >
          Sign Up
        </button>
      </form>

      <div className="signup-options">
        <p>Or sign up with:</p>
        <div className="social-buttons">
          <button className="social-button google">Google</button>
          <button className="social-button facebook">Facebook</button>
        </div>
      </div>

      <NaviLogin />
      
    </div>
  )

}

export default Signup
