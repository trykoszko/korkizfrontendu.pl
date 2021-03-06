import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import { theme } from '../constants'

const GlobalStyle = createGlobalStyle`
    ${normalize}

    @keyframes titleBg {
        0%   {
            width: 0;
        }
        100% {
            width: 100%;
        }
    }

    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateX(2px);
        }
        40% {
            transform: translateX(-7px);
        }
        60% {
            transform: translateX(-4px);
        }
    }

    @keyframes wiggle {
        0% {
            transform: rotate(1.5deg);
        }
        10% {
            transform: rotate(-1.5deg);
        }
        20% {
            transform: rotate(1.5deg);
        }
        30% {
            transform: rotate(-1.5deg);
        }
        40% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(0);
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
    ul,
    ol {
        font-size: 1.23rem;
    }

    strong {
        font-weight: 700;
    }
`

export default GlobalStyle
