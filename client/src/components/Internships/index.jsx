
import Internship from './Internship'
import './style.css'
import img1 from '../../../public/assets/cat-1_1.svg'
import img2 from '../../../public/assets/cat-1_2.svg'
import img3 from '../../../public/assets/cat-1_3.svg'
import img4 from '../../../public/assets/cat-1_4.svg'
const Index = () => {
  return (
    <section className='internship_section'>
        <div className='single_internship_div'>
        <Internship image = {img1} heading="Space Engineering" status="Upcoming Internships" />
        </div>
        <div className='single_internship_div'>
        <Internship image = {img2}  heading="Astronomy & Astrophysics" status="Upcoming Internships"/>
        </div>
        <div className='single_internship_div'>
        <Internship image = {img3}  heading="Computer Engineering" status="56+ Courses"/>
        </div>
        
        <div className='single_internship_div'>
        <Internship image = {img4}  heading="Aeronautical / Aerospace Engineering" status="9+ Internship"/>
        </div>
        <div className='single_internship_div'>
        <Internship image = {img3}  heading="Computer Engineering" status="56+ Courses"/>
        </div>
        <div className='single_internship_div'>
        <Internship image = {img3}  heading="Computer Engineering" status="56+ Courses"/>
        </div>
        <div className='single_internship_div'>
        <Internship image = {img3}  heading="Computer Engineering" status="56+ Courses"/>
        </div>
        
    </section>
  )
}

export default Index