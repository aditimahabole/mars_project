import "./style.css";
import {
  Phone,
  Mail,
  AccessTime,
  Facebook,
  Twitter,
  LinkedIn,
  YouTube,
  AccountCircle ,
  ArrowRightAlt


} from "@mui/icons-material";
const index = () => {
  return (
    <nav className="nav_container">
      <div className="nav_container_top">
        <div className="nav_container_top_left">
          <div>
            {" "}
            <span className="logo_span">
              <Phone style={{ fontSize: '16px', width: '16px', height: '16px' }} />
            </span>{" "}
            <span>+91 8530636474</span>
          </div>
          <div>
            {" "}
            <span className="logo_span">
              <Mail  style={{ fontSize: '16px', width: '16px', height: '16px' }}/>
            </span>{" "}
            <span>hrmarsecplorationpvt@gmail.com</span>
          </div>
          <div>
            {" "}
            <span className="logo_span">
              <AccessTime  style={{ fontSize: '16px', width: '16px', height: '16px' }}/>
            </span>{" "}
            <span>Mon-Sat : 8:00 - 15:00</span>
          </div>
          <div>
            {" "}
          <span>Follow Us </span>
            <span className="follow_span">
              <Facebook  style={{ fontSize: '14px', width: '14px', height: '14px' }}/>
            </span>{" "}
            <span className="follow_span">
              {" "}
              <Twitter  style={{ fontSize: '14px', width: '14px', height: '14px' }} />{" "}
            </span>{" "}
            <span className="follow_span">
              <LinkedIn  style={{ fontSize: '14px', width: '14px', height: '14px' }} />
            </span>
            <span className="follow_span">
              <YouTube   style={{ fontSize: '14px', width: '14px', height: '14px' }}/>
            </span>{" "}
           
          </div>
        </div>
        <div className="nav_container_top_right">
          <button className="nav_container_top_right_button"><span><AccountCircle  style={{ fontSize: '16px', width: '16px', height: '16px' }}/></span> Tutor Login</button>
        </div>
      </div>
      <div className="nav_container_bottom">
        <div className="nav_container_bottom_left">
          <div>
            {" "}
            <span className="nav_container_bottom_left_links">HOME</span>
          </div>
          <div>
            {" "}
            <span className="nav_container_bottom_left_links">
              ABOUT US
            </span>{" "}
          </div>
          <div>
            {" "}
            <span className="nav_container_bottom_left_links">BLOG</span>
          </div>
          <div>
            {" "}
            <span className="nav_container_bottom_left_links">
              CONTACT
            </span>{" "}
          </div>
          <div>
            {" "}
            <span className="nav_container_bottom_left_links">
              INTERNSHIP
            </span>{" "}
          </div>
        </div>
        <div className="nav_container_bottom_right">
          <button  className="nav_container_bottom_right_contactUS">
          <span className="transition"></span>
  <span className="gradient"></span>
  <span className="contactUs_label">CONTACT US {" "} <span><ArrowRightAlt  style={{ fontSize: '16px', width: '16px', height: '16px' }}/> </span> </span> 
  
          </button>
        </div>
      </div>
    </nav>
  );
};

export default index;
