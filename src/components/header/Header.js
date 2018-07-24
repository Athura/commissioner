import React from 'react';
import { StyledParallax, StyledParallaxText } from '../../styles/_parallax';
import { StyledSection, StyledHeader } from '../../styles/_sections';
import { StyledCampaignText } from './_header';

import TextLoop from 'react-text-loop';

const Header = () => {
  return (
      <div>
    <StyledParallax primary fullscreen>
        <StyledCampaignText main>
            Paul Johnson
        </StyledCampaignText>
      <StyledParallaxText movedown type animation>
          <h2 css={{ marginTop: 600 }} >
            <TextLoop speed={4000} springConfig={{ stiffness: 180, damping: 8 }}>
                <span>Fiscally Prudent</span>
                <span>Socially Responsible</span>
            </TextLoop>
          </h2>
        </StyledParallaxText>
    </StyledParallax>
        <StyledCampaignText secondary middle moveInRight>For Carroll County Commissioner</StyledCampaignText>
        <StyledCampaignText secondary bottom moveInLeft>District 4</StyledCampaignText>
      
      

      <StyledSection light>
        <StyledHeader>Paul's Vision</StyledHeader>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam fuga tempora odit nostrum commodi debitis voluptatem in officia. 
                Quidem quis rerum porro commodi vel quaerat impedit veniam totam quae? Vitae modi eum necessitatibus aspernatur? Ea minus, 
                similique provident voluptas, sapiente voluptate velit accusantium omnis deserunt, praesentium quibusdam! Deserunt optio totam alias impedit 
                incidunt voluptas iusto ab nihil tempora consequatur. Ad, quisquam veniam. Molestias et ab quia mollitia cumque! Maiores minima reiciendis 
                ratione unde velit nobis exercitationem doloribus qui quae quod magnam inventore nemo saepe eum quo quia nesciunt accusantium, ipsa eaque amet esse 
                perspiciatis rerum optio? Labore porro omnis optio.
            </p>
      </StyledSection>
    </div>
  )
};

export default Header;