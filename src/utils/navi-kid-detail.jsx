import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NaviKidDetail() {
  const navigate = useNavigate()

  const navigateToHome = () => {
    navigate('/kid-detail')
  }

  return (
    <button onClick={navigateToHome} className="back-button">
      Go to kid Detail Page
    </button>
  )
}
