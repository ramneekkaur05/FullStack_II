function Dashboard(){
  const hardSkills = [
    { name: "Data Analysis", icon: "📊", level: "Advanced" },
    { name: "Generative AI", icon: "🤖", level: "Intermediate" },
    { name: "Python", icon: "🐍", level: "Advanced" },
    { name: "Microsoft Power BI", icon: "📈", level: "Intermediate" },
    { name: "Machine Learning", icon: "🧠", level: "Intermediate" }
  ];

  const softSkills = [
    { name: "Communication", icon: "💬", level: "Advanced" },
    { name: "Leadership", icon: "👥", level: "Intermediate" },
    { name: "Time Management", icon: "⏰", level: "Advanced" }
  ];

  return (
    <section className="dashboard-container">
      <div className="dashboard-hero">
        <div className="hero-content">
          <h1 className="dashboard-title">Professional Skills Portfolio</h1>
          <p className="dashboard-subtitle">Comprehensive overview of technical expertise and core competencies</p>
        </div>
        <div className="dashboard-stats">
          <div className="stat-card">
            <span className="stat-number">{hardSkills.length}</span>
            <span className="stat-label">Technical Skills</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{softSkills.length}</span>
            <span className="stat-label">Soft Skills</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">{hardSkills.length + softSkills.length}</span>
            <span className="stat-label">Total Competencies</span>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="skills-section">
          <div className="section-header">
            <h2>Technical Skills</h2>
            <p>Core technical competencies and professional tools</p>
          </div>
          <div className="modern-skills-grid">
            {hardSkills.map((skill, idx) => (
              <div key={idx} className="modern-skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-info">
                  <h3>{skill.name}</h3>
                  <span className="skill-level">{skill.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <div className="section-header">
            <h2>Soft Skills</h2>
            <p>Interpersonal abilities and professional attributes</p>
          </div>
          <div className="modern-skills-grid">
            {softSkills.map((skill, idx) => (
              <div key={idx} className="modern-skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-info">
                  <h3>{skill.name}</h3>
                  <span className="skill-level">{skill.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;

// function App() {
//   return(
//     <BrowserRouter>
//       <div className="app-shell">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Navigate to="/profile" replace />} />
//           <Route path="/profile" element={<Profile/>}/>
//           <Route path="/dashboard" element={<Dashboard/>}/>
//         </Routes>
//       </div>
//     </BrowserRouter>
//   )
// }
