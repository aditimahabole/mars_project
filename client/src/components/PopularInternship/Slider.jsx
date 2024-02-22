import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Slide from '@mui/material/Slide';

const ContinuousSlide = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex =>
        prevIndex === React.Children.count(children) - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change the slide every 3 seconds

    return () => clearInterval(interval);
  }, [children]);

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      {React.Children.map(children, (child, index) => (
        <Slide
          key={index} // Add key to avoid warning
          direction={index === activeIndex ? 'left' : 'right'}
          in={index === activeIndex}
          mountOnEnter
          unmountOnExit
          timeout={1000}
        >
          <div style={{ position: 'absolute', width: '100%', left: 0 }}>
            {child}
          </div>
        </Slide>
      ))}
    </div>
  );
};

ContinuousSlide.propTypes = {
  children: PropTypes.node.isRequired, // Validate children prop
};

export default ContinuousSlide;
