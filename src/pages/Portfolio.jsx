import Introduction from '../components/Introduction'
import TechStack from '../components/TechStack'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { StarfieldBackground } from '../components/ui/starfield'
import "./Portfolio.css"
import { Button, buttonVariants } from '../components/ui/button'
import Code from '../assets/coding.png'
import { Radius } from 'lucide-react'


const Portfolio = () => {
  return (
    <StarfieldBackground count={400} speed={0.5} starColor="#ffffff" twinkle={true}>
      <Button><img src={Code} alt="Code" style={{ width: '100px', height: '100px', backgroundColor: 'white', position: 'fixed', top: '10px', left: '10px', borderRadius: '50%' }} /></Button>
      <Button className="cv-button">Download CV</Button>
      <Introduction />
      <TechStack />
      <Projects />
      <Contact />
    </StarfieldBackground>
  )
}

export default Portfolio