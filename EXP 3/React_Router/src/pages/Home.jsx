function Home() {
  return (
    <div className="page">
      <h1>Welcome to React Router Demo</h1>
      <p>
        This is a demonstration of basic client-side routing in a Single Page Application (SPA) 
        using React Router DOM. Navigate between different pages without page reloads!
      </p>
      <p>
        React Router is a powerful library that enables navigation among views in a React application, 
        allows changing the browser URL, and keeps the UI in sync with the URL.
      </p>
      
      <div className="card-container">
        <div className="card">
          <h3>🚀 Fast Navigation</h3>
          <p>Navigate between pages instantly without page reloads</p>
        </div>
        <div className="card">
          <h3>🎯 Dynamic Routing</h3>
          <p>Create dynamic routes that respond to URL parameters</p>
        </div>
        <div className="card">
          <h3>📱 Single Page App</h3>
          <p>Smooth user experience with SPA architecture</p>
        </div>
      </div>
    </div>
  )
}

export default Home
