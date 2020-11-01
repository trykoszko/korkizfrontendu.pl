import React from 'react'

import {
    StyledCountdown
} from './CountdownStyles'

const getTimerHTML = remaining => {
    return {
        __html: remaining
    }
}

const StyledSpan = ({ dangerouslySetInnerHTML }) => {
    return (
        <>
            <span>{dangerouslySetInnerHTML.__html}</span>
            <span></span>
        </>
    )
}

const Countdown = ({ remaining }) => {
    return <StyledCountdown><StyledSpan dangerouslySetInnerHTML={getTimerHTML(remaining)} /></StyledCountdown>
}

export default Countdown
