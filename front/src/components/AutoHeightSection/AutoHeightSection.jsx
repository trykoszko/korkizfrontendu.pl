import React from 'react'
import { StyledAutoHeightSection } from './AutoHeightSectionStyles'

const AutoHeightSection = ({ children, bg, textColor }) => <StyledAutoHeightSection bg={bg} textColor={textColor}>{children}</StyledAutoHeightSection>

export default AutoHeightSection
