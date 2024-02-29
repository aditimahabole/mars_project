import Internship from "./Internship";
import "./style.css";
import img1 from "../../../public/assets/cat-1_1.svg";
import img2 from "../../../public/assets/cat-1_2.svg";
import img3 from "../../../public/assets/cat-1_3.svg";
// import img4 from "../../../public/assets/cat-1_4.svg";
import { useState } from "react";

const Index = () => {
  const [space, setSpace] = useState(true);
  const [astronomy, setAstronomy] = useState(false);
  const [aerospace, setAerospace] = useState(false);
  const [mechanical, setMechanical] = useState(false);
  const [computer, setComputer] = useState(false);
  const [eletronic, setElectronic] = useState(false);
  // const [art, setArt] = useState(false);
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
      // setArt(false);
    } else if (topic === "astronomy") {
      setSpace(false);
      setAstronomy(true);
      setAerospace(false);
      setMechanical(false);
      setComputer(false);
      setElectronic(false);
      // setArt(false);
    } else if (topic === "aerospace") {
      setSpace(false);
      setAstronomy(false);
      setAerospace(true);
      setMechanical(false);
      setComputer(false);
      setElectronic(false);
      // setArt(false);
    } else if (topic === "mechanical") {
      setSpace(false);
      setAstronomy(false);
      setAerospace(false);
      setMechanical(true);
      setComputer(false);
      setElectronic(false);
      // setArt(false);
    } else if (topic === "computer") {
      setSpace(false);
      setAstronomy(false);
      setAerospace(false);
      setMechanical(false);
      setComputer(true);
      setElectronic(false);
      // setArt(false);
    } else if (topic === "electronic") {
      setSpace(false);
      setAstronomy(false);
      setAerospace(false);
      setMechanical(false);
      setComputer(false);
      setElectronic(true);
      // setArt(false);
    } else if (topic === "art") {
      setSpace(false);
      setAstronomy(false);
      setAerospace(false);
      setMechanical(false);
      setComputer(false);
      setElectronic(false);
      // setArt(true);
    }
  };

  // const [startIndex, setStartIndex] = useState(0);

  // const handleClickNext = () => {
  //   setStartIndex((prevIndex) => Math.min(prevIndex + 1, 4 - 1));
  // };

  // const handleClickPrev = () => {
  //   setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  // };
  return (
    <div className="internship_main_section">
      <div className="internship_section_heading">
        <h1 className="internship_section_heading_h1">Top Categories</h1>
      </div>

      <div className="internship_section">
        <div className="internship_section_top_buttons">


          <div className="internship_section_button_div">
            <button
              className={`internship_section_button  
              ${activeButton === "space" ? "inter_active" : ""}`}
              onClick={() => handleTopic("space")}
            >
              Space Engineering
            </button>
          </div>
          <div className="internship_section_button_div">
            <button
              className={`internship_section_button ${
                activeButton === "astronomy" ? "inter_active" : ""
              }`}
              onClick={() => handleTopic("astronomy")}
            >
              Astronomy & Astrophysics
            </button>
          </div>
          <div className="internship_section_button_div">
            <button
              className={`internship_section_button ${
                activeButton === "aerospace" ? "inter_active" : ""
              }`}
              onClick={() => handleTopic("aerospace")}
            >
              Aeronautical / Aerospace Engineering
            </button>
          </div>
          <div className="internship_section_button_div">
            <button
              className={`internship_section_button ${
                activeButton === "mechanical" ? "inter_active" : ""
              }`}
              onClick={() => handleTopic("mechanical")}
            >
              Mechanical Engineering
            </button>
          </div>

          <div className="internship_section_button_div">
            <button
              className={`internship_section_button ${
                activeButton === "computer" ? "inter_active" : ""
              }`}
              onClick={() => handleTopic("computer")}
            >
              Computer Engineering
            </button>
          </div>
          <div className="internship_section_button_div">
            <button
              className={`internship_section_button ${
                activeButton === "electronic" ? "inter_active" : ""
              }`}
              onClick={() => handleTopic("electronic")}
            >
              Electronic & Telecommunication Engineering
            </button>
          </div>

          {/* <div className="internship_section_button_div">
            <button
              className={`internship_section_button ${
                activeButton === "art" ? "active" : ""
              }`}
              onClick={() => handleTopic("art")}
            >
              Art & Design
            </button>
          </div> */}
        </div>
      </div>

      <div className="internship_bottom_items">
        {space && (
          <div className="internship_bottom_box">
            <Internship
              image={img1}
              heading="Space Engineering"
              status="Upcoming Internships"
              star="3"
              para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
            />

            <Internship
              image={img2}
              heading="Space Engineering"
              status="Upcoming Internships"
              star="5"
              para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
            />

            <Internship
              image={img3}
              heading="Space Engineering"
              status="Upcoming Internships"
              star="2"
              para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
            />
            <Internship
              image={img3}
              heading="Space Engineering"
              status="Upcoming Internships"
              star="2"
              para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
            />
          </div>
        )}
        {astronomy && (
          <div className="internship_bottom_box">
            <Internship
              image={img1}
              heading="Astronomy"
              status="Upcoming Internships"
              star="3"
              para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
            />

            <Internship
              image={img2}
              heading="Astronomy"
              status="Upcoming Internships"
              star="5"
              para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
            />

            <Internship
              image={img3}
              heading="Astronomy"
              status="Upcoming Internships"
              star="2"
              para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
            />
            <Internship
              image={img3}
              heading="Astronomy"
              status="Upcoming Internships"
              star="2"
              para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
            />
          </div>
        )}
        {aerospace && (
          <div className="internship_bottom_box">
            <Internship
              image={img1}
              heading="Aerospace Engineering"
              status="Upcoming Internships"
              star="3"
              para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
            />

            <Internship
              image={img2}
              heading="Aerospace Engineering"
              status="Upcoming Internships"
              star="5"
              para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
            />

            <Internship
              image={img3}
              heading="Aerospace Engineering"
              status="Upcoming Internships"
              star="2"
              para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
            />
            <Internship
              image={img3}
              heading="Aerospace Engineering"
              status="Upcoming Internships"
              star="2"
              para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
            />
          </div>
        )}
        {mechanical && (
          <div className="internship_bottom_box">
            <Internship
              image={img1}
              heading="Mechanical Engineering"
              status="Upcoming Internships"
              star="3"
              para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
            />

            <Internship
              image={img2}
              heading="Mechanical Engineering"
              status="Upcoming Internships"
              star="5"
              para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
            />

            <Internship
              image={img3}
              heading="Mechanical Engineering"
              status="Upcoming Internships"
              star="2"
              para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
            />
            <Internship
              image={img3}
              heading="Mechanical Engineering"
              status="Upcoming Internships"
              star="2"
              para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
            />
          </div>
        )}
        {computer && (
          <div className="internship_bottom_box">
            <Internship
              image={img1}
              heading="Computer Engineering"
              status="Upcoming Internships"
              star="3"
              para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
            />

            <Internship
              image={img2}
              heading="Computer Engineering"
              status="Upcoming Internships"
              star="5"
              para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
            />

            <Internship
              image={img3}
              heading="Computer Engineering"
              status="Upcoming Internships"
              star="2"
              para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
            />
            <Internship
              image={img3}
              heading="Computer Engineering"
              status="Upcoming Internships"
              star="2"
              para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
            />
          </div>
        )}
        {eletronic && (
          <div className="internship_bottom_box">
            <Internship
              image={img1}
              heading="Electronic Engineering"
              status="Upcoming Internships"
              star="3"
              para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
            />

            <Internship
              image={img2}
              heading="Electronic Engineering"
              status="Upcoming Internships"
              star="5"
              para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
            />

            <Internship
              image={img3}
              heading="Electronic Engineering"
              status="Upcoming Internships"
              star="2"
              para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
            />
            <Internship
              image={img3}
              heading="Electronic Engineering"
              status="Upcoming Internships"
              star="2"
              para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
            />
          </div>
        )}

        {/* {art && (
          <div className="internship_bottom_box">
            <Internship
              image={img1}
              heading="Art & Design"
              status="Upcoming Internships"
              star="3"
              para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
            />

            <Internship
              image={img2}
              heading="Art & Design"
              status="Upcoming Internships"
              star="5"
              para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
            />

            <Internship
              image={img3}
              heading="Art & Design"
              status="Upcoming Internships"
              star="2"
              para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
            />
            <Internship
              image={img3}
              heading="Art & Design"
              status="Upcoming Internships"
              star="2"
              para="hahaa ahah urur ha aaa popo aa aha ahaaya aafafaa a"
            />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Index;
