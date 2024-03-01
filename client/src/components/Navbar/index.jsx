import "./style.css";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  LinkedIn,
  YouTube,
  AccountCircle,
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
    <nav className="nav_container">
      <div className="nav_container_top">
        <div className="nav_container_top_left">
          <div className="hide_on_tablet">
            {" "}
            <span className="logo_span">
              <Phone style={{ fontSize: "17px", marginRight: "5px" }} />{" "}
              <span style={{ fontSize: "16px" }}>+91 8530636474</span>
            </span>
          </div>
          <div className="hide_on_tablet">
            {" "}
            <span className="logo_span">
              <Mail style={{ fontSize: "17px", marginRight: "5px" }} />{" "}
              <span style={{ fontSize: "16px" }}>
                hrmarsecplorationpvt@gmail.com
              </span>
            </span>
          </div>

          <div className="hide_on_tablet">
            {" "}
            <span style={{ display: "flex" }}>
              Follow Us {"  "}{" "}
              <span className="follow_span">
                <Facebook
                  style={{ fontSize: "16px", width: "16px", height: "16px" }}
                />
              </span>{" "}
              <span className="follow_span">
                {" "}
                <Twitter
                  style={{ fontSize: "1416", width: "16px", height: "16px" }}
                />{" "}
              </span>{" "}
              <span className="follow_span">
                <LinkedIn
                  style={{ fontSize: "16px", width: "16px", height: "16px" }}
                />
              </span>
              <span className="follow_span">
                <YouTube
                  style={{ fontSize: "16px", width: "16px", height: "16px" }}
                />
              </span>{" "}
            </span>
          </div>
        </div>
        <div className="nav_container_top_right">
          <button className="nav_container_top_right_button">
            <span style={{ display: "flex" }}>
              <AccountCircle
                style={{ fontSize: "17px", width: "17px", height: "17px" }}
              />
            </span>{" "}
            Login/Signup
          </button>
        </div>
      </div>

      {/*------------------------ NAVBAR BOTTOM---------------------- */}
      <div className="nav_container_bottom">
        <div className="nav_container_bottom_left">
          <div style={{ display: "flex", height: "90%" }}>
            <img
              src={marse_logo}
              alt="logo"
              style={{ height: "100%", borderRadius: "50%" }}
            />
          </div>

          <div>
            {" "}
            <span className="nav_container_bottom_left_links">
               <Link to="/" className="nav_bottom_links" >
               HOME
               </Link> 
            </span>{" "}
          </div>
          <div>
            {" "}
            <span className="nav_container_bottom_left_links">
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
            <span className="nav_container_bottom_left_links">
               <Link to="/career" className="nav_bottom_links" >
               CAREER
               </Link> 
            </span>{" "}
          </div>

          <div>
            {" "}
            <span className="nav_container_bottom_left_links">
               <Link to="/blog" className="nav_bottom_links" >
               BLOG
               </Link> 
            </span>{" "}
          </div>
          <div>
            {" "}
            <span className="nav_container_bottom_left_links">
               <Link to="/contact" className="nav_bottom_links" >
               CONTACT
               </Link> 
            </span>{" "}
          </div>
        </div>

        {/* <div className="nav_container_bottom_left">
          <Navbar expand="lg" className="bg-body-tertiary"  style={{backgroundColor:"red" , width:"100%" , height:"90%" , borderTopLeftRadius:"50px"}}  >
            <Container style={{display:"flex"}}>
              <Navbar.Brand href="#home">
               
                  <img
                    src={marse_logo}
                    alt="logo"
                    style={{ height: "100%", borderRadius: "50%" }}
                  />
            
              </Navbar.Brand>
            
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" style={{display:"flex" , justifyContent:"space-between" , backgroundColor:"teal" , height:"90%"}} >
                  <div className="nav_links">
                  <Nav.Link href="#home"   className="nav_links_link">HOME</Nav.Link>
                  </div>
                  <div className="nav_links">
                  <Nav.Link href="#link"  className="nav_links_link">ABOUT US</Nav.Link>
                  </div>
                  <div className="nav_links">
                  <NavDropdown title="PROGRAMS" id="basic-nav-dropdown"  className="nav_links_link" style={{}}  >
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>

                  </div>

                  <div className="nav_links">
                  <Nav.Link href="#home"   className="nav_links_link">CAREER</Nav.Link>
                  </div>


                  <div className="nav_links">
                  <Nav.Link href="#home"   className="nav_links_link">BLOG</Nav.Link>
                  </div>


                  <div className="nav_links">
                  <Nav.Link href="#home"   className="nav_links_link">CONTACT</Nav.Link>
                  </div>
                  
                 
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div> */}
        <div className="nav_container_bottom_right">
          <button className="nav_container_bottom_right_contactUS">
            <span className="transition"></span>
            <span className="gradient"></span>
            <span className="contactUs_label">
              CONTACT US{" "}
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
