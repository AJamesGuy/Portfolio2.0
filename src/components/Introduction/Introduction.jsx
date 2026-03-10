import React from 'react'
import "./Introduction.css"

const Introduction = () => {
  const techDomains = [
    "Computer Architecture",
    "Full-Stack Development",
    "Cybersecurity",
    "Cloud Computing",
    "DevOps"
  ]

  return (
    <section className="introduction-section">
      <div className="introduction-container">
        <div className="intro-header">
          <h1 className="name">Anthony's</h1>
          <p className="subtitle">Developer Portfolio</p>
          <p className="tagline">Crafting elegant code that matters</p>
        </div>

        <div className="social-links">
          <a href="#github" className="social-icon" title="GitHub">
            <i className="icon">🐙</i>
          </a>
          <a href="#linkedin" className="social-icon" title="LinkedIn">
            <i className="icon">💼</i>
          </a>
          <a href="#email" className="social-icon" title="Email">
            <i className="icon">✉️</i>
          </a>
          <a href="#other" className="social-icon" title="Other">
            <i className="icon">🔗</i>
          </a>
        </div>

        <p className="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic pariatur nemo soluta quos accusamus. Officia dolorem sapiente nostrum expedita pariatur odit laborum vel.</p>

        <div className="tech-domains">
          {techDomains.map((domain, index) => (
            <div key={index} className="domain-cube">{domain}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Introduction