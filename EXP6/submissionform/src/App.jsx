import { useMemo, useState } from 'react'
import './App.css'

const STATES = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Andaman and Nicobar Islands',
  'Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi',
  'Jammu and Kashmir',
  'Ladakh',
  'Lakshadweep',
  'Puducherry'
]

const SKILLS = ['Programming', 'C', 'C++', 'Java', 'Python', 'JavaScript','MATLAB', 'HTML', 'CSS', 'React', 'Angular','Express.js', 'Django', 'Flask', 'SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'SQLite', 'NoSQL', 'Data Analysis', 'Data Science', 'Machine Learning', 'Deep Learning', 'Artificial Intelligence', 'Natural Language Processing', 'Computer Vision', 'TensorFlow', 'PyTorch', 'Scikit-learn']
function App() {
  const today = useMemo(() => new Date().toISOString().split('T')[0], [])
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    skills: [],
    address: '',
    state: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSkillChange = (event) => {
    const { value, checked } = event.target
    setFormData((prev) => {
      const nextSkills = checked
        ? [...prev.skills, value]
        : prev.skills.filter((skill) => skill !== value)
      return { ...prev, skills: nextSkills }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const skillsValue = formData.skills.length
      ? formData.skills.join(', ')
      : 'None'

    const details = [
      `First Name: ${formData.firstName}`,
      `Last Name: ${formData.lastName}`,
      `DOB: ${formData.dob}`,
      `Gender: ${formData.gender}`,
      `Skills: ${skillsValue}`,
      `Address: ${formData.address}`,
      `State: ${formData.state}`
    ].join('\n')

    window.alert(details)
  }

  const handleCancel = () => {
    setFormData({
      firstName: '',
      lastName: '',
      dob: '',
      gender: '',
      skills: [],
      address: '',
      state: ''
    })
  }

  return (
    <div className="page">
      <header className="header">
        <h1>Profile Details</h1>
        <p className="subtitle">Fill in your information and submit.</p>
      </header>

      <form className="form" onSubmit={handleSubmit}>
        <div className="grid">
          <label className="field">
            <span>First Name</span>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter first name"
              required
            />
          </label>

          <label className="field">
            <span>Last Name</span>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter last name"
              required
            />
          </label>

          <label className="field">
            <span>Date of Birth</span>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              max={today}
              required
            />
          </label>

          <div className="field">
            <span>Gender</span>
            <div className="inline-group">
              {['Male', 'Female', 'Other'].map((option) => (
                <label key={option} className="inline-item">
                  <input
                    type="radio"
                    name="gender"
                    value={option}
                    checked={formData.gender === option}
                    onChange={handleChange}
                    required
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="field">
            <span>Skills</span>
            <div className="inline-group">
              {SKILLS.map((skill) => (
                <label key={skill} className="inline-item">
                  <input
                    type="checkbox"
                    value={skill}
                    checked={formData.skills.includes(skill)}
                    onChange={handleSkillChange}
                  />
                  <span>{skill}</span>
                </label>
              ))}
            </div>
          </div>

          <label className="field full">
            <span>Address</span>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
              rows={3}
              required
            />
          </label>

          <label className="field">
            <span>State</span>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            >
              <option value="">Select a state</option>
              {STATES.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="actions">
          <button type="submit" className="primary">
            Submit
          </button>
          <button type="button" className="ghost" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default App
