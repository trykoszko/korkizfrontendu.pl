import styled from 'styled-components'

import {
    theme
} from '../../constants'

export const StyledStyledStrong = styled.strong`
    ${props => theme.underscoreDecor(true, false, props.isStaticHeight)}
`
