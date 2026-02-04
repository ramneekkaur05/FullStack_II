function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Building modern, responsive web applications using React and other cutting-edge technologies."
    },
    {
      title: "SPA Development",
      description: "Creating fast and smooth Single Page Applications with client-side routing."
    },
    {
      title: "UI/UX Design",
      description: "Designing beautiful and intuitive user interfaces for better user experience."
    },
    {
      title: "Performance Optimization",
      description: "Optimizing applications for speed, efficiency, and better user engagement."
    },
    {
      title: "Responsive Design",
      description: "Ensuring applications work seamlessly across all devices and screen sizes."
    },
    {
      title: "Code Review",
      description: "Reviewing and improving code quality, maintainability, and best practices."
    }
  ]

  return (
    <div className="page">
      <h1>Our Services</h1>
      <p>
        We offer a comprehensive range of web development services to help you build 
        amazing digital experiences. Explore our services below:
      </p>

      <div className="card-container">
        {services.map((service, index) => (
          <div key={index} className="card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
