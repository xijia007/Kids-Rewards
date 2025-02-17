import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import KidDetail from './components/KidDetail';
import RewardsDetails from './components/RewardsDetails';
import AddPoints from './components/AddPoints';
import Signup from './components/Signup';
import AddKids from './components/AddKids';
import './css/App.css';

function AppContent() {
  const navigate = useNavigate();

  const navigateToKidDetail = () => navigate('/kid-detail');
  const navigateToSignUp = () => navigate('/sign-up');
  const navigateToAddKids = () => navigate('/add-kids');

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="text-gradient">Kids Rewards</h1>
        <button onClick={navigateToSignUp} className="sign-up-btn">
          <span>Sign up/Sign in</span>
          <i className="fa-solid fa-user-circle"></i>
        </button>
      </header>

      <main className="main-content">
        <div className="card-container">
          <div className="card" onClick={navigateToKidDetail}>
            <i className="fas fa-child"></i>
            <h2>Kid Details</h2>
            <p>View and manage your kids' rewards</p>
          </div>
          <div className="card" onClick={navigateToAddKids}>
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
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/kid-detail" element={<KidDetail />} />
        <Route path='/rewards-detail' element={<RewardsDetails />} />
        <Route path='/add-points' element={<AddPoints />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/add-kids' element={<AddKids />} />
      </Routes>
    </Router>
  );
}

export default App;
