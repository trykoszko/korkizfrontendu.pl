export const theme = {
    s: function (x) {
        return x ? `${x * 10}px` : '10px'
    },
    s2: '20px',
    monoFont: `'RobotoMono', serif`,
    colorDefault: '#272C30',
    // colorPrimary: '#02073f',
    colorPrimary: '#010d40',
    colorBeige: '#EFDED6',
    colorOrange: '#ff825c',
    colorOrangeAlt: '#ff8211',
    transitions: {
        ease: 'transition: all .7s ease-in-out;',
    },
    borderRadius: {
        small: '3px'
    }
}

export const typographyTheme = {
    baseFontSize: '16px',
    baseLineHeight: 1.666,
    headerFontFamily: ['DMSans', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
    bodyFontFamily: ['DMSans', 'Arial', 'serif'],
    includeNormalize: false
}

export const menuItems = [
    {
        id: 1,
        title: 'Title',
        url: '#'
    },
    {
        id: 2,
        title: 'Title 2',
        url: '#'
    },
    {
        id: 3,
        title: 'Title 3',
        url: '#'
    }
]
