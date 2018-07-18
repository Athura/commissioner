import styled, { css } from 'styled-components';
// theme gives access to colors which is why we don't import that file.
import theme from '../../styles/_theme';
import { moveInRight, moveInLeft } from '../../styles/_animations';

export const StyledCampaignText = styled.p`
    color: ${theme.white};
    font-weight: 600px;
    position: relative;

    ${props => props.main && css`
        position: absolute;
        top: 200px; 
        font-size: 80px;
        margin-left: 80px;
    `};

    ${props => props.secondary && css`
        position: absolute; 
        font-size: 40px;
        margin-left: 85px;
        color: ${theme.white};
        font-weight: 600px;
    `}; 

    ${props => props.middle && css`
        top: 350px;
    `};

    ${props => props.bottom && css`
        top: 400px;
    `};

    ${props => props.moveInLeft && css`
        animation-delay: 2s;
        animation: ${moveInLeft} 2s;
    `};

    ${props => props.moveInRight && css`
        animation-delay: 2s;
        animation: ${moveInRight} 2s;
    `};
`;


