import "./style.css"; // Import CSS file containing styles
import image from "../../../public/assets/cta-icon1.png";
// import { ArrowRightAlt } from "@mui/icons-material";
import image1 from "../../../public/assets/hero_bg_1_1.png";
import Button from "../Offer/Button";

const SlantedDiv = () => {
  return (
    <div className="slanted-container">
      <div className="slanted-left">
        <div className="sl1">
          <img src={image} alt="icon" />
        </div>
        <div className="sl2">
          <h1>Get Online Internships</h1>
        </div>
        <Button  content="JOIN WITH US" color1="dark_blue" color2="white"/>
        {/* <div className="youtube_button_container">
          <button className="youtube_button">
            <span className="youtube_transition"></span>
            <span className="youtube_gradient"></span>
            <span className="youtube_label">
              JOIN WITH US{" "}
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
      </div>
      <div className="slanted-right" style={{ objectFit: "cover" }}>
        <img src={image1} style={{ height: "100%", width: "100%"  , opacity:"0.5"}} />

        <div className="play_button">
          <button className="right_play_button">
            <svg
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              width="26px"
            >
              <path
                d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlantedDiv;
