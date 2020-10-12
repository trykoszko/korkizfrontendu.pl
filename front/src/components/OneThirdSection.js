import React from 'react'
import styled from "styled-components"

import { above } from '../helpers/breakpoints'

const StyledOneThirdSection = styled.section`
    height: auto;

    background-color: ${props => props.bg};

    @media ${above.desktop} {
        height: 33vh;
    }
`

const OneThirdSection = ({ children, bg }) => <StyledOneThirdSection bg={bg}>{children}</StyledOneThirdSection>

export default OneThirdSection
