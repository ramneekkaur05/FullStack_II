function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>
      <p>
        Have questions or want to get in touch? We'd love to hear from you! 
        Feel free to reach out through any of the following channels:
      </p>

      <div className="card-container">
        <div className="card">
          <h3>📧 Email</h3>
          <p>contact@reactrouter.demo</p>
        </div>
        <div className="card">
          <h3>📱 Phone</h3>
          <p>+1 (555) 123-4567</p>
        </div>
        <div className="card">
          <h3>📍 Location</h3>
          <p>123 React Street, Web City, 12345</p>
        </div>
      </div>

      <div style={{ 
        marginTop: '3rem', 
        padding: '2rem', 
        background: 'white', 
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{ color: '#667eea', marginBottom: '1rem' }}>Send us a Message</h2>
        <p>
          This is a demo application showcasing React Router. In a real application, 
          you would have a functional contact form here that submits data to a backend server.
        </p>
      </div>
    </div>
  )
}

export default Contact
