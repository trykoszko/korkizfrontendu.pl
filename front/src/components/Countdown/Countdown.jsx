import React from 'react'

import {
    StyledCountdown
} from './CountdownStyles'

const getTimerHTML = remaining => {
    return {
        __html: remaining
    }
}

const Countdown = ({ remaining }) => {
    return <StyledCountdown dangerouslySetInnerHTML={getTimerHTML(remaining)} />
}

export default Countdown
