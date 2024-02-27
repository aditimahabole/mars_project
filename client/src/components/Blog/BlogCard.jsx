import "./style.css";
import PropTypes from "prop-types";

import UserIcon from "@mui/icons-material/AccountCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Button from "../Offer/Button";

const CardComponent = ({ by_person, time, topic, image }) => {
  return (
    <div className="blog_card">
      <div className="blog_card_left">
        <img src={image} className="blog_photo" />
      </div>
      <div className="blog_card_right">
        <div className="blog_card_right">
          <span className="blog_card_right_span">
            {" "}
            <span className="blog_card_right_span_icon">
              <UserIcon
                style={{
                  color: "#0D5EF4",
                  fontSize: "16px",
                  width: "16px",
                  height: "16px",
                  paddingRight: "5px",
                }}
              />{" "}
            </span>{" "}
            {by_person}{" "}
          </span>
          <span  className="blog_card_right_span" >
            {" "}
            <span className="blog_card_right_span_icon">
              {" "}
              <AccessTimeIcon
                style={{
                  color: "#0D5EF4",
                  fontSize: "16px",
                  width: "16px",
                  height: "16px",
                  paddingRight: "5px",
                }}
              />{" "}
            </span>{" "}
            {time}{" "}
          </span>
        </div>


        <div>
          <h3 className="blog_card_right_h3">{topic} </h3>
        </div>
        <div>
          <Button  content="VIEW BLOG" color1="--dark-blue" color2="--dark-black" />
          {/* <button className="learn-more">
            <span className="learn-more-circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="learn-more-button-text">Learn More</span>
          </button> */}
        </div>
      </div>
    </div>
  );
};
CardComponent.propTypes = {
  image: PropTypes.string.isRequired,
  by_person: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
};

export default CardComponent;
