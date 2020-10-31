import styled from 'styled-components'
import { above } from '../../helpers/breakpoints'

export const StyledFullHeightSectionWrapper = styled.section`
    height: 100%;

    background-color: ${props => props.bg};

    /* @media ${above.desktop} {
        height: 100vh;
    } */
`
