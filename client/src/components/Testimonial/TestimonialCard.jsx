import PropTypes from "prop-types";
import "./style.css";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
const Card = ({ image, para, name, designation, star }) => {

    const renderStars = (star) => {
        const stars = [];
        const fullStars = Math.floor(star);
        const halfStar = star % 1 !== 0;
    
        for (let i = 0; i < fullStars; i++) {
          stars.push(<StarIcon key={i} style={{color:'#0d5ef4'}}  />);
        }
    
        if (halfStar) {
          stars.push(<StarBorderIcon key="half" style={{color:'#0d5ef4'}} />);
        }
    
        const remainingStars = 5 - stars.length;
        for (let i = 0; i < remainingStars; i++) {
          stars.push(<StarBorderIcon key={`empty-${i}`} style={{color:'#0d5ef4'}} />);
        }
    
        return stars;
      };
  return (
    <div className="testimonial_card">
      <div className="testimonial_triangle"></div>

      <div className="testimonial_card_top">
        <div className="testimonial_card_top_l">
          <img src={image} className="testi_image"/>
        </div>
        <div className="testimonial_card_top_r">
          <p>{para}</p>
        </div>
      </div>
      <hr></hr>
      <div className="testimonial_card_middle">
        <div className="testimonial_card_middle_l">
            <h3> {name}</h3>
            <p> {designation}</p>

        </div>
        <div style={{display :"flex" }}>
        {renderStars(star)}

        </div>
       
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  star: PropTypes.string.isRequired,
};

export default Card;
