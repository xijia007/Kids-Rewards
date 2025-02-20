// navi-home.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NaviHome() {
  const navigate = useNavigate()

  const navigateToHome = () => {
    navigate('/')
  }

  return (
    <button onClick={navigateToHome} className="back-button">
      Back to Home
    </button>
  )
}
