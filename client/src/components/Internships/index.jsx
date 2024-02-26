import Internship from "./Internship";
import "./style.css";
import img1 from "../../../public/assets/cat-1_1.svg";
import img2 from "../../../public/assets/cat-1_2.svg";
import img3 from "../../../public/assets/cat-1_3.svg";
import img4 from "../../../public/assets/cat-1_4.svg";
import { useState } from "react";

const Index = () => {
  const [space, setSpace] = useState(true);
  const [astronomy, setAstronomy] = useState(false);
  const [aerospace, setAerospace] = useState(false);
  const [mechanical, setMechanical] = useState(false);
  const [computer, setComputer] = useState(false);
  const [eletronic, setElectronic] = useState(false);
  const [activeButton, setActiveButton] = useState("space");

  const handleTopic = (topic) => {
    console.log(topic);
    setActiveButton(topic);
    if (topic === "space") {
      setSpace(true);
      setAstronomy(false);
      setAerospace(false);
      setMechanical(false);
      setComputer(false);
      setElectronic(false);
    } else if (topic === "astronomy") {
      setSpace(false);
      setAstronomy(true);
      setAerospace(false);
      setMechanical(false);
      setComputer(false);
      setElectronic(false);
    } else if (topic === "aerospace") {
      setSpace(false);
      setAstronomy(false);
      setAerospace(true);
      setMechanical(false);
      setComputer(false);
      setElectronic(false);
    } else if (topic === "mechanical") {
      setSpace(false);
      setAstronomy(false);
      setAerospace(false);
      setMechanical(true);
      setComputer(false);
      setElectronic(false);
    } else if (topic === "computer") {
      setSpace(false);
      setAstronomy(false);
      setAerospace(false);
      setMechanical(false);
      setComputer(true);
      setElectronic(false);
    } else if (topic === "electronic") {
      setSpace(false);
      setAstronomy(false);
      setAerospace(false);
      setMechanical(false);
      setComputer(false);
      setElectronic(true);
    }
  };

  const [startIndex, setStartIndex] = useState(0);

  const handleClickNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, 4 - 1));
  };

  const handleClickPrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };
  return (
    <div className="internship_main_section">
      <div className="internship_section_heading">
        <h1 className="internship_section_heading_h1">Top Categories</h1>
      </div>
      <div className="internship_section">
        <div className="internship_section_top_buttons">
          <div className="internship_section_button_div">
            <button
              className={`internship_section_button ${
                activeButton === "space" ? "active" : ""
              }`}
              onClick={() => handleTopic("space")}
            >
              Space Engineering
            </button>
          </div>
          <div className="internship_section_button_div">
            <button
              className={`internship_section_button ${
                activeButton === "astronomy" ? "active" : ""
              }`}
              onClick={() => handleTopic("astronomy")}
            >
              Astronomy & Astrophysics
            </button>
          </div>
          <div className="internship_section_button_div">
            <button
              className={`internship_section_button ${
                activeButton === "aerospace" ? "active" : ""
              }`}
              onClick={() => handleTopic("aerospace")}
            >
              Aeronautical / Aerospace Engineering
            </button>
          </div>
          <div className="internship_section_button_div">
            <button
              className={`internship_section_button ${
                activeButton === "mechanical" ? "active" : ""
              }`}
              onClick={() => handleTopic("mechanical")}
            >
              Mechanical Engineering
            </button>
          </div>

          <div className="internship_section_button_div">
            <button
              className={`internship_section_button ${
                activeButton === "computer" ? "active" : ""
              }`}
              onClick={() => handleTopic("computer")}
            >
              Computer Engineering
            </button>
          </div>
          <div className="internship_section_button_div">
            <button
              className={`internship_section_button ${
                activeButton === "electronic" ? "active" : ""
              }`}
              onClick={() => handleTopic("electronic")}
            >
              Electronic & Telecommunication Engineering
            </button>
          </div>
        </div>
      </div>
      <div className="internship_bottom_items">
        {space && (
          <div className="internship_bottom_box">
            <div className="single_internship_div">
              <Internship
                image={img1}
                heading="Space Engineering"
                status="Upcoming Internships"
                star="3"
                para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
              />
            </div>
            <div className="single_internship_div">
              <Internship
                image={img2}
                heading="Space Engineering"
                status="Upcoming Internships"
                star="5"
                para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
              />
            </div>
            <div className="single_internship_div">
              <Internship
                image={img3}
                heading="Space Engineering"
                status="Upcoming Internships"
                star="2"
                para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
              />
            </div>
          </div>
        )}
        {astronomy && (
          <div className="internship_bottom_box">
            <div className="single_internship_div">
              <Internship
                image={img2}
                heading="Space Engineering"
                status="Upcoming Internships"
                star={4}
                para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
              />
            </div>
            <div className="single_internship_div">
              <Internship
                image={img4}
                heading="Space Engineering"
                status="Upcoming Internships"
                star={3}
                para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
              />
            </div>
          </div>
        )}
        {aerospace && (
          <div className="internship_bottom_box">
            <div className="single_internship_div">
              <Internship
                image={img2}
                heading="Space Engineering"
                status="Upcoming Internships"
                star={4}
                para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
              />
            </div>
            <div className="single_internship_div">
              <Internship
                image={img4}
                heading="Space Engineering"
                status="Upcoming Internships"
                star={3}
                para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
              />
            </div>
          </div>
        )}
        {mechanical && (
          <div className="internship_bottom_box">
            <div className="single_internship_div">
              <Internship
                image={img2}
                heading="Mechanical Engineering"
                status="Upcoming Internships"
                star={4}
                para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
              />
            </div>
            <div className="single_internship_div">
              <Internship
                image={img4}
                heading="Mechanical Engineering"
                status="Upcoming Internships"
                star={3}
                para="You will learn about mechanical engineering"
              />
            </div>
          </div>
        )}
        {computer && (
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
                <div className="internship_bottom_box">
                  <div className="single_internship_div">
                    <Internship
                      image={img2}
                      heading="Machine Learning"
                      status="Upcoming Internships"
                      star={4}
                      para="Learn Machine Learning and Deep Learning"
                    />
                  </div>
                  <div className="single_internship_div">
                    <Internship
                      image={img2}
                      heading="Software Engineering"
                      status="Upcoming Internships"
                      star={4}
                      para="Learn about software development methodologies and practices"
                    />
                  </div>
                  <div className="single_internship_div">
                    <Internship
                      image={img2}
                      heading="Mobile App Development"
                      status="Upcoming Internships"
                      star={4}
                      para="Create mobile applications for iOS and Android platforms"
                    />
                  </div>
                  <div className="single_internship_div">
                    <Internship
                      image={img1}
                      heading="Database Management"
                      status="Upcoming Internships"
                      star={3}
                      para="Master the concepts of database design and management systems"
                    />
                  </div>
                  <div className="single_internship_div">
                    <Internship
                      image={img1}
                      heading="Cloud Computing"
                      status="Upcoming Internships"
                      star={4}
                      para="Explore cloud infrastructure and services offered by leading providers"
                    />
                  </div>
                  <div className="single_internship_div">
                    <Internship
                      image={img3}
                      heading="Cybersecurity"
                      status="Upcoming Internships"
                      star={4}
                      para="Learn about cybersecurity threats and countermeasures"
                    />
                  </div>
                  <div className="single_internship_div">
                    <Internship
                      image={img3}
                      heading="Web Development"
                      status="Upcoming Internships"
                      star={5}
                      para="Explore modern web development technologies and frameworks"
                    />
                    <div className="single_internship_div">
                      <Internship
                        image={img4}
                        heading="Data Science"
                        status="Upcoming Internships"
                        star={4}
                        para="Dive into the world of data science and analytics"
                      />
                    </div>
                  </div>
                  <div className="single_internship_div">
                    <Internship
                      image={img4}
                      heading="Web Development"
                      status="Upcoming Internships"
                      star={3}
                      para="Learn web dev from scratch"
                    />
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        )}
        {eletronic && (
          <div className="internship_bottom_box">
            <div className="single_internship_div">
              <Internship
                image={img2}
                heading="Electronics"
                status="Upcoming Internships"
                star={3}
                para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
              />
            </div>
            <div className="single_internship_div">
              <Internship
                image={img4}
                heading="Electronics"
                status="Upcoming Internships"
                star={4}
                para="Electronics and communication internship"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
