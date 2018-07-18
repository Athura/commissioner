import styled, { css } from 'styled-components';
import typography from '../../styles/_typography';
import media from '../../styles/_media';
// theme gives access to colors which is why we don't import that file.
import theme from '../../styles/_theme';

export const ClassCentered = styled.div`

`;

export const StyledCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const StyledCard = styled.div`
    background: ${theme.white};
    margin-bottom: 2em;

    flex: 0 1 24%;

    transition: transform 1s;
    border-radius: 3px;
    box-shadow: 0 .5rem 4rem ${theme.black};

    &:hover {
        transform: translateY(-1.5rem) scale(1.03);
    }
`;

export const StyledHeaderTertiary = styled.h3`
    margin-top: 1em;
    margin-bottom: .5em;
    font-weight: 700px;
`;