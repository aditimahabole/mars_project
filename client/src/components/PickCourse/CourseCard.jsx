import PropTypes from "prop-types";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import "./style.css";
// import { Link } from "react-router-dom";
const CardComponent = ({ image, heading, status ,star ,para }) => {
  console.log(image,heading,para,star,status)


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
      stars.push(<StarBorderIcon key={`empty-${i}`} style={{color:'#0d5ef4'}} />);
    }

    return stars;
  };
  return (
    <div className="internship_card1">
      <div className="internship_logo">
        <img src={image} alt="ilogo" className="ilogo" />
      </div>
      <div className="internship_bottom_text">
        <div  className="inter_text_div" ><div  className="inter_status" >{status} </div></div>
        <div  className="inter_text_div" ><div  className="inter_heading">{heading} </div></div>
        <div  className="inter_text_div" ><div  className="inter_para" >{para} </div></div>
        <div  className="inter_text_div" > <div style={{display :"flex" }}>
        {renderStars(star)}

        </div></div>

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
};

export default CardComponent;
