import React from 'react';
import { StyledCard, StyledCards, StyledHeaderTertiary } from './_card';
import { StyledHeader } from '../../styles/_sections';

const Card = () => {
  return (
    <div>
      <StyledHeader card>Paul's Vision</StyledHeader>
      <StyledCards>
        <StyledCard>
          <i className="fa fa-certificate fa-4x"></i>
          <StyledHeaderTertiary>
            Test
          </StyledHeaderTertiary>
          <p>This sucks</p>
        </StyledCard>

        <StyledCard>
          <StyledHeaderTertiary>
            Test
          </StyledHeaderTertiary>
          <p>This sucks</p>
        </StyledCard>

        <StyledCard>
          <StyledHeaderTertiary>
            Test
          </StyledHeaderTertiary>
          <p>This sucks</p>
        </StyledCard>

        <StyledCard>
          <StyledHeaderTertiary>
            Test
          </StyledHeaderTertiary>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sunt consequatur! Nihil unde, possimus deserunt qui perspiciatis consectetur? Eaque, ab!*</p>
        </StyledCard>
      </StyledCards>
    </div>
  )
}

export default Card;