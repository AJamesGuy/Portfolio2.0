import Introduction from '../components/Introduction/Introduction'
import TechStack from '../components/TechStack'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { StarfieldBackground } from '../components/ui/starfield'
import "./Portfolio.css"


const Portfolio = () => {
  return (
    <StarfieldBackground count={400} speed={0.5} starColor="#ffffff" twinkle={true}>
      <Introduction />
      <TechStack />
      <Projects />
      <Contact />
    </StarfieldBackground>
  )
}

export default Portfolio