import BoxCard from "./BoxCard";
import "./style.css";
import Button from "../Offer/Button";
const index = () => {
  return (
    <div className='box_card_div' style={{display:'flex' }}>
        <div className='box_card_cards1'  style={{display:'flex',flexDirection:"column" , width:"45%",margin:"20px",borderRadius:"10px",padding:"20px"}}>
        <BoxCard
        top="POPULAR INTERNSHIP"
        middle="Get The Best Internship & Upgrade Your Skills"
    
        bg_color="--red1"
        bg_gradient="--red1bg"
      />
        <Button content="JOIN WITH US" color1="--dark-blue" color2="--dark-black"  text="--light-white"/>
        </div>
        <div className='box_card_cards2' style={{display:'flex',flexDirection:"column" , width:"45%",margin:"20px"  ,borderRadius:"10px" ,padding:"20px"    }}>
       <BoxCard
        top="POPULAR INTERNSHIP"
        middle="Engaging Internship for
        Intellectual Exploration"
  
        bg_color="--blue1"
        bg_gradient="--blue1bg"
      />
       <Button content="EXPLORE INTERNSHIP" color1="--red1" color2="--dark-black"  text="--light-white"/>
        </div>
    </div>
  );
};

export default index;
