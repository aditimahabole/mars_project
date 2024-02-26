// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// const StyledButtonContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: auto;
//   padding-left: 0px;
//   padding-top: 20px;
//   z-index: 100;

//   // &:hover {
//   //   color: red; // Change text color on hover
//   //   // color: ${props => props.textColor}; // Change text color on hover
//   // }

//   @media only screen and (max-width: 300px) {
//     padding:5px;
//     font-size:1rem;
//     z-index: 100;
//   }

//   @media only screen and (min-width: 301px) and (max-width: 900px) {
//     padding:5px;
//     font-size:1rem;
//     z-index: 100;
//   }
// `;



// const StyledGradient = styled.span`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   left: 0;
//   top: 0;
//   border-radius: 0.6em;
//   margin-top: -0.25em;
// `;

// const StyledButton = styled.button`
//   font-size: 16px;
//   padding: 20px 20px;
//   font-weight: 500;
//   background: ${props => props.bgColor}; 
//   color: ${props => props.textColor};
//   border: none;
//   position: relative;
//   overflow: hidden;
//   border-radius: 5px;
//   cursor: pointer;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   border:1px solid ${props => props.textColor};

//   & .all_transition {
//     transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
//     transition-duration: 500ms;
//     background-color: rgba(15, 15, 16, 0.6);
//     background: ${props => props.textColor}; 
    
//     border-radius: 9999px;
//     width: 0;
//     height: 0;
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     z-index: 1; // Adjust z-index

//   }

//   &:hover {
//     color: ${props => props.bgColor};
//     // color: red;
//     border:1px solid ${props => props.textColor};
//   }

//   &:hover .all_transition {
//     width: 14em;
//     height: 14em;
//   }


//   @media only screen and (max-width: 300px) {
//     padding:5px;
//     font-size:1rem;
 
//     font-family:var(--jost);
//   }

//   @media only screen and (min-width: 301px) and (max-width: 900px) {
//     padding:5px;
//     font-size:1rem;
 
//     font-family:var(--jost);
//   }

// `;

// const StyledLabel = styled.span`
//   position: relative;
//   top: -1px;
//   z-index:2;
//   font-family:var(--jost);
  

//   // &:hover {
//   //   color: initial; // Reset color on hover
//   // }

//   @media only screen and (max-width: 300px) {
//     padding:5px;
//     font-size:1rem;
//     z-index:2;
//     font-family:var(--jost);
//   }

//   @media only screen and (min-width: 301px) and (max-width: 900px) {
//     padding:5px;
//     font-size:1rem;
//     z-index:2;
//     font-family:var(--jost);
//   }
// `;

// const Button = ({ content, color1, color2 }) => {
//   let bgColor = '';
//   let textColor = '';
  
//   // Assign background and text color based on props
//   if (color1 === 'dark_blue' && color2 === 'white') {
//     bgColor = '#0d5ef4';
//     textColor = 'white';
//   }

//   else if (color1 === 'transparent' && color2 === 'white') {
//     bgColor = 'transparent';
//     textColor = 'white';
//   }
//   else if (color1 === 'dark_black' && color2 === 'white') {
//     bgColor = '#0F2239';
//     textColor = 'white';
//   }
//   else if (color1 === 'red' && color2 === 'white') {
//     bgColor = 'red';
//     textColor = 'white';
//   }
//   else if (color1 === 'dark_black' && color2 === 'light_blue') {
//     bgColor = 'rgb(13, 94, 244);';
//     textColor = ' rgb(199, 235, 255)';
//   }

  
//   return (
//     <StyledButtonContainer textColor={bgColor} >
//       <StyledButton bgColor={bgColor} textColor={textColor} >
//         <StyledGradient className="all_gradient"></StyledGradient>
//         <StyledLabel  textColor={bgColor} className="all_label">{content}</StyledLabel>
//         <span className="all_transition"></span>
//       </StyledButton>
//     </StyledButtonContainer>
//   );
// };

// Button.propTypes = {
//   content: PropTypes.string.isRequired,
//   color1: PropTypes.string.isRequired,
//   color2: PropTypes.string.isRequired,
// };

// export default Button;
// ----------------------------------------------------------------------------
import PropTypes from 'prop-types';
import {

  ArrowRightAlt,
} from "@mui/icons-material";



const Button = ({ content, color1, color2 ,text}) => {

 
  
  return (
    <div className='all_btn_div_container'  style={{color:`var(${text})`}} >
          <button className="all_btn_div" style={{backgroundColor:`var(${color1})` , color:`var(${text})` }}>
            <span className="all_btn_div_transition"  style={{backgroundColor:`var(${color2})` , color:`var(${text})`}}></span>
            <span className="all_btn_div_gradient"  style={{color:`var(${text})`}}></span>
            <span className="all_btn_div_label" 
             style={{color:`var(--light-white)`}} 
            //  style={{color:'white'}} 
             >
             {content}{" "}
              <span>
                <ArrowRightAlt
                  style={{ fontSize: "1em", width: "1em", height: "1em",color:'white' }}
                />{" "}
              </span>{" "}
            </span>
          </button>
          </div>
     
  );
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
