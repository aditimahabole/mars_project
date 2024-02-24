import "./style.css";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Button from "../Offer/Button";
import ExpertCard from "./ExpertCard";
import expert1 from "../../../public/assets/expert1.jpg";
import expert2 from "../../../public/assets/expert2.jpeg";
import expert3 from "../../../public/assets/expert3.jpeg";
import leafy from "../../../public/assets/team-shape_1_1.png";
import spiral from "../../../public/assets/team-shape_1_4.png";

const index = () => {
  return (
    <div className="experts_section">
      <div className="leafy">
        <img src={leafy} alt="." />
      </div>
      <div className="spiral">
        <img src={spiral} alt="." />
      </div>
      <div className="experts_section_inner">
        <div className="experts_section_inner_l_main">
          <div className="experts_section_inner_l">
            <div className="experts_right_container_text">
              <span>
                <DescriptionOutlinedIcon
                  style={{
                    fontSize: "16px",
                    width: "16px",
                    height: "16px",
                    paddingRight: "5px",
                  }}
                />
                OUR INSTRUCTOR
              </span>
              <h2>Meet Our Expert Instructor</h2>
              <p className="wrapped_text">
                MARS Exploration has achieved remarkable success in the past two
                years, with many going on to provide online internships, secure
                fulfilling careers, and make valuable contributions to Skill Up
                India. MARS Exploration takes pride in its alumni network, which
                serves as a testament to the quality of internships and the
                opportunities provided by the platform.
              </p>
            </div>

            <div style={{ display: "flex", width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  width: "50%",
                  alignItems: "center",
                  justifyContent: "left",
                }}
              >
              
                 <Button content="EXPLORE COURSES" color1="--red1" color2="--dark-black"  text="--light-white"/>
              </div>

              <div
                style={{
                  display: "flex",
                  width: "50%",
                  alignItems: "center",
                  justifyContent: "left",
                }}
              >
                
                <Button content="JOIN AS TRAINER" color1="--dark-blue" color2="--dark-black"  text="--light-white"/>
              </div>
            </div>
          </div>
        </div>

        <div className="experts_section_inner_r">
          <div className="expert_card_style">
            <ExpertCard
              imgSrc={expert1}
              title="Dr Prabhat Phondekar"
              content="Sr Trainer & Project Head"
            />
          </div>
          <div className="expert_card_style">
            <ExpertCard
              imgSrc={expert2}
              title="Umang Saini"
              content="Sr IATA Certified Trainer & Program Head"
            />
          </div>
          <div className="expert_card_style">
            <ExpertCard
              imgSrc={expert3}
              title="Avinash Yadav"
              content="Sr Trainer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
