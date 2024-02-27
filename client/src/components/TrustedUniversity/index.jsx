import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import "./style.css";

// ----------------------------IMAGES-----------------------------
import t1 from "../../../public/assets/trusted_university_1.png";
import t2 from "../../../public/assets/trusted_university_2.png";
import t3 from "../../../public/assets/trusted_university_3.png";
import t4 from "../../../public/assets/trusted_university_4.png";
import t5 from "../../../public/assets/trusted_university_5.png";
import t6 from "../../../public/assets/trusted_university_6.png";
import t7 from "../../../public/assets/trusted_university_7.png";
import t8 from "../../../public/assets/trusted_university_8.png";
import t9 from "../../../public/assets/trusted_university_9.png";

// ---------------------------------------------------------------
const index = () => {
  return (
    <div className="trusted_section">
      {/* <div className="trusted_inner"> */}
        
          <div className="trusted_inner_left_text">
            <span className="trusted_span">
              <DescriptionOutlinedIcon
                style={{
                  fontSize: "16px",
                  width: "16px",
                  height: "16px",
                  paddingRight: "5px",
                }}
              />
              OUR TRUSTED UNIVERSITY
            </span>
            <h2 className="trusted_h2">
              We Have More Than <span className="trusted_h2_blue">52+</span>{" "}
              Global Students
            </h2>
          </div>
      
        {/* <div className="trusted_inner_right"> */}
          <div className="trusted_inner_images">
            <div className="trusted_image">
              <img src={t1}  className="trusted_image_t1"/>
            </div>
            <div className="trusted_image">
              <img src={t2}  className="trusted_image_t2" />
            </div>
            <div className="trusted_image">
              <img src={t3}   className="trusted_image_t3"/>
            </div>
            <div className="trusted_image">
              <img src={t4}  className="trusted_image_t4" />
            </div>
            <div className="trusted_image">
              <img src={t5}   className="trusted_image_t5"/>
            </div>
            <div className="trusted_image">
              <img src={t6}   className="trusted_image_t6"/>
            </div>
            <div className="trusted_image">
              <img src={t7}   className="trusted_image_t7"/>
            </div>
            <div className="trusted_image">
              <img src={t8}   className="trusted_image_t8"/>
            </div>
            <div className="trusted_image">
              <img src={t9}   className="trusted_image_t9"/>
            </div>
          
          </div>
        {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default index;
