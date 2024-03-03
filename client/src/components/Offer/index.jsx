import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import "./style.css";
// import { ArrowRightAlt } from "@mui/icons-material";
import Button from "./Button";
import polygon from "../../../public/assets/cta_2_shape3.png";
import blue_leaf from "../../../public/assets/cta_2_shape2.png";
import hero from "../../../public/assets/bg_5.jpg";

import left_blue_leaf from "../../../public/assets/cta_2_shape1.png";

const index = () => {
  return (
    <div className="offer_section">
      <div className="offer_top">
        <div className="offer_top_box">
          <h1>4k+</h1>
          <h3>
            {" "}
            <span> Successfully</span> Trained
          </h3>
        </div>

        <div className="offer_top_box">
          <h1>10k+</h1>
          <h3>
            {" "}
            <span> Classes </span> Completed
          </h3>
        </div>

        <div className="offer_top_box">
          <h1>90% +</h1>
          <h3>
            {" "}
            <span> Satisfaction </span>Rate
          </h3>
        </div>

        <div className="offer_top_box">
          <h1>53k+</h1>
          <h3>
            {" "}
            <span> Students </span> Community
          </h3>
        </div>
      </div>


      <div className="offer_bg_div">
        <img src={hero} alt="ploy" />
      </div>

      <div className="offer_container">

        <div className="polygon_div">
          <img src={polygon} alt="ploy" />
        </div>
        <div className="blue_leaf_div">
          <img src={blue_leaf} alt="ploy" />
        </div>
        <div className="left_blue_leaf_div">
          <img src={left_blue_leaf} alt="ploy" />
        </div>
        <div className="offer_container_text">
          <span className="offer_desc">
            <DescriptionOutlinedIcon
              style={{
                fontSize: "16px",
                width: "16px",
                height: "16px",
                paddingRight: "5px",
              }}
            />
            ARE YOU READY FOR THIS OFFER
          </span>
          <h2>
            25% Offer First <span>10 Student’s </span> For Featured
          </h2>
          <h3>Topics by Engineering</h3>
          <p className="offer_wrapped_text">
            Get unlimited access to top Internship for your team. Learn and
            improve skills across , Aerodynamics, design, Propulsion and more.
          </p>
        </div>

        {/* <div className="about_more_button_container">
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
        </div> */}
        <div style={{ display: "flex", justifyContent:"space-around" }}>
          
            <Button content="JOIN WITH US" color1="--dark-blue" color2="--red1"  text="--light-white"/>
        
        
            <Button
              content="BECOME A TRAINER"
              color1="--dark-blue"
              color2="--red1"
            />
         
        </div>
      </div>
    </div>
  );
};

export default index;
