import React, { useEffect, useState } from "react"
import Typography from 'typography'

import {
  typographyTheme,
  theme
} from '../constants'

import HelmetWrapper from '../components/HelmetWrapper'
import GlobalStyle from '../components/GlobalStyle'
import AutoHeightSection from '../components/AutoHeightSection'
import OneThirdSection from '../components/OneThirdSection'
import Container from '../components/Container'
import ContentContainer from '../components/ContentContainer'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const typography = new Typography(typographyTheme)
typography.injectStyles()

export default function Regulamin({ path }) {
  const [scrolled, setScrolled] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(window.scrollY)
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollTop])

  return (
    <>
      <GlobalStyle />
      <HelmetWrapper title="Korki z Front-endu | Regulamin" />
      <Navbar currentPath={path} windowScrolled={scrolled} />
      <AutoHeightSection bg={theme.colorBeige}>
        <Container narrow={true} py="10" flexDirection="column" alignItems="stretch" justifyContent="flex-start">
          <ContentContainer>
            <h1>Regulamin</h1>
            <br />
            <h2>Twoje dane</h2>
            <p>
              Administratorem danych osobowych przetwarzanych w celach związanych z obsługą wysyłki newslettera jest: <strong>sors Michał Trykoszko</strong> z siedzibą w Białymstoku, ul. Bacieczki 219/12, 15-686 Białystok, NIP/VAT-EU: 5423359610 (dalej: "Administrator").  Administrator informuje, że:
            </p>
            <ol>
              <li>
                Twoje dane osobowe przetwarzane będą w celach związanych z obsługą wysyłki newslettera, a także w celach handlowych i marketingowych;
              </li>
              <li>
                Podane dane będą przetwarzane na podstawie art. 6 ust. 1 lit. a) Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych osobowych) („Rozporządzenie”);
              </li>
              <li>
                Dane osobowe będą przechowywane przez okres subskrypcji newslettera, a także okres realizacji polityki marketingowej Administratora;
              </li>
              <li>
                Przysługuje Ci prawo żądania od Administratora dostępu do danych osobowych dotyczących Twojej osoby, ich sprostowania, usunięcia lub ograniczenia przetwarzania;
              </li>
              <li>
                Przysługuje Ci prawo do cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem;
              </li>
              <li>
                Przysługuje Ci prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych gdy uznasz, że przetwarzanie Twoich danych osobowych narusza przepisy Rozporządzenia;
              </li>
              <li>
                Dane osobowe pochodzą od Ciebie, czyli osoby, których dane te dotyczą;
              </li>
              <li>
                Podanie danych jest dobrowolne, lecz niezbędne do otrzymywania newslettera, brak podania danych osobowych uniemożliwia otrzymywanie newslettera;
              </li>
              <li>
                Twoje dane będą przetwarzane w celu marketingowym oraz w celu dokonywania pomiarów, które pozwolą Administratorowi na udoskonalenie świadczonych przez niego usług;
              </li>
              <li>
                <strong>Twoje dane nie będą udostępniane osobom trzecim ani innym firmom.</strong>
              </li>
            </ol>
            <h2>Dane firmy</h2>
            <p>
              <strong>sors Michał Trykoszko</strong><br />
              ul. Bacieczki 219/12<br />
              15-686 Białystok<br />
              <strong>NIP/VAT-EU: PL5423359610</strong>
            </p>
          </ContentContainer>
        </Container>
      </AutoHeightSection>
      <OneThirdSection bg="white">
        <Footer currentPath={path} />
      </OneThirdSection>
    </>
  )
}