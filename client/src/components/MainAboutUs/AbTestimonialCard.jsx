import PropTypes from "prop-types";
import "./AbTestimonialCard.css";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
const Card = ({ image, para, name, designation, star ,logo }) => {

    const renderStars = (star) => {
        const stars = [];
        const fullStars = Math.floor(star);
        const halfStar = star % 1 !== 0;
    
        for (let i = 0; i < fullStars; i++) {
          stars.push(<StarIcon key={i} style={{color:'gold'}}  />);
        }
    
        if (halfStar) {
          stars.push(<StarBorderIcon key="half" style={{color:'gold'}} />);
        }
    
        const remainingStars = 5 - stars.length;
        for (let i = 0; i < remainingStars; i++) {
          stars.push(<StarBorderIcon key={`empty-${i}`} style={{color:'gold'}} />);
        }
    
        return stars;
      };


      
  return (
    <div className="at_card">
      <div className="at_top_card">
        <div className="at_top_logo">
            {logo}
        </div>

        <div className="at_top_para">
            <p>{para}</p>
        </div>
        <div style={{display :"flex" }}>
        {renderStars(star)}

        </div>

      </div>
      <div className="at_bottom_part">
        <div className="at_bottom_img">
            <img src={image} className="at_bottom_img_profile"/>
        </div>
        <div className="at_bottom_text">
            <h3 className="at_bottom_text_h3">{name}</h3>
            <p className="at_bottom_text_p">{designation}</p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
    logo: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  star: PropTypes.string.isRequired,
};

export default Card;
