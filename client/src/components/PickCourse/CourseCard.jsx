import PropTypes from "prop-types";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import "./style.css";
// import { Link } from "react-router-dom";
const CardComponent = ({
  image,
  heading,
  status,
  star,
  price,
  lesson,
  students,
}) => {
  console.log(image, heading, star, status, star, lesson, students, price);

  const renderStars = (star) => {
    const stars = [];
    const fullStars = Math.floor(star);
    const halfStar = star % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarIcon key={i} style={{ color: "gold" }} />);
    }

    if (halfStar) {
      stars.push(<StarBorderIcon key="half" style={{ color: "gold" }} />);
    }

    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <StarBorderIcon key={`empty-${i}`} style={{ color: "#0d5ef4" }} />
      );
    }

    return stars;
  };
  return (
    <div className="course_card1">
      <div className="course_logo">
        <img src={image} alt="ilogo" className="clogo" />
      </div>
      <div className="internship_bottom_text">
        <div className="inter_text_div">
          <div className="inter_status">{status} </div>
        </div>
        <div className="inter_text_div">
          <div className="course_heading">{heading} </div>
        </div>
        <div className="inter_text_div">
          <div className="course_price">Rs {price} </div>
        </div>

        <div className="inter_text_div">
          {" "}
          <div style={{ display: "flex" }}>{renderStars(star)}</div>
        </div>
        <div className=" course_last_part_div">
          {" "}
        <div className="course_last_part">
          <span> {lesson}{"  "}Lessons</span>
         
        </div>
        <div className="course_last_part">
          <span> {students}{"  "}Students</span>
         
        </div>
        </div>
      </div>
    </div>
  );
};
CardComponent.propTypes = {
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  star: PropTypes.number.isRequired,
  para: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  lesson: PropTypes.number.isRequired,
  students: PropTypes.number.isRequired,
};

export default CardComponent;
