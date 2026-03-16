import Introduction from '../components/Introduction'
import TechStack from '../components/TechStack'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { StarfieldBackground } from '../components/ui/starfield'
import "./Portfolio.css"
import { Button, buttonVariants } from '../components/ui/button'
import Code from '../assets/coding.png'
import { Radius } from 'lucide-react'
import CV from "../assets/CV_AnthonyJGuy.pdf"


const Portfolio = () => {
  return (
    <StarfieldBackground count={400} speed={0.5} starColor="#ffffff" twinkle={true}>
      <Button className='code-button' ><img src={Code} alt="Code" /></Button>
      <Button className="cv-button"><a href={CV} target="_blank" download="../assets/CV_AnthonyJGuy.pdf" rel="noopener noreferrer">Download CV</a></Button>
      <Introduction />
      <TechStack />
      <Projects />
      <Contact />
    </StarfieldBackground>
  )
}

export default Portfolio