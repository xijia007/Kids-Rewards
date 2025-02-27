import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom'
import KidDetail from './components/KidDetail'
import RewardsDetails from './components/RewardsDetails'
import AddPoints from './components/AddPoints'
import Signup from './components/Signup'
import Login from './components/Login'
import SignUp from './components/Signup'
import AddKids from './components/AddKids'
import { useKids } from './context/KidsContext'
import { KidsProvider } from './context/KidsContext'
import './css/Home.css'
import { useAuth } from './context/AuthContex'

function HomeContent() {

  // const { globalUser, isLoading, globalData} = useAuth()
  // const isAuthenticated = globalUser
  // const isData = globalData && !!Object.keys(globalData || {}).length

  // const authenticatedContent = (
  //   <>
  //     <Stats />
  //     <History />
  //   </>
  // )

  const navigate = useNavigate()

  const { kids } = useKids()

  const navigateToKidDetail = kid => {
    navigate('/kid-detail', {
      state: {
        kid: {
          ...kid,
          points: kid.points || 0,
          age: parseInt(kid.age, 10),
        },
      },
    })
  }

  const navigateToLogin = () => navigate('/login')

  const navigateToAddKids = () => navigate('/add-kids')

  return (
    <div className="app-container">
      
      <header className="header">
        <h1 className="text-gradient">Kids Rewards</h1>
        <button onClick={navigateToLogin} className="sign-up-btn">
          <span>Sign up/Sign in</span>
          <i className="fa-solid fa-user-circle"></i>
        </button>
      </header>

      <main className="main-content">
        
        <div className="card-container">
          {kids.map(kid => (
            <div
              className="card"
              key={kid.id}
              onClick={() => navigateToKidDetail(kid)}
            >
              {kid.image ? (
                <img src={kid.image} alt={kid.name} className="kid-avatar" />
              ) : (
                <i className="fas fa-child"></i>
              )}
              <h2>{kid.name}</h2>
              <div className="kid-stats">
                <p>Age: {kid.age}</p>
                <p>Points: {kid.points}</p>
              </div>
            </div>
          ))}

          <div className="card add-kid-card" onClick={navigateToAddKids}>
            <i className="fas fa-user-plus"></i>
            <h2>Add Kids</h2>
            <p>Add more children to your account</p>
          </div>

        </div>
      </main>

      <footer className="footer">
        <p className="text-gradient">&copy; 2025 Kids Rewards by Xi</p>
      </footer>
    </div>
  )
}

function Home() {
  const [kids, setKids] = useState([])

  const handleAddKid = newKid => {
    setKids(prevKids => [
      ...prevKids,
      {
        ...newKid,
        id: Date.now(),
        points: Number(newKid.points) || 0,
        age: parseInt(newKid.age, 10),
        history: [],
      },
    ])
  }

  return (
    <KidsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeContent kids={kids} />} />
          <Route path="/kid-detail" element={<KidDetail />} />
          <Route path="/rewards-detail" element={<RewardsDetails />} />
          <Route path="/add-points" element={<AddPoints />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route
            path="/add-kids"
            element={<AddKids onAddKid={handleAddKid} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </KidsProvider>
  )
}

export default Home
