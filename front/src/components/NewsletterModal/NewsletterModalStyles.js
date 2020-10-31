import styled from 'styled-components'

export const StyledModalWrapper = styled.div`
    position: fixed;
    left: 0;
    top: ${props => props.isVisible ? 0 : `-100%`};

    transition: all .5s linear;

    background-color: red;
    opacity: .4;

    width: 100%;
    height: 100%;

    z-index: 1000;
`

export const StyledModal = styled.div`
    display: flex;
`

export const StyledModalCloseButton = styled.button`

`
