import { ArrowRightAlt } from "@mui/icons-material";
import "../Navbar/style.css";
const index = () => {
  return (
    <>
      <div className="nav_container_bottom2">
        <div className="nav_container_bottom_left">
          <div>
            {" "}
            <span className="nav_container_bottom_left_links">HOME</span>
          </div>
          <div>
            {" "}
            <span className="nav_container_bottom_left_links">
              ABOUT US
            </span>{" "}
          </div>
          <div>
            {" "}
            <span className="nav_container_bottom_left_links">BLOG</span>
          </div>
          <div>
            {" "}
            <span className="nav_container_bottom_left_links">
              CONTACT
            </span>{" "}
          </div>
          <div>
            {" "}
            <span className="nav_container_bottom_left_links">
              INTERNSHIP
            </span>{" "}
          </div>
        </div>
        <div className="nav_container_bottom_right">
          <button className="nav_container_bottom_right_contactUS">
            <span className="transition"></span>
            <span className="gradient"></span>
            <span className="contactUs_label">
              CONTACT US{" "}
              <span>
                <ArrowRightAlt
                  style={{ fontSize: "16px", width: "16px", height: "16px" }}
                />{" "}
              </span>{" "}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default index;
