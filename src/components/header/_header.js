import styled, { css } from 'styled-components';
import typography from '../../styles/_typography';
import media from '../../styles/_media';
// theme gives access to colors which is why we don't import that file.
import theme from '../../styles/_theme';

export const StyledCampaignText = styled.p`
    color: ${theme.white};
    font-weight: 600px;
    position: relative;

    ${props => props.main && css`
        position: absolute;
        top: 100px; 
        font-size: 80px;
    `};

    ${props => props.secondary && css`
        position: absolute; 
        font-size: 40px;
        margin-left: 20px;
        color: ${theme.white};
        font-weight: 600px;
    `}; 

    ${props => props.middle && css`
        top: 300px;
    `};

    ${props => props.location && css`
        top: 225px;
    `};
`;


