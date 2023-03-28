import { FullWidthContainer, ResponsiveContainer } from '@/components/Containers';
import { Box, Center, Divider, Heading, Link, SimpleGrid, Stack, Text, useMediaQuery, VStack } from '@chakra-ui/react';
import uberUns from 'data/unter-uns.json';
import Image from 'next/image';
import React from 'react';

const UberUns = () => {
  const [isMobile] = useMediaQuery('(max-width: 640px)');

  const cards = uberUns.cards.map((entry) => (
    <Center key={entry.id} h='full' w='full'>
      <Box
        minH={isMobile ? 150 : 200}
        w='full'
        h='full'
        bg='white'
        overflow={'hidden'}
        border={'1px'}
        borderColor='gray.500'
        rounded={'lg'}
      >
        <Box p={6}>
          <VStack spacing={4} align={'flex-start'}>
            <Heading fontSize={['xl', 'xl', '2xl']} fontWeight={500} fontFamily={'body'}>
              {entry.title}
            </Heading>
            <Stack direction={isMobile ? 'column' : 'row'} alignItems={'center'} spacing={8}>
              <Image src={entry.src} alt={entry.alt} height={100} width={100} />
              <Text color={'gray.500'}>{entry.text}</Text>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Center>
  ));

  return (
    <FullWidthContainer>
      <Box h={10} bgColor='primary.blue' />
      <ResponsiveContainer py={[4, 12]} bgColor='white'>
        <VStack alignItems='flex-start' spacing={[6, 6, 6, 8, 8, 10]}>
          <VStack alignItems='flex-start' spacing={4}>
            <Heading as='h1' fontSize={['xl', 'xl', 'xl', '3xl']}>
              Zins-runter.de - Wer sind wir?
            </Heading>
            {!isMobile && <Divider />}
            <Text>
              Das Webportal Zins-runter.de, welches als von der{' '}
              <strong>IHK zugelassener Immobiliendarlehensvermittler</strong> (Registernummer{' '}
              <Link href='https://www.vermittlerregister.info/recherche?a=suche&zeige=VVR&registernummer=D-W-155-4BMB-08'>
                D-W-155-4BMB-08
              </Link>
              ) gegründet wurde, von der Siguron GmbH betrieben.{' '}
            </Text>
            <Text>
              Dabei liegt die Kernkompetenz in der Privatkundenbetreuung, sowie der Beratung kleiner und
              mittelständischer Betriebe.
            </Text>
            <Text>
              Als Immobiliendarlehensvermittler, Finanz/-und Versicherungsmakler ( Registernummer{' '}
              <Link href='https://www.vermittlerregister.info/recherche?a=suche&zeige=VVR&registernummer=D-PE7E-PSNZP-43'>
                D-PE7E-PSNZP-43
              </Link>{' '}
              ) arbeiten wir selbständig und unabhängig von den Kreditinstituten bzw. den Versicherungskonzernen. Wir
              und unsere externen Partner führen für die einzelnen Bereiche einen{' '}
              <strong>computergestützten Vergleich zahlreicher am Markt vertretenen Banken/Gesellschaften</strong> mit
              derer Angebotspalette durch.
            </Text>
          </VStack>

          <VStack alignItems='flex-start' spacing={4}>
            <Heading as='h3' fontSize={['lg', 'lg', 'lg', 'xl']}>
              Stets innovativ auf dem neuersten Stand der Technik über die Jahre
            </Heading>
            <SimpleGrid gap={8} columns={isMobile ? 1 : 2}>
              {cards}
            </SimpleGrid>
          </VStack>

          <VStack alignItems='flex-start' spacing={4}>
            <Link href='https://www.versicherungstarife.info/kundenlogin.htm'>
              <Heading as='h3' fontSize={['lg', 'lg', 'lg', 'xl']}>
                2020 Kundenverwaltung und APP
              </Heading>
            </Link>
            <Stack direction={isMobile ? 'column' : 'row'} alignItems='center' spacing={8} pt={[8, 8, 8, 10]}>
              <Image
                src='/unter-uns/simplr.webp'
                alt='Versicherungstarife.info 2020 Kundenlogin'
                height={200}
                width={200}
              />

              <VStack alignItems='flex-start'>
                <Text>
                  Gemeinsam mit unserem Partner blaudirekt bieten wir nun eine Kunden und Vertragsverwaltung auch in
                  Form der <strong>APP simplr</strong> an.
                </Text>
                <Text>
                  Die intuitive Bedienbarkeit ist dadurch sowohl auf den aktuell populären Ausgabegeräten – wie
                  Smartphones und Tablets – gewährleistet als auch auf modernen Wearables, wie Smartwatches oder Daten-
                  bzw. smarten Brillen.
                </Text>
                <Text>
                  Die Einbindung bzw. Integration der Vergleichsrechner ist über die JS-API erfolgt und hilft zu
                  extremer Produktivität.
                </Text>
                <Text>
                  Auf allen Oberflächen überzeugt die Usability. Das moderne Design ermöglicht das präzise und
                  unkomplizierte filtern von Ergebnissen nach eingestellten Vorgaben.
                </Text>
              </VStack>
            </Stack>
          </VStack>

          <VStack alignItems='flex-start' spacing={4}>
            <Heading as='h3' fontSize={['md', 'lg', 'lg', 'xl']}>
              2023 Zins-runter.de – Das Fachportal zum Thema Immobilienfinanzierung und Kredite
            </Heading>
            <Stack direction={isMobile ? 'column' : 'row'} spacing={8}>
              <Image
                src='/unter-uns/zinsrunter-de.webp'
                alt='Versicherungstarife.info 2020 Kundenlogin'
                height={150}
                width={400}
              />
              <VStack alignItems='flex-start'>
                <Text>
                  Die Bereiche Immobilienfinanzierung und Kredite werden spezialisiert und auf Zins-runter.de weiter
                  professionalisiert. Das Thema Zinsentwicklung wird immer wichtiger und wird wohl auch das Thema der
                  nächsten Dekade bleiben.
                </Text>
                <Text>
                  Die intuitive Bedienbarkeit ist dadurch sowohl auf den aktuell populären Ausgabegeräten – wie
                  Smartphones und Tablets – gewährleistet als auch auf modernen Wearables, wie Smartwatches oder Daten-
                  bzw. smarten Brillen.
                </Text>
                <Text>
                  Gerade große wirtschaftliche Entscheidungen wie etwa eine Baufinanzierung sollten gut überlegt und vor
                  allem auch breit recherchiert sein.
                </Text>
                <Text>
                  Schon kleine Zinsunterschiede können viele Tausend Euro über den Finanzierungzeitraum ausmachen. Hier
                  setzen wir mit Zins-runter.de an.
                </Text>
                <Text>
                  Als unabhängiger Finanzierungsvermittler ist Zins-runter.de nicht an Kreditinstitute gebunden – durch{' '}
                  <strong>
                    diese Unabhängigkeit von Banken und Sparkassen garantieren wir eine konsequent echte und vielfältige
                    Produktauswahl. Derzeit können wir aus einem Pool von über 500 Banken und Kreditgebern schöpfen
                  </strong>
                </Text>
              </VStack>
            </Stack>
          </VStack>

          <VStack alignItems='flex-start'>
            <Heading as='h3' fontSize={['md', 'lg', 'lg', 'xl']}>
              Wer sind unsere Partner und wie arbeiten wir?
            </Heading>
            <Text>
              Wir sind Ihr Partner für individuelle und persönliche Vergleiche aus{' '}
              <strong>über 80 verschiedenen Versicherungsgesellschaften, mehr als 30 Investmentgesellschaften</strong>{' '}
              und vielen Kreditinstituten.
            </Text>
            <Text>
              Die von uns auf der Grundlage Ihrer Anfragedaten erstellten{' '}
              <strong>kostenfreien Analysen und Vergleiche</strong> basieren auf der Angebots- und Tarifpalette unserer
              Kooperationsunternehmen und Partner.
            </Text>
            <Text>
              Die umfassenden Auswertungen und Vergleiche sollen es ermöglichen, das von Ihnen gesuchte Produkt, zu den
              zu Ihnen passenden Konditionen unter vielen Gesellschaften und Tarifen zu finden. So bringen wir Licht in
              den Versicherungs-/ und Tarifdschungel.
            </Text>
            <Text>
              Sie erhalten von uns oder unseren Kooperationspartnern eine kostenfreie und unverbindliche Analyse für die
              von Ihnen gewünschte Absicherung. So finden auch Sie den passenden Versicherer. Also einen Versicherer,
              der Ihre Erwartungen und Bedürfnisse optimal erfüllt.
            </Text>
            <Text>
              Wir arbeiten <strong>bundesweit</strong> mit kompetenten und qualifizierten Versicherungsmaklern,
              Investment/- und Finanzierungsspezialisten zusammen und bieten Ihnen einen umfassenden Angebotsservice mit
              spezialisierten Angeboten für alle Berufsgruppen.
            </Text>
          </VStack>

          <VStack alignItems='flex-start' spacing={4}>
            <Heading as='h3' fontSize={['md', 'lg', 'lg', 'xl']}>
              Das liegt uns am Herzen
            </Heading>
            <Stack direction={isMobile ? 'column' : 'row'} alignItems='flex-start' spacing={8}>
              <Link href='https://www.menschenfuermenschen.de/'>
                <Image src='/unter-uns/menschen.webp' alt='Menschen für Menschen' height={200} width={200} />
              </Link>
              <VStack>
                <Text>
                  <strong>
                    &quot;Es gibt keine erste, zweite oder dritte Welt. Wir alle leben auf ein und demselben Planeten,
                    für den wir gemeinsam die Verantwortung tragen.&quot;
                  </strong>{' '}
                  Karlheinz Böhm
                </Text>
                <Text>
                  Dies unterstützen wir bereits seit vielen Jahren. Die Stiftung Menschen für Menschen, ist bemüht, die
                  vollkommene Unabhängigkeit und Selbstentwicklung der Menschen in Äthiopien zu erreichen.
                </Text>
              </VStack>
            </Stack>
          </VStack>
        </VStack>
      </ResponsiveContainer>
      <Box h={10} bgColor='gray.100' />
    </FullWidthContainer>
  );
};

export default UberUns;
