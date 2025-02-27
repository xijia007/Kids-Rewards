import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NaviKidDetail() {
  const navigate = useNavigate()

  const navigateToKidDetail = () => {
    navigate('/kid-detail')
  }

  return (
    <button onClick={navigateToKidDetail} className="back-button">
      Go to kid Detail Page
    </button>
  )
}
