import "./style.css";
import { useState, useEffect } from "react";
import "animate.css";
import cloudy_bg from "../../../public/assets/shape_1_1.png";
import cloudy_bg_back from "../../../public/assets/shape_1_2.png";
import cloudy_bg_bottom from "../../../public/assets/shape_1_3.png";
import cloudy_bg_left_bottom from "../../../public/assets/shape_1_4.png";
import Pic1 from "../../../public/assets/dream_room.jpg";
import Pic2 from "../../../public/assets/gan.jpg";
import Pic3 from "../../../public/assets/music.jpg";
import Pic4 from "../../../public/assets/music2.jpg";

const images = [Pic1, Pic2, Pic3, Pic4];
const texts = [
  "Worlds best Internship Platform",
  "Internship Is Create Better Future",
  "Mars Exploration Leads To A Brighter Future",
];

const App = () => {
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // State to trigger animation

  useEffect(() => {
    const imageIntervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    const textIntervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    const imageChangeIntervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Set animation state to trigger the animation every 4 seconds
    const animationIntervalId = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 4000); // Reset animation state after 4 seconds
    }, 5000);

    return () => {
      clearInterval(imageIntervalId);
      clearInterval(textIntervalId);
      clearInterval(imageChangeIntervalId);
      clearInterval(animationIntervalId);
    };
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${images[index]})`,
    height: "600px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "relative",
  };

  const words = texts[textIndex].split(" "); // Split text into words
  const lastTwoWords = words.slice(-2).join(" "); // Extract the last two words and join them with spaces
  const restOfText = words.slice(0, -2).join(" ");

  return (
    <div className="background" style={backgroundStyle}>
      <div className="overlay"></div>
      <img className="cloudy_bg" src={cloudy_bg} alt="bg" />
      <div className="cloudy_bg_left_bottom">
        <img className="cloudy_bg_left_bottom_size" src={cloudy_bg_left_bottom} alt="bgb" />
      </div>
      <div className="cloudy_bg_back">
        <img className="cloudy_bg_back_size" src={cloudy_bg_back} alt="bgb" />
      </div>
      <div className="cloudy_bg_back">
        <img className="cloudy_bg_back_size" src={cloudy_bg_back} alt="bgb" />
      </div>
      <div className="cloudy_bg_bottom">
        <img
          className="cloudy_bg_bottom_size"
          src={cloudy_bg_bottom}
          alt="bgb"
        />
      </div>
      <div className="floating_square"></div>

      <div className="intro_left_div">
        <div className={"intro_left_div_content"}  >
        <div className={"intro_left_area " + (isAnimating ? "animate__animated animate__fadeInLeft animate__delay-0.5s" : "")}>
            <span className="span1">25% Off</span>
            <span className="span2">Learn from Today</span>
          </div>
          <div className="intro_left_area">
            {/* Apply animate__fadeInLeft class conditionally */}
            <h1
              className={
                isAnimating ? "animate__animated animate__fadeInLeft animate__delay-1s" : ""
              }
            >
              {restOfText} <br />{" "}
              <span className="text_in_blue"> {lastTwoWords} </span>
            </h1>
            <p
              className={
                isAnimating ? "animate__animated animate__fadeInLeft animate__delay-1s" : ""
              }
            >
              Internship can be thought of as the transmission of the values and
              accumulated knowledge of a society. In this sense, it is
              equivalent.
            </p>
          </div>
          <div className="intro_left_area">
            <button className={"getstarted_button" + (isAnimating ? " animate__animated animate__fadeInLeft animate__delay-2s" : "") }>
              {" "}
              <span className="getStarted_transition"></span>
              <span className="getstarted_gradient"></span>
              <span className="getstarted_label">Get Started </span>{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="intro_right_div">
        <div className="circle">
          <img src={images[imageIndex]} alt={`Pic ${imageIndex + 1}`} />
        </div>
      </div>
    </div>
  );
};

export default App;
