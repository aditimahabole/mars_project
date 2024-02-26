import Button from "../Offer/Button";
import "./style.css";
import photo from "../../../public/assets/footer-bg-shape1.png";
import photo1 from "../../../public/assets/testi-bg-shape_1_1.png";

const Index = () => {
  return (
    <div className="quality_section">
      <div className="float_back">
        {" "}
        <img src={photo} />{" "}
      </div>
      <div className="float_back1">
        {" "}
        <img src={photo1} />{" "}
      </div>

      <div className="quality_section_inner">
        <h2 className="quality_section_inner_h2up">
          Get Your Quality Skills{" "}
          <span className="quality_section_inner_h2span">Certificate</span>
        </h2>
        <h2 className="quality_section_inner_h2down">Through MARSE</h2>
        <Button
          content="GET STARTED NOW"
          color1="--red1"
          color2="--dark-blue"
        />
      </div>
    </div>
  );
};

export default Index;
