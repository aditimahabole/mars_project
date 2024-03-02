
import './style.css'


import Navbar from './AboutNavbar'
import TopHeading from './TopHeading'
import QualityCourses  from './QualityCourses'
import AboutYoutube from './AboutYoutube'
import AboutTestimonials from './AboutTestimonials'
import FunFacts from './FunFacts'
import CourseInstructors from './CourseInstructors'
import QualitySkills from '../QualitySkills/index'
import AboutFooter from './AboutFooter'
const AboutUsMain = () => {
  return (
    <>
    <Navbar/>
    <TopHeading/>
    <QualityCourses/>
    <AboutYoutube/>
    <AboutTestimonials/>
    <FunFacts/>
    <CourseInstructors/>
    <QualitySkills/>
    <AboutFooter/>
    
    </>
  )
}

export default AboutUsMain