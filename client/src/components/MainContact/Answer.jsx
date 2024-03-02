import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import ShareIcon from "@mui/icons-material/Share";
import top_image from '../../../public/assets/contact_1.jpg'
import './Answer.css';

const Answer = () => {
  return (
    <div className="ans_section">
      <div className="ans_section_img_div">
        <img  src={top_image}  className="contact_top_image"/>
      </div>
      <div className="ans_section_text_div">
        <div className="ans_section_text_div_inner">
          <h1 className="ans_section_text_div_inner_h1">I will Answer all your Questions</h1>
          <div className="ans_inner_div">
            <h3>Address</h3>
            <p>A/p Madgule Maharashtra</p>
          </div>
          <div className="ans_inner_div">
            <h3>Email</h3>
            <p>hrmarsexplorationpvt@gmail.com</p>
          </div>
          <div className="ans_inner_div">
            <h3>Phone</h3>
            <p>+91 8530636474</p>
          </div>

          <div style={{ display: "flex" }}>
            <a href="" className="contact_links">
            <ShareIcon  style={{margin:"5px"}}/>
            </a>
            <a href="" className="contact_links">
            <FacebookOutlinedIcon style={{margin:"5px"}} />
            </a>
            <a href="" className="contact_links">
            <LinkedInIcon style={{margin:"5px"}} />
            </a>
            <a  href="" className="contact_links"><InstagramIcon style={{margin:"5px"}} /></a>
            <a href="" className="contact_links"><YouTubeIcon  style={{margin:"5px"}}/> </a>

            
            
           
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answer;
