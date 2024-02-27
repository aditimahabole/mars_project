import BoxCard from "./BoxCard";
import "./style.css";
import Button from "../Offer/Button";
import red_teacher from "../../../public/assets/red_teacher.svg";
import blue_teacher from "../../../public/assets/blue_teacher.svg";
const index = () => {
  return (
    <div className="box_card_div" style={{ display: "flex",padding:"20px 40px", justifyContent:"space-evenly" }}>
      <div
        className="box_card_cards1"

        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          margin: "5px",
          borderRadius: "10px",
          padding: "20px",
          maxHeight:"500px",
          // backgroundColor:"yellow"
        }}
      >
        <img src={blue_teacher} className="teacher_photo" />
        <BoxCard
          top="VALUABLE MENTOR"
          middle="Get The Best Internship & Upgrade Your Skills"
          bg_color="--red1"
          bg_gradient="--red1bg"
        />


        <Button
          content="JOIN WITH INSTRUCTOR"
          color1="--dark-blue"
          color2="--dark-black"
          text="--light-white"
        />
      </div>

      
      <div
        className="box_card_cards2"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          margin: "5px",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <img src={red_teacher} className="teacher_photo" />
        <BoxCard
          top="OUR PLACEMENTS"
          middle="Engaging Internship for
        Intellectual Exploration"
          bg_color="--blue1"
          bg_gradient="--blue1bg"
        />
        <Button
          content="VIEW PLACEMENT DETAILS"
          color1="--red1"
          color2="--dark-black"
          text="--light-white"
        />
      </div>
    </div>
  );
};

export default index;
