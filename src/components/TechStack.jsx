import React from 'react'
import './TechStack.css'

const TechStack = () => {
  const technologies = [
    { name: 'JavaScript', emoji: '📜' },
    { name: 'Python', emoji: '🐍' },
    { name: 'React', emoji: '⚛️' },
    { name: 'Node.js', emoji: '🟢' },
    { name: 'TypeScript', emoji: '🔷' },
    { name: 'SQL', emoji: '🗄️' },
    { name: 'MongoDB', emoji: '🍃' },
    { name: 'Docker', emoji: '🐳' },
    { name: 'Git', emoji: '📁' },
    { name: 'AWS', emoji: '☁️' },
    { name: 'REST API', emoji: '🔌' },
    { name: 'HTML', emoji: '🏠' },
    { name: 'CSS', emoji: '🎨' },
    { name: 'Linux', emoji: '🐧' },
    { name: 'Webpack', emoji: '📦' },
    { name: 'GraphQL', emoji: '📊' },
  ]

  return (
    <section className="tech-stack-section">
      <div className="tech-stack-container">
        <h2>Tech Stack</h2>
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-card">
              <div className="tech-emoji">{tech.emoji}</div>
              <div className="tech-name">{tech.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack