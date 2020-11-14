import { above } from './helpers/breakpoints'

export const theme = {
    s: function (x) {
        return x ? `${x * 10}px` : '10px'
    },
    s2: '20px',
    monoFont: `'Roboto Mono', serif`,
    defaultFont: `'Work Sans', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', sans-serif`,
    handFont: `'Kalam', sans-serif`,
    colorDefault: '#272C30',
    // colorPrimary: '#02073f',
    colorPrimary: '#010d40',
    colorBeige: '#EFDED6',
    colorBeigeRGB: '239, 222, 214',
    colorBeigeAlt: '#FFFBF7',
    colorOrange: '#ff825c',
    colorOrangeAlt: '#ff8211',
    colorRed: '#FF6584',
    colorBlue: '#0000FF',
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

                height: ${isStaticHeight ? theme.s(2) : '40%'};

                ${isAnimated ? `
                    animation-duration: 1.5s;
                    animation-name: titleBg;
                    animation-timing-function: ease-in-out;
                ` : ''}

                @media ${above.tablet} {
                    height: ${isStaticHeight ? '45%' : '45%'};
                }
            }
        ${desktopOnly ? `}` : ''}
    `,
    specialLink: () => `
        display: block;

        animation-name: wiggle;
        animation-duration: .2s;
        animation-iteration-count: infinite;

        span {
            padding: 5px 10px;

            background-color: ${theme.colorOrange};

        }
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
        title: 'Strona główna',
        url: '/'
    },
    {
        id: 2,
        title: 'Regulamin',
        url: '/regulamin/'
    },
    {
        id: 3,
        title: 'Rejestracja',
        url: '/register/',
        isSpecial: true
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
        title: 'Co to są Korki z Front-endu?',
        content: `
        <h3>Korki z Front-endu to:</h3>
        <ul>
            <li>możliwość uczestnictwa z brakiem jakiejkolwiek wiedzy</li>
            <li>dostęp do sprawdzonych materiałów naukowych</li>
            <li>uporządkowana ścieżka kariery</li>
            <li>mentoring z dostępnością mentora 24/7</li>
            <li>dostęp do czatu grupowego</li>
            <li>możliwość obserwowania postępów na tle grupy</li>
            <li>projekty grupowe oraz indywidualne ze wsparciem mentora</li>
            <li>niebootcampowa, luźna atmosfera</li>
            <li>zajęcia odbywające się kiedy chcesz i trwające ile chcesz</li>
            <li>brak sztywnego harmonogramu dziennego</li>
        </ul>`
    },
    {
        title: 'Ile to tak właściwie kosztuje?',
        content: '<p>Miesiąc uczestnictwa w Korkach z Front-endu kosztuje <strong>349zł</strong>.</p>'
    },
    {
        title: 'Co powinienem umieć przed przystąpieniem do programu?',
        content: '<p>Dosłownie nic. Program Korki z Front-endu skupia się na nauce od poziomu zerowego. Jeżeli już coś umiesz - bardzo fajnie! Jednocześnie brak wiedzy Cię nie dyskwalifikuje.</p>'
    },
    {
        title: 'Kiedy rusza nowy rok szkolny?',
        content: '<p>Nowy "rok szkolny" #korków prawdopodobnie ruszy 12.12.2020. Data ta może ulec zmianie, ale jeżeli jesteś zapisany do mojego newslettera, o wszystkim dowiesz się na bieżąco. Możemy też zmienić tę datę na potrzeby grupy.</p>'
    },
    {
        title: 'Dlaczego #korki a nie bootcamp?',
        content: '<p>#korki nie są drogim bootcampem. Wiem, że ciężko jest wziąć kilku tygodni wolnego w pracy lub się zwolnić. Nauka w programie #korków to samodzielna nauka pod okiem mentora, dzięki czemu nie jesteś ograniczony codziennym harmonogramem. To od Ciebie zależy, ile się danego dnia nauczysz.</p>'
    },
    {
        title: 'Czy po #korkach będę gotowy na rozpoczęcie pracy w IT?',
        content: '<p>Tak. Korki z Front-endu przygotują Cię do pierwszej pracy. Stanowisko, jakie będziesz mógł objąć to Intern Front-end Developer (slicer) lub Junior Front-end Developer (slicer). Razem przygotujemy też CV oraz dwa cenne projekty do portfolio.</p>'
    },
    {
        title: 'W jaki sposób, jako uczestnik, mogę skonsultować się z grupą lub mentorem?',
        content: '<p>Przez cały "rok szkolny" będziesz miał kontakt na komunikatorze Slack i Zoom, zarówno z grupą jak i z mentorem.</p>'
    },
    {
        title: 'Czy konsultacje z mentorem są płatne?',
        content: '<p>Konsultacje z mentorem są bezpłatne. Dodatkowo co dwa tygodnie w uzgodniony dzień spotykamy się na wideokonferencji i robimy "update", czyli podsumowanie grupowe.</p>'
    },
    {
        title: 'W jakich godzinach mogę kontaktować się z mentorem?',
        content: '<p>24 godziny na dobę.</p>'
    },
    {
        title: 'Ile trwa program #korków?',
        content: '<p>Program Korków z Front-endu trwa około 6 miesięcy. W zależności od poziomu grupy, możemy przyspieszyć lub przedłużyć program #korków.</p>'
    },
    {
        title: 'Czemu miałbym dołączyć do #korków, zamiast uczyć się samemu?',
        content: '<p>Ponieważ program Korków z Front-endu jest sprawdzony i konkretny. Wyznaczona przeze mnie ścieżka oczywiście nie jest jedyną słuszną - ale jest ona sprawdzona. Jest to po prostu ścieżka, którą sam podążałem.</p>'
    },
    {
        title: 'Czy jeżeli #korki nie będą dla mnie satysfakcjonujące, mogę liczyć na zwrot pieniędzy?',
        content: '<p>Tak. Od momentu zapisów masz 10 dni na rezygnację z programu z pełnym zwrotem gotówki w przeciągu tygodnia.</p>'
    },
    {
        title: 'Czy nie jestem na to zbyt młody / stary?',
        content: '<p>Za młody? Nie! Sam pierwsze kroki w programowaniu stawiałem w wieku ok. 12 lat. Za stary? Nie! Mam znajomych-programistów w przeróżnym wieku, w tym w wieku moich rodziców (mamo, tato, pozdrawiam 💙).</p>'
    },
    {
        title: 'Czy jest możliwe korzystanie z mentoringu, bez udziału w programie?',
        content: '<p>Tak. Skontaktuj się ze mną by dowiedzieć się więcej.</p>'
    },
    {
        title: 'Jak duże są grupy?',
        content: '<p>Grupy są tworzone w zależności od poziomu uczestników. Zazwyczaj grupa liczy około 15 osób.</p>'
    },
    {
        title: 'Czy mogę zrezygnować w każdym momencie?',
        content: '<p>Tak, ale powinieneś powiadomić mnie o rezygnacji co najmniej tydzień przed końcem aktualnego miesiąca rozliczeniowego. Opłacony miesiąc nie podlega zwrotowi. Opłacony cały rok szkolny podlega zwrotowi proporcjonalnie do upłyniętego czasu.</p>'
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

export const countries = [
    'Polska',
    '---',
    'Australia',
    'Austria',
    'Azerbejdżan',
    'Albania',
    'Algieria',
    'Angola',
    'Andora',
    'Antigua i Barbuda',
    'Argentyna',
    'Armenia',
    'Afganistan',
    'Arabia Saudyjska',
    'Bahamy',
    'Bangladesz',
    'Barbados',
    'Bahrajn',
    'Belize',
    'Białorusi',
    'Belgia',
    'Benin',
    'Bułgaria',
    'Boliwia',
    'Bośnia i Hercegowina',
    'Botswana',
    'Brazylia',
    'Brunei',
    'Burkina Faso',
    'Burundi',
    'Bhutan',
    'Cape Verde',
    'Cypr',
    'Chiny',
    'Chorwacja',
    'Czad',
    'Czarnogóra',
    'Chile',
    'Dania',
    'Demokratyczna Republika Konga',
    'Dżibuti',
    'Dominika',
    'Egipt',
    'El Salvador',
    'Ekwador',
    'Erytrea',
    'Estonia',
    'Etiopia',
    'Fidżi',
    'Filipiny',
    'Finlandia',
    'Francja',
    'Gabon',
    'Gujana',
    'Gambia',
    'Ghana',
    'Gwatemala',
    'Gwinea',
    'Gwinea Bissau',
    'Grenada',
    'Grecja',
    'Gruzja',
    'Gwinea Równikowa',
    'Haiti',
    'Honduras',
    'Hongkong',
    'Hiszpania',
    'Holandia',
    'Izrael',
    'Indie',
    'Indonezja',
    'Irak',
    'Iran',
    'Irlandia',
    'Islandia',
    'Jordan',
    'Jemen',
    'Jamajka',
    'Japonia',
    'Kazachstan',
    'Kambodża',
    'Kamerun',
    'Kanada',
    'Katar',
    'Kenia',
    'Kirgistan',
    'Kiribati',
    'KRLD',
    'Kolumbia',
    'Komory',
    'Kosowo',
    'Kostaryka',
    'Kuba',
    'Kuwejt',
    'Laos',
    'Lesotho',
    'Liberia',
    'Liban',
    'Libia',
    'Litwa',
    'Liechtenstein',
    'Luksemburg',
    'Łotwa',
    'Mauritius',
    'Mauretania',
    'Madagaskar',
    'Malawi',
    'Malezja',
    'Mali',
    'Malediwy',
    'Malta',
    'Maroko',
    'Meksyk',
    'Mozambik',
    'Mołdawia',
    'Monako',
    'Mongolia',
    'Myanmar',
    'Macedonia',
    'Mikronezja',
    'Niemcy',
    'Namibia',
    'Nauru',
    'Nepal',
    'Niger',
    'Nigeria',
    'Nikaragua',
    'Niue',
    'Nowa Zelandia',
    'Norwegia',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua Nowa Gwinea',
    'Paragwaj',
    'Peru',
    'Portugalia',
    'Republika Dominikańska',
    'Republika Konga',
    'Republika Korei',
    'Rosja',
    'Rwanda',
    'Rumunia',
    'Republika Środkowoafrykańska',
    'Republika Czeska',
    'RPA',
    'Samoa',
    'San Marino',
    'Suazi',
    'Seszele',
    'Senegal',
    'Saint Vincent i Grenadyny',
    'Saint Kitts i Nevis',
    'Saint Lucia',
    'Serbia',
    'Singapur',
    'Syria',
    'Słowacja',
    'Słowenia',
    'Somalia',
    'Sudan',
    'Surinam',
    'Sierra Leone',
    'Szwajcaria',
    'Szwecja',
    'Sri lanka',
    'Sudan Południowy',
    'Timor Wschodni',
    'Tadżykistan',
    'Tajlandia',
    'Tajwan',
    'Tanzania',
    'Togo',
    'Tonga',
    'Trynidad i Tobago',
    'Tuvalu',
    'Tunezja',
    'Turkmenistan',
    'Turcja',
    'USA',
    'Uganda',
    'Uzbekistan',
    'Ukraina',
    'Urugwaj',
    'Vanuatu',
    'Watykan',
    'Wielka Brytania',
    'Węgry',
    'Wenezuela',
    'Wietnam',
    'Włochy',
    'Wybrzeże Kości Słoniowej',
    'Wyspy Marshalla',
    'Wyspy Cooka',
    'Wyspy Świętego Tomasza i Książęca',
    'Wyspy Salomona',
    'Zambia',
    'Zimbabwe',
    'ZEA'
]
