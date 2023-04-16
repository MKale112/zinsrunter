import { FullWidthContainer, ResponsiveContainer } from '@/components/Containers';
import { Heading, Link, VStack, Text, Box, VisuallyHidden } from '@chakra-ui/react';
import React from 'react';

const AGB = () => {
  return (
    <FullWidthContainer>
      <Box h={10} bgColor='primary.blue' />
      <VisuallyHidden>
        <Heading as='h1'>Impressum</Heading>
      </VisuallyHidden>
      <ResponsiveContainer py={[4, 12]} bgColor='white'>
        <VStack spacing={[4, 6, 10, 12]} alignItems='flex-start' justifyContent='flex-start'>
          <VStack alignItems='flex-start'>
            <Text>www.Zins-runter.de ist ein Service von</Text>
            <Text>
              SIGURON GmbH
              <br />
              Fürstenrieder Str. 279a
              <br />
              81377 München
            </Text>
            <Text>
              Tel.: 0800 36 40000
              <br />
              Fax: 089 - 23 54 61 97
            </Text>
            <Text>
              E-Mail:{' '}
              <Link
                color='primary.blue'
                fontWeight='semibold'
                _hover={{ textDecoration: 'underline' }}
                href='mailto: service@zins-runter.de'
              >
                service@zins-runter.de
              </Link>
            </Text>
            <Text>Eingetragen im Handelsregister Registergericht München HRB 171981</Text>
            <Text>Steuernummer: Finanzamt München für Körperschaften Nr. 143/180/30708 Ust-IdNr. DE258092202</Text>
            <Text>
              Die SIGURON GmbH vertreten durch den Geschäftsführer Fabio Mancini ist{' '}
              <strong>
                tätig als Immobiliendarlehensvermittler mit Erlaubnis nach §34i Absatz 1 der Gewerbeordnung GewO
              </strong>
              . Zuständige Aufsichtsbehörde: Industrie- und Handelskammer für München und Oberbayern.
            </Text>
            <Text>
              <strong>Gewerbezulassung nach § 34c</strong> vorhanden und erteilt durch die Landeshauptstadt München,
              <br />
              Kreisverwaltungsreferat, Ruppertstr. 19, 80466 München
            </Text>
            <Text>
              <strong>Gewerberegistrierung nach § 34d</strong> vorhanden und erteilt durch IHK Industrie- und
              Handelskammer für München und Oberbayern,
              <br />
              Max-Joseph-Str. 2, 80333 München
              <br />
              Registernummer:{' '}
              <Link href='https://vermittlerregister.info/recherche?a=suche&zeige=VVR&registernummer=D-PE7E-PSNZP-43'>
                D-PE7E-PSNZP-43
              </Link>
            </Text>
            <Text>
              <strong>Gewerberegistrierung nach § 34i</strong> vorhanden und erteilt durch IHK Industrie- und
              Handelskammer für München und Oberbayern,
              <br />
              Max-Joseph-Str. 2, 80333 München
              <br />
              Registernummer:{' '}
              <Link href='https://vermittlerregister.info/recherche?a=suche&zeige=VVR&registernummer=D-W-155-4BMB-08'>
                D-W-155-4BMB-08
              </Link>
            </Text>
            <Text>
              <strong>Gemeinsame Stelle gem. §11</strong> a Abs der Gewerbeordnung: <br />
              Deutscher Industrie- & Handelskammertag (DIHK) e.V.
              <br />
              Breite Straße 29 <br />
              10178 Berlin <br />
              Telefon: 01805/500585-0 <br />
              www.vermittlerregister.info
            </Text>
            <Text>Geschäftsführer: Fabio Mancini</Text>
            <Text>
              Es besteht keine Kapitalbeteiligung von 10% oder mehr an einem Versicherer. Es ist kein Versicherer zu 10%
              oder mehr an dem Vermittler beteiligt.
            </Text>
            <Text>
              <Link color='primary.blue' fontWeight='semibold' _hover={{ textDecoration: 'underline' }} href='/agb'>
                AGB&apos;s
              </Link>{' '}
              -{' '}
              <Link
                color='primary.blue'
                fontWeight='semibold'
                _hover={{ textDecoration: 'underline' }}
                href='/datenschutz'
              >
                Datenschutz
              </Link>
            </Text>

            <Text>Schlichtungsstellen:</Text>
            <Text>
              Versicherungsombudsmann e.V. <br />
              Postfach 08 06 32 <br />
              10006 Berlin
            </Text>
            <Text>
              Ombudsmann private Kranken- und Pflegeversicherung <br />
              Postfach 06 02 22 <br />
              10052 Berlin
            </Text>
            <Text>
              Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin) <br />
              Graurheindorfer Str. 108 <br />
              53117 Bonn
            </Text>
            <Text>
              Außerdem bedanken wir uns für die Unterstützung unserer Fotoauswahl bei PhotoCase.de, Fotolia.com,
              BigStockPhoto.com sowie Pixelquelle.de
            </Text>
          </VStack>

          <VStack alignItems={'flex-start'}>
            <Heading as={'h2'} fontSize={['md', 'lg', 'lg', 'xl']}>
              Hinweis zu Google Analytics
            </Heading>
            <VStack alignItems={'flex-start'}>
              <Text>
                Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. (&apos;Google&apos;).
                Google Analytics verwendet sog. &apos;Cookies&apos;, Textdateien, die auf Ihrem Computer gespeichert
                werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie
                erzeugten Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer IP-Adresse) wird an
                einen Server von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen
                benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten für die
                Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung
                verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte
                übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google
                verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten von Google in Verbindung
                bringen.
              </Text>
              <Text>
                Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software
                verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche
                Funktionen dieser Website vollumfänglich nutzen können.
              </Text>
              <Text>
                Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten
                durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.
                Der Datenerhebung und -speicherung kann{' '}
                <Link
                  color='primary.blue'
                  fontWeight='semibold'
                  _hover={{ textDecoration: 'underline' }}
                  href='http://tools.google.com/dlpage/gaoptout?hl=de'
                >
                  jederzeit mit Wirkung für die Zukunft widersprochen werden
                </Link>
                .
              </Text>
            </VStack>
          </VStack>

          <VStack alignItems={'flex-start'}>
            <Heading as={'h2'} fontSize={['md', 'lg', 'lg', 'xl']}>
              Hinweis zu Facebook
            </Heading>
            <VStack alignItems={'flex-start'}>
              <Text>
                Unser Internetauftritt verwendet Social Plugins (&apos;Plugins&apos;) des sozialen Netzwerkes
                facebook.com, welches von der Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA betrieben
                wird (&apos;Facebook&apos;). Die Plugins sind an einem der Facebook Logos erkennbar (weißes
                &apos;f&apos; auf blauer Kachel oder ein &apos;Daumen hoch&apos;-Zeichen) oder sind mit dem Zusatz
                &apos;Facebook Social Plugin&apos; gekennzeichnet. Die Liste und das Aussehen der Facebook Social
                Plugins kann hier eingesehen werden:
                <Link
                  color='primary.blue'
                  fontWeight='semibold'
                  _hover={{ textDecoration: 'underline' }}
                  href='https://developers.facebook.com/docs/plugins.Wenn'
                >
                  https://developers.facebook.com/docs/plugins.Wenn
                </Link>{' '}
                Sie eine Webseite unseres Internetauftritts aufrufen, die ein solches Plugin enthält, baut Ihr Browser
                eine direkte Verbindung mit den Servern von Facebook auf. Der Inhalt des Plugins wird von Facebook
                direkt an Ihren Browser übermittelt und von diesem in die Webseite eingebunden. Wir haben daher keinen
                Einfluss auf den Umfang der Daten, die Facebook mit Hilfe dieses Plugins erhebt und informieren Sie
                daher entsprechend unserem{' '}
                <Link
                  color='primary.blue'
                  fontWeight='semibold'
                  _hover={{ textDecoration: 'underline' }}
                  href='https://facebook.com/help/?faq=17512'
                ></Link>
                Kenntnisstand:
              </Text>
              <Text>
                Durch die Einbindung der Plugins erhält Facebook die Information, dass Sie die entsprechende Seite
                unseres Internetauftritts aufgerufen haben. Sind Sie bei Facebook eingeloggt, kann Facebook den Besuch
                Ihrem Facebook-Konto zuordnen. Wenn Sie mit den Plugins interagieren, zum Beispiel den Like Button
                betätigen oder einen Kommentar abgeben, wird die entsprechende Information von Ihrem Browser direkt an
                Facebook übermittelt und dort gespeichert. Falls Sie kein Mitglied von Facebook sind, besteht trotzdem
                die Möglichkeit, dass Facebook Ihre IP-Adresse in Erfahrung bringt und speichert. Zweck und Umfang der
                Datenerhebung und die weitere Verarbeitung und Nutzung der Daten durch Facebook sowie Ihre
                diesbezüglichen Rechte und Einstellungsmöglichkeiten zum Schutz Ihrer Privatssphäre entnehmen Sie bitte
                den Datenschutzhinweisen von Facebook:{' '}
                <Link
                  color='primary.blue'
                  fontWeight='semibold'
                  _hover={{ textDecoration: 'underline' }}
                  href='http://www.facebook.com/policy.php'
                >
                  http://www.facebook.com/policy.php
                </Link>
                .
              </Text>
              <Text>
                Wenn Sie Facebookmitglied sind und nicht möchten, dass Facebook über unseren Internetauftritt Daten über
                Sie sammelt und mit Ihren bei Facebook gespeicherten Daten verknüpft, müssen Sie sich vor Ihrem Besuch
                unseres Internetauftritts bei Facebook ausloggen. Ebenfalls ist es möglich, Facebook-Social-Plugins mit
                Add-ons für Ihren Browser zu blocken.
              </Text>
            </VStack>
          </VStack>

          <VStack alignItems={'flex-start'}>
            <Heading as={'h2'} fontSize={['md', 'lg', 'lg', 'xl']}>
              Hinweis für die Nutzung von Twitter
            </Heading>
            <VStack alignItems={'flex-start'}>
              <Text>
                Auf unseren Seiten sind Funktionen des Dienstes Twitter eingebunden. Diese Funktionen werden angeboten
                durch die Twitter Inc., 795 Folsom St., Suite 600, San Francisco, CA 94107, USA. Durch das Benutzen von
                Twitter und der Funktion “Re-Tweet” werden die von Ihnen besuchten Webseiten mit Ihrem Twitter-Account
                verknüpft und anderen Nutzern bekannt gegeben. Dabei werden auch Daten an Twitter übertragen.
              </Text>
              <Text>
                Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten
                Daten sowie deren Nutzung durch Twitter erhalten. Weitere Informationen hierzu finden Sie in der
                Datenschutzerklärung von Twitter unter{' '}
                <Link
                  color='primary.blue'
                  fontWeight='semibold'
                  _hover={{ textDecoration: 'underline' }}
                  href='twitter.com/privacy'
                >
                  twitter.com/privacy
                </Link>
                .
              </Text>
              <Text>
                Ihre Datenschutzeinstellungen bei Twitter können Sie in den Konto-Einstellungen unter{' '}
                <Link
                  color='primary.blue'
                  fontWeight='semibold'
                  _hover={{ textDecoration: 'underline' }}
                  href='twitter.com/account/settings'
                >
                  twitter.com/account/settings
                </Link>{' '}
                ändern.
              </Text>
            </VStack>
          </VStack>
        </VStack>
      </ResponsiveContainer>
      <Box h={10} bgColor='gray.100' />
    </FullWidthContainer>
  );
};

export default AGB;
