import React from 'react'
import './TechStack.css'
import JS from "../assets/js.png"
import Python from "../assets/python.png"
import Atom from "../assets/atom.png"
import Node from "../assets/node-js.png"
import TS from "../assets/typescript.png"
import SQL from "../assets/database.png"
import Docker from "../assets/social.png"
import Git from "../assets/git.png"
import AWS from "../assets/aws.png"
import REST from "../assets/api.png"
import HTML from "../assets/html-5.png"
import CSS from "../assets/css-3.png"
import Linux from "../assets/linux.png"
import C from "../assets/c++.png"

const TechStack = () => {
  const technologies = [
    { name: 'JavaScript', emoji: <img src={JS} alt="JavaScript" style={{ width: '50px', height: '50px' }} /> },
    { name: 'Python', emoji: <img src={Python} alt="Python" style={{ width: '50px', height: '50px' }} /> },
    { name: 'React', emoji: <img src={Atom} alt="React" style={{ width: '50px', height: '50px' }} /> },
    { name: 'Node.js', emoji: <img src={Node} alt="Node.js" style={{ width: '50px', height: '50px' }} /> },
    { name: 'TypeScript', emoji: <img src={TS} alt="TypeScript" style={{ width: '50px', height: '50px' }} /> },
    { name: 'SQL', emoji: <img src={SQL} alt="SQL" style={{ width: '50px', height: '50px' }} /> },
    { name: 'Docker', emoji: <img src={Docker} alt="Docker" style={{ width: '50px', height: '50px' }} /> },
    { name: 'Git', emoji: <img src={Git} alt="Git" style={{ width: '50px', height: '50px' }} /> },
    { name: 'AWS', emoji: <img src={AWS} alt="AWS" style={{ width: '50px', height: '50px' }} /> },
    { name: 'REST API', emoji: <img src={REST} alt="REST API" style={{ width: '50px', height: '50px' }} /> },
    { name: 'HTML', emoji: <img src={HTML} alt="HTML" style={{ width: '50px', height: '50px' }} /> },
    { name: 'CSS', emoji: <img src={CSS} alt="CSS" style={{ width: '50px', height: '50px' }} /> },
    { name: 'Linux', emoji: <img src={Linux} alt="Linux" style={{ width: '50px', height: '50px' }} /> },
    { name: 'C/C++', emoji: <img src={C} alt="C/C++" style={{ width: '50px', height: '50px'}} /> },
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