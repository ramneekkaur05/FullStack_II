import { useState } from 'react'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="theme-toggle-card">
        <h1>Theme Toggle SPA</h1>
        <p className="subtitle">Switch between light and dark mode</p>
        
        <div className="theme-content">
          <div className="theme-icon">
            {isDarkMode ? '🌙' : '☀️'}
          </div>
          <p className="theme-status">
            Current Mode: <span className="theme-name">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
          </p>
        </div>

        <button className="toggle-btn" onClick={toggleTheme}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>

        <div className="features">
          <h3>Features:</h3>
          <ul>
            <li>Dynamic theme switching</li>
            <li>Smooth transitions</li>
            <li>State management with React</li>
            <li>CSS styling updates</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
