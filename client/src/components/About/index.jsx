import AboutCards from "./AboutCards";
import "./style.css";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import { ArrowRightAlt } from "@mui/icons-material";
import about_img from "../../../public/assets/about_1_1.png";
import about_img1 from "../../../public/assets/about_1_2.png";
// import floating_book from "../../../public/assets/about_1_shape1.png";
// import Button from "../Offer/Button";

// import about_kid_head from "../../../public/assets/about_1_4.png";
import { useState } from "react";

const Index = () => {
  const [activeButton, setActiveButton] = useState("");
  const [show, setShow] = useState({
    about_marse: true,
    our_mission: false,
    our_vision: false,
  });

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === "About Marse") {
      setShow({
        about_marse: true,
        our_mission: false,
        our_vision: false,
      });
    } else if (buttonName === "Our Mission") {
      setShow({
        about_marse: false,
        our_mission: true,
        our_vision: false,
      });
    } else if (buttonName === "Our Vision") {
      setShow({
        about_marse: false,
        our_mission: false,
        our_vision: true,
      });
    }
  };

  return (
    <div className="about_us">
      <div className="about_us_container">
        <div className="about_left_div">
          <div className="about_left_div_top_content">
            <span className="about_left_div_top_content_span"> <DescriptionOutlinedIcon
                style={{
                  fontSize: "16px",
                  width: "16px",
                  height: "16px",
                  paddingRight: "5px",
                }}
              />ABOUT US</span>
            <h2 className="about_left_div_top_content_h2">
              We Provide Best <span className="edu_span">Education </span>{" "}
              Services For You
            </h2>
          </div>
          <div className="about_left_div_middle_links">
            <button
              className={`about_link_button ${
                activeButton === "About Marse" ? "about_bt_active" : ""
              }`}
              onClick={() => handleButtonClick("About Marse")}
            >
              About Marse
            </button>
            <button
              className={`about_link_button ${
                activeButton === "Our Mission" ? "about_bt_active" : ""
              }`}
              onClick={() => handleButtonClick("Our Mission")}
            >
              Our Mission
            </button>
            <button
              className={`about_link_button ${
                activeButton === "Our Vision" ? "about_bt_active" : ""
              }`}
              onClick={() => handleButtonClick("Our Vision")}
            >
              Our Vision
            </button>
          </div>

          <div className="about_left_div_bottom_text">
            {show.about_marse && (
              <AboutCards
                point2="Available Online Courses"
                point1="Education Award Achieved"
                para="Marse is a startup offering internships and courses in aerospace and aeronauticals. We're dedicated to nurturing talent and fostering innovation in the exciting realm of space exploration and aviation."
              />
            )}

            {show.our_vision && (
              <AboutCards
                point2="Up-To-Date Course Content"
                point1="Industry Expert Instructor"
                para="Our vision at Marse is to become a leading platform for shaping the future of aerospace education and career opportunities. We aim to inspire and empower individuals to reach new heights in space and aeronautics."
              />
            )}

            {show.our_mission && (
              <AboutCards
                point2="Lifetime Access For Learning"
                point1="Online Remote Learning"
                para="At Marse, our mission is to provide accessible and high-quality internships and courses in aerospace and aeronauticals. We strive to equip aspiring professionals with the skills and knowledge needed to excel in this dynamic industry."
              />
            )}
          </div>
        </div>



        <div className="about_right_div">
          <div className="about_right_images ari1"> <img src={about_img} className="about_image1" /> </div>
          <div className="about_right_images ari2"> <img src={about_img1} className="about_image2" /> </div>


        </div>
      </div>
    </div>
  );
};

export default Index;
