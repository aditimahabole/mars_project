import PropTypes from 'prop-types';
import { ArrowForward } from '@mui/icons-material';
import './style.css'
const CardComponent = ({image,heading,status}) => {
  return (
    <div className="internship_card">
        <div className='internship_logo'>
            <img src={image} alt='ilogo' />
        </div>
      <a className="internship_card1" href="#">
        <p className='internship_headings'>{heading}</p>
        <p className="internship_small">{status}</p>
        <div className="internship_go-corner" href={"www.google.com"}>
          <div className="internship_go-arrow">
            <ArrowForward />
          </div>
        </div>
      </a>
    </div>
  );
}
CardComponent.propTypes = {
    image: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  };

export default CardComponent;
