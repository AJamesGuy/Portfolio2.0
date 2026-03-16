import React from 'react'
import "./Introduction.css"
import { DottedGlowBackground } from "./ui/dotted-glow-background"
import { TypeText } from "./ui/TypeText"
import LinkedIn from "../assets/linkedin-sign.png"
import GitHub from "../assets/github-sign.png"
import Email from "../assets/mail.png"
import Link from "../assets/link.png"

const Introduction = () => {
  const techDomains = [
    "Computer Architecture",
    "Cybersecurity",
    "Full-Stack Apps"
  ]

  return (
    <section className="introduction-section">
      <div className="introduction-container">
        <DottedGlowBackground 
          gap={12}
          radius={2}
          color="rgba(255, 255, 255, 0.3)"
          glowColor="rgba(0, 170, 255, 0.6)"
          opacity={0.5}
          speedMin={0.4}
          speedMax={1.3}
          speedScale={1}
        />
        
        <div className="intro-header">
          <h1 className="name">Anthony J. Guy</h1>
          <p className="subtitle">Software Engineer</p>
          <TypeText 
            text="From assembly to APIs." 
            speed={50}
            className="tagline"
            cursor={false}
          />
        </div>

        <div className="social-links">
          <a href="https://github.com/AJamesGuy" className="social-icon" title="GitHub" target="_blank" rel="noopener noreferrer">
            <i className="icon">
              <img src={GitHub} alt="GitHub" style={{ width: '20px', height: '20px' }} />
            </i>
          </a>
          <a href="https://www.linkedin.com/in/anthonyjguy/" className="social-icon" title="LinkedIn" target="_blank" rel="noopener noreferrer">
            <i className="icon">
              <img src={LinkedIn} alt="LinkedIn" style={{ width: '20px', height: '20px' }} />
            </i>
          </a>
          <a href="mailto:anthonyjguy@protonmail.com" className="social-icon" title="Email" target="_blank" rel="noopener noreferrer">
            <i className="icon">
              <img src={Email} alt="Email" style={{ width: '20px', height: '20px' }} />
            </i>
          </a>
          <a href="https://x.com/AnthonyJGuy" className="social-icon" title="Other" target="_blank" rel="noopener noreferrer">
            <i className="icon">
              <img src={Link} alt="Other" style={{ width: '20px', height: '20px' }} />
            </i>
          </a>
        </div>

        <p className="bio">Full-stack developer passionate about building scalable applications and exploring the deeper layers of software. I enjoy working across the stack—from frontend interfaces to backend systems—while studying performance, security, and low-level programming concepts.</p>

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