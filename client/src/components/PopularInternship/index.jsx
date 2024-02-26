import "./style.css";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Card from "./Card";
import { useState } from "react";
import Button from "../Offer/Button";
// --------------------------------------------------------------------------------------------

const Slider = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleClickNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, 5 - 1));
  };

  const handleClickPrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };
  return (
    <div className="popular_internship_section">
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
              {/* <button className="view_all_courses_button">
                <span className="transition"></span>
                <span className="gradient"></span>
                <span className="view_all_courses_label">
                  VIEW ALL INTERNSHIPS{" "}
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
              </button> */}
              <Button  content="VIEW ALL INTERNSHIPS" color1="--dark-blue" color2="--dark-black"/>
            </div>
          </div>
        </div>

        <div className="slider_button_div">
          <div>
            <button className="slider-button prev" onClick={handleClickPrev}>
              {" "}
              &lt;
            </button>
          </div>
          <div>
            <button className="slider-button next" onClick={handleClickNext}>
              {" "}
              &gt;
            </button>
          </div>
        </div>

        <div className="pop_inter_slider_div">
          <div className="slider-container">
            <div
              className="slider-items"
              style={{ transform: `translateX(-${startIndex * 25}%)` }}
            >
              <Card Title={"Aerospace Vehicle Design Internship"} />
              <Card Title={"Finite Element Analysis Internship"} />
              <Card Title={"Drone Manufacturing Internship"} />
              <Card Title={"Reusable Launch Vehicles Internship"} />
              <Card Title={"Unmanned Aerial Vehicle Internship"} />
              <Card Title={"Rocket Propulsion Internship"} />
            </div>
          </div>
        </div>


        
      </div>
    </div>
  );
};
export default Slider;
