import { useState, useEffect } from "react";
import SecondNavbar from "../SecondNavbar/index";
import Navbar from "../Navbar/index";
import Introduction from "../Intro/index";
import InternshipSection from "../Internships/index";
import About from "../About/index";
import PopularInternship from "../PopularInternship/index";
import Youtube from "../Youtube/index";
import SpaceEducation from "../SpaceEducation/index";
import Offer from "../Offer/index";
import Expert from "../Experts/index";
import UpcomingEvents from "../UpcomingEvents/index";
import TrustedUniversity from "../TrustedUniversity/index";
import Box from "../Box/index";
import Testimonial from "../Testimonial/index";
import Blog from "../Blog/index";
import Footer from "../Footer/index";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Determine whether the user has scrolled down
      const isScrolled = window.scrollY > 5;
      setScrolled(isScrolled);
    };

    // Add event listener to detect scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Run effect only once on component mount

  return (
    <>
      {scrolled ? <SecondNavbar /> : <Navbar />}
      <Introduction />
      <InternshipSection />
      <About />
      <PopularInternship />
      <Youtube />
      <SpaceEducation />
      <Offer />
      <Expert />
      <UpcomingEvents />
      <TrustedUniversity/>
      <Box/>
      <Testimonial/>
      <Blog/>
      <Footer/>
    </>
  );
};

export default Index;
