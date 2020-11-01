import styled from 'styled-components'

export const StyledIframeWrapper = styled.div`
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
`

export const StyledIframe = styled.iframe`
    border: none;

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
`
