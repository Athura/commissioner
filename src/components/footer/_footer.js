import styled, { css } from 'styled-components';
import typography from '../../styles/_typography';
import media from '../../styles/_media';
// theme gives access to colors which is why we don't import that file.
import theme from '../../styles/_theme';

export const StyledFooter = styled.footer`
    background-color: ${theme.black};
    padding: 10rem 0;
    font-size: 1.4rem;
    color: ${theme.lightblue};
`;

export const StyledLogoBox = styled.div`
    text-align: center;
    margin-bottom: 2rem;
`;

export const StyledLogoPicture = styled.picture`
    width: 15rem;
    height: auto;
`;

export const StyledFooterNav = styled.div`
    border-top: 1px solid ${theme.lightblue};
    padding: 2rem;
    width: 80%;
`;

export const StyledFooterUl = styled.ul`
    list-style: none;
`;

export const StyledFooterItem = styled.li`
    display: inline-block;
    margin-right: 1.5rem;
`;

export const StyledFooterLink = styled.a`
    &:visited {
        color: ${theme.white};
        background-color: ${theme.blue};
        text-decoration: none;
        text-transform: uppercase;
        display: inline-block;
        transition: all .2s;
    }

    &:hover,
    &:active {
        color: ${theme.lightblue};
        box-shadow: 0 1rem 2rem ${theme.darkgrey};
        transform: rotate(5deg) scale(1.3);
    }
`;

export const StyledFooterCopyright = styled.p`
    border-top: 1px solid ${theme.darkgrey};
    padding: 2rem;
    width: 80%;
    float: right;
`;

export const StyledFooterRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;