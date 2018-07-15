import styled, { css } from 'styled-components';
import { generator } from 'uigradients';
import typography from './_typography';
import media from './_media';
// theme gives access to colors which is why we don't import that file.
import theme from './_theme';

export const StyledParallax = styled.div`
    position: relative;
    opacity: 1;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;

    ${props => props.primary && css`
        background-image: url('/assets/PDJ_20180331_3637c.jpg');
        height: 100vh;    
    `};

    ${props => props.mountairy && css`
        background-image: url('/assets/MountAiry 3.jpg');
        min-height: 400px;
    `}

    ${props => props.newwindsor && css`
        background-image: url('/assets/NewWindsor 1.jpg');
        min-height: 400px;
    `}

    ${props => props.marston && css`
        background-image: url('/assets/Marston 1.jpg');
        height: 100vh;
    `};
    
`;

export const StyledParallaxText = styled.div`
    position: absolute;
    top: 10%;
    margin-left: 20px;
    width: 100%;
    text-align: left;
    text-transform: uppercase;
    font-size: 60px;
    letter-spacing: 8px;

    color: ${theme.white};

    ${props => props.transparent && css`
        background-color: transparent;
    `}

    ${props => props.contact && css`
        padding: 60px;
        left: -60px;
        text-align: center;
    `};
`;
