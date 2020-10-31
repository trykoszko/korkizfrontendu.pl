import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import { theme } from '../constants'

import DMSans from '../../static/DMSans-Regular.ttf'
import DMSansBold from '../../static/DMSans-Bold.ttf'
import RobotoMono from '../../static/RobotoMono-Regular.ttf'
import RobotoMonoBold from '../../static/RobotoMono-Bold.ttf'

const GlobalStyle = createGlobalStyle`
    ${normalize}

    @font-face {
        font-family: DMSans;
        src: url(${DMSans});
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: DMSans;
        src: url(${DMSansBold});
        font-weight: bold;
        font-style: normal;
    }
    @font-face {
        font-family: RobotoMono;
        src: url(${RobotoMono});
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: RobotoMono;
        src: url(${RobotoMonoBold});
        font-weight: bold;
        font-style: normal;
    }

    @keyframes titleBg {
        0%   {
            width: 0;
        }
        100% {
            width: 100%;
        }
    }

    body {
        color: ${theme.colorDefault};

        font-family: ${theme.defaultFont};
    }

    a {
        color: ${theme.colorPrimary};
        text-decoration: none;

        /* &:visited, &:hover, &:focus {
            color: ${theme.colorDefault};
        } */
        &:hover {
            text-decoration: underline;
        }
    }

    p,
    ul {
        font-size: 1.23rem;
    }
`

export default GlobalStyle
