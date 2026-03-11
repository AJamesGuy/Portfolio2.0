import React from 'react'
import "./Introduction.css"
import { DottedGlowBackground } from "../ui/dotted-glow-background"
import { TypeText } from "../ui/TypeText"
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
            text="Turning bytes into behavior." 
            speed={50}
            className="tagline"
            cursor={false}
          />
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