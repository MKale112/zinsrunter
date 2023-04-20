import React from 'react';
import { VStack, Text, Link } from '@chakra-ui/react';

const Newsletter = () => {
  return (
    <VStack alignItems='flex-start' spacing={6}>
      <VStack alignItems='flex-start'>
        <Text as='b'>Einwilligung zum Newsletter</Text>
        <Text>
          Indem Sie die Zustimmung zum Newsletter aktiv anklicken, geben Sie die nachfolgende Einwilligungserklärung ab,
          Sie können diese Einwilligung jederzeit formfrei (postalisch, per E-Mail oder per Fax) ganz oder teilweise
          ohne Angabe von Gründen für die Zukunft widerrufen. Der Widerruf der Einwilligung berührt gemäß Art. 7 Abs. 3
          DSGVO nicht die Rechtmäßigkeit der aufgrund der Einwilligung bis zum erfolgten Widerruf erfolgten
          Werbemaßnahmen.
        </Text>
      </VStack>
      <VStack alignItems='flex-start'>
        <Text as='b'>Ich willige ein, dass</Text>
        <Text>
          SIGURON GmbH
          <br />
          Fürstenrieder Str. 279a
          <br />
          81377 München
          <br />
          <br />
          Tel.: 0800 36 40000
          <br />
          E-Mail: <Link href='mailto:service@zins-runter.de'>service@zins-runter.de</Link>
        </Text>
        <Text>
          mir per Email Informationen und Angebote zu weiteren Finanz- und Versicherungsprodukten, insbesondere auch von
          Dritten, zum Zwecke der Werbung übersendet.
        </Text>
      </VStack>
    </VStack>
  );
};

export default Newsletter;
