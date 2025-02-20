import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NaviRewardDetails() {
  const navigate = useNavigate()

  const navigateToRewardDetails = () => {
    navigate('/rewards-detail')
  }

  return (
    <button onClick={navigateToRewardDetails} className="back-button">
      Go to Rewards Details Page
    </button>
  )
}
