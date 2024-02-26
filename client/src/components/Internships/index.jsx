import Internship from "./Internship";
import "./style.css";
import img1 from "../../../public/assets/cat-1_1.svg";
import img2 from "../../../public/assets/cat-1_2.svg";
import img3 from "../../../public/assets/cat-1_3.svg";
import img4 from "../../../public/assets/cat-1_4.svg";
const Index = () => {
  return (
    <div className="internship_main_section">
      <div className="internship_section_heading">
        <h1 className="internship_section_heading_h1">Top Categories</h1>
      </div>

      <div className="internship_section">
        <div className="single_internship_div">
          <Internship
            image={img1}
            heading="Space Engineering"
            status="Upcoming Internships"
            url="/space-engineering"
          />
        </div>
        <div className="single_internship_div">
          <Internship
            image={img2}
            heading="Astronomy & Astrophysics"
            status="Upcoming Internships"
            url="/upcoming-internships"
          />
        </div>
        <div className="single_internship_div">
          <Internship
            image={img3}
            heading="Computer Engineering"
            status="56+ Courses"
            url="/computer-engineering"
          />
        </div>

        <div className="single_internship_div">
          <Internship
            image={img4}
            heading="Aeronautical / Aerospace Engineering"
            status="9+ Internship"
            url="/aerospace-engineering"
          />
        </div>
        <div className="single_internship_div">
          <Internship
            image={img3}
            heading="Mechanical Engineering"
            status="56+ Courses"
            url="/mechanical-engineering"
          />
        </div>
        <div className="single_internship_div">
          <Internship
            image={img3}
            heading="Electronic & Telecommunication Engineering"
            status="56+ Courses"
            url="/electronic-engineering"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
