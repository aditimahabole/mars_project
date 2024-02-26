import Course from "./CourseCard";
import "./style.css";
import img1 from "../../../public/assets/cat-1_1.svg";
import img2 from "../../../public/assets/cat-1_2.svg";
import img3 from "../../../public/assets/cat-1_3.svg";
import gol from "../../../public/assets/cta_2_shape3.png";

// import img4 from "../../../public/assets/cat-1_4.svg";
import { useState } from "react";

const Index = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleClickNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, 4 - 1));
  };

  const handleClickPrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };
  return (
    <div className="course_main_section">
        <div className="gol1">

            <img src={gol} />
        </div>

        <div className="gol2">

<img src={gol} />
</div>
      <div className="course_section_heading">
        <h1 className="internship_section_heading_h1">
          Pic A Course To Get Started
        </h1>
      </div>
      <div className="internship_section"></div>
      <div className="internship_bottom_items">
        <div className="pop_inter_slider_div">
          <div className="slider-container">
            <div className="slider_button_div">
              <div>
                <button
                  className="slider-button prev"
                  onClick={handleClickPrev}
                >
                  {" "}
                  &lt;
                </button>
              </div>
              <div>
                <button
                  className="slider-button next"
                  onClick={handleClickNext}
                >
                  {" "}
                  &gt;
                </button>
              </div>
            </div>
            <div
              className="slider-items"
              style={{ transform: `translateX(-${startIndex * 25}%)` }}
            >
              <div className="course_bottom_box">
                <div className="single_internship_div">
                  <Course
                    image={img2}
                    heading="Machine Learning"
                    status="Upcoming Internships"
                    star={4}
                    para="Learn Machine Learning and Deep Learning"
                  />
                </div>
                <div className="single_internship_div">
                  <Course
                    image={img2}
                    heading="Software Engineering"
                    status="Upcoming Internships"
                    star={4}
                    para="Learn about software development methodologies and practices"
                  />
                </div>
                <div className="single_internship_div">
                  <Course
                    image={img2}
                    heading="Mobile App Development"
                    status="Upcoming Internships"
                    star={4}
                    para="Create mobile applications for iOS and Android platforms"
                  />
                </div>
                <div className="single_internship_div">
                  <Course
                    image={img1}
                    heading="Database Management"
                    status="Upcoming Internships"
                    star={3}
                    para="Master the concepts of database design and management systems"
                  />
                </div>
                <div className="single_internship_div">
                  <Course
                    image={img1}
                    heading="Cloud Computing"
                    status="Upcoming Internships"
                    star={4}
                    para="Explore cloud infrastructure and services offered by leading providers"
                  />
                </div>
                <div className="single_internship_div">
                  <Course
                    image={img3}
                    heading="Cybersecurity"
                    status="Upcoming Internships"
                    star={4}
                    para="Learn about cybersecurity threats and countermeasures"
                  />
                </div>
                <div className="single_internship_div">
                  <Course
                    image={img3}
                    heading="Web Development"
                    status="Upcoming Internships"
                    star={5}
                    para="Explore modern web development technologies and frameworks"
                  />
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Index;
