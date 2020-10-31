import React from 'react'
import { StyledFullHeightSectionWrapper } from './FullHeightSectionWrapperStyles'

const FullHeightSection = ({ children, bg }) => <StyledFullHeightSectionWrapper bg={bg}>{children}</StyledFullHeightSectionWrapper>

export default FullHeightSection
