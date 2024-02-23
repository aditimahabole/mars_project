import PropTypes from "prop-types";
import "./style.css";
import RoomIcon from "@mui/icons-material/Room";
import ScheduleIcon from "@mui/icons-material/Schedule";
import Button from "../Offer/Button";

const Card = ({
  profile,
  name,
  title,
  address,
  startTime,
  endTime,
  content,
}) => {
  return (
    <div className="event_card">
      <div className="event_card_top">
        <div className="event_card_top_l">
          <img src={profile} />
        </div>
        <div className="event_card_top_r">
          <h2 className="event_card_h2">{name}</h2>
          <h3 className="event_card_h3">{title}</h3>
        </div>
      </div>
      <div className="event_card_middle">
        <div>
          <span className="event_card_middle_text">
            <RoomIcon
              style={{
                fontSize: "16px",
                width: "16px",
                height: "16px",
                paddingRight: "5px",
                color: "var(--dark-blue)",
              }}
            />{" "}
            {address}{" "}
          </span>
        </div>

        <div>
          <span className="event_card_middle_text">
            <ScheduleIcon
              style={{
                fontSize: "16px",
                width: "16px",
                height: "16px",
                paddingRight: "5px",
                color: "var(--dark-blue)",
              }}
            />{" "}
            {startTime} - {endTime}{" "}
          </span>
        </div>
      </div>

      <p className="event_card_content ">{content}</p>
      <Button content="VIEW EVENT" color1="dark_black" color2="light_blue" />
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
};

export default Card;
