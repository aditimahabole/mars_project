import "./CourseInstructors.css";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import expert1 from "../../../public/assets/expert1.jpg";
import expert2 from "../../../public/assets/expert2.jpeg";
import expert3 from "../../../public/assets/expert3.jpeg";

const CourseInstructors = () => {
  return (
    <div className="course_inst_section">
      <div className="course_inst_headings">
        <div>
          <span className="course_inst_headings_span">INSTRUCTORS</span>
        </div>
        <div className="course_inst_h2_divs">
          <h2 className="course_inst_headings_h2">Course Instructors </h2>{" "}
        </div>
      </div>

      <div className="course_instruct_bottom">
        <div className="course_card">
          <div className="course_icon">
            <img src={expert1} className="ce_img" />
          </div>

          <span style={{display:"flex",flexDirection:"column"}}>
            <div
              style={{
                display: "flex",
                width: "70%",
                justifyContent: "center",
              }}
            >
              <a href="#" className="personal_links">
                <FacebookRoundedIcon />
              </a>
              <a href="#" className="personal_links">
                <LinkedInIcon />
              </a>
              <a href="#" className="personal_links">
                {" "}
                <InstagramIcon />
              </a>
            </div>


            <div className="course_card_tag">
                <h3>Expert 1 Name</h3>
                <p>Software Developer</p>
            </div>
          </span>
        </div>

        <div className="course_card">
           
          <div className="course_icon">
            <img src={expert2} className="ce_img" />
          </div>

          <span style={{display:"flex",flexDirection:"column"}}>
            <div
              style={{
                display: "flex",
                width: "70%",
                justifyContent: "center",
              }}
            >
              <a href="#" className="personal_links">
                <FacebookRoundedIcon />
              </a>
              <a href="#" className="personal_links">
                <LinkedInIcon />
              </a>
              <a href="#" className="personal_links">
                {" "}
                <InstagramIcon />
              </a>
            </div>


            <div className="course_card_tag">
                <h3>Expert 2 Name</h3>
                <p>Educator</p>
            </div>
          </span>
        </div>



        <div className="course_card">
          <div className="course_icon">
            <img src={expert3} className="ce_img" />
          </div>

          <span style={{display:"flex",flexDirection:"column"}}>
            <div
              style={{
                display: "flex",
                width: "70%",
                justifyContent: "center",
              }}
            >
              <a href="#" className="personal_links">
                <FacebookRoundedIcon />
              </a>
              <a href="#" className="personal_links">
                <LinkedInIcon />
              </a>
              <a href="#" className="personal_links">
                {" "}
                <InstagramIcon />
              </a>
            </div>


            <div className="course_card_tag">
                <h3>Expert 3 Name</h3>
                <p>Software Developer</p>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseInstructors;
