import React from 'react'
import { Button } from './ui/button'
import Code from '../assets/coding.png'
import CV from "../assets/CV_AnthonyJGuy.pdf"
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="mobile-navbar">
      <div className="navbar-content">
        <Button className="navbar-code-btn" title="View Code">
          <img src={Code} alt="Code" />
        </Button>
        <Button className="navbar-cv-btn">
          <a href={CV} target="_blank" download="CV_AnthonyJGuy.pdf" rel="noopener noreferrer">
            Download CV
          </a>
        </Button>
      </div>
    </nav>
  )
}

export default Navbar
