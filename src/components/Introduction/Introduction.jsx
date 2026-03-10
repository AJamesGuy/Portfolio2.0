import React from 'react'
import "./Introduction.css"
import LinkedIn from "../../assets/linkedin-sign.png"
import GitHub from "../../assets/github-sign.png"
import Email from "../../assets/mail.png"
import Link from "../../assets/link.png"

const Introduction = () => {
  const techDomains = [
    "Computer Architecture",
    "High-Performance Computing",
    "Cybersecurity",
    "Full-Stack Development"
  ]

  return (
    <section className="introduction-section">
      <div className="introduction-container">
        <div className="intro-header">
          <h1 className="name">Anthony J Guy</h1>
          <p className="subtitle">Software Engineer</p>
          <p className="tagline">Turning bytes into behavior.</p>
        </div>

        <div className="social-links">
          <a href="#github" className="social-icon" title="GitHub">
            <i className="icon">
              <img src={GitHub} alt="GitHub" style={{ width: '20px', height: '20px' }} />
            </i>
          </a>
          <a href="#linkedin" className="social-icon" title="LinkedIn">
            <i className="icon">
              <img src={LinkedIn} alt="LinkedIn" style={{ width: '20px', height: '20px' }} />
            </i>
          </a>
          <a href="#email" className="social-icon" title="Email">
            <i className="icon">
              <img src={Email} alt="Email" style={{ width: '20px', height: '20px' }} />
            </i>
          </a>
          <a href="#other" className="social-icon" title="Other">
            <i className="icon">
              <img src={Link} alt="Other" style={{ width: '20px', height: '20px' }} />
            </i>
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