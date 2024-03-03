import heading_image from "../../../public/assets/main_about_1.jpg";
import { Link } from "react-router-dom";
import "./TopHeading.css";

const TopHeading = () => {
  return (
    <div className="ab_background">
      <div className="about_us_main_heading">
        <div className="about_us_main_overlay"></div>
        <div className="ab_back_image">
        <img
          src={heading_image}
          alt="back"
          className="about_us_main_top_image"
        />
        </div>
     
      </div>

      <div className="about_us_main_heading_text">
        <h1>Blogs</h1>
        
        <div style={{ display: "flex" }}>
          <Link to="/" className="to_home_link">
            Home{" "}
          </Link>
          {"   "} <span className="about_us_span"> &gt; Blogs</span>
        </div>
      </div>
    </div>
  );
};

export default TopHeading;
