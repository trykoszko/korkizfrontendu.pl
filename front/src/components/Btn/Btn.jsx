import React from 'react'
import { StyledBtn } from './BtnStyles'

const Btn = ({ children, width }) => <StyledBtn width={width}>{children}</StyledBtn>

export default Btn
