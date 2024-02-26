import "./style.css";
import PropTypes from "prop-types";
import StarIcon from "@mui/icons-material/Star";
import DocumentIcon from "@mui/icons-material/Description";
import UserIcon from "@mui/icons-material/AccountCircle";
import BarChartIcon from "@mui/icons-material/BarChart";
import some_img from '../../../public/assets/about_1_2.png';

const CardComponent = ({ Title }) => {
    console.log(Title)
  const icon_size = "12px";
  const range = Array.from({ length: 5 }, (_, index) => index);
  return (
    <div className="popular_internship_card">
      <div className="popular_internship_card_stars">
        {range.map((number) => (
          <StarIcon
            key={number}
            className="star_icon"
            style={{ fontSize: '14px' }}
          />
        ))}
      </div>
      <div className="popular_internship_card_heading">
        <div className="pop_inter_head1">{Title}</div>
        <div className="pop_inter_head2"><img src={some_img} className="pop_inter_head_img"/> </div>
      </div>
      <div className="popular_internship_card_lesson">
        <div>
          <span className="pop_inter_icons">
            <DocumentIcon style={{ fontSize: icon_size }} />
          </span>{" "}
          <span className="pop_inter_text">Lessons 0</span>{" "}
        </div>
        <div>
          <span className="pop_inter_icons">
            <UserIcon style={{ fontSize: icon_size }} />
          </span>{" "}
          <span className="pop_inter_text">Students 0</span>{" "}
        </div>
        <div>
          <span className="pop_inter_icons">
            <BarChartIcon style={{ fontSize: icon_size }} />
          </span>{" "}
          <span className="pop_inter_text">Intermediate</span>{" "}
        </div>
      </div>
      <hr></hr>
      <div className="popular_internship_card_free">
        <div className="pop_inter_logo_child1">
          <span className="pop_inter_logo">
            {" "}
            <span>M</span>{" "}
          
          </span>{" "}
          <span className="pop_inter_logo_side_text">
              {" "}
              marsexplorationpvt
            </span>
        </div>
        <div className="pop_inter_logo_child2">
          <span>FREE</span>
        </div>
      </div>
    </div>
  );
};
CardComponent.propTypes = {
Title: PropTypes.string.isRequired,
};

export default CardComponent;
