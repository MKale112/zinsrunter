import { FullWidthContainer, ResponsiveContainer } from '@/components/Containers';
import {
  Box,
  Button,
  Heading,
  Link,
  ListItem,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
interface Props {
  isPopup?: boolean;
}

const Datenschutz = ({ isPopup = false }: Props) => {
  return (
    <FullWidthContainer>
      {!isPopup && <Box h={10} bgColor='primary.blue' />}
      <ResponsiveContainer py={!isPopup ? [4, 12] : 0} px={!isPopup ? [4, 8, 16, 20] : 0} bgColor='white'>
        <VStack alignItems='flex-start' spacing={[4, 6]}>
          <VStack alignItems='flex-start'>
            {!isPopup && (
              <Heading as='h1' fontSize={['md', 'lg', 'lg', '2xl']}>
                Datenschutz
              </Heading>
            )}
            <Text>
              Der Schutz Ihrer uns mitgeteilten persönlichen Informationen ist uns außerordentlich wichtig. Rund um
              unsere Aktivitäten zur Erfüllung der Anforderungen der Datenschutz-Grundverordnung (DS-GVO), des
              Bundesdatenschutzgesetzes (BDSG), des Telemediengesetzes (TMG) und des Sozialgesetzbuchs X (SGB X) haben
              wir bei unserer Arbeit stets Respekt vor Ihrer Privat- und Persönlichkeitssphäre.
            </Text>
            <Text>
              Nach dem Informations- und Kommunikationsdienstegesetz dürfen personenbezogene Daten nur mit Einwilligung
              der betreffenden Person gespeichert und weiterverarbeitet werden.
              <br />
              Durch bestätigen der Eingaben mit ”Abschicken” bzw.“Anfordern“ erklären Sie sich damit einverstanden.
              <br />
              Diese Erklärung können Sie gemäß §3 Abs. 6 des Teledienstedatenschutz-Gesetzes (TDDSG) jederzeit
              widerrufen. Senden Sie dazu eine E-Mail an service@zins-runter.de
            </Text>
            <Text as='b'>
              Die Berechnung der Finanzierung, des Vergleichs, einer Analyse oder eines Angebotes ist für Sie in jedem
              Fall kostenlos und unverbindlich.
            </Text>
            <Text>
              Die von Ihnen uns freiwillig übermittelten Daten für den jeweiligen Finanzierungs/- Versicherungs/-
              Finanzvergleich werden von uns ggf. an unsere kompetenten, externen unabhängigen Finanzexperten (i.d.R.
              Finanzierungsvermittler, Finanzdienstleister bzw. Versicherungsmakler) übergeben. Diese nehmen Kontakt zu
              Ihnen auf um die für Sie richtige Finanzierung oder Versicherung zu finden. Alle unsere Partner verfügen
              über ein umfassendes Know-How die entsprechenden gewerberechtlichen Zulassungen und mehrjährige
              Berufserfahrung.
            </Text>
          </VStack>

          <VStack alignItems='flex-start'>
            <Heading as='h2' pt={8} fontSize={['md', 'lg', 'lg', 'xl']}>
              1. Verantwortliche Stelle für die Datenverarbeitungen
            </Heading>
            <Text>
              Verantwortliche Stelle ist Zins-runter.de
              <br />
              <br />
              SIGURON GmbH
              <br />
              Fürstenrieder Str. 279a
              <br />
              81377 München
              <br />
              <br />
              Tel.: 0800 36 40000
              <br />
              Fax: 089 - 23 54 61 97
              <br />
              E-Mail: service@zins-runter.de
              <br />
            </Text>
          </VStack>

          <VStack alignItems='flex-start'>
            <Heading as='h2' pt={8} fontSize={['md', 'lg', 'lg', 'xl']}>
              2. Was personenbezogene Daten sind und woher wir sie erhalten
            </Heading>
            <Text>
              &apos;Personenbezogene Daten&apos; sind alle Informationen, die sich auf eine identifizierte oder
              identifizierbare natürliche Person (im Folgenden &apos;betroffene Person&apos;) beziehen; als
              identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels
              Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung
              oder zu einem oder mehreren besonderen Merkmalen identifiziert werden kann, die Ausdruck der physischen,
              physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser
              natürlichen Person sind.
            </Text>

            <Heading as='h3' pt={4} fontSize={['md', 'lg', 'lg']}>
              a) Daten, die beim Besuch der Internetseite anfallen
            </Heading>
            <Text>
              Sie können unsere Internetseiten grundsätzlich ohne die Angabe personenbezogener Daten einsehen. Wir
              speichern hierbei standardmäßig ausschließlich die Website, von der aus Sie zu unserem Angebot gelangt
              sind, den Namen Ihres Internet-Service-Providers, welche Websites Sie innerhalb unseres Internet-Angebots
              besucht haben sowie Datum und Dauer Ihres Besuches. Hierfür werden für die Dauer Ihres Besuches im
              Arbeitsspeicher Ihres Computers kleine Dateien (so genannte Cookies) abgelegt. Es handelt sich dabei um so
              genannte temporäre Session-Cookies (zu permanenten Cookies siehe unten unter Ziffer 10). Die
              entsprechenden Daten werden dabei auf Servern unseres Dienstleisters Host Europe GmbH Hansestrasse 111 -
              51149 Köln gespeichert. Die Session-Cookies werden automatisch gelöscht, sobald Sie Ihr Browser-Fenster
              schließen. Wir erstellen mithilfe der Session-Cookies eine so genannte Session-ID für interne statistische
              Zwecke. Die gewonnenen Daten sind vollständig anonymisiert, enthalten also keinerlei Möglichkeit Sie als
              Person zu identifizieren.
              <br />
              <br />
              Ihre IP-Adresse sowie ein Time-Stamp werden aus Sicherheitsgründen gespeichert und lediglich für interne
              Zwecke genutzt. Die IP-Adresse ist dabei eine maschinenbezogene Kennung, die eine Aussage über den
              verwendeten Rechner für den Internet-Zugang oder benutzten Internet-Gateway macht, und zwar zum Zeitpunkt
              der Online-Abfrage. Der Begriff Time-Stamp bezeichnet einen Wert in einem definierten Format, der einem
              Ereignis (beispielsweise dem Senden oder Empfangen einer Nachricht, der Modifikation von Daten u. a.)
              einen Zeitpunkt zuordnet. Der Zweck eines Zeitstempels ist es, für Menschen oder Computer deutlich zu
              machen, wann welche Ereignisse eingetreten sind.
            </Text>

            <Heading as='h3' pt={4} fontSize={['md', 'lg', 'lg']}>
              b) Personenbezogene Daten, die Sie uns über ein Formular mitteilen
            </Heading>
            <Text>
              Wir erhalten Ihre personenbezogenen Daten, wenn Sie diese Daten in die Formulare (Vergleiche, Anfragen,
              Beratungen etc.) auf unserer Seite eingeben und uns so zur Verfügung stellen. Welche Daten dies genau sind
              hängt davon ab, für welche Dienstleistung/Finanzierung/Versicherung Sie sich genau interessieren.
              <br />
              <br />
              Für Angebote, Vergleiche oder Beratungen in den Bereichen Baufinanzierung, Bausparen, private
              Krankenversicherung, Krankenzusatzversicherung, Berufsunfähigkeitsversicherung, Altersvorsorge (auch
              Riester, Rürup, Lebens- und Rentenversicherung, bAV, Sofort Rente), gewerbliche Sachversicherung,
              Pflegeversicherung, Sterbegeldversicherung, Risikolebensversicherung, Kapitalanlage, Dread Disease, Fonds,
              Investments erheben wir folgende Daten:
            </Text>
            <UnorderedList listStylePosition='inside'>
              <ListItem>Ihr Geschlecht</ListItem>
              <ListItem>Ihren vollständigen und richtigen Namen</ListItem>
              <ListItem>Ihre E-Mail-Adresse</ListItem>
              <ListItem>Ihre vollständige und richtige postalische Anschrift</ListItem>
              <ListItem>Ihre Telefonnummer</ListItem>
              <ListItem>Ihr Geburtsdatum</ListItem>
              <ListItem>Ihren Beruf bzw. den Berufsstand</ListItem>
              <ListItem>Ihre Firma, Betriebsgröße, Branche (nur bei gewerblicher Sachversicherung)</ListItem>
              <ListItem>Gegebenenfalls weitere produktbezogene Daten</ListItem>
            </UnorderedList>
            <Text>
              Bei Abschluss einer Versicherung in den Bereichen Privathaftpflicht, Tierhalterhaftpflicht, Hausrat,
              Rechtsschutz, Unfallversicherung, Gebäudeversicherung, Bauherrenhaftpflicht, Grundbesitzerhaftpflicht,
              Photovoltaik-Versicherung, KFZ-Versicherung, Reiseversicherung, Au Pair Versicherung,
              Motorradversicherung, LKW-Versicherung, Anhängerversicherung, Mopedversicherung, Bootsversicherung,
              Wohnwagen- und Wohnmobilversicherung, erheben wir folgende Daten:
            </Text>
            <UnorderedList listStylePosition='inside'>
              <ListItem> Ihr Geschlecht </ListItem>
              <ListItem> Ihren vollständigen und richtigen Namen </ListItem>
              <ListItem> Ihre E-Mail-Adresse </ListItem>
              <ListItem> Ihre vollständige und richtige postalische Anschrift </ListItem>
              <ListItem> Ihre Telefonnummer </ListItem>
              <ListItem> Ihr Geburtsdatum </ListItem>
              <ListItem> Ihren Beruf </ListItem>
              <ListItem> Ihre Staatsangehörigkeit </ListItem>
              <ListItem> Ihren Familienstand </ListItem>
              <ListItem> Ihre Kontoverbindungsdaten </ListItem>
              <ListItem> Informationen zu etwaigen Vorverträgen und deren Beendigung </ListItem>
              <ListItem> Name und Geburtsdatum von Lebenspartnern (nicht bei allen Versicherungen) </ListItem>
              <ListItem> Gegebenenfalls weitere produktbezogene Daten </ListItem>
            </UnorderedList>
          </VStack>

          <VStack alignItems='flex-start'>
            <Heading as='h2' pt={8} fontSize={['md', 'lg', 'lg', 'xl']}>
              3. Zu welchen Zwecken wir Ihre personenbezogenen Daten verwenden
            </Heading>
            <Text>
              Personenbezogene Daten dürfen von uns nur mit Ihrer oder einer gesetzlichen Erlaubnis aus der DS-GVO, dem
              BDSG oder einem anderen den Datenschutz regelnden Gesetzen verarbeitet werden.
            </Text>

            <Heading as='h3' pt={4} fontSize={['md', 'lg', 'lg']}>
              a) Verarbeitung zur Erfüllung von vertraglichen Pflichten (Art. 6 Abs. 1 b) DS-GVO)
            </Heading>
            <Text>
              Die Erhebung Ihrer personenbezogenen Daten dient uns in erster Linie dazu, die Dienst- und
              Beratungsleistungen, die Sie wünschen, anzubieten bzw. durch unsere Kooperationspartner anbieten zu
              lassen. Hierzu schließen Sie mit uns einen Vermittlervertrag. Damit wir diesen Vertrag Ihnen gegenüber
              erfüllen können, müssen wir Ihre Daten verarbeiten.
              <br />
              <br />
              Haben Sie sich für einen E-Mail-Newsletter angemeldet, so verarbeiten wir Ihre Daten, um Ihnen in
              regelmäßigen Abständen Neuigkeiten über uns und unsere Produkte mitzuteilen.
            </Text>
            <Heading as='h3' pt={4} fontSize={['md', 'lg', 'lg']}>
              b) Verarbeitung zur Wahrung von berechtigten Interessen (Art. 6 Abs. 1 f) DS-GVO)
            </Heading>
            <Text>
              In gewissen Fällen verarbeiten wir Ihre Daten, damit wir unsere oder die Interessen eines Dritten wahren
              können. Hierbei handelt es sich beispielsweise um die Auskunftseinholung und den Datenaustausch mit
              Auskunfteien, um Aussagen über Ihre Bonität zu erhalten oder um die Übermittlung an Adress- und
              Telefonnummernverifikationsdienste, um die Gültigkeit Ihrer angegebenen Daten zu überprüfen. Einer dieser
              Anbieter ist die infoscore Consumer Data GmbH, Rheinstr. 99, 76532 Baden-Baden (s. zu den dort
              durchgeführten Datenverarbeitungen für die Adressvalidierung und die Bonitätsprüfung). Außerdem
              verarbeiten wir gewisse Daten die bei der Nutzung unserer Internetseite anfallen, um Ihnen zu ermöglichen
              sie zu benutzen, oder die Sicherheit unserer IT-Systeme zu gewährleisten.
            </Text>
            <Heading as='h3' pt={4} fontSize={['md', 'lg', 'lg']}>
              c) Verarbeitung aufgrund Ihrer Einwilligung (Art. 6 Abs. 1 a) DS-GVO
            </Heading>
            <Text>
              Wir verarbeiten Ihre Daten aufgrund einer Einwilligung, wenn Sie nicht Kunde bei uns sind, sich aber
              dennoch für unseren E-Mail-Newsletter angemeldet haben.
            </Text>
            <Heading as='h3' pt={4} fontSize={['md', 'lg', 'lg']}>
              d) Aufgrund gesetzlicher Vorgaben (Art. 6 Abs. 1 c) DS-GVO
            </Heading>
            <Text>
              Schließlich verarbeiten wir Ihre Daten, um steuerliche und handelsrechtliche Buchführungs- und
              Aufzeichnungspflichten zu erfüllen.
            </Text>
          </VStack>

          <VStack alignItems='flex-start' width='100%'>
            <Heading as='h2' pt={8} fontSize={['md', 'lg', 'lg', 'xl']}>
              4. Personenbezogene Daten, die Sie Zins-runter.de (Siguron GmbH) für die Bearbeitung der
              Finanzierungsanfrage übermitteln.
            </Heading>
            <Text>
              Sie vertrauen uns bereits mit Ihrer Baufinanzierungsanfrage persönliche Daten an. Im Zuge der Beratung und
              Beantragung kommen noch weitere sensible Daten dazu. Deswegen setzen wir alles daran, die Übertragung
              dieser Daten, die Speicherung und die Bearbeitung so sicher wie nur möglich zu gestalten. Als Ihr
              persönlicher Baufinanzierungsberater sichern wir sowie unsere Kooperationspartner Ihnen zu, einen streng
              vertraulichen Umgang Ihrer Daten zu gewährleisten. Im Folgenden erfahren Sie, wie wir Datensicherheit
              verstehen und wie wir mit Ihren persönlichen Daten verfahren.
            </Text>
            <Text>
              Elektronische Verarbeitung Ihrer Daten im Rahmen des EUROPACE Marktplatzes (Baufinanzierungsvermittlung)
            </Text>
            <Text>
              Um Ihnen für Ihr Finanzierungsvorhaben einen guten Marktüberblick zu verschaffen und möglichst einen
              passenden Finanzierungsvorschlag stellen zu können, verwenden wir zum Vergleich der zu Ihrem
              Finanzierungsvorhaben zur Verfügung stehenden Produkte den EUROPACE-Marktplatz.
            </Text>
            <Text>
              Im Folgenden möchten wir Sie in verständlicher und kompakter Form über die Erhebung und Verarbeitung Ihrer
              Daten im Zusammenhang mit dem EUROPACE-Marktplatz sowie über Ihre diesbezüglichen Rechte unterrichten.
              Bitte beachten Sie, dass die vorliegenden Datenschutzhinweise ergänzend zu den Datenschutzhinweisen der
              übrigen Beteiligten (z.B. Darlehensgebern) gelten können.
            </Text>

            <Heading as='h3' pt={4} fontSize={['md', 'lg', 'lg']}>
              4.1.Was ist der EUROPACE-Marktplatz?
            </Heading>
            <Text>
              Der EUROPACE-Marktplatz ist eine europäische Plattform für den Vertrieb von Finanzierungsleistungen, in
              der die Produkte von zahlreichen deutschen Darlehnsgebern eingestellt sind. Zugriff auf den
              EUROPACE-Marktplatz haben, neben den angeschlossenen Darlehensgebern, nur registrierte Finanzvertriebe.
            </Text>

            <Heading as='h3' pt={4} fontSize={['md', 'lg', 'lg']}>
              4.2. Wer ist für den EUROPACE-Marktplatz verantwortlich?
            </Heading>
            <Text>
              Verantwortlich im Sinne der EU-Datenschutzgrundverordnung (DSGVO) für die nachfolgend beschriebene
              Datenverarbeitung im Zusammenhang mit dem EUROPACE-Marktplatz ist,
            </Text>
            <UnorderedList listStylePosition='inside'>
              <ListItem>
                wenn Sie ein Allgemeines Verbraucherdarlehen (z.B. einen Ratenkredit) beantragen, die Europace AG,
                Klosterstr. 71, 10179 Berlin,
              </ListItem>
              <ListItem>
                wenn Sie ein Immobiliar-Verbraucherdarlehen (z.B. eine Baufinanzierung) oder ein Bausparprodukt
                beantragen, die Hypoport Mortgage Market Ltd., Mulranny, Westport, Co. Mayo, Irland
              </ListItem>
            </UnorderedList>
            <Text>
              Mit „EUROPACE“ wird nachfolgend das für die Verarbeitung Ihrer Daten jeweils verantwortliche Unternehmen,
              also entweder die Europace AG oder die Hypoport Mortgage Market Ltd. bezeichnet.
            </Text>
            <Text>
              Unabhängig davon liegt die Verantwortlichkeit für Datenverarbeitungen, die außerhalb des
              EUROPACE-Marktplatzes oder unabhängig davon stattfinden, bei uns oder anderen an der Bearbeitung Ihres
              Finanzierungsantrags beteiligten Stellen (z.B. Darlehensgeber).
            </Text>

            <Heading as='h3' pt={4} fontSize={['md', 'lg', 'lg']}>
              4.3. Datenschutzbeauftragter von EUROPACE
            </Heading>
            <Text>
              Bei Fragen zum Thema Datenschutz im Zusammenhang mit dem EUROPACE-Marktplatz können Sie sich jederzeit an
              den Datenschutzbeauftragten des jeweils verantwortlichen Unternehmens wenden:
            </Text>
            <UnorderedList listStylePosition='inside'>
              <ListItem>Europace AG:datenschutz@europace.de</ListItem>
              <ListItem>Hypoport Mortgage Market Ltd.: datenschutz@europace.ie</ListItem>
            </UnorderedList>

            <Heading as='h3' pt={4} fontSize={['md', 'lg', 'lg']}>
              4.4. Zwecke der Datenverarbeitung durch EUROPACE
            </Heading>
            <Text>
              Die Datenverarbeitung im Zusammenhang mit dem EUROPACE-Marktplatz findet im Wesentlichen zum Zweck der
              Produktauswahl, Vorbereitung und Beantragung Ihres Darlehens durch uns statt. Über den EUROPACE-Marktplatz
              können wir Ihr individuelles Finanzierungsanliegen auf Grundlage der von Ihnen gemachten Angaben schnell
              mit den aktuell verfügbaren und für Sie in Frage kommenden Produkten der am EUROPACE-Marktplatz
              angeschlossenen Darlehensgeber abgleichen. Je nachdem, in welcher Bearbeitungsphase sich Ihr
              Finanzierungsvorhaben befindet und zu welchen Zwecken wir den EUROPLACE-Marktplatz nutzen, werden
              unterschiedliche Daten benötigt.
            </Text>
            <Text>
              a) Ermittlung und Vergleich von Finanzierungsvorschlägen Im Rahmen eines von uns angebotenen
              Produktvergleichs werden die von Ihnen gemachten Angaben zu Ihrem Finanzierungsvorhaben (Bedarf, ggf.
              weitere Informationen zu dem jeweiligen Verwendungszweck, gewünschte Laufzeiten, Raten und Termin), Ihrer
              Person (Name, Geburtsdatum, Geburtsort, Familienstand, Staatsangehörigkeit) und persönlichen Situation
              (Wohnsituation, wie z. B. Adresse oder Anzahl der Personen im Haushalt), Ihrer finanziellen Situation
              (Einnahmen und Ausgaben sowie Verbindlichkeiten), sowie ggf. Ihre Kontoverbindung von uns an EUROPACE
              übermittelt und dort in unserem Auftrag zum Zweck des Abgleichs mit den in Betracht kommenden
              Finanzierungsprodukten verarbeitet. Ihre Angaben werden dabei mit den Konditionen des bzw. der
              Darlehensgeber/s für die jeweils in Frage kommenden Finanzprodukte automatisiert abgeglichen sowie
              eventuell benötigte oder für Ihr Vorhaben sinnvolle Produktergänzungen oder – alternativen ermittelt. Der
              Einsatz des EUROPACE- Marktplatzes ermöglicht es uns auf ein vielfältiges Produktangebot zuzugreifen und
              für Sie einen passenden Finanzierungsvorschlag zu finden. Rechtsgrundlage für diese Datenverarbeitung ist
              Artikel 6 Abs. 1 b) DSGVO (Vertragserfüllung und vorvertragliche Maßnahmen).
            </Text>
            <Text>
              b) Antragsvorbereitung und Antragsstellung. Sofern Sie sich auf der Grundlage eines von uns ermittelten
              Vorschlags für ein konkretes Finanzprodukt entschieden haben, werden Ihre unter Ziffer 4 a) genannten
              Angaben von uns verwendet, um über den EUROPACE-Marktplatz in Ihrem Namen einen Antrag bei dem jeweiligen
              Darlehensgeber zu stellen. Je nach Finanzierungsvorhaben und gewähltem Finanzprodukt kann es sein, dass
              der Darlehensgeber weitere Angaben oder Nachweise zur Prüfung Ihres Antrages für erforderlich erachtet. In
              diesem Fall informiert uns der Darlehensgeber über den EUROPACE-Marktplatz über die von ihm benötigten
              zusätzlichen Angaben oder Nachweise.
              <br />
              <br />
              Soweit Sie uns die benötigten Angaben oder Nachweise zur Verfügung stellen, leiten wir diese über den
              EUROPACE-Marktplatz an den Darlehensgeber weiter. Auf gleichem Wege teilt uns der Darlehensgeber
              anschließend das Ergebnis der Antragsprüfung mit.
              <br />
              <br />
              Rechtsgrundlage für diese Datenverarbeitung ist Artikel 6 Abs. 1 b) DSGVO (Vertragserfüllung und
              vorvertragliche Maßnahmen).
            </Text>
            <Text>
              c) Anschlussbearbeitung und Ermöglichung der Bearbeitungskontinuität EUROPACE speichert und verarbeitet
              die von uns übermittelten Daten, soweit dies für unsere Vermittlungstätigkeit und weitere
              Antragsbearbeitung erforderlich ist. Falls Ihr Finanzierungsantrag zukünftig durch einen anderen
              Finanzvertrieb weiterbearbeitet werden sollte, werden Ihre im EUROPACE-Marktplatz gespeicherten Daten und
              Unterlagen zudem mit unserer im Einzelfall erklärten Zustimmung von EUROPACE für den anderen
              Finanzvertrieb freigeschaltet oder an diesen weitergegeben, damit dieser die Bearbeitung Ihres Antrags
              fortsetzen kann. Ohne unsere ausdrückliche Zustimmung wird EUROPACE Ihre Daten und Unterlagen anderen
              Finanzvertrieben nicht zur Verfügung stellen. Rechtsgrundlage für diese Datenverarbeitung ist Artikel 6
              Abs. 1 b) DSGVO (Vertragserfüllung)
            </Text>
            <Text>
              d) Weiterentwicklung des EUROPACE-Marktplatzes EUROPACE verwendet die bei der Nutzung des
              EUROPACE-Marktplatzes anfallenden Daten auch, um den EUROPACE-Marktplatz fortlaufend zu optimieren und
              weiterzuentwickeln. Hierfür werden die von uns und anderen Anwendern des EUROPACE-Marktplatzes
              eingegebenen Informationen und Daten zu Vermittlungsvorgängen ausgewertet. Wir als Anwender des
              EUROPACE-Marktplatzes werden zudem regelmäßig zu unseren allgemeinen Erfahrungen und Wünschen in Bezug auf
              zukünftige Funktionalitäten des EUROPACE-Marktplatzes befragt. Die diesbezügliche Datenverarbeitung durch
              EUROPACE erfolgt ohne Ansehung der jeweils betroffenen Personen. Statistische Auswertungen der Vorgänge
              und die Befragungen erfolgen daher grundsätzlich nicht im Zusammenhang mit Ihren unmittelbar
              personenbezogenen Angaben (z. B. Ihr Name und Ihre Kontaktdaten), sondern nur auf Grundlage sorgfältig
              anonymisierter Informationen gemäß den Vorgaben des EU-Datenschutzrechts. Insbesondere werden keine
              personenbezogenen Angaben aus den im Rahmen Ihrer Antragstellung über den EUROPACE-Marktplatz
              übermittelten Dokumenten ausgewertet. Rechtsgrundlage der vorgenannten Datenverarbeitungen ist Artikel 6
              Abs. 1 f) DSGVO (Interessensabwägung, basierend auf dem Interesse von EUROPACE an der kontinuierlichen
              Optimierung und Weiterentwicklung des EUROPACE-Marktplatzes). Sie haben das Recht der oben beschriebenen
              Datenverarbeitungen zu widersprechen. Geben Sie EUROPACE diesbezüglich bitte einen Hinweis an die unter
              Ziffer 2 genannten Kontaktdaten.
            </Text>

            <Heading as='h3' pt={4} fontSize={['md', 'lg', 'lg']}>
              4.5. Datenweitergabe durch EUROPACE.
            </Heading>
            <Text>
              Ihre Daten werden von EUROPACE grundsätzlich nur dann an Dritte gegeben, soweit dies zur Bearbeitung Ihres
              Finanzierungsantrags erforderlich ist, EUROPACE oder der Dritte ein berechtigtes Interesse an der
              Weitergabe haben oder Ihre Einwilligung hierfür vorliegt. Sofern Ihre Daten von EUROPACE an Dritte auf
              Basis eines berechtigten Interesses von EUROPACE übermittelt werden, wird dies in diesen
              Datenschutzhinweisen erläutert. Darüber hinaus können Ihre Daten von EUROPACE an Dritte übermittelt
              werden, soweit EUROPACE aufgrund gesetzlicher Bestimmungen oder durch vollstreckbare behördliche oder
              gerichtliche Anordnung hierzu verpflichtet ist.
              <br />
              <br />
              EUROPACE speichert und verarbeitet Ihre Daten grundsätzlich in Rechenzentren innerhalb der Europäischen
              Union. EUROPACE hat seine Datenverarbeitungsvorgänge so ausgestaltet, dass Ihre Daten nach Möglichkeit
              nicht außerhalb der Europäischen Union verarbeitet werden. Soweit für einzelne Verarbeitungsschritte oder
              technische Unterstützungsleistungen die Einschaltung eines externen Dienstleisters notwendig ist, kann
              eine Übermittlung Ihrer Daten an eine Stelle außerhalb der Europäischen Union erforderlich sein. In jedem
              Fall stellt EUROPACE sicher, dass der jeweilige Dienstleister vertraglich oder auf andere Weise ein dem
              europäischen Datenschutzniveau gleichwertiges Niveau garantiert. Sie können über die unter Ziffer 2
              genannten Kontaktdaten jederzeit eine Kopie dieser Garantien anfordern. Zurzeit betrifft dies die
              folgenden Verarbeitungsschritte:
              <br />
              <br />
              <strong>E-Mail-Versand:</strong>
              Damit wir Ihnen die unter Verwendung des EUROPACE-Marktplatzes eingeholten Finanzierungsvorschläge per
              E-Mail direkt weiterleiten können, nutzt der EUROPACE-Marktplatz einen E-Mail-Dienst. Da sich dessen
              IT-Systeme in den USA befinden, bedingt dies eine Übermittlung Ihrer E-Mail-Adresse und des E-Mail-Inhalts
              in die USA. Der Anbieter nutzt die Angaben ausschließlich zur Versendung der E-Mail. Im Rahmen des
              E-Mail-Abrufs anfallenden Daten (z. B. wann und aus welcher Region die E-Mail geöffnet wurde) werden
              ausschließlich in anonymisierter Form zur Erstellung von allgemeinen Statistiken verwendet, die von
              EUROPACE abgerufen werden können. Anhänge, insbesondere die von Ihnen zur Verfügung gestellten Dokumente
              oder die von uns ausgearbeiteten Vorschläge werden grundsätzlich nicht per E-Mail versandt. Sie erhalten
              stets einen Link, über den Sie die Dokumente abrufen können. Die Speicherung der Dokumente erfolgt
              innerhalb der Europäischen Union.
              <br />
              <br />
              <strong>Support:</strong>
              Gelegentlich müssen Mitarbeiter der von EUROPACE beauftragten IT-Dienstleister für notwendige
              Wartungsarbeiten auf die europäischen IT-Systeme des EUROPLACE-Marktplatzes zugreifen. Die Dienstleister
              sind nach dem EU-US Privacy-Shield zertifiziert, wonach aufgrund einer Entscheidung der EU-Kommission ein
              angemessenes Datenschutzniveau in den USA für die teilnehmenden Unternehmen gewährleistet wird.
              <br />
              <br />
              EUROPACE hat umfassende technische Vorkehrungen getroffen, um die Sicherheit und die Kontrolle über die
              personenbezogenen Daten zu gewährleisten. Die IT-Infrastruktur und die internen Prozesse der Dienstleister
              unterliegen strengen Kontrollen und sie werden fortlaufend von unabhängiger Stelle zertifiziert.
            </Text>

            <Heading as='h3' pt={4} fontSize={['md', 'lg', 'lg']}>
              4.6. Dauer der Datenspeicherung.
            </Heading>
            <Text>
              EUROPACE speichert Ihre Daten solange, wie dies zur Bearbeitung Ihrer Finanzierungsanträge sowie zur
              fortgesetzten Begleitung während der Vertragsdurchführung durch uns erforderlich ist bzw. EUROPACE ein in
              diesen Datenschutzhinweisen erläutertes berechtigtes Interesse an der weiteren Speicherung hat. In allen
              anderen Fällen löscht oder anonymisiert EUROPACE Ihre personenbezogenen Daten mit Ausnahme solcher Daten,
              die zur Erfüllung vertraglicher oder gesetzlicher (z. B. steuer- oder handelsrechtlicher)
              Aufbewahrungsfristen weiter vorhalten müssen (z.B. Rechnungen). Dabei können vertragliche
              Aufbewahrungsfristen auch aus Verträgen mit anderen an der Bearbeitung Ihres Finanzierungsantrags
              beteiligten Stellen herrühren (z. B. vertragliche Dokumentationspflichten von EUROPACE uns gegenüber).
              Rechtsgrundlage der vorgenannten Datenverarbeitung ist Artikel 6 Abs. 1 b) DSGVO (soweit die Aufbewahrung
              der weiteren Bearbeitung Ihres Finanzierungsantrags dient), Artikel 6 Abs. 1 f) DSGVO (sofern die
              zugrundeliegende Datenverarbeitung entsprechend dieser Datenschutzhinweise auf einem berechtigten
              Interesse von EUROPACE beruht) oder Artikel 6 Abs. 1 c) DSGVO (sofern die Aufbewahrung zur Erfüllung
              gesetzlicher Pflichten erforderlich ist).
            </Text>

            <Heading as='h3' pt={4} fontSize={['md', 'lg', 'lg']}>
              4.7. Ihre Rechte.
            </Heading>
            <Text>
              Ihnen steht jederzeit das Recht zu, eine Übersicht der über Ihre Person durch EUROPACE gespeicherten Daten
              zu verlangen. Falls gespeicherte Daten falsch oder nicht mehr aktuell sein sollten, haben Sie das Recht
              diese Daten berichtigen zu lassen. Sie können außerdem die Löschung Ihrer Daten verlangen. Sollte die
              Löschung aufgrund anderer Rechtsvorschriften nicht möglich sein (z. B. aufgrund der Aufbewahrungspflichten
              nach dem Geldwäschegesetz oder den Grundsätzen der ordnungsgemäßen Buchführung), werden die Daten
              gesperrt, so dass Sie nur noch für diesen gesetzlichen Zweck verfügbar sind. Sie können die Verarbeitung
              Ihrer personenbezogenen Daten außerdem einschränken lassen, wenn z. B. die Richtigkeit der Daten von Ihrer
              Seite angezweifelt wird.
              <br />
              <br />
              Ihnen steht außerdem das Recht auf Datenübertragbarkeit zu, d. h. dass Ihnen EUROPACE auf Wunsch eine
              digitale Kopie der von Ihnen bereitgestellten personenbezogenen Daten zukommen lässt. Zudem haben Sie das
              Recht der oben beschriebenen Datenverarbeitung aus Gründen, die sich aus Ihrer besonderen Situation
              ergeben, jederzeit zu widersprechen, soweit die Verarbeitung auf Artikel 6 Abs. 1 e) oder f) DSGVO
              gestützt ist. Geben Sie EUROPACE diesbezüglich bitte einen Hinweis an die unter Ziffer 2 genannten
              Kontaktdaten.
              <br />
              <br />
              Sie haben auch das Recht sich bei der für EUROPACE jeweils zuständigen Datenschutzaufsichtsbehörde zu
              beschweren.
              <br />
              <br />
              Für die Europace AG als Verantwortlichen ist dies die Berliner Beauftragte für Datenschutz und
              Informationsfreiheit (Friedrichstraße 219, 10969 Berlin).
              <br />
              <br />
              Für die Hypoport Mortgage Market Ltd. als Verantwortlichen ist dies das Office of the Data Protection
              Commissioner (Canal House, Station Road, Portarlington, Co. Laois, R32 AP23, Ireland) als federführende
              Datenschutzaufsichtsbehörde.
              <br />
              <br />
              Sie können sich auch an die Datenschutzbehörde an Ihrem Wohnort wenden, die Ihr Anliegen dann an die
              jeweils zuständige Behörde weiterleiten wird.
            </Text>

            <Heading as='h3' pt={4} fontSize={['md', 'lg', 'lg']}>
              4.7.1. Sonstiges
            </Heading>
            <Text>
              Durch die Weiterentwicklung des EUROPACE-Marktplatzes und die damit verbundene Implementierung neuer
              Technologien oder zur Berücksichtigung neuer Funktionen können Änderungen dieser Datenschutzhinweise
              erforderlich werden. Über entsprechende Änderungen werden Sie von uns informiert werden.
            </Text>

            <Heading as='h3' pt={4} fontSize={['md', 'lg', 'lg']}>
              4.8. Finanzierungsplattform Prohyp
            </Heading>
            <Text>
              Im Rahmen Ihrer Anfrage, Beratungstermin, Zinsvergleich oder Angebotsanforderung, werden Ihre Daten dabei
              evtl. auch an die Finanzierungsplattform Prohyp GmbH, Domagkstraße 34, 80807 München weitergegeben. Die
              Datenschutzerklärung der Prohyp GmbH finden Sie auch unter www.prohyp.de/datenschutz/
              <br />
              <br />
              Datenschutzinformationen der Prohyp GmbH
              <br />
              <br />
              Die folgenden Informationen erläutern Ihnen, wie wir, die Prohyp GmbH, Ihre personenbezogenen Daten
              verarbeiten. Sie erfahren, zu welchen Zwecken und auf welcher Rechtsgrundlage wir Ihre personenbezogenen
              Daten verarbeiten, wie lange wir diese speichern und welche Rechte Sie in Bezug auf Ihre Daten haben.
              Außerdem informieren wir Sie darüber, mit wem wir Ihre Daten teilen und wie Sie uns bei Fragen
              kontaktieren können. Sollte in einem konkreten Fall die Rechtsgrundlage für die Verarbeitung
              personenbezogener Daten unwirksam oder nicht einschlägig sein, so behalten wir uns das Recht vor die
              Verarbeitung auf eine andere Rechtsgrundlage zu stützen.
            </Text>

            <Heading as='h3' pt={4} fontSize={['md', 'lg', 'lg']}>
              4.8.1. Wer ist für die Datenverarbeitung verantwortlich und an wen können Sie sich wenden? Wie erreichen
              Sie den Datenschutzbeauftragten?
            </Heading>
            <Text>
              Verantwortliche Stelle ist:
              <br />
              <br />
              Prohyp GmbH
              <br />
              <br />
              Domagkstraße 34
              <br />
              <br />
              80807 München
              <br />
              <br />
              E-Mail: info@prohyp.de
              <br />
              <br />
              Sie erreichen unseren betrieblichen Datenschutzbeauftragten unter:
              <br />
              <br />
              Prohyp GmbH
              <br />
              <br />
              Datenschutzbeauftragter
              <br />
              <br />
              Domagkstraße 34
              <br />
              <br />
              80807 München
              <br />
              <br />
              E-Mail: datenschutz@prohyp.de
              <br />
              <br />
              &quot;Personenbezogene Daten&quot; im Sinne dieser Datenschutzinformationen, sind Informationen, die sich
              auf eine identifizierte oder identifizierbare natürliche Person beziehen. <br />
              <br />
              &quot;Verarbeiten&quot; ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführter Vorgang im
              Zusammenhang mit personenbezogenen Daten wie z. B. das Erheben, die Speicherung, die Anpassung oder
              Veränderung, die Verwendung oder die Offenlegung durch Übermittlung.
            </Text>

            <Heading as='h3' pt={4} fontSize={['md', 'lg', 'lg']}>
              4.8.2. Wie verarbeiten wir personenbezogene Daten und aus welchen Quellen stammen sie?
            </Heading>
            <Text>
              Wir verarbeiten personenbezogene Daten, die wir von Ihrem Vermittler erhalten, und auch solche, die wir
              aus öffentlich zugänglichen Quellen (z. B. Grundbücher) zulässigerweise erhalten, soweit dies für die
              Erbringung unserer Leistung erforderlich ist. Zusätzlich erhalten wir nach einer Finanzierungsanfrage bei
              einem Kreditgeber möglicherweise von diesem personenbezogene Daten zu Ihrer Anfrage, wie
              Bonitätsinformationen oder Informationen zu Darlehen. <br />
              <br />
              Konkret verarbeiten wir folgende personenbezogene Daten für folgende Zwecke:
              <br />
              <br />
              a. Beim Besuch unserer Website
              <br />
              <br />
              Wir nutzen auf unserer Website unter www.prohyp.de so genannte Cookies und ähnliche Technologien zur
              Verfolgung Ihres Nutzungsverhaltens (nachfolgend zusammen &quot;Cookies&quot;). Was Cookies sind, wie Sie
              unsere Nutzung von Cookies steuern können und welche Cookies wir wie nutzen, erfahren Sie in unseren
              Cookie Informationen.
              <br />
              <br />
              Wir verarbeiten außerdem die sogenannten Logfiles unseres Webservers. Diese Weblogs enthalten
              Informationen zu Ihrer Nutzung der Website (Nutzungsdaten), u.a. Zugriffszeit, Name der abgerufenen
              Website bzw. -datei, übertragene Datenmenge, Status des Abrufs, Browsertyp und -version, Betriebssystemtyp
              und -version und IP-Adresse. Wir verarbeiten diese personenbezogenen Daten zum Betrieb der Website und zur
              Gewährleistung der IT-Sicherheit.
              <br />
              <br />
              Wir verarbeiten diese personenbezogenen Daten auf Basis von Art. 6 Abs.1 lit. f DSGVO
              (Interessenabwägung), da wir ein Interesse daran haben, die Website funktionstüchtig und sicher zur
              Verfügung zu stellen. Dies entspricht auch Ihren Interessen, die Seite optimal nutzen zu können, sodass
              Ihre Interessen der Verarbeitung nicht entgegenstehen.
              <br />
              <br />
              Wir löschen Ihre Nutzungsdaten, wenn sie nicht mehr zu Zwecken der IT-Sicherheit benötigt werden. Darüber
              hinaus speichern wir Ihre Nutzungsdaten nur noch zur Erfüllung etwaiger gesetzlicher Aufbewahrungsfristen.
              <br />
              <br />
              b. Im Rahmen der Vermittlung von Darlehen
              <br />
              <br />
              Im Rahmen unserer Kerndienste - Vermittlung von Darlehen - verarbeiten wir die Informationen, die wir von
              Ihrem Vermittler erhalten: Angaben/Unterlagen zur Person wie z. B. Name, Anschrift, E-Mail-Adresse,
              Telefonnummern, Familienstand, Geburtsdaten, Beruf, persönliche Vermögensverhältnisse und
              Verbindlichkeiten, Bankverbindung, Einkünfte und Ausgaben; Angaben/Unterlagen zum Finanzierungsobjekt bzw.
              der Mittelverwendung des Darlehens; Angaben/Unterlagen zur Finanzierung und Abwicklung, wie z.B. Saldo,
              Verzinsung, Laufzeit, Auszahlungsvoraussetzungen, Antragsstatus, Bearbeitungsstatus, Auszahlung; sowie
              Angaben/Unterlagen zu Anschlussfinanzierungen, wie z.B. Laufzeit, Restsaldo, Rate, Zinssatz.
              <br />
              <br />
              Zusätzlich erhalten wir nach einer Finanzierungsanfrage bei einem Kreditgeber möglicherweise von diesem
              personenbezogene Daten zu Ihrer Anfrage, wie Bonitätsinformationen oder Informationen zu Darlehen. Im
              Falle einer Verlängerung durch den Kreditgeber einer durch uns vermittelten Finanzierung übermittelt uns
              der Kreditgeber möglicherweise den Stand der Finanzierung.
              <br />
              <br />
              Im Rahmen der Abwicklung des Vertrages zwischen uns und Ihrem Vermittler werden Ihre personenbezogenen
              Daten an uns als Prohyp weitergeleitet. Wir verarbeiten diese Daten auf Basis von Art. 6 Abs. 1 lit. b
              DSGVO (Vertragserfüllung), im Rahmen unserer Vermittlungsleistung nur für die Durchführung des
              Rahmenvertrags gegenüber Ihrem Vermittler, damit dieser für Sie als Kunden ein passendes
              Produkt/Produktgeber vermitteln kann (inkl. Voranfragen bei Kreditgebern). Der Zweck der Datenverarbeitung
              betrifft somit die Vermittlung eines Darlehens. Die konkreten Datenverarbeitungen richten sich in erster
              Linie nach dem konkreten Produkt (z. B. Baufinanzierung, Bausparen, Konsumentenkredite).
              <br />
              Bitte teilen Sie im Rahmen der Darlehensvermittlung keine weiteren personenbezogenen Daten, die über das
              erforderliche Maß hinausgehen, mit und schwärzen Sie Informationen, die für die Leistungserbringung durch
              uns oder den Kreditgeber nicht notwendig sind (z. B. Passagen in Kontoauszügen zu nicht relevanten
              Umsätzen). Diese Daten verarbeiten wir ansonsten nur auf Grundlage Ihrer vorherigen Einwilligung, welche -
              wenn sie nicht anderweitig erklärt wird - darin liegt, dass Sie uns die entsprechenden Informationen über
              Ihren Vermittler zusenden. Sie haben das Recht, eine erteilte Einwilligung jederzeit mit Wirkung für die
              Zukunft zu widerrufen.
              <br />
              Wir verarbeiten Ihre personenbezogenen Daten für diesen Zweck nur so lange, wie wir sie zur
              Vertragserfüllung und - abwicklung benötigen. Darüber hinaus speichern wir Ihre personenbezogenen Daten
              nur noch zur Erfüllung etwaiger gesetzlicher Aufbewahrungspflichten oder bis relevante zivilrechtliche
              Rechtsansprüche in Bezug auf die Darlehensvermittlung verjährt sind. Die im Handelsgesetzbuch (HGB) und
              der Abgabenordnung (AO) vorgegebenen Fristen zur Aufbewahrung bzw. Dokumentation betragen z. B. sechs bis
              zehn Jahre.
            </Text>

            <Heading as='h3' pt={4} fontSize={['md', 'lg', 'lg']}>
              4.8.3. Wer bekommt Ihre Daten?
            </Heading>
            <Text>
              a. Innerhalb der Prohyp
              <br />
              <br />
              Innerhalb der Prohyp erhalten diejenigen Stellen Zugriff auf Ihre Daten, die diese zur Erfüllung unserer
              Pflichten brauchen. Diese Übermittlung erfolgt zur Vertragserfüllung gegenüber Ihrem Vermittler (Art. 6
              Abs.1 lit. b DSGVO).
              <br />
              <br />
              b. Unsere Dienstleister
              <br />
              <br />
              Wir übermitteln personenbezogene Daten an von uns eingesetzte Dienstleister und Erfüllungsgehilfen, die
              uns bei den oben genannten Zwecken als Auftragsverarbeiter unterstützen. Dies sind Unternehmen in den
              Bereichen IT-Dienstleistungen, Logistik, Telekommunikation, sowie Vertrieb.
              <br />
              <br />
              Die Übermittlung erfolgt auf Basis einer Interessenabwägung (Art. 6 Abs.1 lit. f DSGVO). Unser Interesse
              besteht hier vorwiegend darin, effektive und spezialisierte Dienstleister einzusetzen, die entsprechend
              Art. 28 DSGVO strikt unseren Anweisungen unterworfen sind.
              <br />
              <br />
              c. Dritte im Rahmen der Darlehensvermittlung
              <br />
              <br />
              Wir übermitteln Ihre personenbezogenen Daten an Dritte außerhalb der Prohyp, wenn dies zur Erfüllung des
              Vermittlungsvertrages gegenüber Ihrem Vermittler notwendig ist oder Sie eingewilligt haben. Solche
              Empfänger personenbezogener Daten sind z.B.:
              <br />
              <br />
              <UnorderedList listStylePosition='inside'>
                <ListItem>
                  Banken, Bausparkassen oder Versicherungen und Anstalten des öffentlichen Rechts oder vergleichbare
                  Einrichtungen, an die wir zur Durchführung der Vermittlung personenbezogene Daten übermitteln;
                </ListItem>
                <ListItem>
                  Im Falle von Konsumentenkrediten: weitere Vermittler, mit denen wir im Rahmen der Vermittlung
                  zusammenarbeiten, u.a. die FinanzcheckPRO GmbH (deren Datenschutzinformationen finden Sie hier:
                  www.finanzcheckpro.de/dsi)
                </ListItem>
                <ListItem>
                  Sonstige Zahlungsverpflichtete oder Zahlungsempfänger zu Zwecken der Rechnungslegung; und
                </ListItem>
                <ListItem>
                  Öffentliche Stellen und Institutionen, wie z. B. Finanzbehörden, Strafverfolgungsbehörden bei
                  Vorliegen einer gesetzlichen oder behördlichen Verpflichtung.
                </ListItem>
              </UnorderedList>
              <br />
              <br />
              Außerdem übermitteln wir Ihre personenbezogenen Daten an Behörden, Gerichte oder Organisationen, soweit
              dies erforderlich ist zur Wahrung berechtigter Interessen von uns oder Dritten. Gründe hierfür können die
              Geltendmachung rechtlicher Ansprüche und die Verteidigung bei rechtlichen Streitigkeiten, die
              Gewährleistung der IT-Sicherheit und des IT-Betriebs der Prohyp oder die Verhinderung und Aufklärung von
              Straftaten sein. Wir informieren Sie im Falle einer derartigen Übermittlung gesondert entsprechend den
              datenschutzrechtlichen Vorgaben.
            </Text>

            <Heading as='h3' pt={4} fontSize={['md', 'lg', 'lg']}>
              4.8.4. Überblick über unsere Datenverarbeitungen
            </Heading>
            <Text>
              Im Folgenden haben wir für Sie noch einmal vereinfacht beschrieben, wie wir Ihre Daten verarbeiten:
            </Text>
            <TableContainer>
              <Table
                width='100%'
                overflow='scroll'
                variant='unstyled'
                borderWidth='1px'
                borderColor='gray.200'
                bg='white'
              >
                <Thead>
                  <Tr>
                    <Th>Zweck</Th>
                    <Th>Datenkategorien</Th>
                    <Th>Rechtsgrundlage</Th>
                    <Th>Empfänger</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td borderTop='1px solid' borderColor='gray.200'>
                      <UnorderedList>
                        <ListItem>Websitebesuch</ListItem>
                      </UnorderedList>
                    </Td>
                    <Td borderTop='1px solid' borderColor='gray.200'>
                      <UnorderedList>
                        <ListItem>Nutzungsdaten aus Logfiles</ListItem>
                      </UnorderedList>
                    </Td>
                    <Td borderTop='1px solid' borderColor='gray.200'>
                      <UnorderedList>
                        <ListItem>Interessenabwägung; bei Cookies: ggf. Einwilligung</ListItem>
                      </UnorderedList>
                    </Td>
                    <Td borderTop='1px solid' borderColor='gray.200'>
                      <UnorderedList>
                        <ListItem>Auftragsverarbeiter</ListItem>
                      </UnorderedList>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td borderTop='1px solid' borderColor='gray.200'>
                      <UnorderedList>
                        <ListItem>Vermittlung von Darlehen</ListItem>
                      </UnorderedList>
                    </Td>
                    <Td borderTop='1px solid' borderColor='gray.200'>
                      <UnorderedList>
                        <ListItem>Name</ListItem>
                        <ListItem>Kontaktdaten</ListItem>
                        <ListItem>Finanzdaten</ListItem>
                        <ListItem>Einkünfte</ListItem>
                        <ListItem>Kaufinteressen</ListItem>
                        <ListItem>Weitere relevante Informationen zum Vorhaben</ListItem>
                      </UnorderedList>
                    </Td>
                    <Td borderTop='1px solid' borderColor='gray.200'>
                      <UnorderedList>
                        <ListItem>Vertragserfüllung</ListItem>
                        <ListItem>Einwilligung nur soweit Informationen nicht relevant</ListItem>
                      </UnorderedList>
                    </Td>
                    <Td borderTop='1px solid' borderColor='gray.200'>
                      <UnorderedList>
                        <ListItem>Banken</ListItem>
                        <ListItem>Bausparkassen</ListItem>
                        <ListItem>Versicherungen</ListItem>
                        <ListItem>Weitere Vermittler bei Konsumentenkrediten</ListItem>
                        <ListItem>Behörden</ListItem>
                      </UnorderedList>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>

            <Heading as='h3' pt={4} fontSize={['md', 'lg', 'lg']}>
              4.8.5. Werden Daten in ein Drittland oder an eine internationale Organisation übermittelt?
            </Heading>
            <Text>
              Eine Datenübermittlung an Stellen in Staaten außerhalb der Europäischen Union (sogenannte Drittstaaten)
              findet nicht statt. Ausnahme hiervon ist eine Datenübermittlung in den Fällen, in denen wir Cookies
              nicht-europäischer Anbieter einsetzen. Hier stellen wir ein angemessenes Datenschutzniveau durch
              entsprechende Garantien sicher, soweit dies gesetzlich erforderlich ist, z. B. EU-Standardvertragsklauseln
              oder BCR-Zertifizierung. Wenn Sie weitere Informationen zu den von uns eingesetzten Garantien erhalten
              möchten, kontaktieren Sie uns bitte unter info@prohyp.de.
              <br />
              <br />
              Weitere Informationen zu Cookies finden Sie in unseren Cookie Informationen.
            </Text>

            <Heading as='h3' pt={4} fontSize={['md', 'lg', 'lg']}>
              4.8.6. Welche Datenschutzrechte haben Sie?
            </Heading>
            <Text>
              Als betroffene Person einer Datenverarbeitung haben Sie die folgenden Rechte (im Folgenden auch
              &quot;Betroffenenrechte&quot; genannt), sofern die entsprechenden Voraussetzungen vorliegen. Bitte
              kontaktieren Sie uns, wenn Sie diese Rechte geltend machen möchten. Beim Auskunftsrecht und beim
              Löschungsrecht gelten die Einschränkungen nach §§ 34 und 35 BDSG.
              <br />
              <br />
              a. Recht auf Auskunft (Art. 15 DSGVO)
              <br />
              <br />
              Sie haben uns gegenüber das Recht, Auskunft darüber zu erhalten, welche Daten wir zu Ihrer Person
              verarbeiten. Insbesondere können Sie Auskunft über die Verarbeitungszwecke, die Kategorien der
              verarbeiteten Daten, etwaigen Empfängern der Daten und der geplanten Speicherdauer verlangen.
              <br />
              <br />
              b. Recht auf Berichtigung (Art. 16 DSGVO)
              <br />
              <br />
              Sollten die Sie betreffenden Daten nicht richtig oder unvollständig sein, so können Sie die Berichtigung
              unrichtiger oder die Vervollständigung unvollständiger Angaben verlangen.
              <br />
              <br />
              c. Recht auf Löschung personenbezogener Daten (Art. 17 DSGVO)
              <br />
              <br />
              Sie können die Löschung Ihrer personenbezogenen Daten verlangen, soweit die Daten insbesondere für den
              vorgesehenen Zweck nicht mehr erforderlich sind bzw. unrechtmäßig verarbeitet werden, oder Sie Ihre
              Einwilligung widerrufen oder einen Widerspruch erklärt haben.
              <br />
              <br />
              c. Recht auf Löschung personenbezogener Daten (Art. 17 DSGVO)
              <br />
              <br />
              Sie können die Löschung Ihrer personenbezogenen Daten verlangen, soweit die Daten insbesondere für den
              vorgesehenen Zweck nicht mehr erforderlich sind bzw. unrechtmäßig verarbeitet werden, oder Sie Ihre
              Einwilligung widerrufen oder einen Widerspruch erklärt haben.
              <br />
              <br />
              d. Recht auf Einschränkung der Datenverarbeitung (Art. 18 DSGVO)
              <br />
              <br />
              Sie können die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen, solange und soweit
              die Richtigkeit der Daten von Ihnen bestritten wird, die Verarbeitung unrechtmäßig ist, Sie aber deren
              Löschung ablehnen oder wir die Daten nicht mehr benötigen, Sie jedoch diese zur Geltendmachung, Ausübung
              oder Verteidigung von Rechtsansprüchen benötigen oder Sie gemäß Art. 21 DSGVO Widerspruch gegen die
              Verarbeitung eingelegt haben.
              <br />
              <br />
              e. Recht zum Widerspruch gegen bestimmte Datenverarbeitungen (Art. 21 DSGVO)
              <br />
              <br />
              Im Fall einer Verarbeitung personenbezogener Daten zur Wahrnehmung berechtigter Interessen (Art. 6 Abs. 1
              lit. f DSGVO), können Sie der Verarbeitung der Sie betreffenden personenbezogenen Daten jederzeit mit
              Wirkung für die Zukunft widersprechen.
              <br />
              <br />
              Im Fall des Widerspruchs haben wir jede weitere Verarbeitung Ihrer Daten zu den vorgenannten Zwecken zu
              unterlassen.
              <br />
              <br />
              f. Recht auf Widerruf der datenschutzrechtlichen Einwilligungserklärung
              <br />
              <br />
              Sie haben das Recht, Ihre datenschutzrechtliche Einwilligungserklärung jederzeit mit Wirkung für die
              Zukunft zu widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der
              Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.
              <br />
              <br />
              g. Recht auf Beschwerde bei einer Aufsichtsbehörde
              <br />
              <br />
              Wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten durch uns
              gegen die DSGVO verstößt, haben Sie das Recht auf Beschwerde beim Datenschutzbeauftragten sowie bei einer
              Aufsichtsbehörde, insbesondere in dem Mitgliedstaat Ihres gewöhnlichen Aufenthaltsorts, Ihres
              Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes.
              <br />
              <br />
              h. Weitere Informationen zu Ihren Rechten
              <br />
              <br />
              Weitere Informationen zu Ihren Rechten in Bezug auf Ihre personenbezogenen Daten finden Sie bspw. bei der
              Europäischen Kommission unter
              <br />
              <br />
              <Link href='https://ec.europa.eu/info/law/law-topic/data-protection/reform/rights-citizens_de'>
                https://ec.europa.eu/info/law/law-topic/data-protection/reform/rights-citizens_de
              </Link>
            </Text>

            <Heading as='h3' pt={4} fontSize={['md', 'lg', 'lg']}>
              4.8.7. Besteht eine Pflicht zur Bereitstellung von Daten?
            </Heading>
            <Text>
              Im Rahmen unserer Geschäftsbeziehung mit dem Vermittler ist es notwendig, dass Sie diejenigen
              personenbezogenen Daten bereitstellen, die für die jeweilige Leistungserbringung erforderlich sind. Ohne
              diese Daten werden wir in der Regel nicht in der Lage sein, den Vertrag mit Ihrem Vermittler auszuführen.
            </Text>

            <Heading as='h3' pt={4} fontSize={['md', 'lg', 'lg']}>
              4.8.8. Gibt es eine automatisierte Entscheidungsfindung?
            </Heading>
            <Text>
              Zur Erbringung unserer jeweiligen Leistungen nutzen wir keine automatisierte Entscheidungsfindung
              einschließlich Profiling gemäß Art. 22 DSGVO.
            </Text>

            <Heading as='h3' pt={4} fontSize={['md', 'lg', 'lg']}>
              4.8.9. Zinsrechner
            </Heading>
            <Text>
              Wir geben Ihnen auf unserer Website die Möglichkeit, einen ersten beispielhaften Zinssatz für Ihre
              Baufinanzierung zu berechnen. Dabei werden die von Ihnen in die Eingabemaske eingegebenen Daten an uns
              übermittelt und gespeichert: Art des finanzierten Projekts, Art der Immobilie, Nutzungsart der Immobilie,
              Kaufpreis, Modernisierungskosten, Eigenkapital, Postleitzahl der Immobilie, Postleitzahl Ihres aktuellen
              Wohnortes, Maklergebühr, Darlehensrate, Tilgungssatz, Sollzinsbindungszeitraum.
              <br />
              <br />
              Die Daten werden ausschließlich zur Berechnung des beispielhaften Baufinanzierungszinssatzes verwendet. Im
              Rahmen der Zinssatzberechnung werden Ihre Daten dabei auch an die Prohyp GmbH, Domagkstraße 34, 80807
              München weitergegeben. Die Datenschutzerklärung der Prohyp GmbH finden Sie entweder im Online-Angebot der
              Prohyp GmbH unter www.prohyp.de/datenschutz/ oder auf dieser Website bei Aufruf des Onlineantrags unter
              dem Button „Datenschutzerklärung der Prohyp GmbH“. Zusätzlich erfassen wir Ihre IP-Adresse und den
              Zeitpunkt der Zinsberechnung.
              <br />
              <br />
              Die Verarbeitung der vorstehenden personenbezogenen Daten dient allein zur Beantwortung Ihrer Anfrage.
              <br />
              <br />
              Die Verarbeitung weiterer personenbezogener Daten, die durch die Verwendung des auf unserer Website
              vorgehaltenen Zinsrechners anfallen, dient zur Verhinderung des Missbrauchs sowie zur Sicherstellung der
              Sicherheit unserer informationstechnischen Systeme.
              <br />
              <br />
              Hierin liegt auch unser berechtigtes Interesse an der Verarbeitung Ihrer personenbezogenen Daten. Soweit
              Sie uns hierfür eine Einwilligung erteilt haben, ist Rechtsgrundlage für die Verarbeitung dieser Daten
              Art. 6 Abs. 1 Satz 1 lit. a) DSGVO, im Übrigen ist Rechtsgrundlage für die Verarbeitung dieser Daten Art.
              6 Abs. 1 Satz 1 lit. f) DSGVO.
              <br />
              <br />
              Die Daten werden vorbehaltlich gesetzlicher Aufbewahrungsfristen gelöscht, sobald sie für die Erreichung
              des Zwecks ihrer Erhebung nicht mehr erforderlich sind. Der Verarbeitung Ihrer personenbezogenen Daten
              können Sie jederzeit widersprechen. Eine uns erteilte Einwilligung können Sie jederzeit widerrufen. Der
              Verarbeitung Ihrer personenbezogenen Daten können Sie jederzeit widersprechen. Den Widerruf oder den
              Widerspruch können Sie durch Übersendung einer E-Mail an unsere oben genannte E-Mail-Adresse erklären.
            </Text>

            <Heading as='h3' pt={4} fontSize={['md', 'lg', 'lg']}>
              4.8.10 Onlineantrag
            </Heading>
            <Text>
              Wir bieten Ihnen auf unserer Website die Möglichkeit, einen Onlineantrag zur Baufinanzierung zu stellen.
              Dabei werden die von Ihnen in die Eingabemaske eingegebenen Daten an uns übermittelt und gespeichert:
              Daten zum Finanzierungsvorhaben: Finanzierungsgrund, Immobilientyp, Immobiliennutzung, Postleitzahl der
              Immobilie; Daten zu Ihrer Person: Beschäftigungsverhältnis, Haushaltsnettoeinkommen (Monat); Ihre
              Kontaktdaten: Anrede, Titel, Vorname, Name, Postleitzahl, E-Mail, Telefonnummer (tagsüber).
              <br />
              <br />
              Die Daten werden ausschließlich zur Bearbeitung Ihres Antrags verwendet. Diese Daten werden im Rahmen des
              Onlineantrages auch an die Prohyp GmbH weitergegeben. Die Datenschutzerklärung der Prohyp GmbH finden Sie
              entweder im Online-Angebot der Prohyp GmbH unter www.prohyp.de/datenschutz/ oder auf dieser Website im
              Onlineantragsformular unter dem Button &quot;Datenschutzerklärung der Prohyp GmbH&quot;. Zusätzlich
              erfassen wir Ihre IP-Adresse und den Zeitpunkt der Antragstellung.
              <br />
              <br />
              Die Verarbeitung der vorstehenden personenbezogenen Daten dient allein zur Bearbeitung Ihres Antrags.
              <br />
              <br />
              Die Verarbeitung weiterer personenbezogener Daten, die durch die Verwendung des auf unserer Website
              vorgehaltenen Onlineantrags anfallen, dient zur Verhinderung des Missbrauchs sowie zur Sicherstellung der
              Sicherheit unserer informationstechnischen Systeme.
              <br />
              <br />
              Hierin liegt auch unser berechtigtes Interesse an der Verarbeitung Ihrer personenbezogenen Daten. Soweit
              Sie hierfür eine Einwilligung erteilt haben, ist Rechtsgrundlage für die Verarbeitung dieser Daten Art. 6
              Abs. 1 Satz 1 lit. a) DSGVO. Im Übrigen ist Rechtsgrundlage für die Verarbeitung dieser Daten Art. 6 Abs.
              1 Satz 1 lit. f) DSGVO.
              <br />
              <br />
              Die Daten werden vorbehaltlich gesetzlicher Aufbewahrungsfristen gelöscht, sobald sie für die Erreichung
              des Zwecks ihrer Erhebung nicht mehr erforderlich sind. Für den Fall, dass es im Anschluss an den
              Onlineantrag zum Abschluss eines Immobilienfinanzierungsvertrages kommt, werden die Daten zunächst
              weiterhin gespeichert und in die Kundenakte überführt. Ansonsten endet das Antragsverfahren mit der
              Ablehnung des Finanzierungsantrags. Die Daten werden in diesem Fall nach Ablauf der gesetzlichen
              Aufbewahrungsfristen gelöscht. Eine Löschung erfolgt nicht, wenn eine weitere Verarbeitung und Speicherung
              Ihrer personenbezogenen Daten im Einzelfall zur Geltendmachung, Ausübung oder Verteidigung von
              Rechtsansprüchen erforderlich ist. In diesem Fall haben wir ein berechtigtes Interesse an der weiteren
              Verarbeitung und Speicherung Ihrer personenbezogenen Daten. Rechtsgrundlage ist dann Art. 6 Abs. 1 Satz 1
              lit. f) DSGVO.
              <br />
              <br />
              Eine uns erteilte Einwilligung können sich jederzeit widerrufen. Der Verarbeitung Ihrer personenbezogenen
              Daten können Sie jederzeit widersprechen. Insbesondere haben Sie jederzeit die Möglichkeit, Ihren
              Finanzierungsantrag zurückzuziehen. Es besteht keine gesetzliche oder vertragliche Pflicht zur
              Bereitstellung von Daten. Wir weisen Sie jedoch daraufhin, dass wir ohne diese Daten den
              Finanzierungsantrag nicht bearbeiten und eine Baufinanzierung nicht vermitteln können. Selbiges gilt im
              Fall eines gegen die Verarbeitung Ihrer Daten gerichteten Widerspruchs. Die über Sie gespeicherten Daten
              können Sie jederzeit ändern lassen.
            </Text>
          </VStack>

          <VStack alignItems='flex-start'>
            <Heading as='h2' pt={8} fontSize={['md', 'lg', 'lg', 'xl']}>
              5. Wer Ihre Daten empfängt und wann eine Übermittlung in Drittländer erfolgt
            </Heading>
            <Text>
              In den folgenden Unterpunkten erklären wir, wem wir Ihre Daten mitteilen und wann wir eine Übermittlung in
              sog. Drittländer vornehmen. Drittländer sind solche Länder, die außerhalb des europäischen
              Wirtschaftsraums liegen. Intern werden Ihre Daten bei uns von mehreren Abteilungen verarbeitet. An externe
              Dienstleister übermitteln wir Daten vor allem, da wir manche Leistungen nicht oder nicht sinnvoll selbst
              erbringen können. Wir haben externe Dienstleister, die wir für alle unsere Datenverarbeitungen einsetzen
              und externe Dienstleister, an die nur dann Daten gegeben werden, wenn Sie sich für eine bestimmte
              Vermittlung entscheiden.
            </Text>
            <Text>
              <strong>a) Interne Empfänger und allgemeine externe Dienstleister</strong> <br />
              <br />
              Intern haben wir Zugriff auf Ihre Daten, um die oben genannten Zwecke zu erfüllen. Zudem setzen wir
              externe Dienstleister ein, um die Daten zu diesen Zwecken zu verarbeiten. Diese externen Dienstleister
              sind vor allem Anbieter von IT-Dienstleistungen und Telekommunikation sowie Telefonnummern- und
              Adressvalidierungsdienste. Außerdem setzen wir zum technischen Versand unseres E-Mail-Newsletters einen
              externen Dienstleister (cleverreach) ein.
              <br />
              CleverReach GmbH & Co. KG
              <br />
              <br />
              Schafjückenweg 2<br />
              <br />
              26180 Rastede
              <br />
              <br />
              Deutschland
              <br />
              <br />
              Umsatzsteuer-Identnummer: DE230180364
              <br />
              <br />
              Handelsregister: Amtsgericht Oldenburg / HRA 4020
              <br />
              <br />
              Vertreten durch:
              <br />
              <br />
              CRASH Verwaltungs GmbH | HRB 210079 Oldenburg (Oldb.)
              <br />
              <br />
              Schafjückenweg 2<br />
              <br />
              26180 Rastede/Deutschland
              <br />
              <br />
              Geschäftsführer: Sebastian Strzelecki, Jens Klibingat & Sebastian Schwarz
              <br />
              <br />
              Aufsichtsrat: Rolf Hilchner & Heinz-Wilhelm Bogena
              <br />
              <br />
              Tel.: +49 (0) 4402 97390-00
              <br />
              <br />
              Fax: +49 (0) 4402 97390-99
              <br />
              <br />
            </Text>
            <Heading as='h2' pt={8} fontSize={['md', 'lg', 'lg', 'xl']}>
              5.1. Ablauf der Anfrage über Rechner, Anfrage- oder Kontaktformular
            </Heading>
            <Text>
              Fordern Sie über eines unserer Formulare nähere Informationen oder ein Beratungsgespräch zu einer
              Versicherung, Finanzierung oder einer anderen Finanzdienstleistung an, so erbringen wir diese
              Dienstleistung nicht immer selbst. Da wir nicht deutschlandweit Vorort beraten können, übermitteln wir
              Ihre personenbezogenen Daten dann ggf. um die von Ihnen gewünschte Vermittlungs- Beratungsleistung
              erbringen können, hierzu evtl. an ausgewählte Partner. Entweder unmittelbar an einen geeigneten externen
              Experten/Expertenpool oder an ein Kooperationsunternehmen weiter, das den geeigneten Experten im Auftrag
              von Zins-runter.de auswählt. Die Kooperationsunternehmen verwenden die übermittelten Daten, um Sie an
              einen zu Ihren Angaben passenden Finanzierungs-, Versicherungs- oder Finanzexperten zu vermitteln und
              kontaktiert Sie per E-Mail um Ihnen den vermittelten Experten vorzustellen. An welchen Experten eine
              Weitergabe der Daten erfolgt, lässt sich vor oder bei Ihrer Anfrage noch nicht voraussagen. Allerdings
              steht fest, dass eine Weitergabe nur an Personen erfolgt, die eine einschlägige Spezialisierung bzw. die
              gewerberechtlichen Vorrausetzungen aufweisen und in der Regel in Ihrem Postleitzahlenbereich tätig sind.
              Der Ihnen so zugeordnete Experte wird Sie daraufhin telefonisch oder auf anderem Weg kontaktieren und
              beraten.
              <br />
              <br />
              Bei Anfragen zur Baufinanzierung werden sich ihr persönlicher Finanzierungsberater und der jeweils
              ausgewählte Finanzierungsgeber Ihre Daten zum Zwecke der Voranfragen, zur Prüfung der Machbarkeit des
              Finanzierungsvorhabens sowie zu Zwecken der Finanzberatung und Betreuung in Finanzfragen gegenseitig
              übermitteln.
              <br />
              <br />
              Der oder die Finanzierungsberater werden mit Ihnen Kontakt aufnehmen und Ihnen dann Ihre individuelle
              Information zukommen lassen. Sollten Sie aufgrund der Tätigkeit eines Finanzierungsberaters Interesse am
              Vertragsschluss bei einem konkreten Anbieter haben, übermittelt der Experte die Daten an die entsprechende
              Stelle bzw. Finanzierungsplattform, Prohyp, Europace oder Maklerpool der den Finanzierungsberater
              unterstützt bei der Geschäftsabwicklung mit den Finanzierungsgebern, Banken oder
              Versicherungsgesellschaften.
            </Text>
            <Text>
              <strong>
                c) Abschluss einer Versicherung in den Bereichen KFZ-Versicherung, Motorradversicherung,
                Reiseversicherung, Au-Pair Versicherung
              </strong>{' '}
              <br />
              <br />
              Für die Versicherungsvermittlung der Sparten Kfz-Versicherung und Motorradversicherung ist die CHECK24
              Vergleichsportal Versicherungen AG, Erika-Mann-Str. 66, 80636 München - tätig als Versicherungsmakler mit
              Erlaubnispflicht nach 34d Abs.1 der Gewerbeordnung (GewO), Registrierungsnummer: D-P105-1W8WS-19. IHK für
              München & Oberbayern, Balanstr. 55-59, 81541 München - zuständig.
              <br />
              <br />
              Für die Versicherungsvermittlung der Sparten Reiseversicherung, Au-Pair Versicherung, ist die Würzburger
              Versicherungs-AG Handelsregister: Amtsgericht Würzburg, HRB 3500 USt-Id.Nr.: DE813841940 Anschrift:
              Bahnhofstrasse 11 D - 97070 Würzburg Tel.: 0931-2795-0 Fax: 0931-2795-2 90 e-mail: info@travelsecure.de -
              zuständig.
              <br />
              <br />
              Für die Versicherungsvermittlung der Sparte Au-Pair Versicherung, ist die Care Concept AG Am
              Herz-Jesu-Kloster 20 - 53229 Bonn Tel.: 0228 977 35 - 0 Fax: 0228 977 35 - 35 - zuständig.
              <br />
              <br />
              Abschluss einer Versicherung in den Bereichen Bauleistungsversicherung, Glasbruch, Hausrat, Photovoltaik,
              Rechtsschutz, Tier-OP-Versicherung, Unfallversicherung, Wohngebäude, Private Haftpflichtrisiken,
              Bauherrenhaftpflicht, Bootsversicherung, Gewässerschadenhaftpflicht, Haus- und Grundbesitzerhaftpflicht,
              Hundehaftpflicht, Pferdehalterhaftpflicht, Privathaftpflicht, Veranstaltungshaftpflicht ,
              Zusatzversicherung - Ambulant / Heilpraktiker, Sehhilfen & Vorsorge, Zusatzversicherung - Krankentagegeld,
              Zusatzversicherung - Stationär / Krankenhaus, Zusatzversicherung - Zahn / Zahnbehandlung, Risikoleben,
              Sterbegeld, Anhänger, LKW, Wohnmobile, Wohnwagen, Gewerbliche Versicherungen, Betriebshaftpflicht,
              Inventarversicherung, PKW (gewerbliche Nutzung), Rechtsschutz für Firmen und Vermögenschadenhaftpflicht
              <br />
              <br />
              In diesen Versicherungssparten nutzt unsere Website die Vergleichsrechner sowie ein Kundenportal der Firma
              blau direkt GmbH & Co.KG, Kaninchenborn 31, 23560 Lübeck Deutschland. Mit diesen Vergleichsrechnern ist
              eine Berechnung und Gegenüberstellung sowie der Abschluss von verschiedenen Versicherungstarifen möglich.
              Das Kundenportal bietet eine Übersicht über bestehende Verträge und zusätzliche Services. Wenn Sie bei
              Nutzung der Vergleichsrechners personenbezogene Daten angeben, erfolgt die Erhebung dieser Daten durch
              blau direkt. Blau direkt verarbeitet Ihre Daten im Einklang mit den europäischen Datenschutzbestimmungen.
              Ausführliche Informationen zum Datenschutz und zu Ihren Rechten bzgl. der Verarbeitung Ihrer Daten können
              Sie jederzeit in der Datenschutzerklärung von blau direkt einsehen:{' '}
              <Link href='https://blaudirekt.de/datenschutz/'>https://blaudirekt.de/datenschutz/</Link>
            </Text>
          </VStack>

          <VStack alignItems='flex-start'>
            <Heading as='h2' pt={8} fontSize={['md', 'lg', 'lg', 'xl']}>
              6. Wie lange Ihre Daten gespeichert werden
            </Heading>
            <Text>
              Wie lange Ihre Daten gespeichert werden, richtet sich nach der Rechtsgrundlage der Datenverarbeitung:
              <br />
              <br />
              Daten, die auf vertraglicher Grundlage gespeichert werden und einen einmaligen Leistungsaustausch zum
              Gegenstand haben - wie unsere Vermittlungsleistungen - werden aufgrund der gesetzlichen Verjährungsfristen
              für drei Jahre nach dem Schluss des Jahres aufbewahrt in dem der Vertrag abgeschlossen wurde.
              <br />
              <br />
              Haben Sie unseren E-Mail-Newsletter abonniert, sei es aufgrund Ihrer Einwilligung, oder weil Sie Kunde bei
              uns sind, speichern wir die für die Versendung erforderlichen Daten bis zu Ihrer Abmeldung. Daten, die wir
              aufgrund eines berechtigten Interesses verarbeiten, speichern wir für drei Jahre ab der Erhebung der
              Daten.
              <br />
              <br />
              Es kann erforderlich sein, dass wir aufgrund unserer gesetzlichen Pflichten gewisse Daten für einen
              längeren Zeitraum von sechs bis zehn Jahren vorhalten müssen. In diesem Zeitraum findet keine Nutzung der
              Daten zu anderen Zwecken als der Archivierung statt.
              <br />
              <br />
              Nach Ablauf der letzten der o.g. Speicherfristen, bleiben die Daten für bis zu drei weitere Monate
              gespeichert, damit wir eine technisch gründliche und planmäßige Löschung umsetzen können. Innerhalb dieser
              drei Monate werden die Daten nicht mehr zu anderen Zwecken verarbeitet.
            </Text>
          </VStack>

          <VStack alignItems='flex-start'>
            <Heading as='h2' pt={8} fontSize={['md', 'lg', 'lg', 'xl']}>
              7. Ihre Betroffenenrechte und Ihr Widerruf einer Einwilligun
            </Heading>
            <Text>
              Die Datenschutz-Grundverordnung garantiert Ihnen gewisse Rechte, die Sie uns gegenüber geltend machen
              können. Sie haben das Recht:
            </Text>
            <UnorderedList listStylePosition='inside'>
              <ListItem>
                von uns eine Bestätigung darüber zu verlangen, ob Sie betreffende personenbezogene Daten verarbeitet
                werden und wenn ja, die näheren Umstände der Datenverarbeitung (Art. 15 DS-GVO: Auskunftsrecht der
                betroffenen Person),
              </ListItem>
              <ListItem>
                von uns unverzüglich die Berichtigung Sie betreffender unrichtiger personenbezogener Daten zu verlangen.
                Dabei haben Sie unter Berücksichtigung der Zwecke der Verarbeitung auch das Recht, die Vervollständigung
                unvollständiger personenbezogener Daten – auch mittels einer ergänzenden Erklärung – zu verlangen (Art.
                16 DS-GVO: Recht auf Berichtigung),
              </ListItem>
              <ListItem>
                von uns zu verlangen, dass Sie betreffende personenbezogene Daten unverzüglich gelöscht werden (Art. 17
                DS-GVO: Recht auf Löschung),
              </ListItem>
              <ListItem>
                von uns die Einschränkung der Verarbeitung zu verlangen (Art. 18 DS-GVO: Recht auf Einschränkung der
                Verarbeitung),
              </ListItem>
              <ListItem>
                im Falle der Verarbeitung aufgrund einer Einwilligung oder zur Erfüllung eines Vertrags, die Sie
                betreffenden personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten,
                gängigen und maschinenlesbaren Format zu erhalten, und diese Daten einem anderen Verantwortlichen ohne
                Behinderung durch uns zu übermitteln oder die Daten direkt an den anderen Verantwortlichen zu
                übermitteln, soweit dies technisch machbar ist (Art. 20 DS-GVO: Recht auf Datenübertragbarkeit),
              </ListItem>
              <ListItem>
                aus Gründen, die sich aus ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie
                betreffender personenbezogener Daten, die für die Wahrung einer Aufgabe im öffentlichen Interesse
                erforderlich ist, oder die in Ausübung öffentlicher Gewalt erfolgt, Widerspruch einzulegen (Art. 21
                DS-GVO: Widerspruchsrecht),
              </ListItem>
              <ListItem>
                jederzeit Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres
                Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, einzulegen, wenn Sie der
                Ansicht sind, dass die Verarbeitung der sie betreffenden personenbezogenen Daten gegen geltendes Recht
                verstößt (Art. 77 DSGVO i. V. m. § 19 BDSG: Recht auf Beschwerde bei einer Aufsichtsbehörde).
              </ListItem>
            </UnorderedList>
            <Text>
              Wenn Sie uns eine Einwilligung erteilt haben, haben Sie schließlich das Recht, Ihre Einwilligung jederzeit
              zu widerrufen. Alle Datenverarbeitungen die wir bis zu Ihrem Widerruf vorgenommen haben, bleiben in diesem
              Fall rechtmäßig. Zu diesem Zweck können Sie einfach den in jeder Mail enthaltenen Link anklicken und sich
              von dem E-Mail-Dienst abmelden oder eine Nachricht an service@zins-runter.de schicken. Wenn Sie uns in
              dieser Nachricht mitteilen, künftig keine E-Mails erhalten zu wollen, werden wir an die von Ihnen
              angegebene E-Mail-Adresse keine Nachrichten mehr versenden. Hiervon unberührt sind E-Mails, die wir Ihnen
              zur Erfüllung eines etwaig mit Ihnen geschlossenen Vertrags übermitteln (zum Beispiel von Ihnen angefragte
              Vergleichsangebote).
            </Text>
          </VStack>

          <VStack alignItems='flex-start'>
            <Heading as='h2' pt={8} fontSize={['md', 'lg', 'lg', 'xl']}>
              8. Ihre Pflicht zur Bereitstellung von personenbezogenen Daten
            </Heading>
            <Text>
              Sie haben keine vertragliche, oder gesetzliche Pflicht uns personenbezogene Daten bereitzustellen.
              Allerdings sind wir ohne die von Ihnen mitgeteilten Daten nicht in der Lage, Ihnen unsere vertraglichen
              Leistungen und Services anzubieten.
            </Text>
          </VStack>

          <VStack alignItems='flex-start'>
            <Heading as='h2' pt={8} fontSize={['md', 'lg', 'lg', 'xl']}>
              9. Sicherheit
            </Heading>
            <Text>
              Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um zu gewährleisten, dass Ihre
              persönlichen Daten vor Verlust, unrichtigen Veränderungen oder unberechtigten Zugriffen Dritter geschützt
              sind. In jedem Fall haben von unserer Seite nur berechtigte Personen Zutritt zu Ihren persönlichen Daten,
              und dies auch nur insoweit, als es im Rahmen der oben genannten Zwecke erforderlich ist. Die
              Sicherheitsmaßnahmen werden ständig den verbesserten technischen Möglichkeiten angepasst.
              <br />
              <br />
              Sie haben selbstverständlich die Möglichkeit, Ihr Einverständnis jederzeit zu widerrufen. Den Widerruf
              können Sie schriftlich an die Adresse SIGURON GmbH Fürstenrieder Str. 279a 81377 München (Zins-runter.de)
              richten. Es genügt jedoch auch eine E-Mail an{' '}
              <Link href='mailto: service@zins-runter.de'>service@zins-runter.de</Link>. Für den Fall, dass Sie Ihr
              Einverständnis widerrufen, bitten wir um Verständnis dafür, dass wir bestimmte Dienste nicht oder nicht
              vollständig oder nicht störungsfrei erbringen können.
            </Text>
          </VStack>

          <VStack alignItems='flex-start' width='100%'>
            <Heading as='h2' pt={8} fontSize={['md', 'lg', 'lg', 'xl']}>
              10. Welche internetspezifischen Datenverarbeitungen anfallen
            </Heading>
            <Text>Individuelle Einstellungen</Text>{' '}
            <Button id='ot-sdk-btn' className='ot-sdk-show-settings'>
              Individuelle Einstellungen
            </Button>
            <Text>
              <strong>a) Hinweise zu Cookies</strong>
              <br />
              Im Rahmen unserer Internetseiten verwenden wir so genannte Cookies. Hierbei handelt es sich um kleine
              Dateien, die auf Ihrer Festplatte gespeichert werden und durch welche uns bestimmte Informationen
              zufließen. Bei diesen Informationen handelt es sich insbesondere um den Login (Ihren Besuch), das Datum
              und die Zeit Ihres Besuches bei uns, die Cookie-Nummer sowie die URL der Website, von der aus Sie auf
              unsere Angebotsseiten gelangt sind. Die entsprechenden Daten werden dabei auf Servern unseres
              Dienstleisters gespeichert.
              <br />
              <br />
              Der Einsatz von Cookies ermöglicht es uns zunächst, Sie zu erkennen. Darüber hinaus können wir durch die
              Cookies unser Angebot optimal an Ihre individuellen Bedürfnisse anpassen. Außerdem verwenden wir Cookies,
              um die statistische Häufigkeit der Aufrufe der verschiedenen Seiten unseres Internet-Angebots sowie die
              allgemeine Navigation aufzuzeichnen.
              <br />
              <br />
              Falls Sie die Verwendung von Cookies jedoch unterbinden wollen, besteht dazu bei Ihrem Browser die
              Möglichkeit, die Annahme und Speicherung neuer Cookies zu verhindern. Unser Angebot können Sie auch in
              diesem Fall nutzen, doch kann es zu einer Einschränkung des Leistungsumfangs kommen. Um herauszufinden,
              wie dies bei dem von Ihnen verwendeten Browser funktioniert, benutzen Sie bitte die Hilfe-Funktion des
              jeweiligen Browsers oder wenden Sie sich an den Hersteller. Wir empfehlen Ihnen jedoch, die
              Cookies-Funktionen eingeschaltet zu lassen, da Ihnen nur dann das hohe Niveau des Benutzerkomforts, um das
              wir uns ständig bemühen, in vollem Umfang zu Gute kommt.
            </Text>
            <Text>
              <strong>b) Bing Ads</strong>
              <br />
              Wir verwenden das Conversion Tracking “Bing Ads” der Microsoft Corporation, One Microsoft Way, Redmond, WA
              98052-6399, USA (“Microsoft”). Hierfür speichert Microsoft einen Cookie auf Ihrem Endgerät, wenn Sie über
              eine Microsoft Bing Anzeige zu uns gelangt sind. So können wir erkennen, dass jemand über eine Anzeige des
              Bing-Netzwerks zu einer bestimmten Zielseite gelangt ist. Es werden uns dabei nur die allgemeine Anzahl an
              Nutzern und keine persönlichen Informationen zu Ihrer Identität mitgeteilt.
              <br />
              <br />
              Sie können der Erhebung widersprechen, indem Sie die entsprechenden Browser-Einstellungen vornehmen.
              Weitere Informationen zum Datenschutz und zu den eingesetzten Cookies bei Microsoft Bing finden Sie auf
              der Website von Microsoft:{' '}
              <Link href='https://privacy.microsoft.com/de-de/privacystatement'>
                https://privacy.microsoft.com/de-de/privacystatement
              </Link>
            </Text>
            <Text>
              <strong>c) Facebook Pixel</strong> <br />
              Wir verwenden das Facebook-Pixel der Facebook Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland auf
              unseren Seiten. Dieses bietet mehrere Funktionen an, von der wir die Funktion Custom Audiences benutzen.
              Hiermit kann Ihnen - wenn Sie ein Nutzerkonto bei Facebook haben - auf Facebook gezielt unsere Werbung
              angezeigt werden. Das Facebook Pixel stellt hierzu eine direkte Verbindung ihrer Seite mit den
              Facebook-Servern her. Dabei werden Ihre Nutzungsdaten an Facebook zu Analyse- und Marketingzwecken
              übermittelt. Haben Sie ein Facebook-Konto, so können diese Daten Ihnen zugeordnet werden. Durch das
              Tracking können Ihre Aktivitäten von Facebook so unter Umständen über mehrere Seiten verfolgt werden. Wir
              haben keinerlei Einfluss auf eventuelle Verarbeitungen von personenbezogenen Daten, da diese allein im
              Verantwortungsbereich von Facebook liegen. Nähere Informationen zur Erhebung und Nutzung der Daten durch
              Facebook finden Sie in den Datenschutzhinweisen von Facebook unter{' '}
              <Link href='https://facebook.com/policy.php'>https://facebook.com/policy.php</Link>. Wenn Sie der Nutzung
              von Facebook Website Custom Audiences widersprechen möchten, können Sie die entsprechenden Einstellungen
              in Ihrem Facebook Nutzerkonto vornehmen unter:{' '}
              <Link href='https://facebook.com/ads/website_custom_audiences/'>facebook.com custom_audiences</Link>
            </Text>
            <br />
            <Text>
              Dieses Angebot verwendet Social Plugins („Plugins“) des sozialen Netzwerkes facebook.com, welches von der
              Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA betrieben wird („Facebook“). Die Plugins
              sind an einem der Facebook-Logos erkennbar (weißes „f“ auf blauer Kachel oder ein „Daumen hoch“-Zeichen)
              oder sind mit dem Zusatz „Facebook Social Plugin“ gekennzeichnet. Die Liste und das Aussehen der Facebook
              Social Plugins kann hier eingesehen werden:{' '}
              <Link href='https://developers.facebook.com/docs/plugins/'>
                https://developers.facebook.com/docs/plugins/
              </Link>
              .
              <br />
              <br />
              Wenn ein Nutzer eine Website dieses Angebots aufruft, die ein solches Plugin enthält, baut sein Browser
              eine direkte Verbindung mit den Servern von Facebook auf. Der Inhalt des Plugins wird von Facebook direkt
              an Ihren Browser übermittelt und von diesem in die Website eingebunden. Der Anbieter hat daher keinen
              Einfluss auf den Umfang der Daten, die Facebook mit Hilfe dieses Plugins erhebt und informiert die Nutzer
              daher entsprechend seinem Kenntnisstand:
              <br />
              <br />
              Durch die Einbindung der Plugins erhält Facebook die Information, dass ein Nutzer die entsprechende Seite
              des Angebots aufgerufen hat. Ist der Nutzer bei Facebook eingeloggt, kann Facebook den Besuch seinem
              Facebook-Konto zuordnen. Wenn Nutzer mit den Plugins interagieren, zum Beispiel den Like Button betätigen
              oder einen Kommentar abgeben, wird die entsprechende Information von Ihrem Browser direkt an Facebook
              übermittelt und dort gespeichert. Falls ein Nutzer kein Mitglied von Facebook ist, besteht trotzdem die
              Möglichkeit, dass Facebook seine IP-Adresse in Erfahrung bringt und speichert. Laut Facebook wird in
              Deutschland nur eine anonymisierte IP-Adresse gespeichert.
              <br />
              <br />
              Zweck und Umfang der Datenerhebung und die weitere Verarbeitung und Nutzung der Daten durch Facebook sowie
              die diesbezüglichen Rechte und Einstellungsmöglichkeiten zum Schutz der Privatsphäre der Nutzer können
              diese den Datenschutzhinweisen von Facebook entnehmen:{' '}
              <Link href='https://facebook.com/about/privacy/'>https://facebook.com/about/privacy/</Link>.
              <br />
              <br />
              Wenn ein Nutzer Facebookmitglied ist und nicht möchte, dass Facebook über dieses Angebot Daten über ihn
              sammelt und mit seinen bei Facebook gespeicherten Mitgliedsdaten verknüpft, muss er sich vor dem Besuch
              des Internetauftritts bei Facebook ausloggen.
              <br />
              <br />
              Ebenfalls ist es möglich Facebook-Social-Plugins mit Add-ons für Ihren Browser zu blocken, zum Beispiel
              mit dem „Facebook Blocker“.
            </Text>
            <Text>
              <strong>e) Google Analytics</strong>
              <br />
              Diese Website und weitere Online-Angebote von Siguron GmbH benutzen den Webanalysedienst Google Analytics
              und den Dienst Google Remarketing, beides Angebote der Google Inc. („Google“). Durch den Dienst Google
              Remarketing werden Nutzer, die unsere Internetseiten und Onlinedienste bereits besucht und sich für das
              Angebot interessiert haben, durch zielgerichtete Werbung auf den Seiten des Google Partner Netzwerks
              erneut angesprochen. Die Einblendung der Werbung erfolgt durch den Einsatz von Cookies. Mit Hilfe der
              Textdateien kann das Nutzerverhalten beim Besuch der Website analysiert und anschließend für gezielte
              Produktempfehlungen und interessenbasierte Werbung genutzt werden. Auch Google Analytics verwendet
              Cookies. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website (einschließlich
              Ihrer IP-Adresse) werden an einen Server von Google in den USA übertragen und dort gespeichert. Wir setzen
              aber Google Analytics selbstverständlich mit der Funktion anonymizeIP ein, wodurch die IP-Adresse durch
              Maskierung absolut anonymisiert wird.
              <br />
              <br />
              Google wird die Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die
              Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und
              der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen
              gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben ist oder soweit Dritte diese
              Daten im Auftrag von Google verarbeiten. Drittanbieter, einschließlich Google, verwenden die in den
              Cookies gespeicherten Informationen im Rahmen des Dienstes Google Remarketing auch zum Schalten von
              Anzeigen auf anderen Websites auf Grundlage vorheriger Besuche eines Nutzers auf dieser Website. Google
              wird in keinem Fall Ihre ohnehin maskierte IP-Adresse mit anderen Daten von Google in Verbindung bringen.
              <br />
              <br />
              Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software oder
              mittels der Installation eines Browser-Add-ons (abrufbar unter:{' '}
              <Link href='https://tools.google.com/dlpage/gaoptout?hl=de'>
                https://tools.google.com/dlpage/gaoptout?hl=de
              </Link>
              ) verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche
              Funktionen dieser Website vollumfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich
              mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und
              zu dem zuvor benannten Zweck einverstanden.
            </Text>
            <Text>
              <strong>f) Google reCAPTCHA</strong>
              <br />
              Wir verwenden den Google-Dienst reCaptcha, um festzustellen, ob ein Mensch oder ein Computer eine
              bestimmte Eingabe in unserem Kontakt- oder Newsletter-Formular macht. Google prüft anhand folgender Daten,
              ob Sie ein Mensch oder ein Computer sind: IP-Adresse des verwendeten Endgeräts, die Webseite, die Sie bei
              uns besuchen und auf der das Captcha eingebunden ist, das Datum und die Dauer des Besuchs, die
              Erkennungsdaten des verwendeten Browser- und Betriebssystem-Typs, Google-Account, wenn Sie bei Google
              eingeloggt sind, Mausbewegungen auf den reCaptcha-Flächen sowie Aufgaben, bei denen Sie Bilder
              identifizieren müssen. Rechtsgrundlage für die beschriebene Datenverarbeitung ist Art. 6 Abs. 1 lit. f
              Datenschutz-Grundverordnung. Es besteht ein berechtigtes Interesse auf unserer Seite an dieser
              Datenverarbeitung, die Sicherheit unserer Webseite zu gewährleisten und uns vor automatisierten Eingaben
              (Angriffen) zu schützen.
            </Text>
            <Text>
              <strong>g) Google AdWords</strong>
              <br />
              Unsere Webseite nutzt AdWords, eine Technologie von Google.
              <br />
              <br />
              Wir verwenden zum einen das Conversion-Tracking. Das bedeutet, dass wir mittels eines Cookies erkennen
              können, über welche Anzeige des AdWords-Netzwerk Sie zu uns gelangt sind und welches Verhalten so auf
              unserer Seite ausgelöst wurde. Für uns ergibt sich so ein besseres Bild über die Wirksamkeit unserer
              Anzeigen und wir nutzen die Daten für Zwecke der Statistik und Marktforschung. Diese Daten sind für uns
              anonym. Das bedeutet, wir können Sie nicht Ihrer Person zuordnen. Unsere Website nutzt zum anderen die
              Remarketing-Funktion von Google Adwords. Diese Funktion hilft uns dabei unseren Besuchern
              interessenbezogene Werbeanzeigen zu präsentieren. Ihr Browser speichert dazu Cookies auf Ihrem Endgerät,
              die es uns ermöglichen Sie wiederzuerkennen, wenn Sie Websites aufrufen, die dem Werbenetzwerk von Google
              angehören. So können Ihnen Werbeanzeigen präsentiert werden, die sich auf Inhalte beziehen, welche Sie
              sich zuvor auf anderen Websites angesehen haben. Wir erhalten hierdurch keine personenbezogenen Daten von
              Ihnen.
              <br />
              <br />
              Sie können die Remarketing Funktion deaktivieren, indem Sie die entsprechenden Einstellungen unter
              <br />
              <Link href='http://www.google.com/settings/ads'>http://www.google.com/settings/ads</Link>
              <br />
              vornehmen.
            </Text>
            <Text>
              <strong>h) Twitter</strong>
              <br />
              Dieses Angebot nutzt die Schaltflächen des Dienstes Twitter. Diese Schaltflächen werden angeboten durch
              die Twitter Inc., 795 Folsom St., Suite 600, San Francisco, CA 94107, USA. Sie sind an Begriffen wie
              „Twitter“ oder „Folge“, verbunden mit einem stilisierten blauen Vogel, erkennbar. Mit Hilfe der
              Schaltflächen ist es möglich, einen Beitrag oder eine Seite dieses Angebotes bei Twitter zu teilen oder
              dem Anbieter bei Twitter zu folgen.
              <br />
              <br />
              Wenn ein Nutzer eine Website dieses Internetauftritts aufruft, die einen solchen Button enthält, baut sein
              Browser eine direkte Verbindung mit den Servern von Twitter auf. Der Inhalt der Twitter-Schaltflächen wird
              von Twitter direkt an den Browser des Nutzers übermittelt. Der Anbieter hat daher keinen Einfluss auf den
              Umfang der Daten, die Twitter mit Hilfe dieses Plugins erhebt und informiert die Nutzer entsprechend
              seinem Kenntnisstand. Nach diesem werden lediglich die IP-Adresse des Nutzers sowie die URL der jeweiligen
              Website beim Bezug des Buttons mit übermittelt, aber nicht für andere Zwecke als die Darstellung des
              Buttons genutzt.
              <br />
              <br />
              Weitere Informationen hierzu finden sich in der Datenschutzerklärung von Twitter unter{' '}
              <Link href='https://twitter.com/de/privacy'>https://twitter.com/de/privacy</Link>.
            </Text>
            <Text>
              <strong>i) Yandex</strong> <br />
              Wir verwenden Yandex, einen Webanalyse- und Trackingdienst der Firma Yandex LLC. 16, Lva Tolstogo St.,
              Moscow 119021, Russland. Yandex verwendet Cookies, um Ihre Nutzung unserer Website zu analysieren und für
              uns Reports darüber zusammenzustellen. Dabei werden Ihre Daten, u.a. auch Ihre IP-Adresse, an einen Server
              in Russland übermittelt, wo Yandex pseudonyme Nutzungsprofile erstellt.
              <br />
              <br />
              Sie können der Erhebung und Speicherung der Daten durch Yandex widersprechen, indem Sie in Ihrem Browser
              die entsprechenden Einstellungen zum Blockieren von Cookies vornehmen. Zudem können Sie das Yandex
              Browser-Add-On installieren. Das Add-on ist abrufbar unter:{' '}
              <Link href='https://yandex.com/support/metrica/general/opt-out.xml'>
                yandex.com/support/metrica/general/opt-out.xml
              </Link>
              .
            </Text>
          </VStack>
        </VStack>
      </ResponsiveContainer>
      {!isPopup && <Box h={10} bgColor='gray.100' />}
    </FullWidthContainer>
  );
};

export default Datenschutz;
