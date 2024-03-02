import "./AboutTestimonials.css";
import AbTestimonialCard from "./AbTestimonialCard";
import user_image from "../../../public/assets/testi_1_1.png";
import user_image1 from "../../../public/assets/testi_1_2.png";
import { useState } from "react";
const AboutTestimonials = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleClickNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, 4 - 1));
  };

  const handleClickPrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="about_test_section">
      <div className="about_test_headings">
        <div>
          <span className="about_test_headings_span">TESTIMONIALS</span>
        </div>
        <div className="about_test_h2_divs">
          <h2 className="about_test_headings_h2">What Our Students </h2>{" "}
          <h2 className="about_test_headings_h2">Have To Say</h2>
        </div>
        <div style={{alignItems:"center"}}>
          <p className="about_test_headings_p">
            Students provided positive reviews, praising the courses
            comprehensiveness and engaging content. They highlighted the
            knowledgeable instructors and supportive learning environment.
          </p>{" "}
        </div>
      </div>
      <div className="about_test_card_section">
        <div className="slider_button_div1">
          <div>
            <button className="slider-button prev" onClick={handleClickPrev}>
              {" "}
              &lt;
            </button>
          </div>
          <div>
            <button className="slider-button next" onClick={handleClickNext}>
              {" "}
              &gt;
            </button>
          </div>
        </div>

        <div className="about_test_carousel">
          <div className="slider-container">
            <div
              className="slider-items"
              style={{ transform: `translateX(-${startIndex * 50}%)` }}
            >
              <AbTestimonialCard
                image={user_image1}
                name="Jena Mathew"
                designation="Software Engineer"
                star="5"
                para="Quickly maximize visionary solutions after mission critical action items productivate premium portals for impactful -services stinctively negotiate enabled niche markets via growth strategies"
                logo="logo"
              />
              <AbTestimonialCard
                image={user_image}
                name="Jena Mathew"
                designation="Software Engineer"
                star="4"
                para="Quickly maximize visionary solutions after mission critical action items productivate premium portals for impactful -services stinctively negotiate enabled niche markets via growth strategies"
                logo="logo"
              />
              <AbTestimonialCard
                image={user_image1}
                name="Jena Mathew"
                designation="Software Engineer"
                star="5"
                para="Quickly maximize visionary solutions after mission critical action items productivate premium portals for impactful -services stinctively negotiate enabled niche markets via growth strategies"
                logo="logo"
              />
              <AbTestimonialCard
                image={user_image}
                name="Jena Mathew"
                designation="Software Engineer"
                star="3"
                para="Quickly maximize visionary solutions after mission critical action items productivate premium portals for impactful -services stinctively negotiate enabled niche markets via growth strategies"
                logo="logo"
              />
              <AbTestimonialCard
                image={user_image1}
                name="Jena Mathew"
                designation="Software Engineer"
                star="5"
                para="Quickly maximize visionary solutions after mission critical action items productivate premium portals for impactful -services stinctively negotiate enabled niche markets via growth strategies"
                logo="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTestimonials;
