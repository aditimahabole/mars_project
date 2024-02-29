import PropTypes from "prop-types";
import "./style.css";

const SmallCard = ({image,topic,title,para,date,}) => {
    console.log(topic,title,para,date,image)
  return (
    <div className="small_card_main_div">
        <div className="small_card_image_div">
            <img src={image} className="small_card_image_div_img" />
            <div className="small_card_image_div_date"><span className="small_card_image_div_span">{date.slice(0,6)} </span> </div>

        </div>
        <div  className="small_card_content_div">
            <div className="small_card_content_div_topic">{topic} </div>
            <div className="small_card_content_div_h2" ><h2>{title}</h2></div>
            <div className="small_card_content_div_span"><span>{date}</span></div>

        </div>
    </div>
  )
}
SmallCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    para: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
  };
export default SmallCard