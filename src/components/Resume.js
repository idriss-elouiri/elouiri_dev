import React, { useState } from 'react';

export const Resume = () => {
  const [activeSection, setActiveSection] = useState('profile');

  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Material-UI'],
    backend: ['Node.js', 'Express.js', 'RESTful APIs'],
    database: ['MongoDB', 'Mongoose'],
    tools: ['Git', 'Vercel', 'Firebase', 'Postman']
  };

  const projects = [
    {
      title: 'Luxe Car Showcase',
      description: 'Built a responsive and visually captivating website using HTML, CSS, and JavaScript to highlight luxury car collections. Integrated modern design principles to enhance user engagement and experience.',
      technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Clothing Store E-Commerce',
      description: 'Developed a fully functional e-commerce platform using the MERN stack with Next.js. Implemented features like user authentication, product filtering, cart functionality, and secure payment integration.',
      technologies: ['MERN', 'Next.js', 'Authentication', 'Payment Integration']
    },
    {
      title: 'Car Rental Management System',
      description: 'Engineered a comprehensive car rental solution using MERN stack and Next.js, integrating admin dashboards, booking management, vehicle tracking, and payment systems.',
      technologies: ['MERN', 'Next.js', 'Dashboard', 'Booking System']
    },
    {
      title: 'Electronics E-Commerce Website',
      description: 'Created a scalable and performance-optimized platform using MERN stack and Next.js. Designed a seamless shopping experience with product recommendations, wishlist functionality, and a streamlined checkout process.',
      technologies: ['MERN', 'Next.js', 'E-commerce', 'Recommendations']
    }
  ];

  return (
    <div className="portfolio" id="resume">
      <header className="header">
        <div className="header-content">
          <h1>IDRISS ELOUIRI</h1>
          <h2>MERN STACK DEVELOPER</h2>
        </div>
        <nav className="navigation">
          <button 
            className={activeSection === 'profile' ? 'active' : ''} 
            onClick={() => setActiveSection('profile')}
          >
            Profile
          </button>
          <button 
            className={activeSection === 'skills' ? 'active' : ''} 
            onClick={() => setActiveSection('skills')}
          >
            Skills
          </button>
          <button 
            className={activeSection === 'projects' ? 'active' : ''} 
            onClick={() => setActiveSection('projects')}
          >
            Projects
          </button>
          <button 
            className={activeSection === 'contact' ? 'active' : ''} 
            onClick={() => setActiveSection('contact')}
          >
            Contact
          </button>
        </nav>
      </header>

      <main className="main-content">
        {activeSection === 'profile' && (
          <section className="profile-section">
            <h2>Profile</h2>
            <p>
              Dynamic and results-driven MERN Stack Developer with over 3 years of
              hands-on experience in designing, developing, and deploying scalable web
              applications. Expertise in using Next.js for seamless server-side rendering and
              building dynamic user interfaces. Proficient in delivering robust solutions for e-
              commerce, management systems, and business applications, emphasizing clean
              code, responsiveness, and modern UI/UX designs.
            </p>
            <div className="soft-skills">
              <h3>Soft Skills</h3>
              <ul>
                <li>Strong problem-solving and analytical skills</li>
                <li>Attention to detail and commitment to clean, maintainable code</li>
                <li>Effective communication and teamwork</li>
              </ul>
            </div>
          </section>
        )}

        {activeSection === 'skills' && (
          <section className="skills-section">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend</h3>
                <div className="skill-items">
                  {skills.frontend.map((skill, index) => (
                    <span key={index} className="skill-item">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>Backend</h3>
                <div className="skill-items">
                  {skills.backend.map((skill, index) => (
                    <span key={index} className="skill-item">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>Database</h3>
                <div className="skill-items">
                  {skills.database.map((skill, index) => (
                    <span key={index} className="skill-item">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>Tools & Platforms</h3>
                <div className="skill-items">
                  {skills.tools.map((skill, index) => (
                    <span key={index} className="skill-item">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'projects' && (
          <section className="projects-section">
            <h2>Projects</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="technology-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'contact' && (
          <section className="contact-section">
            <h2>Contact</h2>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <a href="tel:+212620766636">+212 620 766 636</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:idriss1elouiri2@gmail.com">idriss1elouiri2@gmail.com</a>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Morocco, Casablanca</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-globe"></i>
                <a href="https://portfolio-bice-theta-66.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Portfolio Website
                </a>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};
