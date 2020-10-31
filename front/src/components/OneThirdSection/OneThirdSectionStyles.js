import styled from "styled-components"

import { above } from '../../helpers/breakpoints'

export const StyledOneThirdSection = styled.section`
    height: auto;

    background-color: ${props => props.bg};

    @media ${above.desktop} {
        height: 33vh;
    }
`
