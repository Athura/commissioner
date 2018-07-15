import React from 'react';
import { StyledParallax, StyledParallaxText } from '../../styles/_parallax';
import { StyledSection, StyledHeader } from '../../styles/_sections';
import { StyledCampaignText } from './_header';

const Header = () => {
  return (
      <div>
    <StyledParallax primary>
      <StyledParallaxText light>
        <StyledCampaignText main>
            Paul Johnson
        </StyledCampaignText>
        <StyledCampaignText secondary middle>For Carroll County Commissioner</StyledCampaignText>
        <StyledCampaignText secondary location>District 4</StyledCampaignText>
      </StyledParallaxText>
      </StyledParallax>

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
}

export default Header;