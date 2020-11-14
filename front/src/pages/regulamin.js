import React from 'react'
import { Link } from 'gatsby'

import { theme } from '../constants'

import AutoHeightSection from '../components/AutoHeightSection/AutoHeightSection.jsx'
import Container from '../components/Container/Container.jsx'
import ContentContainer from '../components/ContentContainer/ContentContainer.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'
import Layout from '../components/Layout'

export default function Regulamin({ path }) {
  return (
    <Layout currentPath={path}>
      <Navbar />
      <AutoHeightSection bg={theme.colorBeige}>
        <Container narrow={true} py="9" flexDirection="column" alignItems="stretch" justifyContent="flex-start">
          <ContentContainer pyDesktop="2">
            <h1>Regulamin serwisu</h1>
            <h2>I. Pojęcia ogólne</h2>
            <ul>
              <li><strong>Regulamin</strong> – niniejszy regulamin</li>
              <li><strong>Serwis</strong> – serwis internetowych "korkizfrontendu.pl", działających pod adresem https://korkizfrontendu.pl</li>
              <li><strong>Usługodawca</strong> – firma "sors Michał Trykoszko" z adresem siedziby: ul. Bacieczki 219/12, 15-686 Białystok, 	NIP: 5423359610, 	</li>
              <li><strong>Usługobiorca</strong> – każda osoba fizyczna, uzyskująca dostęp do Serwisu i korzystająca z usług świadczonych za pośrednictwem Serwisu przez Usługodawcę.</li>
              <li><strong>Komunikacja Drogą Elektroniczną</strong> – Komunikacja pomiędzy stronami za pośrednictwem poczty elektronicznej (e-mail) oraz formularzy kontaktowych dostępnych na stronie www.</li>
            </ul>
            <h2>II. Postanowienia ogólne</h2>
            <ul>
              <li>Regulamin, określa zasady funkcjonowania i użytkowania Serwisu oraz określa zakres praw i obowiązków Usługobiorców i Usługodawcy związanych z użytkowaniem Serwisu.</li>
              <li>Przedmiotem usług Usługodawcy jest udostępnienie nieodpłatnych narzędzi w postaci Serwisu, umożliwiających Usługobiorcom dostęp do treści w postaci wpisów, artykułów i materiałów audiowizualnych lub aplikacji internetowych i formularzy elektronicznych</li>
              <li>Wszelkie ewentualne treści, artykuły i informacje zawierające cechy wskazówek lub porad publikowane na łamach Serwisu są jedynie ogólnym zbiorem informacji i nie są kierowane do poszczególnych Usługobiorców. Usługodawca nie ponosi odpowiedzialności za wykorzystanie ich przez Usługobiorców.</li>
              <li>Usługobiorca bierze na siebie pełną odpowiedzialno za sposób wykorzystania materiałów udostępnianych w ramach Serwisu w tym za wykorzystanie ich zgodnie z obowiązującymi przepisami prawa.</li>
              <li>Usługodawca nie udziela żadnej gwarancji co do przydatności materiałów umieszczonych w Serwisie.</li>
              <li>Usługodawca nie ponosi odpowiedzialności z tytułu ewentualnych szkód poniesionych przez Usługobiorców Serwisu lub osoby trzecie w związku z korzystaniem z Serwisu. Wszelkie ryzyko związane z korzystaniem z Serwisu, a w szczególności z używaniem i wykorzystywaniem informacji umieszczonych w Serwisie, ponosi Usługobiorca korzystający z usług Serwisu.</li>
            </ul>
            <h2>III. Warunki używania Serwisu</h2>
            <ul>
              <li>Używanie Serwisu przez każdego z Usługobiorców jest nieodpłatne i dobrowolne.</li>
              <li>Usługobiorcy mają obowiązek zapoznania się z Regulaminem oraz pozostałymi dokumentami stanowiącymi jego integralną część i muszą zaakceptować w całości jego postanowienia w celu dalszego korzystania z Serwisu.</li>
              <li>Usługobiorcy nie mogą wykorzystywać żadnych pozyskanych w Serwisie danych osobowych do celów marketingowych.</li>
              <li>
                Wymagania techniczne korzystania z Serwisu:
                <ul>
                  <li>urządzenie z wyświetlaczem umożliwiające wyświetlanie stron internetowych,</li>
                  <li>połączenie z internetem,</li>
                  <li>dowolna przeglądarka internetowa, która wyświetla strony internetowe zgodnie ze standardami i postanowieniami Konsorcjum W3C i obsługuje strony www udostępniane w języku HTML5,</li>
                  <li>włączoną obsługę skryptów JavaScript,</li>
                  <li>włączoną obsługę plików Cookie</li>
                </ul>
              </li>
              <li>W celu zapewnienia bezpieczeństwa Usługodawcy, Usługobiorcy oraz innych Usługobiorców korzystających z Serwisu, wszyscy Usługobiorcy korzystający z Serwisu powinni stosować się do ogólnie przyjętych <Link to="https://nety.pl/cyberbezpieczenstwo/zasady-ogolne-korzystania-z-sieci-internet/">zasad bezpieczeństwa w sieci</Link>,</li>
              <li>
                Zabrania się działań wykonywanych osobiście przez Usługobiorców lub przy użyciu oprorgamowania:
                <ul>
                  <li>bez zgody pisemnej, dekompilacji i analizy kodu źródłowego,</li>
                  <li>bez zgody pisemnej, powodujących nadmierne obciążenie serwera Serwisu,</li>
                  <li>bez zgody pisemnej, prób wykrycia luk w zabezpieczeniach Serwisu i konfiguracji serwera,</li>
                  <li>podejmowania prób wgrywania lub wszczykiwania na serwer i do bazy danych kodu, skryptów i oprogramowania mogących wyrządzić szkodę oprogramowaniu Serwisu, innym Usługobiorcom lub Usługodawcy,</li>
                  <li>podejmowania prób wgrywania lub wszczykiwania na serwer i do bazy danych kodu, skryptów i oprogramowania mogących śledzić lub wykradać dane Usługobiorców lub Usługodawcy,</li>
                  <li>podejmowania jakichkolwiek działań mających na celu uszkodzenie, zablokowanie działania Serwisu lub uniemożliwienie realizacji celu w jakim działa Serwis.</li>
                </ul>
              </li>
              <li>W przypadku wykrycia zaistnienia lub potencjalnej możliwości zaistnienia incydentu Cyberbezpieczeństwa lub naruszenia RODO, Usługobiorcy w pierwszej kolejności powinni zgłosić ten fakt Usługodawcy w celu szybkiego usunięcia problemu / zagrożenia i zabezpieczenia interesów wszystkich Usługobiorców Serwisu.</li>
            </ul>
            <h2>IV. Warunki oraz zasady rejestracji</h2>
            <ul>
              <li>Usługobiorcy mogą korzystać z Serwisu bez konieczności rejestracji.</li>
              <li>Usługobiorcy muszą być zarejestrowani i posiadać konto w Serwisie by korzystać z dodatkowych usług świadczonych w Serwisie, dostępnych jedynie dla Usługobiorców po zalogowaniu.</li>
              <li>Rejestracja w Serwisie jest dobrowolna.</li>
              <li>Rejestracja w Serwisie jest nieodpłatna.</li>
              <li>Każdy Usługobiorca może posiadać tylko jedno konto w Serwisie.</li>
              <li>
                Wymagania techniczne związane z rejestracją konta:
                <ul>
                  <li>posiadanie indywidualnego konta poczty elektronicznej e-mail,</li>
                </ul>
              </li>
              <li>Rejestrujący się w Serwisie Usługobiorcy wyrażają zgodę na przetwarzanie ich danych osobowych przez Usługobiorcę w zakresie w jakim zostały one wprowadzone do Serwisu podczas procesu rejestracji oraz ich późniejszych zmianom lub usunięciu.</li>
              <li>Usługodawca ma prawo zawieszać lub usuwać konta Usługobiorców według własnego uznania, uniemożliwiając lub ograniczając w ten sposób dostęp do poszczególnych lub wszystkich usług, treści, materiałów i zasobów Serwisu, w szczególności jeżeli Usługobiorca dopuści się łamania Regulaminu, powszechnie obowiązujących przepisów prawa, zasad współżycia społecznego lub działa na szkodę Usługodawcy lub innych Usługobiorców, uzasadnionego interesu Usługodawcy oraz podmiotów trzecich współpracujących lub nie z Usługodawcą.</li>
              <li>Wszelkie usługi Serwisu mogą być zmieniane co do ich treści i zakresu, dodawane lub odejmowane, a także czasowo zawieszane lub dostęp do nich może być ograniczany, według swobodnej decyzji Usługodawcy, bez możliwości wnoszenia sprzeciwu w tym zakresie przez Usługobiorców.</li>
              <li>
                Dodatkowe zasady bezpieczeństwa w zakresie korzystania z konta:
                <ul>
                  <li>Zabrania się Usługobiorcom zarejestrowanym w Serwisie do udostępniania loginu oraz hasła do swojego konta osobom trzecim.</li>
                  <li>Usługodawca nie ma prawa i nigdy nie będzie zażądać od Usługobiorcy hasła do wybranego konta.</li>
                </ul>
              </li>
              <li>
                Usuwanie konta:
                <ul>
                  <li>Każdy Usługobiorca posiadający konto w Serwisie ma możliwość samodzielnego usunięcia konta z Serwisu.</li>
                  <li>Usługobiorcy mogą to uczynić po zalogowaniu się w panelu w Serwisie.</li>
                  <li>Usunięcie konta skutkuje usunięciem wszelkich danych identyfikacyjnych Usługobiorcy oraz anonimizacją nazwy użytkownika i adresu e-mail.</li>
                </ul>
              </li>
            </ul>
            <h2>V. Warunki świadczenia usługi Newsletter</h2>
            <ul>
              <li>Usługobiorcy mogą korzystać z Serwisu bez konieczności zapisywania się do Newslettera.</li>
              <li>Zapisanie się usługi Newslettera jest dobrowolne.</li>
              <li>Zapisanie się do usługi Newslettera jest nieodpłatne.</li>
              <li>
                Wymagania techniczne związane z usługą Newsletter:
                <ul>
                  <li>posiadanie indywidualnego konta poczty elektronicznej e-mail,</li>
                </ul>
              </li>
              <li>
                Warunki świadczenia usługi Newsletter:
                <ul>
                  <li>podanie w formularzu elektronicznym indywidualnego konta poczty elektronicznej e-mail,</li>
                  <li>weryfikacja podanego konta pocztowego e-mail poprzez uruchomienie przesłanego na nie odnośnika,</li>
                  <li>wyrażenie zgody na otrzymywania powiadomień e-mail,</li>
                </ul>
              </li>
              <li>
                Zakres usługi Newsletter:
                <ul>
                  <li>powiadamianie o nowych aktualnościach, wpisach, konkursach, i innych akcjach promocyjnych związanych z usługami Serwisu,</li>
                  <li>powiadamianie o akcjach promocyjnych partnerów Serwisu (wiadomości Marketingowe),</li>
                </ul>
              </li>
              <li>
                Wypisanie się z usługi Newsletter:
                <ul>
                  <li>Każdy Usługobiorca zapisany do usługi Newsletter ma możliwość samodzielnego wypisania się z Usługi.</li>
                  <li>Usługobiorcy mogą to uczynić poprzez link umieszczony w każdej przesłanej wiadomości e-mail.</li>
                  <li>Wypisanie się z usługi Newsletter skutkuje usunięciem podanego adresu e-mail z bazy Usługodawcy.</li>
                </ul>
              </li>
            </ul>
            <h2>VI. Warunki komunikacji i świadczenia pozostałych usług w Serwisie</h2>
            <ul>
              <li>
                Serwis udostępnia usługi i narzędzia umożliwiające Usługobiorcom interakcję z Serwisem w postaci:
                <ul>
                  <li>Formularz kontaktowy</li>
                  <li>Komentowania wpisów i artykułów</li>
                </ul>
              </li>
              <li>
                Serwis udostępnia dane kontaktowe w postaci:
                <ul>
                  <li>Adresu e-mail</li>
                </ul>
              </li>
              <li>W przypadku kontaktu Usługobiorcy z Usługodawcą, dane osobowe Usługobiorców będa przetwarzane zgodnie z "<Link to="https://korkizfrontendu.pl/regulamin">Polityką Prywatności</Link>", stanowiącą integralną część Regulaminu.</li>
              <li>
                Warunki umieszczania treści przez Usługobiorców w Serwisie:
                <ul>
                  <li>Zabrania się umieszczania w Serwisie treści obraźliwych lub oszczerczych względem Usługodawcy, pozostałych Usługobiorców, osób trzecich oraz podmiotów trzecich,</li>
                  <li>Zabrania się umieszczania w Serwisie materiałów tekstowcyh, graficznych, audiowizualnych, skryptów, programów i innych utworów, na które Usługobiorca nie posiada się licencji, lub których autor praw majątkowych nie wyraził zgody na darmową publikację,</li>
                  <li>Zabrania się umieszczania w Serwisie treści wulgarnych, pornograficznych, erotycznych i niezgodnych z polskim i europejskim prawem a także odnośników do stron zawierających wskazane treści,</li>
                  <li>Zabrania się umieszczania w Serwisie skryptów i programów nadmiernie obciążających serwer, oprogramowania nielegalnego, oprogramowania służącego do naruszania zabezpieczeń oraz innych podobnych działań a także odnośników do stron zawierających wskazane materiały,</li>
                  <li>Zabrania się umieszczania w Serwisie treści merketingowych i reklamujących inne serwisy komercyjne, produkty, usługi czy komercyjne strony internetowe</li>
                </ul>
              </li>
            </ul>
            <h2>VII. Gromadzenie danych o Usługobiorcach</h2>
            <p>W celu prawidłowego świadczenia usług przez Serwis, zabezpieczenia prawnego interesu Usługodawcy oraz w celu zapewnienia zgodności działania Serwisu z obowiązującym prawem, Usługodawca za pośrednictwem Serwisu gromadzi i przetwarza niektóre dane o Użytkownikach.</p>
            <p>W celu prawidłowego świadczenia usług, Serwis wykorzystuje i zapisuje niektóre anonimowe informacje o Usługobiorcy w plikach cookies.</p>
            <p>Zakres, cele, sposób oraz zasady przetwarzania danych dostępne są w załącznikach do Regulaminu: „<Link to="https://korkizfrontendu.pl/regulamin">Obowiązek informacyjny RODO</Link>” oraz w „<Link to="https://korkizfrontendu.pl/regulamin">Polityce prywatności</Link>„, stanowiących integralną część Regulaminu.</p>
            <ul>
              <li>
                <em>Dane zbierane automatycznie:</em><br />Do sprawnego działania Serwisu oraz do statystyk zbieramy automatycznie niektóre dane o Usługobiorcy. Do danych tych należą:
                <ul>
                  <li>Adres IP</li>
                  <li>Typ przeglądarki</li>
                  <li>Rozdzielczość ekranu</li>
                  <li>Przybliżona lokalizacja</li>
                  <li>Otwierane podstrony serwisu</li>
                  <li>Czas spędzony na odpowiedniej podstronie serwisu</li>
                  <li>Rodzaj systemu operacyjnego</li>
                  <li>Adres poprzedniej podstrony</li>
                  <li>Adres strony odsyłającej</li>
                  <li>Język przeglądarki</li>
                  <li>Predkość łącza internetowego</li>
                  <li>Dostawca usług internetowych</li>
                  <li>
                    Anonimowe dane demograficzne na podstawie danych Google Analytics:
                    <ul>
                      <li>Płeć</li>
                      <li>Wiek</li>
                      <li>Zainteresowania</li>
                    </ul>
                  </li>
                </ul>
                <p>Powyższe dane uzyskiwane są poprzez skrypt Google Analytics i są anonimowe.</p>
              </li>
              <li>
                <em>Dane zbierane podczas rejestracji:</em><br />Nazwa użytkownika, imię i nazwisko, adres e-mail
                <p>W przypadku Usługobiorców zalogowanych (posiadających konto w Serwisie), w plikach cookies zapisywanych na urządzeniu Usługobiorcy może być umieszczony identyfikator Usługobiorcy powiązany z kontem Usługobiorcy</p>
              </li>
              <li><em>Dane zbierane podczas zapisywania do newslettera:</em><br />adres e-mail</li>
            </ul>
            <h2>VIII. Prawa autorskie</h2>
            <ul>
              <li>Właścicielem Serwisu oraz praw autorskich do serwisu jest Usługodawca.</li>
              <li>Część danych zamieszczonych w Serwisie są chronione prawami autorskimi należącymi do firm, instytucji i osób trzecich, niepowiązanych w jakikolwiek sposób z Usługodawcą, i są wykorzystywane na podstawie uzyskanych licencji, lub opartych na licencji darmowej.</li>
              <li>Na podstawie Ustawy z dnia 4 lutego 1994 o prawie autorskim zabrania się wykorzystywania, kopiowania, reprodukowania w jakiejkolwiek formie oraz przetrzymywania w systemach wyszukiwania z wyłączeniem wyszukiwarki Google, Bing, Yahoo, NetSprint, DuckDuckGo, Facebook oraz LinkedIn jakichkolwiek artykułów, opisów, zdjęć oraz wszelkich innych treści, materiałów graficznych, wideo lub audio znajdujących się w Serwisie bez pisemnej zgody lub zgody przekazanej za pomocą Komunikacji Drogą Elektroniczną ich prawnego właściciela.</li>
              <li>Zgodnie z Ustawą z dnia 4 lutego 1994 o prawie autorskim ochronie nie podlegają proste informacje prasowe, rozumiane jako same informacje, bez komentarza i oceny ich autora. Autor rozumie to jako możliwość wykorzystywania informacji z zamieszczonych w serwisie tekstów, ale już nie kopiowania całości lub części artykułów o ile nie zostało to oznaczone w poszczególnym materiale udostępnionym w Serwisie.</li>
            </ul>
            <h2>IX. Zmiany Regulaminu</h2>
            <ul>
              <li>Wszelkie postanowienia Regulaminu mogą być w każdej chwili jednostronnie zmieniane przez Usługodawcę, bez podawania przyczyn.</li>
              <li>Informacja o zmianie Regulaminu będzie rozsyłana Drogą Elektroniczną do Usługobiorców zarejestrowanych w Serwisie.</li>
              <li>W przypadku zmiany Regulaminu jego postanowienia wchodzą w życie natychmiast po jego publikacji dla Usługobiorców nieposiadających konta w Serwisie.</li>
              <li>W przypadku zmiany Regulaminu jego postanowienia wchodzą w życie z 7-dniowym okresem przejściowym dla Usługobiorców posiadających konta w Serwisie zarejestrowane przez zmianą Regulaminu.</li>
              <li>Traktuje się iż każdy Usługobiorca, kontynuujący korzystanie z Serwisu po zmianie Regulaminu akceptuje go w całości.</li>
            </ul>
            <h2>X. Postanowienia końcowe</h2>
            <ul>
              <li>Usługodawca nie odpowiada w żaden sposób, jak tylko pozwalają na to obowiązujące przepisy prawa, za treści przekazywane i publikowane w Serwisie przez Usługobiorców, za ich prawdziwość, rzetelność, autentyczność czy wady prawne.</li>
              <li>Usługodawca dokona wszelkich starań by usługi Serwisu były oferowane w sposób ciągły. Nie ponosi on jednak żadnej odpowiedzialności za zakłócenia spowodowane siłą wyższą lub niedozwoloną ingerencją Usługobiorców, osób trzecich czy działalnością zewnętrznych automatycznych programów.</li>
              <li>Usługodawca zastrzega sobie prawo do zmiany jakichkolwiek informacji umieszczonych w Serwisie w wybranym przez Usługodawcę terminie, bez konieczności uprzedniego powiadomienia Usługobiorców korzystających z usług Serwisu.</li>
              <li>Usługodawca zastrzega sobie prawo do czasowego, całkowitego lub częściowego wyłączenia Serwisu w celu jego ulepszenia, dodawania usług lub przeprowadzania konserwacji, bez wcześniejszego uprzedzania o tym Usługobiorców.</li>
              <li>Usługodawca zastrzega sobie prawo do wyłączenia Serwisu na stałe, bez wcześniejszego uprzedzania o tym Usługobiorców.</li>
              <li>Usługodawca zastrzega sobie prawo do dokonania cesji w części lub w całości wszelkich swoich praw i obowiązków związanych z Serwisem, bez zgody i możliwości wyrażania jakichkolwiek sprzeciwów przez Usługobiorców.</li>
              <li>Obowiązujące oraz poprzednie Regulaminy Serwisu znajduję się na tej podstronie pod aktualnym Regulaminem.</li>
              <li>
                We wszelkich sprawach związanych z działalnością Serwisu należy kontaktować się z Usługodawcę korzystając z jednej z poniższych form kontaktu:
                <ul>
                  <li>Używając formularza kontaktowego dostępnego w Serwisie</li>
                  <li>Wysyłając wiadomość na adres e-mail: trykoszkom@gmail.com</li>
                  <li>Poprzez połączenie telefoniczne z numerem: +48 537 224 218</li>
                </ul>
                Kontakt przy użyciu wskazanych środków komunikacji wyłącznie w sprawach związanych z prowadzonym Serwisem.
              </li>
            </ul>

            <hr />

            <h1>Polityka prywatności</h1>
            <h2><strong>1. Informacje ogólne</strong></h2>
            <ol>
              <li>Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url: <b>korkizfrontendu.pl</b></li>
              <li>Operatorem serwisu oraz Administratorem danych osobowych jest: sors Michał Trykoszko ul. Bacieczki 219/12, 15-686 Białystok</li>
              <li>Adres kontaktowy poczty elektronicznej operatora: trykoszkom@gmail.com</li>
              <li>Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w Serwisie.</li>
              <li>Serwis wykorzystuje dane osobowe w następujących celach:</li>
              <ul>
                <li>Prowadzenie newslettera</li>
                <li>Obsługa zapytań przez formularz</li>
                <li>Realizacja zamówionych usług</li>
                <li>Prezentacja oferty lub informacji</li>
              </ul>
              <li>Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób:
                  <ol>
                  <li>Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają wprowadzone do systemów Operatora.</li>
                  <li>Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw. „ciasteczka”).</li>
                </ol>
              </li>
            </ol>
            <h2><strong>2. Wybrane metody ochrony danych stosowane przez Operatora</strong></h2>
            <ol>
              <li>Miejsca logowania i wprowadzania danych osobowych są chronione w warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe i dane logowania, wprowadzone na stronie, zostają zaszyfrowane w komputerze użytkownika i mogą być odczytane jedynie na docelowym serwerze.</li>
              <li>Hasła użytkowników są przechowywane w postaci hashowanej. Funkcja hashująca działa jednokierunkowo - nie jest możliwe odwrócenie jej działania, co stanowi obecnie współczesny standard w zakresie przechowywania haseł użytkowników.</li>
              <li>Operator okresowo zmienia swoje hasła administracyjne.</li>
              <li>W celu ochrony danych Operator regularnie wykonuje kopie bezpieczeństwa.</li>
              <li>Istotnym elementem ochrony danych jest regularna aktualizacja wszelkiego oprogramowania, wykorzystywanego przez Operatora do przetwarzania danych osobowych, co w szczególności oznacza regularne aktualizacje komponentów programistycznych.</li>
            </ol>
            <h2><strong>3. Hosting</strong></h2>
            <ol>
              <li>Serwis jest hostowany (technicznie utrzymywany) na serwera operatora: smarthost.pl</li>
            </ol>
            <h2><strong>4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych</strong></h2>
            <ol><li>W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane osobowe innym odbiorcom, jeśli będzie to niezbędne do wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na Administratorze. Dotyczy to takich grup odbiorców:<ul><li>firma hostingowa na zasadzie powierzenia</li><li>operatorzy płatności</li><li>firmy, świadczące usługi marketingu na rzecz Administratora</li></ul></li>
              <li>Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż jest to konieczne do wykonania związanych z nimi czynności określonych osobnymi przepisami (np. o prowadzeniu rachunkowości). W odniesieniu do danych marketingowych dane nie będą przetwarzane dłużej niż przez 3 lata.</li>
              <li>Przysługuje Ci prawo żądania od Administratora:
              <ul>
                  <li>dostępu do danych osobowych Ciebie dotyczących,</li>
                  <li>ich sprostowania,</li>
                  <li>usunięcia,</li>
                  <li>ograniczenia przetwarzania,</li>
                  <li>oraz przenoszenia danych.</li>
                </ul>
              </li>
              <li>Przysługuje Ci prawo do złożenia sprzeciwu w zakresie przetwarzania wskazanego w pkt 3.3 c) wobec przetwarzania danych osobowych w celu wykonania prawnie uzasadnionych interesów realizowanych przez Administratora, w tym profilowania, przy czym prawo sprzeciwu nie będzie mogło być wykonane w przypadku istnienia ważnych prawnie uzasadnionych podstaw do przetwarzania, nadrzędnych wobec Ciebie interesów, praw i wolności, w szczególności ustalenia, dochodzenia lub obrony roszczeń.</li>
              <li>Na działania Administratora przysługuje skarga do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.</li>
              <li>Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi Serwisu.</li>
              <li>W stosunku do Ciebie mogą być podejmowane czynności polegające na zautomatyzowanym podejmowaniu decyzji, w tym profilowaniu w celu świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia przez Administratora marketingu bezpośredniego.</li>
              <li>Dane osobowe nie są przekazywane od krajów trzecich w rozumieniu przepisów o ochronie danych osobowych. Oznacza to, że nie przesyłamy ich poza teren Unii Europejskiej.</li></ol>
            <h2><strong>5. Informacje w formularzach</strong></h2>
            <ol>
              <li>Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile zostaną one podane.</li>
              <li>Serwis może zapisać informacje o parametrach połączenia (oznaczenie czasu, adres IP).</li>
              <li>Serwis, w niektórych wypadkach, może zapisać informację ułatwiającą powiązanie danych w formularzu z adresem e-mail użytkownika wypełniającego formularz. W takim wypadku adres e-mail użytkownika pojawia się wewnątrz adresu url strony zawierającej formularz.</li>
              <li>Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza, np. w celu dokonania procesu obsługi zgłoszenia serwisowego lub kontaktu handlowego, rejestracji usług itp. Każdorazowo kontekst i opis formularza w czytelny sposób informuje, do czego on służy.</li>
            </ol>

            <h2><strong>6. Logi Administratora</strong></h2>
            <ol>
              <li>Informacje zachowaniu użytkowników w serwisie mogą podlegać logowaniu. Dane te są wykorzystywane w celu administrowania serwisem.</li>
            </ol><h2><strong>7. Istotne techniki marketingowe</strong></h2><ol><li>Operator stosuje analizę statystyczną ruchu na stronie, poprzez Google Analytics (Google Inc. z siedzibą w USA). Operator nie przekazuje do operatora tej usługi danych osobowych, a jedynie zanonimizowane informacje. Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika. W zakresie informacji o preferencjach użytkownika gromadzonych przez sieć reklamową Google użytkownik może przeglądać i edytować informacje wynikające z plików cookies przy pomocy narzędzia: https://www.google.com/ads/preferences/</li></ol>

            <h2><strong>8. Informacja o plikach cookies</strong></h2>
            <ol>
              <li>Serwis korzysta z plików cookies.</li>
              <li>Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.</li>
              <li>Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz uzyskującym do nich dostęp jest operator Serwisu.</li>
              <li>Pliki cookies wykorzystywane są w następujących celach:
              <ol>
                  <li>utrzymanie sesji użytkownika Serwisu (po zalogowaniu), dzięki której użytkownik nie musi na każdej podstronie Serwisu ponownie wpisywać loginu i hasła;</li>
                  <li>realizacji celów określonych powyżej w części "Istotne techniki marketingowe";</li>
                </ol>
              </li>
              <li>W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: „sesyjne” (session cookies) oraz „stałe” (persistent cookies). Cookies „sesyjne” są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej). „Stałe” pliki cookies przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez Użytkownika.</li>
              <li>Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą dokonać zmiany ustawień w tym zakresie.&nbsp;Przeglądarka internetowa umożliwia usunięcie plików cookies. Możliwe jest także automatyczne blokowanie plików cookies Szczegółowe informacje na ten temat zawiera pomoc lub dokumentacja przeglądarki internetowej.</li>
              <li>Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych Serwisu.</li>
              <li>Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu wykorzystywane mogą być również przez współpracujące z operatorem Serwisu podmioty, w szczególności dotyczy to firm: Google (Google Inc. z siedzibą w USA), Facebook (Facebook Inc. z siedzibą w USA), Twitter (Twitter Inc. z siedzibą w USA).</li>
            </ol>
            <h2><strong>9. Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?</strong></h2>
            <ol>
              <li>Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa, utrzymania preferencji użytkownika może utrudnić,&nbsp;a w skrajnych przypadkach może uniemożliwić korzystanie ze stron www</li>
              <li>W celu zarządzania ustawienia cookies wybierz z listy poniżej przeglądarkę internetową, której używasz i postępuj zgodnie z instrukcjami:
              <ul>
                  <li><Link to="https://support.microsoft.com/pl-pl/help/10607/microsoft-edge-view-delete-browser-history">Edge</Link></li>
                  <li><Link to="https://support.microsoft.com/pl-pl/help/278835/how-to-delete-cookie-files-in-internet-explorer">Internet Explorer</Link></li>
                  <li><Link to="http://support.google.com/chrome/bin/answer.py?hl=pl&amp;answer=95647">Chrome</Link></li>
                  <li><Link to="http://support.apple.com/kb/PH5042">Safari</Link></li>
                  <li><Link to="http://support.mozilla.org/pl/kb/W%C5%82%C4%85czanie%20i%20wy%C5%82%C4%85czanie%20obs%C5%82ugi%20ciasteczek">Firefox</Link></li>
                  <li><Link to="http://help.opera.com/Windows/12.10/pl/cookies.html">Opera</Link></li>
                </ul>
                <p>Urządzenia mobilne:</p>
                <ul>
                  <li><Link to="http://support.google.com/chrome/bin/answer.py?hl=pl&amp;answer=95647">Android</Link></li>
                  <li><Link to="http://support.apple.com/kb/HT1677?viewlocale=pl_PL">Safari (iOS)</Link></li>
                  <li><Link to="http://www.windowsphone.com/pl-pl/how-to/wp7/web/changing-privacy-and-other-browser-settings">Windows Phone</Link></li>
                </ul>
              </li>
            </ol>

            <hr />

            <h1>Obowiązek informacyjny RODO</h1>
            <p>Poniższa informacja stanowi zwięzły, zrozumiały i przejrzysty skrót informacji zamieszczonych w <Link to="https://korkizfrontendu.pl/regulamin">Polityce Prywatności</Link> odnośnie Administratora danych, celu i sposobu przetwarzania danych osobowych oraz Twoich praw w związku z tym przetwarzaniem, w formie wymaganej do spełnienia obowiązku informacyjnego RODO. Szczegóły dotyczące sposobu przetwarzania i podmiotów uczestniczących w tym procesie dostępne są we wskazanej polityce.</p>
            <h2>Kto jest administratorem danych?</h2>
            <p>Administratorem Danych Osobowych (dalej Administrator) jest firma "sors Michał Trykoszko", prowadząca działalność pod adresem: ul. Bacieczki 219/12, 15-686 Białystok, o nadanym numerze identyfikacji podatkowej (NIP): 5423359610, świadcząca usługi drogą elektroniczną za pośrednictwem Serwisu</p>
            <h2>Jak można skontaktować się z administratorem danych?</h2>
            <p>Z Administratorem można skontaktować się w jeden z poniższych sposobów</p>
            <ul>
              <li>
                <p><strong>Adres pocztowy</strong> - sors Michał Trykoszko, ul. Bacieczki 219/12, 15-686 Białystok</p>
              </li>
              <li>
                <p><strong>Adres poczty elektronicznej</strong> - trykoszkom@gmail.com</p>
              </li>
              <li>
                <p><strong>Połączenie telefoniczne</strong> - +48 537 224 218</p>
              </li>
            </ul>
            <h2>Czy Administrator powołał Inspektora Danych Osobowych?</h2>
            <p>Na podstawie Art. 37 RODO, Administrator nie powołał Inspektora Ochrony Danych.</p>
            <p>W sprawach dotyczących przetwarzania danych, w tym danych osobowych, należy kontaktować się bezpośrednio z Administratorem.</p>
            <h2>Skąd pozyskujemy dane osobowe i jakie są ich źródła?</h2>
            <p>Dane pozyskiwane są z następujących źródeł:</p>
            <ul>
              <li>od osób, których dane dotyczą</li>
              <li>w przypadku rejestracji przy użyciu portali społecznościowych, za wyrażoną świadomą zgodą tych osób, z tych portali społecznościowych</li>
            </ul>
            <h2>Jaki jest zakres przetwarzanych przez nas danych osobowych?</h2>
            <p>W serwisie przetwarzane są <strong>dane osobowe zwykłe</strong>, podane dobrowolnie przez osoby, których dotyczą<br /><small>(Np. imię i nazwisko, login, adres e-mail, telefon, adres IP, itp.)</small></p>
            <p>Szczegółowy zakres przetwarzanych danych dostępny jest w <Link to="https://korkizfrontendu.pl/regulamin">Polityce Prywatności</Link>.</p>
            <h2>Jakie są cele przetwarzania przez nas danych?</h2>
            <p>Dane osobowe dobrowolnie podane przez Użytkowników są przetwarzane w jednym z następujących celów:</p>
            <ul>
              <li>
                Realizacji usług elektronicznych:
                  <ul>
                  <li>Usługi rejestracji i utrzymania konta Użytkownika w Serwisie i funkcjonalności z nim związanych</li>
                  <li>Usługi Newslettera (w tym przesyłania za zgodą treści reklamowych)</li>
                </ul>
              </li>
              <li>Komunikacji Administratora z Użytkownikami w sprawach związanych z Serwisem oraz ochrony danych</li>
              <li>Zapewnienia prawnie uzasadnionego interesu Administratora</li>
            </ul>
            <h2>Jakie są podstawy prawne przetwarzania danych?</h2>
            <p>Serwis gromadzi i przetwarza dane Użytkowników na podstawie:</p>
            <ul>
              <li>
                Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych)
                  <ul>
                  <li>art. 6 ust. 1 lit. a<br /><small>osoba, której dane dotyczą wyraziła zgodę na przetwarzanie swoich danych osobowych w jednym lub większej liczbie określonych celów</small></li>
                  <li>art. 6 ust. 1 lit. b<br /><small>przetwarzanie jest niezbędne do wykonania umowy, której stroną jest osoba, której dane dotyczą, lub do podjęcia działań na żądanie osoby, której dane dotyczą, przed zawarciem umowy</small></li>
                  <li>art. 6 ust. 1 lit. f<br /><small>przetwarzanie jest niezbędne do celów wynikających z prawnie uzasadnionych interesów realizowanych przez administratora lub przez stronę trzecią</small></li>
                </ul>
              </li>
              <li>Ustawa z dnia 10 maja 2018 r. o ochronie danych osobowych (Dz.U. 2018 poz. 1000)</li>
              <li>Ustawa z dnia 16 lipca 2004 r. Prawo telekomunikacyjne (Dz.U. 2004 nr 171 poz. 1800)</li>
              <li>Ustawa z dnia 4 lutego 1994 r. o prawie autorskim i prawach pokrewnych (Dz. U. 1994 Nr 24 poz. 83)</li>
            </ul>
            <h2>Jaki jest prawnie uzasadniony interes realizowany przez Administratora?</h2>
            <ul>
              <li>W celu ewentualnego ustalenia, dochodzenia lub obrony przed roszczeniami – podstawą prawną przetwarzania jest nasz uzasadniony interes (art. 6 ust. 1 lit. f) RODO) polegający na ochronie naszych praw, w tym między innymi;</li>
              <li>W celu oceny ryzyka potencjalnych klientów</li>
              <li>W celu oceny planowanych kampanii marketingowych</li>
              <li>W celu realizacji marketingu bezpośredniego</li>
            </ul>
            <h2>Przez jaki okres przetwarzamy dane osobowe?</h2>
            <p>Co do zasady, wskazane dane osobowe są przechowywane wyłącznie przez okres świadczenia usługi w ramach prowadzonego serwisu przez Administratora. Są one usuwane lub anonimizowane w okresie do <strong>30 dni od chwili zakończenia świadczenia usług</strong> (np. usunięcie zarejestrowanego konta użytkownika, wypisanie z listy Newsletter, itp.)</p>
            <p>W wyjątkowych sytuacjach, w celu zabezpieczenie prawnie uzasadnionego interesu realizowanego przez Administratora, okres ten może ulec wydłużeniu. W takiej sytuacji Administrator będzie przechowywał wskazane dane, od czasu żądania ich usunięcia przez Użytkownika, nie dłużej niż przez okres 3 lat w przypadku naruszenia lub podejrzenia naruszenia zapisów regulaminu serwisu przez osobę, której dane dotyczą.</p>
            <h2>Kto jest odbiorcą danych w tym danych osobowych?</h2>
            <p>Co do zasady jedynym odbiorcą danych jest Administrator.</p>
            <p>Przetwarzanie danych może jednak być powierzone innym podmiotom, realizującym usługi na rzecz Administratora w celu utrzymania działalności Serwisu.</p>
              Do podmiotów takich można zaliczyć między innymi:
              <ul>
              <li>Firmy hostingowe, świadczące usługi hostingu lub usług pokrewnych dla Administratora</li>
              <li>Firmy, za pośrednictwem których świadczona jest usługa Newslettera</li>
              <li>Firmy pośredniczące w płatnościach on-line za towaru lub usługi oferowane w ramach Serwisu (w przypadku dokonywania transakcji zakupu w Serwisie)</li>
            </ul>
            <h2>Czy Państwa dane osobowe będą przekazywane poza Unię Europejską?</h2>
            <p>Dane osobowe <strong>nie będą przekazywane poza Unię Europejską</strong>, chyba że zostały opublikowane na skutek indywidualnego działania Użytkownika (np. wprowadzenie komentarza lub wpisu), co sprawi, że dane będą dostępne dla każdej osoby odwiedzającej serwis.</p>
            <h2>Czy dane osobowe będą podstawą zautomatyzowanego podejmowania decyzji?</h2>
            <p>Dane osobowe <strong>nie będą wykorzystywane</strong> do zautomatyzowanego podejmowania decyzji (profilowania).</p>
            <h2>Jakie mają Państwo prawa związane z przetwarzaniem danych osobowych?</h2>
            <ul>
              <li>
                <p><strong>Prawo dostępu do danych osobowych</strong><br />		Użytkownikom przysługuje prawo uzyskania dostępu do swoich danych osobowych, realizowane na żądanie złożone do Administratora	</p>
              </li>
              <li>
                <p><strong>Prawo do sprostowania danych osobowych</strong><br />		Użytkownikom przysługuje prawo żądania od Administratora niezwłocznego sprostowania danych osobowych, które są nieprawidłowe lub / oraz uzupełnienia niekompletnych danych osobowych, realizowane na żądanie złożone do Administratora	</p>
              </li>
              <li>
                <p><strong>Prawo do usunięcia danych osobowych</strong><br />		Użytkownikom przysługuje prawo żądania od Administratora niezwłocznego usunięcia danych osobowych, realizowane na żądanie złożone do Administratora. 		<br /><br />W przypadku kont użytkowników, usunięcie danych polega na anonimizacji danych umożliwiających identyfikację Użytkownika.<br />		<br />W przypadku usługi Newsletter, Użytkownik ma możliwość samodzielnego usunięcia swoich danych osobowych korzystając z odnośnika umieszczonego w każdej przesyłanej wiadomości e-mail.	</p>
              </li>
              <li>
                <p><strong>Prawo do ograniczenia przetwarzania danych osobowych</strong><br />		Użytkownikom przysługuje prawo ograniczenia przetwarzania danych osobowych w przypadkach wskazanych w art. 18 RODO, m.in. kwestionowania prawidłowość danych osobowych, realizowane na żądanie złożone do Administratora	</p>
              </li>
              <li>
                <p><strong>Prawo do przenoszenia danych osobowych</strong><br />		Użytkownikom przysługuje prawo uzyskania od Administratora, danych osobowych dotyczących Użytkownika w ustrukturyzowanym, powszechnie używanym formacie nadającym się do odczytu maszynowego, realizowane na żądanie złożone do Administratora	</p>
              </li>
              <li>
                <p><strong>Prawo wniesienia sprzeciwu wobec przetwarzania danych osobowych</strong><br />		Użytkownikom przysługuje prawo wniesienia sprzeciwu wobec przetwarzania jego danych osobowych w przypadkach określonych w art. 21 RODO, realizowane na żądanie złożone do Administratora	</p>
              </li>
              <li>
                <p><strong>Prawo wniesienia skargi</strong><br />		Użytkownikom przysługuje prawo wniesienia skargi do organu nadzorczego zajmującego się ochroną danych osobowych.	</p>
              </li>
            </ul>
          </ContentContainer>
        </Container>
      </AutoHeightSection>
    </Layout>
  )
}
