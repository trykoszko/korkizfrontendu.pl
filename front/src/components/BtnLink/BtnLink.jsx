import React from 'react'
import { StyledBtn } from './BtnLinkStyles'

const BtnLink = ({ children, width, href }) => <StyledBtn to={href} width={width}><span>{children}</span></StyledBtn>

export default BtnLink
