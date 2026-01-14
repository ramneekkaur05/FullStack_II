import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    message: ''
  })

  const [submissions, setSubmissions] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.age || !formData.message) {
      alert('Please fill in all fields!')
      return
    }

    setSubmissions((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...formData
      }
    ])

    setFormData({
      name: '',
      email: '',
      age: '',
      message: ''
    })
  }

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      age: '',
      message: ''
    })
  }

  return (
    <div className="App">
      <h1>Simple Form SPA</h1>
      
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              min="1"
              max="120"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="5"
            ></textarea>
          </div>

          <div className="button-group">
            <button type="submit" className="submit-btn">Submit</button>
            <button type="button" className="reset-btn" onClick={handleReset}>Reset</button>
          </div>
        </form>
      </div>

      {submissions.length > 0 && (
        <div className="submitted-data">
          <h2>All Submitted Data</h2>
          <div className="submissions-list">
            {submissions.map((entry, index) => (
              <div key={entry.id} className="data-display">
                <div className="data-header">
                  <span className="entry-number">Entry #{index + 1}</span>
                  <span className="entry-timestamp">ID: {entry.id}</span>
                </div>
                <div className="data-item">
                  <span className="label">Name:</span>
                  <span className="value">{entry.name}</span>
                </div>
                <div className="data-item">
                  <span className="label">Email:</span>
                  <span className="value">{entry.email}</span>
                </div>
                <div className="data-item">
                  <span className="label">Age:</span>
                  <span className="value">{entry.age}</span>
                </div>
                <div className="data-item">
                  <span className="label">Message:</span>
                  <span className="value message-value">{entry.message}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
