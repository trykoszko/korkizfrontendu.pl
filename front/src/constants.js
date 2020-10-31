import { above } from './helpers/breakpoints'

export const theme = {
    s: function (x) {
        return x ? `${x * 10}px` : '10px'
    },
    s2: '20px',
    monoFont: `'RobotoMono', serif`,
    defaultFont: `'DMSans', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', sans-serif`,
    colorDefault: '#272C30',
    // colorPrimary: '#02073f',
    colorPrimary: '#010d40',
    colorBeige: '#EFDED6',
    colorOrange: '#ff825c',
    colorOrangeAlt: '#ff8211',
    colorRed: '#FF6584',
    transitions: {
        ease: 'transition: all .4s ease-in-out;',
        quick: 'transition: all .2s ease-in-out;'
    },
    borderRadius: {
        small: '3px'
    },
    boxShadow: {
        small: `0px 2px 2px 0px rgba(0,0,0,0.04)`
    },
    underscoreDecor: (isAnimated = false, desktopOnly = false) => `
        ${desktopOnly ? `@media ${above.tablet} {` : ''}
            text-decoration: none;
            position: relative;

            &::before {
                content: '';

                position: absolute;
                bottom: -3%;
                left: 0;

                width: 100%;
                height: 40%;

                z-index: -1;

                background-color: #ff825c;

                ${isAnimated ? `
                    animation-duration: 1.5s;
                    animation-name: titleBg;
                    animation-timing-function: ease-in-out;
                ` : ''}

                @media ${above.tablet} {
                    height: 45%;
                }
            }
        ${desktopOnly ? `}` : ''}
    `
}

export const typographyTheme = {
    baseFontSize: '16px',
    baseLineHeight: 1.666,
    headerFontFamily: ['RobotoMono', 'serif'],
    bodyFontFamily: ['DMSans', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
    includeNormalize: false
}

export const menuItems = [
    {
        id: 1,
        title: 'Home',
        url: '/'
    },
    {
        id: 2,
        title: 'Regulamin',
        url: '/regulamin/'
    }
]
