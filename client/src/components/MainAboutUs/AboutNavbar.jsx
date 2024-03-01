import "./AboutNavbar.css";
import {

  ArrowRightAlt,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

import marse_logo from "../../../public/assets/marse_logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const [selectedProgram, setSelectedProgram] = useState("");

  const handleProgramChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedProgram(selectedValue);
    navigate(selectedValue);
    // history.push(selectedValue); // Redirect to the selected program route
  };
  return (
    <nav className="about_nav_container">
      

      {/*------------------------ NAVBAR BOTTOM---------------------- */}
      <div className="about_nav_container_bottom">
        <div className="about_nav_container_bottom_left">
          <div style={{ display: "flex", height: "90%" }}>
            <img
              src={marse_logo}
              alt="logo"
              style={{ height: "100%", borderRadius: "50%" }}
            />
          </div>

          <div>
            {" "}
            <span className="about_nav_container_bottom_left_links">
               <Link to="/" className="nav_bottom_links" >
               HOME
               </Link> 
            </span>{" "}
          </div>
          <div>
            {" "}
            <span className="about_nav_container_bottom_left_links">
               <Link to="/about" className="nav_bottom_links" >
               ABOUT US
               </Link> 
            </span>{" "}
          </div>
          <div style={{ display: "flex", width: "17%" }}>
            <div className=" " style={{ display: "flex", width: "100%" }}>
              <select
                className="program_select"
                style={{
                  fontFamily: "var(--jost)",
                  border: "none",
                  fontWeight: "600",
                  width: "100%",
                  cursor: "pointer",
                }}
                value={selectedProgram}
                onChange={handleProgramChange}
              >
                <option value=""  >PROGRAMS</option>
                <option value="training-internship">
                  <Link to="/training-internship">Training Internship</Link>
                </option>
                <option value="skill-development-training">
                  <Link to="/skill-development-training">
                    Skill Development Training
                  </Link>
                </option>
                <option value="research-training">
                  <Link to="/research-training">Research Training</Link>
                </option>
                <option value="graduate-training">
                  <Link to="/graduate-training">Graduate Trainee</Link>
                </option>
                <option value="outreach">
                  <Link to="/outreach">IIRS/ISRO Outreach</Link>
                </option>
                <option value="scholarship-program">
                  <Link to="/scholarship-program">Scholarship program</Link>
                </option>
                <option value="campus-ambassador">
                  <Link to="/campus-ambassador">Campus ambassador</Link>
                </option>
              </select>
            </div>
          </div>
          <div>
            {" "}
            <span className="about_nav_container_bottom_left_links">
               <Link to="/career" className="about_nav_bottom_links" >
               CAREER
               </Link> 
            </span>{" "}
          </div>

          <div>
            {" "}
            <span className="about_nav_container_bottom_left_links">
               <Link to="/blog" className="about_nav_bottom_links" >
               BLOG
               </Link> 
            </span>{" "}
          </div>
          <div>
            {" "}
            <span className="about_nav_container_bottom_left_links">
               <Link to="/contact" className="about_nav_bottom_links" >
               CONTACT
               </Link> 
            </span>{" "}
          </div>
        </div>

        <div className="about_nav_container_bottom_right">
          <button className="about_nav_container_bottom_right_contactUS">
            <span className="about_transition"></span>
            <span className="about_gradient"></span>
            <span className="about_contactUs_label">
              TRY FOR FREE{" "}
              <span>
                <ArrowRightAlt
                  style={{ fontSize: "16px", width: "16px", height: "16px" }}
                />{" "}
              </span>{" "}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Index;
