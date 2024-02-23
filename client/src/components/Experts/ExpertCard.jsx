
import PropTypes from 'prop-types';
import './ExpertCardCss.css'; // Assuming you have a CSS file for styling
// import PeopleIcon from '@material-ui/icons/PeopleOutline';
import TaskIcon from '@mui/icons-material/Task';
import Diversity3Icon from '@mui/icons-material/Diversity3';


const Card = ({ imgSrc, title, content }) => {
  return (
    <div className="card">
      <div className="header">
        <div className="img-box">
          {imgSrc && <img src={imgSrc} alt="Card" />}
        </div>
      </div>
      <div className="content">
        <h2>{title} </h2>
        <p className='expert_p'>{content}</p>
      
        <div className='expert_card_bottom'>
            <span ><TaskIcon style={{ fontSize: "16px",
                    width: "16px",
                    height: "16px",
                    paddingRight: "5px",}} /> </span> {"  "} 4 courses {"  "} | {"  "}  <span><Diversity3Icon style={{ fontSize: "16px",
                    width: "16px",
                    height: "16px",
                    padding: "0px 5px",}} /> </span> {"  "}Students 70+
        </div>
        {/* <a href="#" className="btn-link">Read More...</a> */}
      </div>
    </div>
  );
};

Card.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Card;
