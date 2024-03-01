import "./QualityCourses.css";
import computer_icon from "../../../public/assets/computer_icon.png";
import key_icon from "../../../public/assets/key_icon.png";


const QualityCourses = () => {
  return (
    <div className="quality_section">
      <div className="quality_section_top">
        <div className="quality_section_top_left">
          <h2 className="quality_section_top_left_h2">
            We Providing The 
          </h2>
          <h2 className="quality_section_top_left_h2">
          Best 
          <span className="quality_section_top_left_span"> Quality Online </span> Courses
          </h2>
        </div>
        <div className="quality_section_top_right">
          <p className="quality_section_top_right_p">
            Lorem ipsum dolor sit amet cons etur adipisicing elit sed do eiusm
            aut tempor incididunt labore dolore magna aliqua quis nostrud ex
            ertation lamcolab oris aliquip.
          </p>
        </div>
      </div>

      <div className="quality_section_bottom">
        <div className="quality_card">
          <div className="quality_card_img_div">
            <img src={computer_icon} className="quality_card_img q1" />
          </div>
          <div className="quality_card_content_div">
            <h3 className="quality_card_content_div_h3">
              High Quality Courses
            </h3>
            <p className="quality_card_content_p">
              Lorem ipsum dolor sit amet conset ur elit sed eiusmod ex tempor
              inc labore dolore magna.
            </p>
          </div>
        </div>

        <div className="quality_card">
          <div className="quality_card_img_div">
            <img src={key_icon} className="quality_card_img q2" />
          </div>
          <div className="quality_card_content_div">
            <h3 className="quality_card_content_div_h3">Life Time Access</h3>
            <p className="quality_card_content_p">
              Lorem ipsum dolor sit amet conset ur elit sed eiusmod ex tempor
              inc labore dolore magna.
            </p>
          </div>
        </div>

        <div className="quality_card">
          <div className="quality_card_img_div">
            <img src={computer_icon} className="quality_card_img q3" />
          </div>
          <div className="quality_card_content_div">
            <h3 className="quality_card_content_div_h3">Expert Instructors</h3>
            <p className="quality_card_content_p">
              Lorem ipsum dolor sit amet conset ur elit sed eiusmod ex tempor
              inc labore dolore magna.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityCourses;
