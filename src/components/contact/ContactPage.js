import React from 'react';
import { StyledParallax, StyledParallaxText } from '../../styles/_parallax';
import NavBar from '../nav/NavBar';

const ContactPage = () => {
  return (
    <div>
    <NavBar />
      <StyledParallax marston>
            <StyledParallaxText contact>
                Together We Can 
            </StyledParallaxText>
        </StyledParallax>
    </div>
  )
}

export default ContactPage;