import React from 'react'
import { StyledBtn } from './BtnStyles'

const Btn = ({ children, width, onClick, isActive, type }) => <StyledBtn type={type} isActive={isActive} onClick={onClick} width={width}>{children}</StyledBtn>

export default Btn
