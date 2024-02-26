import Internship from "./Internship";
import "./style.css";
import img1 from "../../../public/assets/cat-1_1.svg";
import img2 from "../../../public/assets/cat-1_2.svg";
import img3 from "../../../public/assets/cat-1_3.svg";
import img4 from "../../../public/assets/cat-1_4.svg";
import { useState } from "react";

const Index = () => {
  const [space, setSpace] = useState(false);
  const [astronomy, setAstronomy] = useState(false);
  const [aerospace, setAerospace] = useState(false);
  const [mechanical, setMechanical] = useState(false);
  const [computer, setComputer] = useState(false);
  const [eletronic, setElectronic] = useState(false);

  const handleTopic = (topic) => {
    console.log(topic);
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
  return (
    <div className="internship_main_section">
      <div className="internship_section_heading">
        <h1 className="internship_section_heading_h1">Top Categories</h1>
      </div>
      <div className="internship_section">
        <div className="internship_section_top_buttons">
          <div className="internship_section_button_div">
            <button
              className="internship_section_button"
              onClick={() => handleTopic("space")}
            >
              Space Engineering
            </button>
          </div>
          <div className="internship_section_button_div">
            <button
              className="internship_section_button"
              onClick={() => handleTopic("astronomy")}
            >
              Astronomy & Astrophysics
            </button>
          </div>
          <div className="internship_section_button_div">
            <button
              className="internship_section_button"
              onClick={() => handleTopic("aerospace")}
            >
              Aeronautical / Aerospace Engineering
            </button>
          </div>
          <div className="internship_section_button_div">
            <button
              className="internship_section_button"
              onClick={() => handleTopic("mechanical")}
            >
              Mechanical Engineering
            </button>
          </div>

          <div className="internship_section_button_div">
            <button
              className="internship_section_button"
              onClick={() => handleTopic("computer")}
            >
              Computer Engineering
            </button>
          </div>
          <div className="internship_section_button_div">
            <button
              className="internship_section_button"
              onClick={() => handleTopic("electronic")}
            >
              Electronic & Telecommunication Engineering
            </button>
          </div>
        </div>
      </div>
      <div className="internship_bottom_items">
        {space &&
         (
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
        )
        
        }
        {astronomy && 
         (
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
        )
        
        
        }
        {aerospace && "aerospace"}
        {mechanical && "M"}
        {computer && "C"}
        {eletronic && "elect"}
      </div>

      {/* <div className="internship_section">
        <div className="single_internship_div">
          <Internship
            image={img1}
            heading="Space Engineering"
            status="Upcoming Internships"
            url="/space-engineering"
          />
        </div>
        <div className="single_internship_div">
          <Internship
            image={img2}
            heading="Astronomy & Astrophysics"
            status="Upcoming Internships"
            url="/upcoming-internships"
          />
        </div>
        <div className="single_internship_div">
          <Internship
            image={img4}
            heading="Aeronautical / Aerospace Engineering"
            status="9+ Internship"
            url="/aerospace-engineering"
          />
        </div>
        <div className="single_internship_div">
          <Internship
            image={img3}
            heading="Mechanical Engineering"
            status="56+ Courses"
            url="/mechanical-engineering"
          />
        </div>
        <div className="single_internship_div">
          <Internship
            image={img3}
            heading="Computer Engineering"
            status="56+ Courses"
            url="/computer-engineering"
          />
        </div>

       
       
        <div className="single_internship_div">
          <Internship
            image={img3}
            heading="Electronic & Telecommunication Engineering"
            status="56+ Courses"
            url="/electronic-engineering"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Index;
