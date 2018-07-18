import styled, { css } from 'styled-components';
import typography from '../../styles/_typography';
import media from '../../styles/_media';
// theme gives access to colors which is why we don't import that file.
import theme from '../../styles/_theme';

export const StyledFooter = styled.div`
    bottom: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 3em;
    overflow: hidden;
    margin: 0 auto;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
    z-index: 999;

    &:hover {
        -webkit-transition: all 1s ease;
        -moz-transition: all 1s ease;
        -o-transition: all 1s ease;
        -ms-transition: all 1s ease;
        transition: all 1s ease;
	    height: 10em;
    }
`;

export const StyledButton = styled.div`
    width:35px;
    height:35px;
    border: #727172 12px solid;
    border-radius:35px;
    margin:0 auto;
    position:relative;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;

    &:hover {
        width:35px;
        height:35px;
        border: #3A3A3A 12px solid;
        -webkit-transition: all 1s ease;
        -moz-transition: all 1s ease;
        -o-transition: all 1s ease;
        -ms-transition: all 1s ease;
        transition: all 1s ease;
        position:relative;
    }
`;

export const StyledFooterContainer = styled.div`
    margin-top:5px;
    width:100%;
    height:100%;
    position:relative;
    top:0;
    left:0;
    background: ${theme.darkgrey};
`;

export const StyledFooterCont = styled.div`
    position:relative;
    top:-45px;
    right:190px;
    width:150px;
    height:auto;
    margin:0 auto;
`;

export const StyledFooterCenter = styled.div`
    width:500px;
    float:left;
    text-align:center;
`;

export const StyledFooterHeader = styled.h3`
    font-family: 'Helvetica';
    font-size: 30px;
    font-weight: 100;
    margin-top:70px;
    margin-left:40px;
`;