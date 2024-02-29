import "./style.css";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
// import Button from "../Offer/Button";
import ExpertCard from "./ExpertCard";
import expert1 from "../../../public/assets/expert1.jpg";
import expert2 from "../../../public/assets/expert2.jpeg";
import expert3 from "../../../public/assets/expert3.jpeg";
import leafy from "../../../public/assets/team-shape_1_1.png";
import tree from "../../../public/assets/team-shape_1_2.png";

const index = () => {
  return (
    <div className="experts_section">
      <div className="leafy">
        <img src={leafy} alt="." />
      </div>
      <div className="tree">
        <img src={tree} alt="." />
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
