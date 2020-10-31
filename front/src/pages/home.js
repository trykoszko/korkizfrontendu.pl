import React from 'react'

import { theme } from '../constants'

import Layout from '../components/Layout'
import FullHeightSection from '../components/FullHeightSection/FullHeightSection.jsx'
import Hero from '../components/Hero/Hero.jsx'
import AutoHeightSection from '../components/AutoHeightSection/AutoHeightSection.jsx'
import Container from '../components/Container/Container.jsx'
import Row from '../components/Row/Row.jsx'
import Col from '../components/Col/Col.jsx'
import ContentContainer from '../components/ContentContainer/ContentContainer.jsx'
import NewsletterModalButton from '../components/NewsletterModalButton/NewsletterModalButton.jsx'

export default function Home({ path }) {
    return (
        <Layout currentPath={path}>
            <FullHeightSection bg={theme.colorBeige}>
                <Hero />
            </FullHeightSection>
            <AutoHeightSection bg="white" textColor={theme.colorPrimary}>
                <Container flexDirection="column" py="10" pb="15">
                    <Row flexDirection="row" justifyContent="space-between">
                        <Col colWidth="20%">
                            <ContentContainer>
                                <h2>O programie</h2>
                                <p>Nowa formuła nauki</p>
                            </ContentContainer>
                        </Col>
                        <Col colWidth="33%" ml="auto" mr="10">
                            <ContentContainer>
                                <h3>
                                    Test test
                                </h3>
                                <p>
                                    <strong>Korki z Front-endu</strong> to bardzo elastyczny program, który nie wymaga od Ciebie dopasowania się sztywnego harmonogramu. Formuła korków, oprócz umiejętności technicznych, uczy też samodyscypliny i dobrego nawyku ciągłego uczenia się.
                                </p>
                                <ul>
                                    <li>zaczynałem tak samo jak Ty i wiem od czego zacząć a także w jakim kierunku najlepiej kontynuować naukę</li>
                                    <li>w programie grupowym masz stały kontakt z grupą i osobą prowadzącą</li>
                                    <li>moja wiedza opiera się o realne projekty</li>
                                    <li>każdy jest traktowany indywidualnie i progres sprawdzany jest na bieżąco</li>
                                </ul>
                            </ContentContainer>
                        </Col>
                        <Col colWidth="33%">
                            <ContentContainer>
                                <h3>
                                    Zapisz się, jeżeli:
                                </h3>
                                <ul>
                                    <li>chciałbyś się przebranżowić i zacząć pracę w branży IT</li>
                                    <li>chciałbyś nauczyć się tworzyć strony internetowe i stworzyć sobie możliwości dodatkowego zarobku lub wykonania własnej strony firmowej</li>
                                    <li>jesteś już na pewnym poziomie umiejętności front-endowych, ale nie wiesz co dalej, albo jestes back-endowcem i chciałbyś douczyć się front-endu</li>
                                    <li>chcesz uczestniczyć w indywidualnych lub grupowych zajęciach z programowania i tworzenia stron internetowych</li>
                                    <li>potrzebujesz mentora lub porady, w którym kierunku podążać</li>
                                    <li>jesteś samodzielny i zdyscyplinowany</li>
                                </ul>
                            </ContentContainer>
                        </Col>
                    </Row>
                    <Row justifyContent="center" alignItems="center">
                        <NewsletterModalButton>
                            Zapisz mnie &raquo;
                        </NewsletterModalButton>
                    </Row>
                </Container>
            </AutoHeightSection>
            <AutoHeightSection bg="white">
                <Container narrow>
                    <h2>
                        Dla kogo jest ten program?
                    </h2>
                </Container>
            </AutoHeightSection>
            <AutoHeightSection bg={theme.colorBeige}>
                <Container narrow>
                    <h2>
                        O mnie
                    </h2>
                </Container>
            </AutoHeightSection>
        </Layout>
    )
}
