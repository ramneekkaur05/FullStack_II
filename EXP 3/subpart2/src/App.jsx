import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import profilePhoto from "./assets/profile.png";

function Home(){
  return (
    <section className="home-hero">
      <div className="home-ambient" aria-hidden="true"></div>
      <div className="home-scanlines" aria-hidden="true"></div>
      <div className="home-grid" aria-hidden="true"></div>
      <div className="home-content">
        <h1 className="home-title glitch" data-text="WELCOME TO THE PORTFOLIO">
          WELCOME TO THE PORTFOLIO
        </h1>
        <p className="home-subtitle">
          Explore my work in AI, data science, and full‑stack development.
        </p>
        <div className="home-actions">
          <Link className="neo-btn primary" to="/profile">Open Profile</Link>
          <Link className="neo-btn" to="/dashboard">View Dashboard</Link>
        </div>
      </div>
    </section>
  );
}

function Profile(){
  const projects = [
    {
      title: "Smart Journaling App",
      description: "I Built a Smart Journaling App — Not Another Blank Digital Diary. A journaling application that helps users capture their thoughts in an intelligent way.",
      icon: "📔",
      tech: ["React", "AI", "NLP"],
      date: "2025"
    },
    {
      title: "Audio RAG App",
      description: "Just built: Audio RAG App! A RAG-based Audio Querying App that leverages Retrieval-Augmented Generation for intelligent audio processing.",
      icon: "🎙️",
      tech: ["Python", "RAG", "AI"],
      date: "2025"
    },
    {
      title: "AI Web Scraper",
      description: "Developed a Python-based web data extraction system using BeautifulSoup to collect structured data from multiple websites. Cleaned, validated, and transformed raw data into CSV and Excel formats for analysis and reporting. Applied the solution for market research, pricing analysis, and trend monitoring use cases.",
      icon: "🕷️",
      tech: ["Python", "BeautifulSoup", "Data Analysis"],
      date: "Jan 2025"
    },
    {
      title: "Conversational Chatbot",
      description: "Built a real-time chatbot application using Streamlit and Gemini API with session-based conversation memory. Implemented backend logic for efficient request-response handling and state management. Designed a minimal UI to ensure smooth user experience and low-latency interactions.",
      icon: "💬",
      tech: ["Streamlit", "Gemini API", "Python"],
      date: "Aug 2025"
    },
    {
      title: "Volume Controller using Hand Gesture",
      description: "Implemented a real-time computer vision application using OpenCV and MediaPipe to map hand gestures to system volume control.",
      icon: "🎛️",
      tech: ["OpenCV", "MediaPipe", "Computer Vision"],
      date: "Jan 2025"
    }
  ];

  const certifications = [
    { name: "Microsoft Certified: Azure AI Fundamentals", issuer: "Microsoft", icon: "🎖️" },
    { name: "Foundations of Deep Learning", issuer: "NVIDIA", icon: "🧠" },
    { name: "Introduction to Generative AI", issuer: "Google Cloud", icon: "🚀" },
    { name: "British Airways Data Science Job Simulation", issuer: "Forage", icon: "✈️" },
    { name: "Deloitte Australia Data Analytics Job Simulation", issuer: "Forage", icon: "📊" },
    { name: "Participated in multiple hackathons", issuer: "Various", icon: "💻" }
  ];

  const education = [
    {
      school: "Chandigarh University",
      degree: "B.E CSE AI ML",
      period: "Aug 2023 - Aug 2027",
      details: "AIML specialization, 8.82 CGPA",
      icon: "🎓"
    },
    {
      school: "Ryan International School",
      degree: "12th, Non-Medical",
      period: "2021 - 2023",
      details: "Grade: 90.4%",
      icon: "📚"
    },
    {
      school: "St. Xavier's High School, Mohali",
      degree: "10th Grade",
      period: "Completed",
      details: "Grade: 96.4%",
      icon: "📖"
    }
  ];

  return (
    <section className="modern-profile">
      {/* Hero Section */}
      <div className="modern-hero">
        <div className="hero-background"></div>
        <div className="hero-container">
          <div className="profile-image-wrapper">
            <img
              className="modern-profile-photo"
              src={profilePhoto}
              alt="Ramneek Kaur"
            />
          </div>
          <div className="hero-info">
            <h1 className="hero-name">Ramneek Kaur</h1>
            <p className="hero-title">AI Enthusiast • Aspiring Data Scientist • Full Stack Learner</p>
            <div className="hero-tags">
              <span className="tag">AI/ML</span>
              <span className="tag">Python</span>
              <span className="tag">React</span>
            </div>
            <button className="connect-btn">📧 Connect on LinkedIn</button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-container">
        <div className="stat-box">
          <div className="stat-icon">🎓</div>
          <div className="stat-info">
            <strong>3rd Year</strong>
            <span>Student</span>
          </div>
        </div>
        <div className="stat-box">
          <div className="stat-icon">⭐</div>
          <div className="stat-info">
            <strong>8.82</strong>
            <span>CGPA</span>
          </div>
        </div>
        <div className="stat-box">
          <div className="stat-icon">💼</div>
          <div className="stat-info">
            <strong>{projects.length}</strong>
            <span>Featured Projects</span>
          </div>
        </div>
        <div className="stat-box">
          <div className="stat-icon">🚀</div>
          <div className="stat-info">
            <strong>{certifications.length}</strong>
            <span>Certifications</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="modern-content">
        {/* About Section */}
        <div className="content-section">
          <div className="section-title">
            <h2>👤 Professional Summary</h2>
          </div>
          <div className="about-card">
            <p className="about-text">
              I am a Third Year student at Chandigarh University, Punjab, pursuing a Bachelor's degree in Computer Science Engineering (CSE) with a specialization in Artificial Intelligence and Machine Learning. With a strong academic foundation, I achieved 8.82 CGPA till my 4th semester. Prior to my university studies, I completed my 12th grade at Ryan International School, Chandigarh, achieving 90.4%, and my 10th grade at St. Xavier's High School, Mohali, with 96.4%. Seeking internship opportunities in AI/ML and Full Stack Development.
            </p>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="content-section">
          <div className="section-title">
            <h2>🎯 Certifications & Achievements</h2>
          </div>
          <div className="certifications-grid">
            {certifications.map((cert, idx) => (
              <div key={idx} className="certification-card">
                <div className="cert-icon">{cert.icon}</div>
                <div className="cert-content">
                  <h3 className="cert-name">{cert.name}</h3>
                  <span className="cert-issuer">{cert.issuer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="content-section">
          <div className="section-title">
            <h2>🚀 Featured Projects</h2>
          </div>
          <div className="modern-projects-grid">
            {projects.map((project, idx) => (
              <div key={idx} className="modern-project-card">
                <div className="project-header">
                  <span className="project-emoji">{project.icon}</span>
                  <h3 className="project-name">{project.title}</h3>
                </div>
                {project.date && <p className="project-date">📅 {project.date}</p>}
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="content-section">
          <div className="section-title">
            <h2>🎓 Academic Background</h2>
          </div>
          <div className="modern-education-timeline">
            {education.map((edu, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-icon">{edu.icon}</div>
                <div className="timeline-connector"></div>
                <div className="timeline-card">
                  <h3 className="edu-school">{edu.school}</h3>
                  <p className="edu-degree">{edu.degree}</p>
                  <p className="edu-period">📅 {edu.period}</p>
                  <p className="edu-details">🏆 {edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

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

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;