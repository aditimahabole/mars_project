import Aicte from "../../../public/assets/AICTE.jpg";
import Nspace from "../../../public/assets/nspace.png";
import ISRO from "../../../public/assets/ISR.png";
import Startup from "../../../public/assets/startup.png";
import MCA from "../../../public/assets/MCA.png";
import './style.css';

const index = () => {
  return (
    <div className="partner_section">
      <div className="partner_section_heading">
        <h1 className="partner_section_heading_h1">
          Partnered, Approved and Supported By
        </h1>
      </div>
      <div className="partner_section_partners">
        <div className="partner_section_partners_img">
          <img src={Aicte} className="partner_section_partners_img1" />
        </div>
        <div className="partner_section_partners_img">
          <img src={Nspace}  className="partner_section_partners_img2"/>
        </div>
        <div className="partner_section_partners_img">
          <img src={ISRO}  className="partner_section_partners_img3"/>
        </div>
        <div className="partner_section_partners_img">
          <img src={MCA}  className="partner_section_partners_img4"/>
        </div>
        <div className="partner_section_partners_img">
          <img src={Startup}  className="partner_section_partners_img5"/>
        </div>
      </div>
    </div>
  );
};

export default index;
