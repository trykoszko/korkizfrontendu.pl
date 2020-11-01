import React from 'react'
import styled from 'styled-components'

import {
    under,
    above
} from '../helpers/breakpoints'

import {
    faqAccordionItems, skillsItems
} from '../constants'

import { theme } from '../constants'

import Layout from '../components/Layout'
import FullHeightSection from '../components/FullHeightSection/FullHeightSection.jsx'
import Hero from '../components/Hero/Hero.jsx'
import AutoHeightSection from '../components/AutoHeightSection/AutoHeightSection.jsx'
import Container from '../components/Container/Container.jsx'
import Row from '../components/Row/Row.jsx'
import Col from '../components/Col/Col.jsx'
import ContentContainer from '../components/ContentContainer/ContentContainer.jsx'
import NewsletterToggler from '../components/NewsletterToggler/NewsletterToggler.jsx'
import StyledStrong from '../components/StyledStrong/StyledStrong.jsx'
import SocialNav from '../components/SocialNav/SocialNav.jsx'
import Accordion from '../components/Accordion/Accordion.jsx'
import YoutubeVid from '../components/YoutubeVid/YoutubeVid.jsx'
// import InstagramFeed from '../components/InstagramFeed/InstagramFeed.jsx'

import info from '../../static/info.svg'
import stepping from '../../static/stepping.svg'
import mentor_image from '../../static/mentor.jpg'

const StyledMentorImageWrapper = styled.div`
    padding: ${theme.s()};
    position: relative;

    padding: 0;
    margin: 0;
    margin-bottom: ${theme.s(3)};

    @media ${above.smDesktop} {
        margin-bottom: ${theme.s(6)};
    }

    &:after {
        content: '';
        width: 90%;
        height: ${theme.s(2)};

        background-color: ${theme.colorOrange};

        position: absolute;
        bottom: -${theme.s(.5)};
        left: 0;
    }
`

const StyledMentorImage = styled.img`
    width: 100%;
    height: auto;

    margin: 0;
    padding: 0;
`

const MentorImage = ({ src, alt }) => <StyledMentorImageWrapper><StyledMentorImage src={src} alt={alt} /></StyledMentorImageWrapper>

const StyledSectionImage = styled.img`
    max-width: 100%;
    height: auto;

    padding: 0;
    padding-left: ${props => props.pl}%;
    padding-right: ${props => props.pr}%;
    padding-top: ${props => props.pt}%;

    ${theme.transitions.slow}

    &:hover {
        transform: scale(1.04);
    }

    @media ${under.smDesktop} {
        display: none;
    }
`

const StyledUl = styled.ul`
    list-style: none;

    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: ${props => props.flexDirection ? props.flexDirection : 'column'};
    justify-content: flex-start;
    flex-wrap: wrap;

    font-family: ${theme.monoFont};

    @media ${above.smDesktop} {
        justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};

        padding: 0 ${theme.s(2)};
    }

    li {
        display: inline-block;

        padding: ${theme.s()} ${theme.s(2)};

        background-color: rgba(255, 255, 255, .1);

        margin: ${theme.s(.5)};

        &:hover {
            background-color: rgba(255, 130, 92, .2);
        }
        @media ${above.smDesktop} {
            margin: ${theme.s()};
        }
    }
`

