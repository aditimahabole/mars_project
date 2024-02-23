import "./style.css";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ArrowRightAlt } from "@mui/icons-material";
import left_image1 from "../../../public/assets/wcu_1_1.png";

import left_image2 from "../../../public/assets/wcu_1_shape1.png";

import left_image3 from "../../../public/assets/student-group_1_1.png";

const Index = () => {
  return (
    <div className="space_education_section">
      <div className="space_education_container">
        {/* --------------------------------LEFT PART----------------------- */}
        <div className="space_education_left_container">
          <div className="space_education_left_container_bg_image">
            <div className="se_img1">
              <img src={left_image1} />
            </div>
            <div className="se_img2">
              <img src={left_image2} />
            </div>

            <div className="floating_active_students">
              <div>
                <span>4k+</span> Active Students{" "}
              </div>
              <div className="se_img3">
                <img src={left_image3} />
              </div>
            </div>
            <div className="space_education_button_container">
              <button className="space_education_button">
                <span className="space_education_transition"></span>
                <span className="space_education_gradient"></span>
                <span className="space_education_label">
                  GET STARTED{" "}
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
            </div>
          </div>
        </div>
        {/* --------------------------------LEFT PART END----------------------- */}
        {/* --------------------------------RIGHT PART----------------------- */}
        <div className="space_education_right_container">
          <div className="space_education_right_container_text">
            <span>
              <DescriptionOutlinedIcon
                style={{
                  fontSize: "16px",
                  width: "16px",
                  height: "16px",
                  paddingRight: "5px",
                }}
              />
              WHY CHOOSE US
            </span>
            <h2 className="space_education_h2">Space EduTech Startup</h2>
            <p className="space_education_wrapped_text">
              MARS exploration is India&apos;s number one space edutech firm,
              offering online internships and skill development programs.
            </p>
          </div>

          <div className="space_education_four_boxes">
            <div className="space_education_four_boxes_top">
              <div className="space_education_four_boxes_top_l four_boxes">
                <div className="left_top_triangle"></div>
                <span className="four_boxes_tex">
                  <span>
                    <CheckCircleIcon
                      style={{
                        color: "#0D5EF4",
                        fontSize: "16px",
                        width: "16px",
                        height: "16px",
                        paddingRight: "5px",
                      }}
                    />
                  </span>
                  Industry Expertes Trainers
                </span>
              </div>
              <div className="space_education_four_boxes_top_r four_boxes">
                <div className="left_top_triangle"></div>
                <span className="four_boxes_tex">
                  <span>
                    <CheckCircleIcon
                      style={{
                        color: "#0D5EF4",
                        fontSize: "16px",
                        width: "16px",
                        height: "16px",
                        paddingRight: "5px",
                      }}
                    />
                  </span>
                  LMS Learning
                </span>
              </div>
            </div>
            <div className="space_education_four_boxes_bottom">
              <div className="space_education_four_boxes_bottom_l four_boxes">
                <div className="left_top_triangle"></div>
                <span className="four_boxes_tex">
                  {" "}
                  <span>
                    <CheckCircleIcon
                      style={{
                        color: "#0D5EF4",
                        fontSize: "16px",
                        width: "16px",
                        height: "16px",
                        paddingRight: "5px",
                      }}
                    />
                  </span>
                  Flexible
                </span>
              </div>
              <div className="space_education_four_boxes_bottom_r four_boxes">
                <div className="left_top_triangle"></div>
                <span className="four_boxes_tex">
                  <span>
                    <CheckCircleIcon
                      style={{
                        color: "#0D5EF4",
                        fontSize: "16px",
                        width: "16px",
                        height: "16px",
                        paddingRight: "5px",
                      }}
                    />
                  </span>
                  Low Price
                </span>
              </div>
            </div>
          </div>

          {/* --------GET STARTED BUTTON---------- */}
        </div>
        {/* --------------------------------RIGHT PART END----------------------- */}
      </div>
    </div>
  );
};

export default Index;
