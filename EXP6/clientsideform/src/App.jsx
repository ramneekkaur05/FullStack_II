import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  // Email validation
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.com$/i
    return emailRegex.test(value)
  }

  // Password validation
  const validatePassword = (value) => {
    const checks = {
      startsWithCapital: /^[A-Z]/.test(value),
      hasLowercase: /[a-z]/.test(value),
      hasNumber: /\d/.test(value),
      hasSpecialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value),
      minLength: value.length >= 8
    }
    return checks
  }

  // Get password strength level
  const getPasswordStrength = (value) => {
    const checks = validatePassword(value)
    const passedChecks = Object.values(checks).filter(Boolean).length
    
    if (passedChecks <= 2) return { level: 'Weak', color: '#ff6b6b' }
    if (passedChecks < 5) return { level: 'Moderate', color: '#ffd93d' }
    return { level: 'Strong', color: '#4caf50' }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    // Validate email
    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(email)) {
      newErrors.email = 'Email must be valid with .com domain (e.g., example@domain.com)'
    }

    // Validate password
    if (!password) {
      newErrors.password = 'Password is required'
    } else {
      const passwordChecks = validatePassword(password)
      const failedChecks = []
      
      if (!passwordChecks.startsWithCapital) failedChecks.push('start with a capital letter')
      if (!passwordChecks.hasLowercase) failedChecks.push('contain at least one lowercase letter')
      if (!passwordChecks.hasNumber) failedChecks.push('contain at least one number')
      if (!passwordChecks.hasSpecialChar) failedChecks.push('contain at least one special character')
      if (!passwordChecks.minLength) failedChecks.push('be at least 8 characters long')

      if (failedChecks.length > 0) {
        newErrors.password = `Password must ${failedChecks.join(', ')}`
      }
    }

    setErrors(newErrors)

    // Submit only if no errors
    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted successfully!')
      // Clear form immediately after alert
      setEmail('')
      setPassword('')
      setSubmitted(false)
      console.log('Form submitted successfully!')
    }
  }

  return (
    <div className="container">
      <div className="form-wrapper">
        <h1>Client-Side Form Validation</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email ID</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@domain.com"
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className={errors.password ? 'input-error' : ''}
            />
            {errors.password && <span className="error">{errors.password}</span>}
            {password && (
              <div className="strength-indicator" style={{ borderColor: getPasswordStrength(password).color }}>
                <span style={{ color: getPasswordStrength(password).color }}>Strength: {getPasswordStrength(password).level}</span>
              </div>
            )}
            <div className="password-requirements">
              <p>Password must:</p>
              <ul>
                <li className={password && /^[A-Z]/.test(password) ? 'valid' : ''}>
                  Start with a capital letter
                </li>
                <li className={password && /[a-z]/.test(password) ? 'valid' : ''}>
                  Contain at least one lowercase letter
                </li>
                <li className={password && /\d/.test(password) ? 'valid' : ''}>
                  Contain at least one number
                </li>
                <li className={password && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password) ? 'valid' : ''}>
                  Contain at least one special character
                </li>
                <li className={password && password.length >= 8 ? 'valid' : ''}>
                  Be at least 8 characters long
                </li>
              </ul>
            </div>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default App
