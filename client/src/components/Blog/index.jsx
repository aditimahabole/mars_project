import "./style.css";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
// import { ArrowRightAlt } from "@mui/icons-material";
import Card from "./BlogCard";
import Button from "../Offer/Button";
// import img1 from "../../../public/assets/event_img-1.png";
import blog_3 from "../../../public/assets/blog_3.jpg";
import { useState } from "react";

const Slider = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleClickNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, 5 - 1));
  };

  const handleClickPrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };
  return (
    <div className="blog_section">
      <div className="blog_container">
        <div className="blog_header">
          <div className="our_blog">
            <span>
              <DescriptionOutlinedIcon
                style={{
                  fontSize: "16px",
                  width: "16px",
                  height: "16px",
                  paddingRight: "5px",
                }}
              />
              OUR NEWS & BLOGS
            </span>
            <h2>Latests News & Blogs</h2>
          </div>
          <div className="view_all_courses">
            <Button
              color1="--dark-blue"
              color2="--dark-black"
              text="--white"
              content="VIEW BLOGS"
            />
          </div>
        </div>

        <div className="blog_slider_div">
          <div className="slider_button_div1">
            <div>
              <button className="slider-button prev" onClick={handleClickPrev}>
                {" "}
                &lt;
              </button>
            </div>
            <div>
              <button className="slider-button next" onClick={handleClickNext}>
                {" "}
                &gt;
              </button>
            </div>
          </div>

          <div className="pop_inter_slider_div">
            <div className="slider-container">
              <div
                className="slider-items"
                style={{ transform: `translateX(-${startIndex * 25}%)` }}
              >
                <Card
                  by_person="mvtmarse"
                  time="12 Jul, 2023"
                  topic="Learn how to take extensive and organized notes to"
                  image={blog_3}
                />
                <Card
                  by_person="mvtmarse"
                  time="12 Jul, 2023"
                  topic="Learn how to take extensive and organized notes to"
                  image={blog_3}
                />
                <Card
                  by_person="mvtmarse"
                  time="12 Jul, 2023"
                  topic="Learn how to take extensive and organized notes to"
                  image={blog_3}
                />
                <Card
                  by_person="mvtmarse"
                  time="12 Jul, 2023"
                  topic="Learn how to take extensive and organized notes to"
                  image={blog_3}
                />
                <Card
                  by_person="mvtmarse"
                  time="12 Jul, 2023"
                  topic="Learn how to take extensive and organized notes to"
                  image={blog_3}
                />
                <Card
                  by_person="mvtmarse"
                  time="12 Jul, 2023"
                  topic="Learn how to take extensive and organized notes to"
                  image={blog_3}
                />
              </div>
            </div>
          </div>

          {/* <div  className="blog_slide" >
        <Card by_person='mvtmarse' time='11 Jul, 2023' topic='Learn how to take extensive and organized notes to' image={img1}/>
        <Card by_person='mvtmarse' time='12 Jul, 2023' topic='Learn how to take extensive and organized notes to' image={img1}/>
          

          </div>
         */}
        </div>
      </div>
    </div>
  );
};
export default Slider;
