import { lazy, Suspense } from 'react'
import './App.css'

const Dashboard = lazy(() => import('./Components/dashboard.jsx'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div className="loading-container">Loading...</div>}>
        <Dashboard />
      </Suspense>
    </div>
  )
}

export default App
