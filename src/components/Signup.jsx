// import React, { useState } from 'react'
// import NaviHome from '../utils/navi-home'
// import '../css/Signup.css'
// import NaviLogin from '../utils/navi-login'

// function Signup() {
//   const [isRegistration, setIsRegistration] = useState(false)

//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const [authenticating, setAuthenticating] = useState(false)

//   async function handleAuthenticate(e) {

//   }

//   return (
//     <div className="signup-container">
//       <div className="home-button-container">
//         <NaviHome className="home-button" />
//       </div>
//       <h1 className="signup-title">Welcome to Kids Rewards</h1>
//       <h4 className="signup-subtitle">Sign Up to discover more!</h4>

//       <form className="signup-form">
//         <input type="text" placeholder="Username" className="signup-input" />
//         <input
//           type="email"
//           value={email}
//           placeholder="Email"
//           className="signup-input"
//           onClick={e => {
//             setEmail(e.target.value)
//           }}
//         />
//         <input
//           type="password"
//           value={password}
//           placeholder="Password"
//           className="signup-input"
//           onClick={e => {
//             setPassword(e.target.value)
//           }}
//         />
//         <button
//           type="submit"
//           className="signup-button"
//           onClick={handleAuthenticate}
//         >
//           Sign Up
//         </button>
//       </form>

//       <div className="signup-options">
//         <p>Or sign up with:</p>
//         <div className="social-buttons">
//           <button className="social-button google">Google</button>
//           <button className="social-button facebook">Facebook</button>
//         </div>
//       </div>

//       <NaviLogin />
//     </div>
//   )
// }

// export default Signup

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NaviHome from '../utils/navi-home'
import '../css/Signup.css'
import NaviLogin from '../utils/navi-login'
import { useAuth } from '../context/AuthContex'

function Signup() {
  const navigate = useNavigate()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [authenticating, setAuthenticating] = useState(false)

  async function handleAuthenticate(e) {
    e.preventDefault()
    if (!email || !email.includes('@') || !password || password.length < 6 || authenticating) {
      setError('Please enter a valid email and password (minimum 6 characters)')
      return
    }

    try {
      setAuthenticating(true)
      setError('')
      await signup(email, password)
      navigate('/')
    } catch (err) {
      console.error(err)
      setError(err.message)
    } finally {
      setAuthenticating(false)
    }
  }

  return (
    <div className="signup-container">
      <div className="home-button-container">
        <NaviHome className="home-button" />
      </div>
      <h1 className="signup-title">Welcome to Kids Rewards</h1>
      <h4 className="signup-subtitle">Sign Up to discover more!</h4>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form className="signup-form" onSubmit={handleAuthenticate}>
        <input
          type="email"
          value={email}
          placeholder="Email"
          className="signup-input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          className="signup-input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="signup-button"
          disabled={authenticating}
        >
          {authenticating ? 'Signing up...' : 'Sign Up'}
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