export default function Home({ path }) {
    return (
        <Layout currentPath={path}>
            <FullHeightSection bg={theme.colorBeige}>
                <Hero />
            </FullHeightSection>
            <AutoHeightSection bg={theme.colorPrimary} textColor="white">
                <Container flexDirection="column" py="10" pb="10" ptMobile="5">
                    <Row flexDirection="row" justifyContent="center">
                        <Col colWidth="60%">
                            <ContentContainer centered>
                                <h2>
                                    <StyledStrong>Czego się nauczysz</StyledStrong> na #korkach?
                                </h2>
                                <p>
                                    Nie tylko dowiesz się co to za technologie.<br />Nauczysz się też wykorzystywać je w praktyce!
                                </p>
                                <StyledUl flexDirection="row" justifyContent="center">
                                    {skillsItems
                                        .sort(function (a, b) { return 0.5 - Math.random() })
                                        .map(item => <li key={item}><p>{item}</p></li>)}
                                </StyledUl>
                            </ContentContainer>
                        </Col>
                    </Row>
                </Container>
            </AutoHeightSection>
            <AutoHeightSection bg="white" textColor={theme.colorPrimary}>
                <Container flexDirection="column" py="10" pb="15" ptMobile="8">
                    <Row flexDirection="row" justifyContent="space-between">
                        <Col colWidth="20%">
                            <ContentContainer>
                                <h2>
                                    <StyledStrong>
                                        O programie
                                    </StyledStrong>
                                </h2>
                            </ContentContainer>
                        </Col>
                        <Col colWidth="33%">
                            <ContentContainer>
                                <h3>
                                    <StyledStrong>Dla kogo</StyledStrong> są #korki?
                                </h3>
                                <ul>
                                    <li>chciałbyś się <strong>przebranżowić</strong> i zacząć pracę w branży IT</li>
                                    <li>chciałbyś nauczyć się <strong>tworzyć strony internetowe</strong> i stworzyć sobie możliwości <strong>dodatkowego zarobku</strong> lub wykonania <strong>własnej strony firmowej</strong></li>
                                    <li>jesteś już na <strong>pewnym poziomie</strong> umiejętności front-endowych, ale nie wiesz co dalej</li>
                                    <li><strong>jesteś back-endowcem</strong> i chciałbyś douczyć się front-endu</li>
                                    <li>chcesz uczestniczyć w <strong>indywidualnych lub grupowych zajęciach</strong> z programowania i tworzenia stron internetowych</li>
                                    <li>potrzebujesz <strong>mentora lub porady</strong>, w którym kierunku podążać</li>
                                    <li>jesteś <strong>samodzielny i zdyscyplinowany</strong> oraz jesteś w stanie poświęcić około godzinę dziennie na naukę przez 6 miesięcy w ciągu</li>
                                </ul>
                            </ContentContainer>
                        </Col>
                        <Col colWidth="33%" ml="auto" mr="10">
                            <ContentContainer>
                                <h3>
                                    Tylko <StyledStrong>praktyczna</StyledStrong> wiedza
                                </h3>
                                <p>
                                    <strong>Korki z Front-endu</strong> to bardzo elastyczny program, który nie wymaga od Ciebie dopasowania się sztywnego harmonogramu.
                                    <br /><br />
                                    Formuła korków, oprócz umiejętności technicznych, uczy też samodyscypliny i dobrego nawyku ciągłego uczenia się.
                                </p>
                                <p>
                                    Dlaczego wybrać <StyledStrong>#korki</StyledStrong>?
                                </p>
                                <ul>
                                    <li><strong>zaczynałem tak samo jak Ty</strong> i wiem od czego zacząć a także w jakim kierunku najlepiej kontynuować naukę</li>
                                    <li>w programie grupowym masz <strong>stały kontakt z grupą i osobą prowadzącą</strong></li>
                                    <li>moja wiedza opiera się o <strong>realne projekty</strong></li>
                                    <li>każdy jest <strong>traktowany indywidualnie</strong> i progres sprawdzany jest na bieżąco</li>
                                </ul>
                            </ContentContainer>
                        </Col>
                    </Row>
                </Container>
            </AutoHeightSection>
            <AutoHeightSection bg={theme.colorBeige}>
                <Container flexDirection="column" py="10" pb="10" ptMobile="5">
                    <Row flexDirection="row">
                        <Col colWidth="50%">
                            <StyledSectionImage src={info} pt="10" pl="10" pr="40" alt="Twój profil" />
                            <StyledSectionImage src={stepping} pt="5" pl="30" pr="20" alt="Twój progres" />
                        </Col>
                        <Col colWidth="40%">
                            <ContentContainer>
                                <h2>
                                    <StyledStrong>Jak wyglądają</StyledStrong> #korki?
                                </h2>
                                <ol>
                                    <li>rejestracja zostanie otwarta dokładnie <strong>2020-11-14</strong></li>
                                    <li>po zakończonej rejestracji, otwieramy nowy <i>rok szkolny</i> 😃 - dostaniesz ode mnie <strong>materiały oraz instrukcję</strong>, jak z nich korzystać</li>
                                    <li>mając już materiały, <strong>zdzwaniamy się i ustalamy terminy</strong>. na callu objaśniam też nadesłane materiały oraz odpowiadam na wszelkie pytania</li>
                                    <li><strong>przez 5 miesięcy uczysz się</strong> korzystając z otrzymanych materiałów. cały czas <strong>mamy kontakt na Slacku i regularnie zdzwaniamy się, sprawdzając postęp</strong></li>
                                    <li>podczas Twojej nauki będę stale <strong>monitorował Twój progres</strong>, pisząc do Ciebie na wybranej przez Ciebie platformie - <strong>będziesz pod stałym nadzorem mentora</strong></li>
                                    <li>po 5 miesiącach intensywnej nauki, organizujemy grupy lub jedną dużą grupę i <strong>wykonujemy projekty grupowe</strong>, które później będziesz mógł wrzucić do <strong>portfolio</strong></li>
                                    <li>ostatni, szósty miesiąc, będzie służył na <strong>doskonalenie Twoich umiejętności miękkich</strong> oraz <strong>przygotowaniu Cię do szukania pracy</strong></li>
                                </ol>
                            </ContentContainer>
                        </Col>
                    </Row>
                </Container>
            </AutoHeightSection>
            <AutoHeightSection bg="white">
                <Container flexDirection="column" py="10" pb="10" ptMobile="5" narrow>
                    <Row flexDirection="column" justifyContent="center" alignItems="center">
                        <Col colWidth="100%">
                            <MentorImage src={mentor_image} alt="Mentor Korków z Front-endu - Michał Trykoszko" />
                        </Col>
                        <Col colWidth="100%">
                            <ContentContainer>
                                {/* @todo add instagram feed @trykoszko */}
                                <h2>
                                    <StyledStrong>O mnie</StyledStrong>
                                </h2>
                                <p>
                                    Hej! Mam na imię Michał i będę Twoim mentorem.
                                </p>
                                <p>
                                    Mam kilka lat doświadczenia w programowaniu i tworzeniu stron internetowych. Choć aktualnie tworzę projekty głównie back-endowe, przez większość kariery byłem Full-stack Developerem.
                                </p>
                                <p>
                                    Moje doświadczenie opiera się głównie o tworzenie customowych stron i sklepów internetowych przy użyciu WordPress i WooCommerce, zarówno warstwy back- jak i front-endowej.
                                </p>
                                <p>
                                    Od zawsze staram się dzielić wiedzą i pomagać innym - na zdjęciu powyżej to ja, prowadzę <a target="_blank" rel="noreferrer" href="https://t2m.io/oOphASkU">warsztaty o połączeniu Reacta i WordPressa</a> na największym meetupie WordPressowym w Polsce - WordCamp Polska Łódź 2019.
                                </p>
                                <br />
                                <br />
                                <h3>
                                    Jakim jestem <StyledStrong>nauczycielem</StyledStrong>?
                                </h3>
                                <p>
                                    Koniecznie obejrzyj jeden z moich live'ów, związanych z tematem.
                                </p>
                                <YoutubeVid youtubeUrl="https://www.youtube.com/watch?v=MyvmU2LFTzQ" />
                                <br />
                                <br />
                                <br />
                                <h3>
                                    Chcesz się ze mną <StyledStrong>skontaktować</StyledStrong>? Wal śmiało np tu:
                                </h3>
                                <SocialNav />
                                <br />
                                <h4>I obowiązkowo sprawdź moje fotki na <a target="_blank" rel="noreferrer" href="https://t2m.io/eAn0EH9L">Instagramie</a> 🙋</h4>
                                {/* <InstagramFeed /> */}
                            </ContentContainer>
                        </Col>
                    </Row>
                </Container>
            </AutoHeightSection>
            <AutoHeightSection bg={theme.colorBeige}>
                <Container narrow py="10" pb="10" ptMobile="5">
                    <Row>
                        <Col colWidth="100%">
                            <ContentContainer>
                                <h2>
                                    Najczęściej zadawane pytania (<StyledStrong>FAQ</StyledStrong>)
                                </h2>
                                <br />
                                <Accordion items={faqAccordionItems} />
                            </ContentContainer>
                        </Col>
                    </Row>
                </Container>
            </AutoHeightSection>
            <AutoHeightSection bg={theme.colorPrimary} textColor="white">
                <Container py="10" pb="10" ptMobile="5">
                    <Row flexDirection="row" justifyContent="space-between" alignItems="center">
                        <Col colWidth="60%">
                            <ContentContainer>
                                <h2>
                                <StyledStrong>Jeszcze jedno!</StyledStrong> Pozostańmy w kontakcie 🤓
                                </h2>
                                <p>
                                    Jeżeli formuła <strong>Korków z Front-endu</strong> wydaje Ci się interesująca, zapisz się do newslettera. Już wkrótce dostaniesz informacje o planowanym starcie programu!
                                </p>
                            </ContentContainer>
                        </Col>
                        <Col colWidth="30%" alignItems="flex-end">
                            <NewsletterToggler type="orange">
                                Zapisz się na #korki!
                            </NewsletterToggler>
                        </Col>
                    </Row>
                </Container>
            </AutoHeightSection>
        </Layout>
    )
}
