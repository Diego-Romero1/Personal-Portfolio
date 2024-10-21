import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/home.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="bg-gradient-to-r from-gray-900 to-blue-900">
      <App />
    </div>

  </React.StrictMode>
)
