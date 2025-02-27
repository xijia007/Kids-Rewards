import { rewardOptions } from '../utils'
import React, { useState } from 'react'
import NaviHome from '../utils/navi-home'
import NaviKidDetail from '../utils/navi-kid-detail'

export default function RewardsDetails() {
  const [newReward, setNewReward] = useState({ name: '', points: '' })
  const [rewards, setRewards] = useState(rewardOptions)

  const handleInputChange = e => {
    const { name, value } = e.target
    setNewReward(prev => ({ ...prev, [name]: value }))
  }

  const addNewReward = () => {
    if (newReward.name && newReward.points) {
      setRewards(prev => [
        ...prev,
        { ...newReward, points: Number(newReward.points) },
      ])
      setNewReward({ name: '', points: '' })
    }
  }

  // 按点数对奖励进行分类
  const categorizedRewards = rewards.reduce((acc, reward) => {
    const category = `${reward.points} points`
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(reward)
    return acc
  }, {})

  return (
    <div className='reward-detail-container'>
      
      <div className="header-content">
        <h1>Rewards Details Page</h1>
        <NaviKidDetail />
        <NaviHome />
      </div>

      <h4 className="reward-type-header-content">Select Rewards Type</h4>

      {Object.entries(categorizedRewards).map(([category, categoryRewards]) => (
        <div key={category} className="category-container">
          <h3 className="category-title">{category}</h3>
          <div className="rewards-grid">
            {categoryRewards.map((reward, index) => (
              <button key={index} className="reward-button">
                <h3 className="reward-name">{reward.name}</h3>
                <p className="reward-points">{reward.points} points</p>
              </button>
            ))}
          </div>
        </div>
      ))}

      <div>
        <h4 className="input-header-content">Add a new Reward Option</h4>
        <div className="input-content">
          <input
            type="text"
            name="name"
            className="input-container"
            value={newReward.name}
            onChange={handleInputChange}
            placeholder="Reward Name"
          />
          <input
            type="number"
            name="points"
            className="input-container"
            value={newReward.points}
            onChange={handleInputChange}
            placeholder="Points"
          />
        </div>
      </div>

      <div className="button-container">
        <button onClick={addNewReward} className="button">
          Add New Reward
        </button>
      </div>

    </div>
  )
}
