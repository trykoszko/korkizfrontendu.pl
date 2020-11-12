import React from 'react'
import { StyledAutoHeightSection } from './AutoHeightSectionStyles'

const AutoHeightSection = ({ children, bg, textColor, isHidden }) => <StyledAutoHeightSection isHidden={isHidden} bg={bg} textColor={textColor}>{children}</StyledAutoHeightSection>

export default AutoHeightSection
