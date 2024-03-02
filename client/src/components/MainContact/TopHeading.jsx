
import { Link } from "react-router-dom";
import "./TopHeading.css";

const TopHeading = () => {
  return (
    <div className="ab_background">
      <div className="about_us_main_heading">
        
        
     
      </div>

      <div className="contact_main_heading_text">
        <h1>Contact Us</h1>

        <div style={{ display: "flex" }}>
          <Link to="/" className="contact_to_home_link">
            Home{" "}
          </Link>
          {"   "} <span className="contact_span"> &gt; Contact Us</span>
        </div>
      </div>
    </div>
  );
};

export default TopHeading;
