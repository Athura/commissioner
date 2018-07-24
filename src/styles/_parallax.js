import styled, { css } from 'styled-components';
import typography from './_typography';
// theme gives access to colors which is why we don't import that file.
import theme from './_theme';
import { moveInBottom } from './_animations';

export const StyledParallax = styled.div`
    position: relative;
    opacity: 1;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;

    ${props => props.primary && css`
        background-image: url('/assets/PDJ_20180331_3637c.jpg');    
    `};

    ${props => props.mountairy && css`
        background-image: url('/assets/MountAiry 3.jpg');
    `}

    ${props => props.newwindsor && css`
        background-image: url('/assets/NewWindsor 1.jpg');
    `}

    ${props => props.marston && css`
        background-image: url('/assets/Marston 1.jpg');
    `};

    ${props => props.fullscreen && css`
        height: 100vh;
    `};

    ${props => props.minheight && css`
        min-height: 400px;
    `};
    
`;

export const StyledParallaxText = styled.div`
    position: absolute;
    
    margin-left: 80px;
    width: 100%;
    text-align: left;
    text-transform: uppercase;
    font-style: ${typography.main};
    font-size: 40px;
    letter-spacing: 8px;

    

    color: ${theme.white};

    ${props => props.animation && css`
        animation: ${moveInBottom} 2s;
    `};

    ${props => props.transparent && css`
        background-color: transparent;
    `}

    ${props => props.contact && css`
        padding: 60px;
        left: -120px;
        text-align: center;
        top: 10%;
    `};

    ${props => props.movedown && css`
        top: '100px';
    `};

    ${props => props.type && css`
        top: 70%;
    `};
`;
