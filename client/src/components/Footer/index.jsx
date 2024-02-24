import "./style.css";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { MailOutlined } from "@mui/icons-material";
import Button from "../Offer/Button";
const Index = () => {
  return (
    <div className="footer_section">
      <div className="footer_section_top">
        <div className="foot_div_box">
          <div className="footer_section_top_logo">
            <span className="footer_logo">
              <LocalPhoneOutlinedIcon
                style={{
                  fontSize: "30px",
                  width: "30px",
                  height: "30px",
                  //   paddingRight: "5px",
                }}
              />
            </span>
          </div>
          <div className="logo_top_info">
            <p>Call us any time:</p>
            <h2>+918530636474</h2>
          </div>
        </div>

        <div className="foot_div_box">
          <div className="footer_section_top_logo">
            <span className="footer_logo">
              <EmailOutlinedIcon
                style={{
                  fontSize: "30px",
                  width: "30px",
                  height: "30px",
                }}
              />
            </span>
          </div>
          <div className="logo_top_info">
            <p>Email us 24/7 hours:</p>
            <h2>hrmarsexplorationpvt@gmail.com</h2>
          </div>
        </div>

        <div className="foot_div_box">
          <div className="footer_section_top_logo">
            <span className="footer_logo">
              <LocationOnOutlinedIcon
                style={{
                  fontSize: "30px",
                  width: "30px",
                  height: "30px",
                }}
              />
            </span>
          </div>
          <div className="logo_top_info">
            <p> Our Office location:</p>
            <h2>A/p Madgule Maharashtra </h2>
          </div>
        </div>
      </div>

      <div className="footer_section_bottom">
        <div className="footer_bottom_inner">
          <div className="footer_bottom_inner_top">
            <div className="foot4_div">
              <div className="foot4_div_box">
                <p>
                  Continually optimize backward manufactured products whereas
                  communities negotiate life compelling alignments
                </p>
                <h2>FOLLOW US ON</h2>
                <div>
                  <span>
                    <FacebookOutlinedIcon
                      style={{
                        fontSize: "20px",
                        width: "20px",
                        height: "20px",
                        margin: "5px",
                        color: "#AFBCCF",
                        border: "1px solid #AFBCCF",
                        borderRadius: "50%",
                        padding: "10px",
                      }}
                      className="footer_imp_icons"
                    />{" "}
                  </span>
                  <span>
                    <LinkedInIcon
                      style={{
                        fontSize: "20px",
                        width: "20px",
                        height: "20px",
                        margin: "5px",
                        color: "#AFBCCF",
                        border: "1px solid #AFBCCF",
                        borderRadius: "50%",
                        padding: "10px",
                      }}
                      className="footer_imp_icons"
                    />{" "}
                  </span>
                  <span>
                    <YouTubeIcon
                      style={{
                        fontSize: "20px",
                        width: "20px",
                        height: "20px",
                        margin: "5px",
                        color: "#AFBCCF",
                        border: "1px solid #AFBCCF",
                        borderRadius: "50%",
                        padding: "10px",
                      }}
                      className="footer_imp_icons"
                    />{" "}
                  </span>
                  <span>
                    <InstagramIcon
                      style={{
                        fontSize: "20px",
                        width: "20px",
                        height: "20px",
                        margin: "5px",
                        color: "#AFBCCF",
                        border: "1px solid #AFBCCF",
                        borderRadius: "50%",
                        padding: "10px",
                      }}
                      className="footer_imp_icons"
                    />{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="foot4_div">
              <div className="foot4_div_box">
                <h2 className="f_head">Quick Links</h2>
                <ul className="f_ul">
                  <li>
                    <a> Space Engineering</a>
                  </li>
                  <li>
                    <a> Data Science</a>
                  </li>
                  <li>
                    <a> Space Engineering</a>
                  </li>
                  <li>
                    <a> Mechanical Engineering</a>
                  </li>
                  <li>
                    <a> Photography</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="foot4_div">
              <div className="foot4_div_box">
                <h2 className="f_head">Resources</h2>
                <ul className="f_ul">
                  <li>
                    <a> Community</a>
                  </li>
                  <li>
                    <a> Support</a>
                  </li>
                  <li>
                    <a> Video Guides</a>
                  </li>
                  <li>
                    <a>Documentation</a>
                  </li>
                  <li>
                    <a> Security</a>
                  </li>
                  <li>
                    <a>Template</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="foot4_div">
              <div className="foot4_div">
                <div className="foot4_div_box">
                  <h2 className="f_head">Get in touch!</h2>
                  <p>
                    Subscribe our newsletter to get our latest Update & news
                  </p>
                  <div className="input_div_footer" style={{display:"flex" ,alignItems:"center" ,border:"1px solid var(--dark-blue)" , padding:"20px 5px" }}>
                    <input className="f_input" type="text" placeholder="Enter Your Email" />
                    <MailOutlined 
                      style={{
                        fontSize: "16px",
                        width: "16px",
                        height: "16px",
                        marginLeft: "5px",
                        color:"var(--dark-blue)"
                      }}/>

                  </div>
                  <div className="foot_bt_div">
                  <Button content="SUBSCRIBE" color1="--dark-blue" color2="--light-grey" text="--white" />

                  </div>

               
                </div>
              </div>
            </div>
          </div>




          <hr style={{ backgroundColor: "#AFBCCF", color: "#AFBCCF" }}></hr>






          

          <div className="footer_bottom_inner_bottom">
            <div>
              <span>Copyright © 2023 MARSE All Rights Reserved.</span>
            </div>
            <div>
              <span>Privacy Policy </span>
              {"  "} <span>Terms & Condition</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
