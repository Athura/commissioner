import styled, { css } from 'styled-components';
import typography from '../../styles/_typography';
import media from '../../styles/_media';
// theme gives access to colors which is why we don't import that file.
import theme from '../../styles/_theme';

    // gridwidth: '114rem',
    // guttervertical: '8rem',
    // gutterverticalsmall: '6rem',
    // gutterhorizontal: '6rem'

export const StyledRow = styled.div`
    max-width: 114rem;
    margin: 0 auto;

    &:not(:last-child) {
        margin-bottom: 8rem;
    }

    [class^="col-"] {
        float: left;

        &:not(:last-child) {
            margin-right: 6rem;
        }
    }
`;

export const col1of4 = styled.div`
    width: calc((100% - 3 *))
`;