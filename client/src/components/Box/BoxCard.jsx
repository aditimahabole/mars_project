import "./style.css";
import PropTypes from "prop-types";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const BoxCard = ({ top, middle, bg_color, bg_gradient }) => {
  console.log(bg_gradient);
  console.log(bg_color);

  return (
    <div className="box_card_main" >
      <div
        className="box_card_in"
        style={{ margin: "10px 10px"}}
      >
        <div
          className="right_container_text"
          style={{ color: "white", flexDirection: "column", display: "flex" }}
        >
          <span style={{ color: "white" }}>
            <DescriptionOutlinedIcon
              style={{
                fontSize: "16px",
                width: "16px",
                height: "16px",
                paddingRight: "5px",
              }}
            />
            {top}
          </span>
          <h1
            style={{
              color: "white",
              fontFamily: `var(--jost)`,
              fontSize: "30px",
              zIndex: "5",
              width: "60%",
              // backgroundColor:"transparent"
            }}
          >
            {middle}
          </h1>
          {/* <Button content={bt_content} color1="--dark-black" color2="--dark-blue" text="--title-color" /> */}
        </div>
      </div>
    </div>
  );
};
BoxCard.propTypes = {
  top: PropTypes.string.isRequired,
  middle: PropTypes.string.isRequired,

  bg_color: PropTypes.string.isRequired,
  bg_gradient: PropTypes.string.isRequired,
};

export default BoxCard;
