import React from 'react'
import styled from "styled-components"

const StyledOneThirdSection = styled.section`
    height: 33vh;

    background-color: ${props => props.bg};
`

const OneThirdSection = ({ children, bg }) => <StyledOneThirdSection bg={bg}>{children}</StyledOneThirdSection>

export default OneThirdSection
