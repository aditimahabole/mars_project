import { useState, useEffect } from 'react';
import SecondNavbar from '../SecondNavbar/index'
import Navbar from '../Navbar/index';
import Introduction from '../Intro/index';
// Import the second navbar component

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Determine whether the user has scrolled down
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    // Add event listener to detect scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Run effect only once on component mount

  return (
    <>
      {scrolled ? <SecondNavbar /> : <Navbar />}
   
      <Introduction />
      <section style={{"height":"1247px"}}>
        hahaahahah
      </section>
    </>
  );
};

export default Index;
