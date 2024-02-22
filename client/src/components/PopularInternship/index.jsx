import './style.css';
import Card from './Card'
const Slider = () => {
  return (
    <section className='popular_internship_section'>
      <div  className='slider_main'>
        <Card Title={"Aerospace Vehicle Design Internship"}/>
        <Card Title={'Finite Element Analysis Internship'} />
        <Card Title={'Drone Manufacturing Internship'}/>
        <Card  Title={'Reusable Launch Vehicles Internship'} />
        <Card Title={'Unmanned Aerial Vehicle Internship'} />
        <Card Title={'Rocket Propulsion Internship'} />
      </div>
    </section>
  )
}
export default Slider