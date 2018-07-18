import React from 'react';
import { StyledButton, StyledFooter, StyledFooterCenter, StyledFooterCont, StyledFooterContainer, StyledFooterHeader } from './_footer';

const Footer = () => {
  return (
    <div>
        <StyledFooter>
            <StyledButton></StyledButton>
            <StyledFooterContainer>
                <StyledFooterCont>
                    <StyledFooterCenter>
                        <StyledFooterHeader>Classy Footer text</StyledFooterHeader>
                    </StyledFooterCenter>
                </StyledFooterCont>
            </StyledFooterContainer>
        </StyledFooter>
    </div>
  )
}

export default Footer;