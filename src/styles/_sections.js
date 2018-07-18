import styled, { css } from 'styled-components';
// theme gives access to colors which is why we don't import that file.
import theme from './_theme';

export const StyledSection = styled.section`
    text-align: center;
    padding: 50px 80px;

    ${props => props.light && css`
        background-color: ${theme.white};
        color: ${theme.darkgrey};
    `};

    ${props => props.dark && css`
        background-color: ${theme.black};
        color: ${theme.white};
    `}
`;

export const StyledHeader = styled.h2`
    
    position: relative;

    &:after {
        content: '',
        position: absolute;
        width: 10%;
        left: 45%;
        border-bottom: 2px solid ${theme.lightblue};
    }

    ${props => props.card && css`
        margin-bottom: 2em;    
    `}
`;