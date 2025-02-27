import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NaviSignUp() {
  const navigate = useNavigate()

  const navigateToSignUp = () => {
    navigate('/signup')
  }

  return (
    <button onClick={navigateToSignUp} className="back-button">
      Go to Sign Up Page
    </button>
  )
}
