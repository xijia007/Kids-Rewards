import React from 'react'
import NaviHome from '../utils/navi-home'
import '../css/Signup.css'

function Signup() {
  return (
    <div className="signup-container">
      <h1 className="signup-title">Welcome to Kids Rewards</h1>
      <h4 className="signup-subtitle">Sign Up/Sign In to discover more!</h4>

      <form className="signup-form">
        <input type="text" placeholder="Username" className="signup-input" />
        <input type="email" placeholder="Email" className="signup-input" />
        <input
          type="password"
          placeholder="Password"
          className="signup-input"
        />
        <button type="submit" className="signup-button">
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

      <p className="login-link">
        Already have an account? <a href="#">Log in</a>
      </p>

      <NaviHome className="home-button" />
    </div>
  )
}

export default Signup
