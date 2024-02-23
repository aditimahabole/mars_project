import "./style.css";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ArrowRightAlt } from "@mui/icons-material";
import about_img from "../../../public/assets/about_1_1.png";
import about_img2 from "../../../public/assets/about_1_2.png";
import floating_book from '../../../public/assets/about_1_shape1.png'

import about_kid_head from "../../../public/assets/about_1_4.png";

const Index = () => {
  return (
   
      <div className="about_us">
        <div className="about_us_container">
          {/* --------------------------------LEFT PART----------------------- */}
          <div className="left_container">
            <div className="about_left_container_top">
              <div className="about_left_container_top_left">
                <div className="container noselect">
                  <div className="canvas">
                    {Array.from({ length: 25 }, (_, index) => (
                      <div
                        key={`tracker-${index}`}
                        className={`tracker tr-${index + 1}`}
                      ></div>
                    ))}
                    <div id="card">
                      <img src={about_img} alt="about" className="about_img" />
                      <p id="prompt"></p>
                      <div className="title"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about_left_container_top_right">
                <div className="about_left_container_top_right_card">
                  <div className="about_left_container_top_right_container"></div>

                  <span className="about_left_container_top_right_temp">
                  3k<span style={{"color":" #0d5ef4"}}>+</span> 
                  </span>
                  <p className="about_right_p">STUDENTS ACTIVE</p>
                  <p className="about_right_p">OUR COURSES</p>
                </div>
              </div>
            </div>
            <div className="about_left_container_bottom">
                <div className="floating_book">
                    <img src={floating_book}alt="book" />

                </div>

                <div className="about_left_container_top_left">
                <div className="container noselect">
                  <div className="canvas">
                    {Array.from({ length: 25 }, (_, index) => (
                      <div
                        key={`tracker-${index}`}
                        className={`tracker tr-${index + 1}`}
                      ></div>
                    ))}
                    <div id="card">
                      <img src={about_img2} alt="about" className="about_img" />
                      <p id="prompt"></p>
                      <div className="title"></div>
                    </div>
                  </div>
                </div>
              </div>
                
            </div>
          </div>
          {/* --------------------------------RIGHT PART----------------------- */}
          <div className="right_container">
            <div className="right_container_text">
              <span>
                <DescriptionOutlinedIcon
                  style={{
                    fontSize: "16px",
                    width: "16px",
                    height: "16px",
                    paddingRight: "5px",
                  }}
                />
                ABOUT US
              </span>
              <h2>WELCOME TO MARS EXPLORATION</h2>
              <p className="about_wrapped_text">
                Welcome to MARS Exploration - the leading space edu tech company
                in India. We offer online internships and training in the
                exciting fields of aerospace, space, astronomy, and
                astrophysics. Our courses are designed to prepare you for the
                next generation of space exploration.
              </p>
            </div>

            <div className="right_container_pointers">
              <div className="pointers_photo_div">
                <img
                  className="pointers_photo_size"
                  src={about_kid_head}
                  alt="bgb"
                />
              </div>
              <div className="right_container_pointers_text">
                <ul>
                  <li>
                    <span>
                      <CheckCircleIcon
                        style={{
                          color: "#0D5EF4",
                          fontSize: "16px",
                          width: "16px",
                          height: "16px",
                          paddingRight: "5px",
                        }}
                      />
                    </span>
                    Get access to 10+ of our top Internship
                  </li>
                  <li>
                    <span>
                      <CheckCircleIcon
                        style={{
                          color: "#0D5EF4",
                          fontSize: "16px",
                          width: "16px",
                          height: "16px",
                          paddingRight: "5px",
                        }}
                      />
                    </span>
                    Popular topics to learn now
                  </li>
                  <li>
                    <span>
                      <CheckCircleIcon
                        style={{
                          color: "#0D5EF4",
                          fontSize: "16px",
                          width: "16px",
                          height: "16px",
                          paddingRight: "5px",
                        }}
                      />
                    </span>
                    Find the right instructor for you
                  </li>
                </ul>
              </div>
            </div>

            <div className="about_more_button_container">
              <button className="about_us_button">
                <span className="transition"></span>
                <span className="gradient"></span>
                <span className="about_more_label">
                  ABOUT MORE{" "}
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
      </div>
 
  );
};

export default Index;
