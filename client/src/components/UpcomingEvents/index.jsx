// import { useState } from "react";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import "./style.css";
import SmallCard from "./SmallCard";
// import EventCard from "./Event";
import user_image from "../../../public/assets/about_1_2.png";
// import leafy from "../../../public/assets/team-shape_1_1.png";
import LargeCard from "./LargeCard";

const Index = () => {
  // const [startIndex, setStartIndex] = useState(0);

  // const handleClickNext = () => {
  //   setStartIndex((prevIndex) => Math.min(prevIndex + 1, 5 - 1));
  // };

  // const handleClickPrev = () => {
  //   setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  // };
  return (
    <div className="event_section">
      {/* <div className="leafy2">
        <img src={leafy} alt="." />
      </div> */}
      <div className="event_inner">
        <div className="event_headings">
          <span className="event_headings_span">
            <DescriptionOutlinedIcon
              style={{
                fontSize: "16px",
                width: "16px",
                height: "16px",
                paddingRight: "5px",
              }}
            />
            FEATURED EVENTS
          </span>
          <h2 className="event_headings_h2">Get News with MARSE</h2>
        </div>
        <div className="event_cards_div">
          <div className="event_large_card_div">
          <LargeCard topic="TECHNOLOGY" title="Explore Learning Landscapes in Academic" image={user_image} date="14 Nov 2023" />

          </div>
          <div className="event_small_card_div">
            <SmallCard topic="TECHNOLOGY" title="Explore Learning Landscapes in Academic" image={user_image} date="14 Nov 2023" />
            <SmallCard topic="TECHNOLOGY" title="Explore Learning Landscapes in Academic" image={user_image} date="14 Nov 2023" />
            <SmallCard topic="TECHNOLOGY" title="Explore Learning Landscapes in Academic" image={user_image} date="14 Nov 2023" />
          </div>

        </div>



        {/* <div className="event_div">
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
                <EventCard
                  profile={user_image}
                  name="David Smith"
                  title="Software Engineer"
                  address="123 Main St, Anytown, USA"
                  startTime="9:00 AM"
                  endTime="5:00 PM"
                  content="Embrace the world of online education"
                />
                <EventCard
                  profile={user_image}
                  name="John Doe"
                  title="Tech Lead"
                  address="Pune , India"
                  startTime="3:00 AM"
                  endTime="6:00 PM"
                  content="Embrace the world of online education"
                />
                <EventCard
                  profile={user_image}
                  name="John Doe"
                  title="Tech Lead"
                  address="Pune , India"
                  startTime="3:00 AM"
                  endTime="6:00 PM"
                  content="Embrace the world of online education"
                />
                <EventCard
                  profile={user_image}
                  name="John Doe"
                  title="Tech Lead"
                  address="Pune , India"
                  startTime="3:00 AM"
                  endTime="6:00 PM"
                  content="Embrace the world of online education"
                />
                <EventCard
                  profile={user_image}
                  name="John Doe"
                  title="Tech Lead"
                  address="Pune , India"
                  startTime="3:00 AM"
                  endTime="6:00 PM"
                  content="Embrace the world of online education"
                />
                <EventCard
                  profile={user_image}
                  name="John Doe"
                  title="Tech Lead"
                  address="Pune , India"
                  startTime="3:00 AM"
                  endTime="6:00 PM"
                  content="Embrace the world of online education"
                />
              </div>
            </div>
          </div>
        </div> */}



      </div>
    </div>
  );
};

export default Index;
