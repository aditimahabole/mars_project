import PropTypes from "prop-types";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const AboutCards = ({para , point1 , point2}) => {
  return (
    <div className="about_card_div">
      <div className="about_card_div_para">
        <p className="about_card_div_para_p">
         {para}
        </p>
      </div>
      <div className="about_card_div_points">
        <ul className="about_card_div_points_ul">
          <li className="about_card_div_points_li"><CheckCircleIcon style={{fontSize:"16px" , color:"var(--dark-blue)"   }}  />{"  "} {point1}</li>
          <li className="about_card_div_points_li"><CheckCircleIcon  style={{fontSize:"16px" , color:"var(--dark-blue)"}}/>{"  "}{point2}</li>
        </ul>
      </div>
    </div>
  );
};
AboutCards.propTypes = {
    para: PropTypes.string.isRequired,
    point1: PropTypes.string.isRequired,
    point2: PropTypes.string.isRequired,
    
  };
  
export default AboutCards;
