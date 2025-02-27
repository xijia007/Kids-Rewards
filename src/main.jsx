import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import { AuthProvider } from './context/AuthContex.jsx'
// import './fanta.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Home />
    </AuthProvider>
 
  </StrictMode>
)
