import styled, { css } from 'styled-components';
import { generator } from 'uigradients';
import { Link } from 'react-router-dom';
import typography from '../../styles/_typography';
import media from '../../styles/_media';
// theme gives access to colors which is why we don't import that file.
import theme from '../../styles/_theme';

export const NavbarIcon = styled.div`
    width: 100%;
    text-align: right;
    box-sizing: border-box;
    padding: 15px 24px;
    cursor: pointer;
    color: ${theme.white}
    display: none
`;

export const NavbarLogo = styled.div`
    padding: 20px 20px; 
    height: 20px;
    float: left; 
    font-size: 24px;
    transition: .3s;
    color: ${theme.white}

    text-transform: uppercase
`;

export const NavbarNav = styled.nav`
    z-index: 500000;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    padding: 0px 100px;
    box-sizing: border-box;
    transition: .3s;
    align-self: center;

    ${generator({
        gradient: 'aqualicious',
        type: 'radial',
        options: {
            position: '45px 20px',
            shape: 'ellipse',
            colorStops: ['20%', '50%'],
            extent: 'farthest-corner'
        }
    })};
`;

export const NavbarUl = styled.ul`
    list-style: none;
    float: right;
    display: flex;
    overflow: hidden;
    color: ${theme.white};
    padding: 0;
    text-align: right;
    margin: 0;
    transition: 1s;
`;

export const NavbarLi = styled.li`
    list-style: none;
    display: inline-block;
    padding: 20px;
`;

export const NavbarA = styled.a`
    line-height: 80px;
    color: ${theme.white};
    padding: 12px 30px;
    text-transform: uppercase;
    transition: .7s;

    text-decoration: none;
    font-size: 20px;

    &:hover {
        border-bottom: 2px solid ${theme.black};
    }
`;

// https://spectrum.chat/thread/d6db6242-eb99-4f96-b14f-194593188c93 -- shows how to handle react router in a navlink

export const NavbarLink = NavbarA.withComponent(Link).extend`
    line-height: 80px;
    color: ${theme.white};
    padding: 12px 30px;
    text-transform: uppercase;
    transition: .7s;

    text-decoration: none;
    font-size: 20px;

    &:hover {
        border-bottom: 2px solid ${theme.black};
    }
`;