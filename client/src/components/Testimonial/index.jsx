import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import "./style.css";
import TestimonialCard from "./TestimonialCard";
import user_image from "../../../public/assets/testi_1_1.png";
import user_image1 from "../../../public/assets/testi_1_2.png";

import leafy from "../../../public/assets/testi-bg-shape_1_2.png";

const index = () => {
  return (
    <div className="testimonial_section">
      <div className="leafy2">
        <img src={leafy} alt="." />
      </div>
      <div className="testimonial_inner">
        <div className="testimonial_headings">
          <span className="testimonial_headings_span">
            <DescriptionOutlinedIcon
              style={{
                fontSize: "16px",
                width: "16px",
                height: "16px",
                paddingRight: "5px",
              }}
            />
            OUR STUDENTS TESTIMONIALS
          </span>
          <h2 className="testimonial_headings_h2">
            Students Say’s About MARS Exploration
          </h2>
        </div>
        <div className="testimonial_div">
          <div className="testimonial_div_slide">
            <TestimonialCard
              image={user_image}
              name="David Smith"
              designation="Software Engineer"
              star="3.5"
              para="“Quickly maximize visionary solutions after mission critical action items productivate premium portals for impactful -services stinctively negotiate enabled niche markets via growth strategies”"
            />
             <TestimonialCard
              image={user_image1}
              name="Jena Mathew"
              designation="Software Engineer"
              star="5"
              para="“Quickly maximize visionary solutions after mission critical action items productivate premium portals for impactful -services stinctively negotiate enabled niche markets via growth strategies”"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
