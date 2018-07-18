import React from 'react';
import { StyledParallax, StyledParallaxText } from '../../styles/_parallax';
import NavBar from '../nav/NavBar';
import Footer from '../footer/Footer';

const ContactPage = () => {
  return (
    <div>
    <NavBar />
      <StyledParallax marston fullscreen>
            <StyledParallaxText contact>
                Together We Can 
            </StyledParallaxText>
        </StyledParallax>
        <Footer />
    </div>
  )
}

export default ContactPage;