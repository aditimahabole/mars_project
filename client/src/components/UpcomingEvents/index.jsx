import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import "./style.css";
import EventCard from "./Event";
import user_image from '../../../public/assets/event-author1.png';
import leafy from '../../../public/assets/team-shape_1_1.png'

const index = () => {
  return (
    <section className="event_section">
        <div className="leafy2">
        <img src={leafy} alt="." />
      </div>
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
          <h2 className="event_headings_h2">Our Upcoming Events</h2>
        </div>
        <div className="event_div">
            <div  className="event_div_slide" >
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

            </div>
         
        </div>
      </div>
    </section>
  );
};

export default index;
