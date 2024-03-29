import "./AboutYoutube.css";
import ab_yt from "../../../public/assets/about_main_youtube.jpg";
// import edu1 from "../../../public/assets/ab_u1.png";
// import edu2 from "../../../public/assets/ab_u2.jpeg";
import Partners from "../Partners/index";

// import edu3 from "../../../public/assets/ab_u8.png";
// import edu4 from "../../../public/assets/ab_u7.png";
// import edu5 from "../../../public/assets/ab_u5.png";
// import edu6 from "../../../public/assets/ab_u6.png";
const AboutYoutube = () => {
  return (
    <div className="ab_youtube_section">
      <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 500">
          <path
            fill="#F8F7F3"
            fillOpacity="1"
            height="900px"
            d="M0,96L21.8,103.7C43.6,112,87,128,131,138.7C174.5,149,218,155,262,144C305.5,133,349,107,393,96C436.4,85,480,91,524,106.7C567.3,123,611,149,655,149.3C698.2,149,742,123,785,112C829.1,101,873,107,916,128C960,149,1004,187,1047,202.7C1090.9,219,1135,213,1178,192C1221.8,171,1265,133,1309,117.3C1352.7,101,1396,107,1418,114.7L1440,123L1440,480L1418.2,480C1396.4,480,1353,480,1309,480C1265.5,480,1222,480,1178,480C1134.5,480,1091,480,1047,480C1003.6,480,960,480,916,480C872.7,480,829,480,785,480C741.8,480,698,480,655,480C610.9,480,567,480,524,480C480,480,436,480,393,480C349.1,480,305,480,262,480C218.2,480,175,480,131,480C87.3,480,44,480,22,480L0,480Z"
          />
        </svg>
      </div>

      <div className="ab_yt_video">
        <img src={ab_yt} className="ab_yt_video_img" />
        <div className="ab_play_button">
          <button className="ab_right_play_button">
            <svg
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              width="26px"
            >
              <path
                d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <Partners />
      {/* 
      <div className="ab_yt_bottom">
        <div className="edu_div1">
          <div className="yt_bottom_university_div">
            <img src={edu1} />
          </div>
          <div className="yt_bottom_university_div">
            <img src={edu2} />
          </div>
          <div className="yt_bottom_university_div">
            <img src={edu3} />
          </div>
        </div>

        <div  className="edu_div2">
          <div className="yt_bottom_university_div">
            <img src={edu4} />
          </div>
          <div className="yt_bottom_university_div">
            <img src={edu5} />
          </div>
          <div className="yt_bottom_university_div">
            <img src={edu6} />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AboutYoutube;
