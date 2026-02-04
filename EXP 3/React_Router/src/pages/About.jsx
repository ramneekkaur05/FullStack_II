function About() {
  return (
    <div className="page">
      <h1>About This Application</h1>
      <p>
        This application demonstrates the fundamental concepts of client-side routing in React 
        using React Router DOM v6. It showcases how to create a seamless navigation experience 
        in a Single Page Application.
      </p>
      
      <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: '#667eea' }}>
        Key Features
      </h2>
      
      <div className="card-container">
        <div className="card">
          <h3>BrowserRouter</h3>
          <p>Wraps the entire application to enable routing functionality</p>
        </div>
        <div className="card">
          <h3>Routes & Route</h3>
          <p>Define the different paths and components to render</p>
        </div>
        <div className="card">
          <h3>Link Component</h3>
          <p>Navigate between pages without full page reloads</p>
        </div>
      </div>

      <p style={{ marginTop: '2rem' }}>
        Built with React, Vite, and React Router DOM for a modern, fast development experience.
      </p>
    </div>
  )
}

export default About
