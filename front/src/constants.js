import { above } from './helpers/breakpoints'

export const theme = {
    s: function (x) {
        return x ? `${x * 10}px` : '10px'
    },
    s2: '20px',
    monoFont: `'Roboto Mono', serif`,
    defaultFont: `'Work Sans', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', sans-serif`,
    colorDefault: '#272C30',
    // colorPrimary: '#02073f',
    colorPrimary: '#010d40',
    colorBeige: '#EFDED6',
    colorBeigeAlt: '#FFFBF7',
    colorOrange: '#ff825c',
    colorOrangeAlt: '#ff8211',
    colorRed: '#FF6584',
    transitions: {
        ease: 'transition: all .4s ease-in-out;',
        quick: 'transition: all .2s ease-in-out;',
        slow: 'transition: all 2s ease-in-out;'
    },
    borderRadius: {
        small: '3px',
        medium: '6px'
    },
    boxShadow: {
        small: `0px 2px 2px 0px rgba(0,0,0,0.04)`
    },
    underscoreDecor: (isAnimated = false, desktopOnly = false, isStaticHeight = false) => `
        ${desktopOnly ? `@media ${above.tablet} {` : ''}
            text-decoration: none;
            position: relative;

            span:first-of-type {
                z-index: 10;
            }
            span:last-of-type {
                content: '';

                position: absolute;
                bottom: -3%;
                left: 0;

                width: 100%;

                z-index: -1;

                background-color: #ff825c;

                height: ${isStaticHeight ? theme.s() : '40%'};

                ${isAnimated ? `
                    animation-duration: 1.5s;
                    animation-name: titleBg;
                    animation-timing-function: ease-in-out;
                ` : ''}

                @media ${above.tablet} {
                    height: ${isStaticHeight ? theme.s() : '45%'};
                }
            }
        ${desktopOnly ? `}` : ''}
    `
}

export const typographyTheme = {
    baseFontSize: '16px',
    baseLineHeight: 1.666,
    headerFontFamily: ['Roboto Mono', 'serif'],
    bodyFontFamily: ['Work Sans', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
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

export const socialMenuItems = [
    {
        id: 1,
        title: 'Facebook',
        url: 'https://t2m.io/uq52uJPC'
    },
    {
        id: 2,
        title: 'YouTube',
        url: 'https://t2m.io/rEeB9Lw9'
    },
    {
        id: 3,
        title: 'LinkedIn',
        url: 'https://t2m.io/AUtWk03T'
    }
]

export const faqAccordionItems = [
    {
        title: 'Co powinienem umieć przed przystąpieniem do programu?',
        content: 'Dosłownie nic. Program Korki z Front-endu skupia się na nauce od poziomu zerowego.',
    },
    {
        title: 'Kiedy rusza nowy rok szkolny?',
        content: 'Nowy "rok szkolny" #korków prawdopodobnie ruszy 12.12.2020. Data ta może ulec zmianie, ale jeżeli jesteś zapisany do mojego newslettera, o wszystkim dowiesz się na bieżąco. Możemy też zmienić tę datę na potrzeby grupy.'
    },
    {
        title: 'Dlaczego #korki a nie bootcamp?',
        content: '#korki nie są drogim bootcampem. Wiem, że ciężko jest wziąć kilku tygodni wolnego w pracy lub się zwolnić. Nauka w programie #korków to samodzielna nauka pod okiem mentora, dzięki czemu nie jesteś ograniczony codziennym harmonogramem. To od Ciebie zależy, ile się danego dnia nauczysz.'
    },
    {
        title: 'Czy po #korkach będę gotowy na rozpoczęcie pracy w IT?',
        content: 'Tak. Korki z Front-endu przygotują Cię do pierwszej pracy. Stanowisko, jakie będziesz mógł objąć to Intern Front-end Developer (slicer) lub Junior Front-end Developer (slicer).'
    },
    {
        title: 'W jaki sposób, jako uczestnik, mogę skonsultować się z grupą lub mentorem?',
        content: 'Przez cały "rok szkolny" będziesz miał kontakt na komunikatorze Slack i Zoom, zarówno z grupą jak i z mentorem.'
    },
    {
        title: 'Czy konsultacje z mentorem są płatne?',
        content: 'Konsultacje z mentorem są darmowe. Dodatkowo co dwa tygodnie w uzgodniony dzień spotykamy się na wideokonferencji i robimy podsumowania grupowe.'
    },
    {
        title: 'W jakich godzinach mogę kontaktować się z mentorem?',
        content: '24 godziny na dobę.'
    },
    {
        title: 'Ile trwa program #korków?',
        content: 'Program Korków z Front-endu trwa około 6 miesięcy. W zależności od poziomu grupy, możemy przyspieszyć lub przedłużyć program #korków.'
    },
    // {
    //     title: 'Ile to tak właściwie kosztuje?',
    //     content: 'Miesiąc uczestnictwa w Korkach z Front-endu kosztuje 299zł. Cały "rok szkolny", czyli 6 miesięcy nauki z góry to kwota 1999zł'
    // },
    {
        title: 'Czy jeżeli #korki nie będą dla mnie satysfakcjonujące, mogę liczyć na zwrot pieniędzy?',
        content: 'Tak. Od momentu zapisów masz 10 dni na rezygnację z programu z pełnym zwrotem gotówki w przeciągu tygodnia.'
    },
    {
        title: 'Czy jest możliwe korzystanie z mentoringu, bez udziału w programie?',
        content: 'Tak. Skontaktuj się ze mną by dowiedzieć się więcej.'
    },
    {
        title: 'Jak duże są grupy?',
        content: 'Grupy są tworzone w zależności od poziomu uczestników. Zazwyczaj grupa liczy około 15 osób.'
    },
    {
        title: 'Czy mogę zrezygnować w każdym momencie?',
        content: 'Tak, ale powinieneś powiadomić mnie o rezygnacji co najmniej tydzień przed końcem aktualnego miesiąca rozliczeniowego. Opłacony miesiąc nie podlega zwrotowi. Opłacony cały rok szkolny podlega zwrotowi proporcjonalnie do upłyniętego czasu.'
    }
]

export const skillsItems = [
    'HTML5',
    'VSCode',
    'CSS3',
    'SCSS',
    'Accessibility',
    'NPM',
    'Yarn',
    'Git',
    'JavaScript',
    'ES6+',
    'Flexbox',
    'CSS Grid',
    'Chrome Devtools',
    'Gulp',
    'Webpack',
    'Cross-browser',
    'Terminal',
    'Adobe XD',
    'Sketch',
    'Figma'
]
