import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NaviLogin() {
  const navigate = useNavigate()

  const navigateToLogin = () => {
    navigate('/login')
  }

  return (
    <button onClick={navigateToLogin} className="back-button">
      Go to Login Page
    </button>
  )
}
