import React from 'react'
import {
    StyledIframeWrapper,
    StyledIframe
} from './YoutubeVidStyles'

const YoutubeVid = ({ youtubeUrl }) => {
    const urlArr = youtubeUrl.split('v=')
    const id = urlArr[urlArr.length - 1]
    const url = `https://www.youtube.com/embed/${id}`
    return <StyledIframeWrapper><StyledIframe src={url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen /></StyledIframeWrapper>
}

export default YoutubeVid
