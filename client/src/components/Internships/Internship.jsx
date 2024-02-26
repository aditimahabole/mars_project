import PropTypes from "prop-types";
import { ArrowForward } from "@mui/icons-material";
import "./style.css";
import { Link } from "react-router-dom";
const CardComponent = ({ image, heading, status ,url }) => {
  return (
    <div className="internship_card">
      <div className="internship_logo">
        <img src={image} alt="ilogo" />
      </div>
      <span className="internship_card1" href="#">
        <p className="internship_headings">{heading}</p>
        <p className="internship_small">{status}</p>
        <div className="internship_go-corner" >
          <div className="internship_go-arrow">
            <Link to={url} style={{color:"white"}} > <ArrowForward /></Link>
           
          </div>
        </div>
      </span>
    </div>
  );
};
CardComponent.propTypes = {
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default CardComponent;
