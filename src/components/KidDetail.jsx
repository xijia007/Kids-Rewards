import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import NaviHome from '../utils/navi-home'
import NaviRewardDetails from '../utils/navi-rewards'
import NaviAddPoints from '../utils/nav-add-points'
import '../css/KidDetail.css'

function KidDetail() {
  const location = useLocation()
  const navigate = useNavigate()
  const { kid: initialKid } = location.state || {}

  useEffect(() => {
    if (!initialKid) {
      navigate('/')
    }
  }, [initialKid, navigate])

  if (!initialKid) return null

  return (
    <div className="kid-container">
      <h1>{initialKid.name}'s Details</h1>
      <div className="navi-home">
        <NaviHome />
      </div>

      <div className="profile-section">
        {initialKid.image && (
          <img
            src={initialKid.image}
            alt={initialKid.name}
            className="kid-avatar-large"
          />
        )}
        <div className="kid-info">
          <div className="info-item">
            <span className="info-label">Age:</span>
            <span className="info-value">{initialKid.age}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Points Balance:</span>
            <span className="info-value">{initialKid.points}</span>
          </div>
        </div>
      </div>

      <div className="action-sections">
        <div className="action-card">
          <h3 className="action-title">Earn Points</h3>
          <NaviAddPoints />
          <p className="action-description">Add points for completed tasks</p>
        </div>

        <div className="action-card">
          <h3 className="action-title">Redeem Rewards</h3>
          <NaviRewardDetails />
          <p className="action-description">Spend points on approved rewards</p>
        </div>
      </div>

      <div className="history-section">
        <h2>Activity History</h2>
        <div className="history-list">
          {initialKid.history?.length > 0 ? (
            initialKid.history.map((item, index) => (
              <div key={index} className="history-item">
                <span className="history-date">{item.date}</span>
                <span className="history-description">{item.description}</span>
                <span className={`history-points ${item.type}`}>
                  {item.type === 'earned' ? '+' : '-'}
                  {item.points}
                </span>
              </div>
            ))
          ) : (
            <p className="no-history">No activity recorded yet</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default KidDetail
