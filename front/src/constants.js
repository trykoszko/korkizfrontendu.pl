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
    }
}

export const typographyTheme = {
    baseFontSize: '16px',
    baseLineHeight: 1.666,
    headerFontFamily: ['RobotoMono', 'serif'],
    bodyFontFamily: ['RobotoMono', 'serif'],
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
