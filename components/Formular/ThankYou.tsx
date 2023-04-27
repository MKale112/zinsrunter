import ChakraLink from '@/components/Link/ChakraLink';
import { Button, Heading, ListItem, OrderedList, VStack, Text, Link } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import React from 'react';
import { useRouter } from 'next/router';

const thankYouData = {
  '1': [
    {
      title: 'Die Anfrage',
      text: 'Einer unserer Finanzierungsberater wird Ihre Anfrage umgehend bearbeiten und Sie zeitnah kontaktieren - meist schon innerhalb 24 Stunden. Ihr persönlicher Finanzierungsberater wird Sie während des gesamten Finanzierungsprozesses zuverlässig begleiten.',
    },
    {
      title: 'Persönliches Beratungsgespräch',
      text: 'In einem individuellen und unverbindlichen Gespräch unterhalten wir uns über Ihr Vorhaben, Ihre Wünsche und Ihre Lebenssituation. In der Regel findet die Beratung per Telefon, Videocall oder auch persönlich statt.',
    },
    {
      title: 'Finanzierungsvorschlag und Reservierung der Konditionen',
      text: 'Aus über 500 Bankpartnern suchen wir die passende Finanzierungslösung. Bis zu Ihrer endgültigen Entscheidung reservieren wir die Konditionen für Sie.',
    },
    {
      title: 'Der Vertrag',
      text: 'Haben Sie sich nun für einen Finanzierungsvorschlag entschieden, unterschreiben Sie den Antrag. Ihr Darlehen wird dann von uns beantragt.',
    },
    {
      title: 'Die Auszahlung',
      text: 'Die Bank prüft die Unterlagen und zahlt Ihr Darlehen zum gewünschten Zeitpunkt aus.',
    },
  ],
  '2': [
    {
      title: 'Ihre Kontaktanfrage',
      text: 'Einer unserer Finanzierungsberater wird Ihre Anfrage umgehend bearbeiten und Sie zeitnah kontaktieren - meist schon innerhalb 24 Stunden.',
    },
    {
      title: 'Persönliches Beratungsgespräch',
      text: 'Auf Ihren Wunsch hin, werden wir ein individuelles und unverbindliches Gespräch vereinbaren und unterhalten uns über Ihr Vorhaben, Ihre Wünsche und Ihre Lebenssituation. In der Regel findet die Beratung per Telefon, Videocall oder auch persönlich statt.',
    },
    {
      title: 'Finanzierungsvorschlag und Reservierung der Konditionen',
      text: 'Aus über 500 Bankpartnern suchen wir die passende Finanzierungslösung. Bis zu Ihrer endgültigen Entscheidung reservieren wir die Konditionen für Sie.',
    },
    {
      title: 'Der Vertrag',
      text: 'Haben Sie sich für einen Finanzierungsvorschlag entschieden, unterschreiben Sie den Antrag. Wir werden dann Ihr Darlehen beantragen.',
    },
    {
      title: 'Die Auszahlung',
      text: 'Die Bank prüft die Unterlagen und zahlt Ihr Darlehen zum gewünschten Zeitpunkt aus.',
    },
  ],
};

export const ThankYou = () => {
  const { query } = useRouter();
  const data = thankYouData[query.thankyou as keyof typeof thankYouData].map((entry) => (
    <ListItem key={entry.title}>
      <Text as='b' dangerouslySetInnerHTML={{ __html: entry.title }} />
      <br />
      <Text dangerouslySetInnerHTML={{ __html: entry.text }} />
    </ListItem>
  ));
  return (
    <VStack
      bgColor='white'
      p={[4, 6, 10]}
      boxShadow='2xl'
      borderRadius='lg'
      border='1px'
      borderColor='gray.200'
      spacing={6}
      w={['95%', '95%', '80%', '70%']}
    >
      <CheckCircleIcon color='primary.acid' boxSize={{ base: 16, sm: 24 }} />
      <Heading as='h3' fontSize={['xl', '2xl', '2xl', '3xl']} textAlign='center'>
        Ihre Angaben wurden vollständig übermittelt <br />- Wie geht es weiter?
      </Heading>
      <OrderedList listStylePosition='inside' spacing={4} color='primaryFontColor'>
        {data}
      </OrderedList>

      <Text py={4}>
        Haben Sie Ideen oder Anmerkungen?
        <br />
        Unser Service-Team freut sich auf Ihre E-Mail:{' '}
        <Link href='mailto:service@zins-runter.de'>service@zins-runter.de</Link>
      </Text>

      <ChakraLink href='/'>
        <Button variant='accent' padding={8}>
          Zurück zur Startseite
        </Button>
      </ChakraLink>
    </VStack>
  );
};
