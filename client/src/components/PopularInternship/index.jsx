import './style.css';
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { ArrowRightAlt } from "@mui/icons-material";
import Card from './Card'


const Slider = () => {
  return (
    <section className='popular_internship_section'>
      <div className="popular_internship_container">
        <div className="popular_internship_header">
          <div className="our_popular_internship">
            <span>
              <DescriptionOutlinedIcon
                style={{
                  fontSize: "16px",
                  width: "16px",
                  height: "16px",
                  paddingRight: "5px",
                }}
              />
              POPULAR INTERNSHIP
            </span>
            <h2>Our Popular Internship</h2>
          </div>
          <div className="view_all_courses">
            <div className="view_all_courses_button_container">
              <button className="view_all_courses_button">
                <span className="transition"></span>
                <span className="gradient"></span>
                <span className="view_all_courses_label">
                  VIEW ALL COURSES{" "}
                  <span>
                    <ArrowRightAlt
                      style={{
                        fontSize: "16px",
                        width: "16px",
                        height: "16px",
                      }}
                    />{" "}
                  </span>{" "}
                </span>
              </button>
            </div>

          </div>
        </div>
        <div className='slider_main'>
        
   
          <Card Title={"Aerospace Vehicle Design Internship"} />
          <Card Title={'Finite Element Analysis Internship'} />
          <Card Title={'Drone Manufacturing Internship'} />
          <Card Title={'Reusable Launch Vehicles Internship'} />
          <Card Title={'Unmanned Aerial Vehicle Internship'} />
          <Card Title={'Rocket Propulsion Internship'} />
          
        </div>
      </div>
    </section>
  )
}
export default Slider