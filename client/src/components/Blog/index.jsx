import './style.css';
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
// import { ArrowRightAlt } from "@mui/icons-material";
import Card from './BlogCard';
import Button from '../Offer/Button';
import img1 from '../../../public/assets/event_img-1.png'


const Slider = () => {
  return (
    <div className='blog_section'>
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
           <Button color1='--dark-blue' color2='--dark-black' text='--white' content='VIEW BLOGS' />

          </div>
        </div>

        <div className='blog_slider_div'>
        <div  className="blog_slide" >
        <Card by_person='mvtmarse' time='11 Jul, 2023' topic='Learn how to take extensive and organized notes to' image={img1}/>
        <Card by_person='mvtmarse' time='12 Jul, 2023' topic='Learn how to take extensive and organized notes to' image={img1}/>
          

          </div>
        
   
         
        </div>
      </div>
    </div>
  )
}
export default Slider