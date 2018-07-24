import React from 'react';
import { StyledParallax, StyledParallaxText } from '../../styles/_parallax';
import { StyledContact } from './_contact';
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
            <StyledContact></StyledContact>
        </StyledParallax>
        <Footer />
    </div>
  )
}

export default ContactPage;