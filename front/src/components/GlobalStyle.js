import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import { theme } from '../constants'

import DMSans from '../../static/DMSans-Regular.ttf'
import DMSansBold from '../../static/DMSans-Bold.ttf'
import Roboto from '../../static/Roboto-Regular.ttf'
import RobotoItalic from '../../static/Roboto-Italic.ttf'
import RobotoMono from '../../static/RobotoMono-Regular.ttf'

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
        font-family: Roboto;
        src: url(${Roboto});
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: Roboto;
        src: url(${RobotoItalic});
        font-weight: normal;
        font-style: italic;
    }
    @font-face {
        font-family: RobotoMono;
        src: url(${RobotoMono});
        font-weight: normal;
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
    }

    a {
        color: ${theme.colorPrimary};
        text-decoration: none;

        &:visited, &:hover, &:focus {
            color: ${theme.colorDefault};
        }
        &:hover {
            text-decoration: underline;
        }
    }
`

export default GlobalStyle
