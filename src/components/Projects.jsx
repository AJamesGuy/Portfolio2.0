import React, { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include product listings, shopping cart, and payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Real-time task management application with user authentication, task scheduling, and collaborative features.',
      tech: ['React', 'Firebase', 'Tailwind CSS']
    },
    {
      id: 3,
      title: 'AI Chat Bot',
      description: 'Intelligent chatbot powered by machine learning. Provides customer support and engagement through natural language processing.',
      tech: ['Python', 'TensorFlow', 'FastAPI', 'React']
    },
  ]

  const nextProject = () => {
    setCurrentIndex((currentIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((currentIndex - 1 + projects.length) % projects.length)
  }

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2>Projects</h2>
        
        <div className="carousel-wrapper">
          <button className="carousel-btn prev" onClick={prevProject}>
            ❮
          </button>

          <div className="carousel">
            <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {projects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                  </div>
                  <div className="project-body">
                    <p>{project.description}</p>
                  </div>
                  <div className="project-tech">
                    {project.tech.map((t, i) => (
                      <span key={i} className="tech-tag">{t}</span>
                    ))}
                  </div>
                  <button className="view-btn">View Project</button>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-btn next" onClick={nextProject}>
            ❯
          </button>
        </div>

        <div className="carousel-indicators">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects