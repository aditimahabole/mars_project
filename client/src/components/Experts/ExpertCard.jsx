import PropTypes from "prop-types";
import "./ExpertCardCss.css"; // Assuming you have a CSS file for styling
// import PeopleIcon from '@material-ui/icons/PeopleOutline';
// import TaskIcon from "@mui/icons-material/Task";
// import Diversity3Icon from "@mui/icons-material/Diversity3";

const Card = ({ imgSrc, title, content }) => {
  console.log(title,content)
  return (
    <div className="expert_card">
      <div className="expert_card_image_div">
        <img src={imgSrc}  className="expert_card_image"/>
      </div>
      <div className="expert_plus_div">
      <button className="expert_plus">+</button>
      </div>
      
     
      
    </div>
  );
};

Card.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Card;
