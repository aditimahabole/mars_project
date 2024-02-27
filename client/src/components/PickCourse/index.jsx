import Course from "./CourseCard";
import "./style.css";
// import img1 from "../../../public/assets/cat-1_1.svg";
// import img2 from "../../../public/assets/cat-1_2.svg";
// import img3 from "../../../public/assets/cat-1_3.svg";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import banner from "../../../public/assets/about_1_2.png";

// import img4 from "../../../public/assets/cat-1_4.svg";
import { useState } from "react";
import Button from "../Offer/Button";

const Index = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleClickNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, 5 - 1));
  };

  const handleClickPrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };
  return (
    <div className="course_main_section">
      <div className="course_internship_container">
      <div className="course_section_heading" style={{ gap: "10px" }}>
        <p
          style={{
            fontSize: "16px",
            color: "var(--dark-blue)",
            fontWeight: "500",
          }}
        >
          <DescriptionOutlinedIcon
            style={{
              fontSize: "16px",
              width: "16px",
              height: "16px",
              paddingRight: "5px",
            }}
          />
          POPULAR COURSES
        </p>

        <h1 className="course_section_heading_h1">
          Pic A Course To Get Started
        </h1>
      </div>

      <div className="course_slider_button_div">
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


      <div className="course_bottom_items">
        <div className="slider-container">
          <div
            className="slider-items"
            style={{ transform: `translateX(-${startIndex * 100}%)` }}
          >
            {/* <div className="course_bottom_box"> */}
            {/* <div className="single_internship_div"> */}
              <Course
                image={banner}
                heading="Machine Learning"
                status="Upcoming Internships"
                star={4}
                price={500}
                lesson={14}
                students={50}
              />
            {/* </div> */}
            {/* <div className="single_internship_div"> */}
              <Course
                image={banner}
                heading="Machine Learning"
                status="Upcoming Internships"
                star={4}
                price={500}
                lesson={14}
                students={50}
              />
            {/* </div> */}
            {/* <div className="single_internship_div"> */}
              <Course
                image={banner}
                heading="Machine Learning"
                status="Upcoming Internships"
                star={4}
                price={500}
                lesson={14}
                students={50}
              />
            {/* </div> */}
            {/* <div className="single_internship_div"> */}
              <Course
                image={banner}
                heading="Machine Learning"
                status="Upcoming Internships"
                star={4}
                price={500}
                lesson={14}
                students={50}
              />
            {/* </div> */}
            {/* <div className="single_internship_div"> */}
              <Course
                image={banner}
                heading="Machine Learning"
                status="Upcoming Internships"
                star={4}
                price={500}
                lesson={14}
                students={50}
              />
            {/* </div> */}
            {/* <div className="single_internship_div"> */}
              <Course
                image={banner}
                heading="Machine Learning"
                status="Upcoming Internships"
                star={4}
                price={500}
                lesson={14}
                students={50}
              />
            {/* </div> */}
            {/* <div className="single_internship_div"> */}
              <Course
                image={banner}
                heading="Machine Learning"
                status="Upcoming Internships"
                star={4}
                price={500}
                lesson={14}
                students={50}
              />
            {/* </div> */}
            {/* <div className="single_internship_div"> */}
              <Course
                image={banner}
                heading="Machine Learning"
                status="Upcoming Internships"
                star={4}
                price={500}
                lesson={14}
                students={50}
              />
            {/* </div> */}
          </div>
        </div>

       
      </div>{" "}


      <div className="course_button_bottom">
          <Button content="EXPLORE MORE COURSES" />
        </div>
      </div>
    </div>
  );
};

export default Index;
