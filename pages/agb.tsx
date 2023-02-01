import { FullWidthContainer, ResponsiveContainer } from '@/components/Containers';
import { Heading, Link, VStack, Text, UnorderedList, ListItem, OrderedList } from '@chakra-ui/react';
import React from 'react';

const AGB = () => {
  return (
    <FullWidthContainer py={[4, 12]} bgColor='gray.100'>
      <ResponsiveContainer>
        <VStack spacing={[4, 6, 10, 12]} alignItems='flex-start' justifyContent='flex-start'>
          <VStack alignItems='flex-start'>
            <Heading as={'h1'} fontSize={['md', 'lg', 'lg', '2xl']}>
              Allgemeine Geschäftsbedingungen für die Vermittlung von Immobilienfinanzierungen und Bauspardarlehen
            </Heading>
            <Text>
              Andere Vergleichsrechner auf dieser Seite unterliegen gesonderten Bedingungen, die Sie{' '}
              <Link
                color='primary.blue'
                fontWeight='semibold'
                _hover={{ textDecoration: 'underline' }}
                href='https://www.versicherungstarife.info/impressum.htm'
              >
                hier aufrufen
              </Link>{' '}
              können.
            </Text>
          </VStack>

          <VStack alignItems={'flex-start'}>
            <Heading as={'h2'} fontSize={['md', 'lg', 'lg', 'xl']}>
              1. Geltungsbereich, vorrangige Abreden, Geltung von Bedingungen von Drittanbietern
            </Heading>
            <VStack alignItems={'flex-start'}>
              <Text>
                1.1. Die nachstehenden Allgemeinen Geschäftsbedingungen (nachfolgend „AGB“) gelten für alle Verträge
                über die Vermittlung und Beratung von Immobiliardarlehen und Bauspardarlehen (nachfolgend „Darlehen“)
                zwischen Interessenten (nachfolgend „Kunde“) und der SIGURON GmbH Fürstenrieder Str. 279a 81377 München.
                Eingetragen im Handelsregister Registergericht München HRB 171981(nachfolgend „SIGURON“) genannt.
              </Text>
              <Text>
                Die SIGURON GmbH vertreten durch den Geschäftsführer Fabio Mancini ist tätig als Versicherungsmakler
                sowie Immobiliendarlehensvermittler mit Erlaubnis nach §34d Absatz 1 und §34i Absatz 1 der
                Gewerbeordnung GewO. Zuständige Aufsichtsbehörde: Industrie- und Handelskammer für München und
                Oberbayern.
              </Text>
            </VStack>
            <VStack alignItems={'flex-start'}>
              <Text>
                1.2. SIGURON schließt Verträge nur mit Verbrauchern im Sinne von § 13 BGB ab, die mindestens das 18.
                Lebensjahr vollendet haben, unbeschränkt geschäftsfähig sind und ausschließlich auf eigene Rechnung
                handeln.
              </Text>
            </VStack>
            <VStack alignItems={'flex-start'}>
              <Text>1.3. Individuelle Abreden zwischen dem Kunden und SIGURON gehen diesen AGB vor.</Text>
            </VStack>
            <VStack alignItems={'flex-start'}>
              <Text>
                1.4. Für bestimmte Leistungen bedient sich SIGURON eines externen Partners, dem Europace-Martplatz
                und/oder der Prohyp Plattform, die eigenständig und eigenverantwortlich Dienstleistungen SIGURON
                gegenüber erbringen. Der Umfang der Leistungen ist in Ziffer 4 aufgeführt.
              </Text>
            </VStack>
          </VStack>

          <VStack alignItems={'flex-start'}>
            <Heading as={'h2'} fontSize={['md', 'lg', 'lg', 'xl']}>
              2. Vertragsschluss, Leistungsgegenstand, Vertragspartner
            </Heading>
            <VStack alignItems={'flex-start'}>
              <Text>
                2.1. Die Tätigkeit der SIGURON beschränkt sich ausschließlich auf die Vermittlung von Vertragsschlüssen
                im Bereich des Darlehens- und Versicherungsgeschäftes. SIGURON erbringt keine Beratungs-, insbesondere
                Rechtsberatungsdienstleistungen. Die SIGURON wird die von dem Kunden mitgeteilten Daten an geeignete
                Kooperationspartner mit dem Ziel der Vermittlung eines Vertragsschlusses zwischen den
                Kooperationspartner und dem Kunden weiterleiten. Der Kunde erklärt sich ausdrücklich damit
                einverstanden. SIGURON wird die vom Kunden mitgeteilten Angaben hinsichtlich des Finanzierungsobjektes
                und seiner persönlichen und wirtschaftlichen Verhältnisse nicht prüfen. Die Prüfung und Bewertung
                obliegt ausschließlich den angesprochenen Kooperationspartnern als mögliche zukünftige Vertragspartner
                des Kunden.
              </Text>
            </VStack>
            <VStack alignItems={'flex-start'}>
              <Text>
                2.2. SIGURON wird die vom Kunden mitgeteilten Angaben hinsichtlich des Finanzierungsobjektes und seiner
                persönlichen und wirtschaftlichen Verhältnisse nicht prüfen. Die Prüfung und Bewertung obliegt
                ausschließlich den angesprochenen Kooperationspartnern als mögliche zukünftige Vertragspartner des
                Kunden.
              </Text>
            </VStack>
            <VStack alignItems={'flex-start'}>
              <Text>
                2.3. SIGURON gewährt dem Kunden selbst keine Darlehen. SIGURON tritt ausschließlich als Vermittler von
                Darlehen auf. Im Falle einer Gewährung eines Darlehens kommt ein Darlehensvertrag ausschließlich
                zwischen dem Kunden und dem jeweiligen Finanzierungspartner zustande. Hierfür gelten die jeweiligen
                Vertragsbedingungen / Allgemeinen Geschäftsbedingungen des jeweiligen Finanzierungspartners.
              </Text>
            </VStack>
            <VStack alignItems={'flex-start'}>
              <Text>2.4. Der Kunde hat keinen Anspruch auf Abschluss eines Darlehensvertrags.</Text>
            </VStack>
          </VStack>

          <VStack alignItems={'flex-start'}>
            <Heading as={'h2'} fontSize={['md', 'lg', 'lg', 'xl']}>
              3. Leistungen von SIGURON, kooperierende Finanzierungspartner
            </Heading>
            <VStack alignItems={'flex-start'}>
              <Text>
                3.1. SIGURON gibt dem Kunden die Möglichkeit, die zur Vermittlung von Darlehen und damit einhergehenden
                notwendigen Daten und Unterlagen über die Europace-Martplatz und/oder der Prohyp Plattform einzugeben.
                SIGURON nutzt für die Zinsberechnung den Europace-Marktplatz und/oder die Prohyp Plattform (siehe Ziffer
                4). Die Daten und Unterlagen des Kunden werden zur reinen Zinsberechnung nicht an die
                Finanzierungspartner weitergeleitet. Dies geschieht erst nach einem Beratungsgespräch mit dem Kunden zur
                Erstellung eines Finanzierungsvorschlags oder Finanzierungsantrags.
              </Text>
            </VStack>
            <VStack alignItems={'flex-start'}>
              <Text>
                3.2. SIGURON erbringt für den Kunden hinsichtlich seiner individuellen Finanzierungsbedürfnisse
                persönliche Vermittlungs- und Beratungsleistungen, nämlich:
              </Text>
              <UnorderedList>
                <ListItem>Analyse individueller Finanzierungsbedürfnisse</ListItem>
                <ListItem>Unterstützung bei der Erfassung von Antragsdaten und -unterlagen</ListItem>
                <ListItem>Ermittlung und Optimierung individueller Konditionen für Darlehen</ListItem>
                <ListItem>Vergleich von Finanzierungsprodukten und Anbietern</ListItem>
                <ListItem>
                  Beratung zu und Vermittlung von alternativen Finanzierungsmöglichkeiten und -produkten
                </ListItem>
                <ListItem>Hilfestellung beim Abschluss von Darlehensverträgen</ListItem>
                <ListItem>
                  Entgegennehmen und Prüfen aller notwendigen Unterlagen für die Vermittlung von Darlehen
                </ListItem>
                <ListItem>
                  Erstellen einer vollständigen Finanzierungs-Akte zur Einreichung bei den Finanzierungspartnern
                </ListItem>
                <ListItem>Unterstützung bei der Umschuldung bestehender Verbindlichkeiten</ListItem>
                <ListItem>Informationen zu bestehenden Darlehensverträgen</ListItem>
                <ListItem>Informationen über aktuelle bzw. neue Angebote und Sonderkonditionen zu Darlehen</ListItem>
                <ListItem>Beratung zu und Vermittlung von Anschlussfinanzierungen und Aufstockungen</ListItem>
                <ListItem>Zusendung des aktuellen elektronischen Kundenmagazins</ListItem>
                <ListItem>Beratung und Vermittlung von Ratenabsicherungen</ListItem>
              </UnorderedList>
              <Text>
                Diese Leistungen dienen ausschließlich der Erleichterung einer selbständigen Entscheidung des Kunden, ob
                und welches Darlehen er über SIGURON vermittelt bekommen und abschließen möchte.
              </Text>
              <Text>
                Die etwaigen Angebote der Kooperationspartner sind max. 30 Tage gültig, es können aber auch kürzere
                Gültigkeitsdauern auftreten.
              </Text>
            </VStack>
            <VStack alignItems={'flex-start'}>
              <Text>
                3.3. Der Kunde ist explizit nicht zum Abschluss eines Darlehensvertrags verpflichtet, auch wenn er
                Vermittlungs- und Beratungsleistungen von SIGURON in Anspruch nimmt.
              </Text>
            </VStack>
            <VStack alignItems={'flex-start'}>
              <Text>
                3.4. SIGURON kann den Kunden zur Erbringung der Vermittlungs- und Beratungsleistungen per E-Mail, per
                SMS oder anderer Kurznachricht, telefonisch oder postalisch kontaktieren.
              </Text>
            </VStack>
            <VStack alignItems={'flex-start'}>
              <Text>
                3.5. SIGURON ist nicht befugt, im Zusammenhang mit dem Vertrag erlangte Kenntnisse an unbeteiligte
                Dritte weiterzugeben, außer eine Weitergabe ist zur Erfüllung von gesetzlichen Anforderungen oder
                vertraglichen Pflichten von SIGURON erforderlich.
              </Text>
            </VStack>
            <VStack alignItems={'flex-start'}>
              <Text>
                In diesem Kundenkonto kann sich der Kunde jederzeit über seine Darlehensanfragen,
                Finanzierungsvorschläge und abgeschlossene Darlehensverträge informieren, seinen persönlichen SIGURON
                Finanzierungsspezialisten kontaktieren oder den im Folgenden beschriebenen Dokumenten-Upload verwenden.
              </Text>
              <Text>
                Der Service ermöglicht es den Nutzern ferner, bei den SIGURON Vergleichen zusätzlich Zeit zu sparen, da
                die bereits einmal eingegebenen Informationen mit einem einfachen Klick komfortabel auch für einen neuen
                Vergleich genutzt werden können. Wichtig ist, dass die SIGURON GmbH, mit Ausnahme von gewissen
                Stammdaten, die in den Nutzungsbedingungen explizit genannt sind, keine in diesem Zusammenhang stehenden
                Daten speichert, sondern lediglich jedes Mal mit Einloggen in das Kundenkonto eine temporäre und
                dynamische Sichtweise auf die Aktivitäten eines Kundenkontonutzers bei den jeweiligen Unternehmen
                innerhalb des SIGURON Verbundes, wie z.B. der SIGURON Vergleichsportal Baufinanzierung GmbH, erstellt
                und diese dem Nutzer anzeigt. Die SIGURON Vergleichsportal Baufinanzierung GmbH verpflichtet sich in
                diesem Fall insofern für die entsprechende Darstellung der Aktivitäten und Serviceangebote für den
                Darlehensbereich im SIGURON Kundenkonto des Kunden.
              </Text>
            </VStack>
          </VStack>

          <VStack alignItems={'flex-start'}>
            <Heading as={'h2'} fontSize={['md', 'lg', 'lg', 'xl']}>
              4. Leistungen von dem Europace-Marktplatz
            </Heading>
            <VStack alignItems={'flex-start'}>
              <Text>
                Der Europace-Marktplatz ist eine europäische Plattform für den Vertrieb von Finanzierungsleistungen und
                ein gemeinschaftliches Angebot der Europace AG und der Hypoport Mortgage Market. Die zugehörigen
                Datenschutzhinweise können hier eingesehen werden:{' '}
                <Link
                  color='primary.blue'
                  fontWeight='semibold'
                  _hover={{ textDecoration: 'underline' }}
                  href='https://neu.europace.de/datenschutzerklaerung/'
                >
                  https://neu.europace.de/datenschutzerklaerung/
                </Link>
                <br />
                Der Europlatz-Marktplatz erbringt für SIGURON eigenständig und eigenverantwortlich Leistungen zum Zweck
                der Produktauswahl, Vorbereitung und Beantragung des Darlehens, nämlich:
              </Text>
              <UnorderedList>
                <ListItem>Ermittlung und Vergleich von Finanzierungsvorschlägen</ListItem>
                <ListItem>Ermittlung von sinnvollen Produktergänzungen und -alternativen</ListItem>
                <ListItem>
                  Vorbereitung und Übermittlung des Darlehensantrags an den jeweiligen Finanzierungspartnern
                </ListItem>
                <ListItem>
                  Übermittlung von Statusmeldungen und relevanter Unterlagen der Finanzierungspartner zum
                  Darlehensantrag
                </ListItem>
                <ListItem>Provisionsabwicklung bei Abschluss eines Darlehensvertrags</ListItem>
              </UnorderedList>
            </VStack>
          </VStack>

          <VStack alignItems={'flex-start'}>
            <Heading as={'h2'} fontSize={['md', 'lg', 'lg', 'xl']}>
              5. Pflichten des Kunden, keine gewerbliche Nutzung, Vertragsstrafe
            </Heading>
            <VStack alignItems={'flex-start'}>
              <Text>
                5.1. Die Eingabe und Übermittlung der persönlichen Daten durch den Kunden erfolgt über die
                zins-runter.de Plattform oder über andere ausdrücklich von SIGURON im Einzelfall vorgesehene
                Übermittlungswege. Für die Vollständigkeit und Richtigkeit sämtlicher vom Kunden im Rahmen der
                Antragsstrecke und auf der SIGURON Plattform eingegebenen oder sonst übermittelten Daten ist
                ausschließlich der Kunde selbst verantwortlich. Sofern der Kunde falsche, unwahre oder unzureichende
                Angaben macht, ist SIGURON berechtigt, die Anfrage unbearbeitet zu lassen. Für den Fall der Übermittlung
                von vorsätzlich falschen oder unwahren persönlichen Daten durch den Kunden behält sich die SIGURON vor,
                ihn von der Inanspruchnahme der angebotenen bzw. zu Verfügung gestellten Vermittlungsleistungen
                auszuschließen und Ersatz für dadurch eingetretene Schäden zu verlangen.
              </Text>
              <Text>
                5.2. Der Kunde ist verpflichtet, vom Finanzierungspartner erhaltene Vertragsunterlagen unverzüglich auf
                Korrektheit zu überprüfen und bei Fehlern SIGURON entsprechend zu informieren.
              </Text>
              <Text>
                5.3. Die kostenfreie Nutzung der Leistungen von SIGURON ist nur Privatpersonen gestattet. Eine Nutzung
                der Leistungen von SIGURON zu gewerblichen Zwecken oder im Rahmen einer selbständigen beruflichen
                Tätigkeit im Bereich der Vermittlung von Leistungsverhältnissen oder der Nutzung der angebotenen
                Informationen ist ausdrücklich untersagt.
              </Text>
              <Text>
                5.4. Für jeden Fall der schuldhaften Zuwiderhandlung gegen das Verbot der gewerblichen bzw.
                selbständigen beruflichen Nutzung gilt eine angemessene Vertragsstrafe in Höhe von maximal Euro 5.000
                als vereinbart. Das Recht zur Geltendmachung von weiteren Schadensersatzansprüchen bleibt vorbehalten.
                Diese sind auf die Vertragsstrafe anzurechnen.
              </Text>
            </VStack>
          </VStack>

          <VStack alignItems={'flex-start'}>
            <Heading as={'h2'} fontSize={['md', 'lg', 'lg', 'xl']}>
              6. Kosten
            </Heading>
            <VStack alignItems={'flex-start'}>
              <Text>
                6.1. Für den Kunden sind die Vermittlungs- und Beratungsleistungen von SIGURON stets kostenlos.
                Beratungsgebühren oder Nebenentgelte werden nicht erhoben.
              </Text>
              <Text>
                6.2. SIGURON erhält ausschließlich im Falle einer erfolgreichen Vermittlung eines Darlehensvertrags eine
                Provision von dem jeweiligen Finanzierungspartner. Die Provisionshöhe kann vom jeweiligen Produkt und
                dem Finanzierungspartner abhängen.
              </Text>
            </VStack>
          </VStack>

          <VStack alignItems={'flex-start'}>
            <Heading as={'h2'} fontSize={['md', 'lg', 'lg', 'xl']}>
              7. Datenschultz
            </Heading>
            <VStack alignItems={'flex-start'}>
              <Text>
                Die vom Kunden erfassten oder übermittelten Daten werden ausschließlich für die Zwecke der vertraglichen
                Vermittlungs- und Beratungsleistungen verarbeitet. Weitergehende Informationen entnehmen Sie bitte den
                Datenschutzhinweisen:{' '}
                <Link
                  color='primary.blue'
                  fontWeight='semibold'
                  _hover={{ textDecoration: 'underline' }}
                  href='zins-runter.de/datenschutz'
                >
                  zins-runter.de/datenschutz
                </Link>
              </Text>
            </VStack>
          </VStack>

          <VStack alignItems={'flex-start'}>
            <Heading as={'h2'} fontSize={['md', 'lg', 'lg', 'xl']}>
              8. Haftung
            </Heading>
            <VStack alignItems={'flex-start'}>
              <Text>
                8.1. SIGURON ist bei der Ermittlung der Angebote der Finanzierungspartner um ständige Aktualität und
                Richtigkeit bemüht. Die leistungs- bzw. produktbezogenen Informationen, insbesondere zu Leistungsumfang,
                Zinssätzen und Konditionen, durch SIGURON beruhen auf den Angaben der jeweiligen Finanzierungspartner
                dem Europace-Marktplatz und/oder der Prohyp Plattform. Eine Haftung von SIGURON für die Aktualität,
                Vollständigkeit und Richtigkeit der dargestellten Angebote ist vorbehaltlich Ziffer 8.2 ausgeschlossen.
              </Text>
              <Text>
                8.2. SIGURON haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für Schäden aus der
                Verletzung des Lebens, des Körpers und der Gesundheit. Im Falle einer leicht fahrlässigen Verletzung
                vertragswesentlicher Pflichten ist die Haftung von SIGURON auf den bei Vertragsschluss vorhersehbaren
                vertragstypischen Schaden beschränkt. Vertragswesentliche Pflichten sind Verpflichtungen, deren
                Erfüllung die ordnungsgemäße Durchführung des Vertrags zwischen dem Kunden und SIGURON überhaupt erst
                ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertraut und vertrauen darf. Im Übrigen haftet
                SIGURON nicht.
              </Text>
            </VStack>
          </VStack>

          <VStack alignItems={'flex-start'}>
            <Heading as={'h2'} fontSize={['md', 'lg', 'lg', 'xl']}>
              9. Textform, Teilunwirksamkeit, anwendbares Recht
            </Heading>
            <VStack alignItems={'flex-start'}>
              <Text>
                9.1. Änderungen, Ergänzungen und sonstige Nebenabreden, die vor oder bei Abschluss des Vertrags
                getroffen werden, bedürfen zu ihrer Rechtswirksamkeit der Textform (Brief, Telefax, E-Mail).
                Nachträgliche Änderungen oder Ergänzungen sollen schriftlich erfolgen.
              </Text>
              <Text>
                9.2. Sollten Bestimmungen dieser AGB unwirksam oder undurchführbar sein oder werden oder sollte sich in
                diesen AGB eine Lücke herausstellen, soll hierdurch die Gültigkeit der übrigen Bestimmungen nicht
                berührt werden.
              </Text>
              <Text>
                9.3. Die vertraglichen Beziehungen der Parteien richten sich nach dem Recht der Bundesrepublik
                Deutschland. Wenn der Kunde Verbraucher ist und seinen gewöhnlichen Aufenthaltsort in einem anderen
                EU-Mitgliedstaat hat, bleiben die zwingenden Verbraucherschutzbestimmungen des Landes seines
                gewöhnlichen Aufenthaltsortes zugunsten des Kunden zusätzlich anwendbar.
              </Text>
            </VStack>
          </VStack>

          <VStack alignItems={'flex-start'}>
            <Heading as={'h2'} fontSize={['md', 'lg', 'lg', 'xl']}>
              10. Hinweis zur Streitschlichtung bei dem Versicherungsombudsmann und zur Streitbeilegung gemäß
              Verbraucherstreitbeilegungsgesetz
            </Heading>
            <VStack alignItems={'flex-start'}>
              <Text>
                10.1. Bei Streitigkeiten, die im Zusammenhang mit der Vermittlertätigkeit von SIGURON gegenüber einem
                Verbraucher im Rahmen eines Vertragsabschlusses für Versicherungen stehen, besteht das Recht auf
                außergerichtlichen Streitschlichtung bei dem Versicherungsombudsmann e.V.
                <br />
                <br />
                Anschriften der außergerichtlichen Streitschlichtungsstellen:
                <br />
                Versicherungsombudsmann e. V.
                <br />
                Postfach 080632
                <br />
                10006 Berlin
                <br />
                Telefon: 030 / 2060 58-0
                <br />
                E-Mail:{' '}
                <Link
                  color='primary.blue'
                  fontWeight='semibold'
                  _hover={{ textDecoration: 'underline' }}
                  href='mailto: beschwerde@versicherungsombudsmann.de'
                >
                  beschwerde@versicherungsombudsmann.de
                </Link>
                <br />
                Internet:{' '}
                <Link
                  color='primary.blue'
                  fontWeight='semibold'
                  _hover={{ textDecoration: 'underline' }}
                  href='www.versicherungsombudsmann.de'
                >
                  www.versicherungsombudsmann.de
                </Link>
                <br />
              </Text>
              <Text>
                10.2. Bei Streitigkeiten, die im Zusammenhang mit der Vermittlertätigkeit von SIGURON gegenüber einem
                Verbraucher im Rahmen eines Vertragsabschlusses für Immobiliardarlehen stehen, besteht das Recht auf
                außergerichtlichen Streitschlichtung bei der VOTUM Verband Unabhängiger
                Finanzdienstleistungs-Unternehmen in Europa e.V.
                <br />
                <br />
                Anschriften der außergerichtlichen Streitschlichtungsstellen:
                <br />
                VOTUM Verband unabhängiger Finanzdienstleistungs-Unternehmen in Europa e.V.
                <br />
                Postfach 101424, 20009 Hamburg
                <br />
                Telefon +49(0)4069650890
                <br />
                E-Mail:{' '}
                <Link
                  color='primary.blue'
                  fontWeight='semibold'
                  _hover={{ textDecoration: 'underline' }}
                  href='mailto: kontakt@schlichtung-finanzberatung.de'
                >
                  kontakt@schlichtung-finanzberatung.de
                </Link>
                <br />
                Website:{' '}
                <Link
                  color='primary.blue'
                  fontWeight='semibold'
                  _hover={{ textDecoration: 'underline' }}
                  href='www.schlichtung-finanzberatung.de'
                >
                  www.schlichtung-finanzberatung.de
                </Link>
                <br />
              </Text>
              <Text>
                Für sämtliche andere Streitigkeiten, die im Zusammenhang mit der Vermittlertätigkeit von SIGURON
                Vergleichsportal Baufinanzierung GmbH gegenüber einem Verbraucher im Rahmen eines Vertragsabschlusses
                stehen, stellt die Europäische Kommission eine Plattform für die außergerichtliche
                Online-Streitbeilegung (OS-Plattform) bereit, aufrufbar unter{' '}
                <Link
                  color='primary.blue'
                  fontWeight='semibold'
                  _hover={{ textDecoration: 'underline' }}
                  href='http://ec.europa.eu/odr'
                >
                  http://ec.europa.eu/odr
                </Link>
                . Wir weisen darauf hin, dass wir weder bereit noch verpflichtet sind, an Streitbeilegungsverfahren vor
                einer Verbraucherschlichtungsstelle teilzunehmen.
              </Text>
            </VStack>
          </VStack>

          <VStack alignItems={'flex-start'}>
            <Heading as={'h2'} fontSize={['md', 'lg', 'lg', 'xl']}>
              11. Widerrufsbelehrung
            </Heading>
            <VStack alignItems={'flex-start'}>
              <Text>
                <strong>Abschnitt 1 - Widerrufsrecht</strong>
                <br /> Sie können Ihre Vertragserklärung innerhalb von 14 Tagen ohne Angabe von Gründen mittels einer
                eindeutigen Erklärung widerrufen. Die Frist beginnt nach Abschluss des Vertrags und nachdem Sie die
                Vertragsbestimmungen einschließlich der Allgemeinen Geschäftsbedingungen sowie alle nachstehend unter
                Abschnitt 2 aufgeführten Informationen auf einem dauerhaften Datenträger (z. B. Brief, Telefax, E-Mail)
                erhalten haben. Zur Wahrung der Widerrufsfrist genügt die rechtzeitige Absendung des Widerrufs, wenn die
                Erklärung auf einem dauerhaften Datenträger erfolgt. Der Widerruf ist zu richten an: SIGURON
                Vergleichsportal Baufinanzierung GmbH, Arnulfstraße 19, 80335 München, E-Mail:
                baufinanzierung_datenschutz@SIGURON.de
              </Text>
              <Text>
                <strong>Abschnitt 2 - Für den Beginn der Widerrufsfrist erforderliche Informationen</strong>
                <br />
                Die Informationen im Sinne des Abschnitts 1 Satz 2 umfassen folgende Angaben:
              </Text>
              <OrderedList>
                <ListItem>
                  1. die Identität des Unternehmers; anzugeben ist auch das öffentliche Unternehmensregister, bei dem
                  der Rechtsträger eingetragen ist, und die zugehörige Registernummer oder gleichwertige Kennung;
                </ListItem>
                <ListItem>
                  die Hauptgeschäftstätigkeit des Unternehmers und die für seine Zulassung zuständige Aufsichtsbehörde;
                </ListItem>
                <ListItem>
                  zur Anschrift die ladungsfähige Anschrift des Unternehmers und jede andere Anschrift, die für die
                  Geschäftsbeziehung zwischen dem Unternehmer und dem Verbraucher maßgeblich ist, bei juristischen
                  Personen, Personenvereinigungen oder Personengruppen auch den Namen des Vertretungsberechtigten;
                </ListItem>
                <ListItem>
                  die wesentlichen Merkmale der Finanzdienstleistung sowie Informationen darüber, wie der Vertrag
                  zustande kommt;
                </ListItem>
                <ListItem>
                  den Gesamtpreis der Finanzdienstleistung einschließlich aller damit verbundenen Preisbestandteile
                  sowie alle über den Unternehmer abgeführten Steuern oder, wenn kein genauer Preis angegeben werden
                  kann, seine Berechnungsgrundlage, die dem Verbraucher eine Überprüfung des Preises ermöglicht;
                </ListItem>
                <ListItem>
                  eine Befristung der Gültigkeitsdauer der zur Verfügung gestellten Informationen, beispielsweise die
                  Gültigkeitsdauer befristeter Angebote, insbesondere hinsichtlich des Preises;
                </ListItem>
                <ListItem>Einzelheiten hinsichtlich der Zahlung und der Erfüllung;</ListItem>
                <ListItem>
                  das Bestehen oder Nichtbestehen eines Widerrufsrechts sowie die Bedingungen, Einzelheiten der
                  Ausübung, insbesondere Name und Anschrift desjenigen, gegenüber dem der Widerruf zu erklären ist, und
                  die Rechtsfolgen des Widerrufs einschließlich Informationen über den Betrag, den der Verbraucher im
                  Fall des Widerrufs für die erbrachte Leistung zu zahlen hat, sofern er zur Zahlung von Wertersatz
                  verpflichtet ist (zugrunde liegende Vorschrift: § 357a des Bürgerlichen Gesetzbuchs);
                </ListItem>
                <ListItem>
                  die Mindestlaufzeit des Vertrags, wenn dieser eine dauernde oder regelmäßig wiederkehrende Leistung
                  zum Inhalt hat;
                </ListItem>
                <ListItem>die vertraglichen Kündigungsbedingungen einschließlich etwaiger Vertragsstrafen;</ListItem>
                <ListItem>
                  die Mitgliedstaaten der Europäischen Union, deren Recht der Unternehmer der Aufnahme von Beziehungen
                  zum Verbraucher vor Abschluss des Vertrags zugrunde legt;
                </ListItem>
                <ListItem>
                  eine Vertragsklausel über das auf den Vertrag anwendbare Recht oder über das zuständige Gericht;
                </ListItem>
                <ListItem>
                  die Sprachen, in denen die Vertragsbedingungen und die in dieser Widerrufsbelehrung genannten
                  Vorabinformationen mitgeteilt werden, sowie die Sprachen, in denen sich der Unternehmer verpflichtet,
                  mit Zustimmung des Verbrauchers die Kommunikation während der Laufzeit dieses Vertrags zu führen;
                </ListItem>
                <ListItem>
                  den Hinweis, ob der Verbraucher ein außergerichtliches Beschwerde- und Rechtsbehelfsverfahren, dem der
                  Unternehmer unterworfen ist, nutzen kann, und gegebenenfalls dessen Zugangsvoraussetzungen.
                </ListItem>
              </OrderedList>
              <Text>
                <strong>Abschnitt 3 - Widerrufsfolgen</strong>
                <br />
                Im Fall eines wirksamen Widerrufs sind die beiderseits empfangenen Leistungen zurückzugewähren. Sie sind
                zur Zahlung von Wertersatz für die bis zum Widerruf erbrachte Dienstleistung verpflichtet, wenn Sie vor
                Abgabe Ihrer Vertragserklärung auf diese Rechtsfolge hingewiesen wurden und ausdrücklich zugestimmt
                haben, dass vor dem Ende der Widerrufsfrist mit der Ausführung der Gegenleistung begonnen werden kann.
                Besteht eine Verpflichtung zur Zahlung von Wertersatz, kann dies dazu führen, dass Sie die vertraglichen
                Zahlungsverpflichtungen für den Zeitraum bis zum Widerruf dennoch erfüllen müssen. Ihr Widerrufsrecht
                erlischt vorzeitig, wenn der Vertrag von beiden Seiten auf Ihren ausdrücklichen Wunsch vollständig
                erfüllt ist, bevor Sie Ihr Widerrufsrecht ausgeübt haben. Verpflichtungen zur Erstattung von Zahlungen
                müssen innerhalb von 30 Tagen erfüllt werden. Diese Frist beginnt für Sie mit der Absendung Ihrer
                Widerrufserklärung, für uns mit deren Empfang.
              </Text>
              <Text>
                <strong>Besondere Hinweise</strong>
                <br />
                Bei Widerruf dieses Vertrags sind Sie auch an einen mit diesem Vertrag zusammenhängenden Vertrag nicht
                mehr gebunden, wenn der zusammenhängende Vertrag eine Leistung betrifft, die von uns oder einem Dritten
                auf der Grundlage einer Vereinbarung zwischen uns und dem Dritten erbracht wird.
              </Text>
            </VStack>
          </VStack>
        </VStack>
      </ResponsiveContainer>
    </FullWidthContainer>
  );
};

export default AGB;
