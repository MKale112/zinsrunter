import React from 'react';
import { Button, ListItem, OrderedList, Text, VStack } from '@chakra-ui/react';
import ChakraLink from '@/components/Link/ChakraLink';
import { FullWidthContainer, ResponsiveContainer } from '@/components/Containers';
import { Header, Footer } from '@/components/Navigation';

const Erstinformation = () => {
  return (
    <>
      <Header />
      <FullWidthContainer py={[4, 12]} bgColor='gray.100'>
        <ResponsiveContainer>
          <VStack spacing={[4, 8, 12]}>
            <OrderedList spacing={[4, 6]}>
              <ListItem>
                <Text color='primary.blue'>Firma und Anschrift:</Text>
                <Text>
                  SIGURON GmbH <br />
                  Fürstenrieder Str. 279a
                  <br />
                  81377 München
                  <br />
                  Amtsgericht München HRB: 171981 | UST Ident Nr.: DE 258 092 202
                </Text>
              </ListItem>
              <ListItem>
                <Text color='primary.blue'>Geschäftsführer</Text>
                <Text>Fabio Mancini</Text>
              </ListItem>
              <ListItem>
                <Text color='primary.blue'>
                  Status des Vermittlers nach der Gewerbeordnung, Meldung und Registrierung
                </Text>
                <Text>
                  Die SIGURON GmbH vertreten durch den Geschäftsführer Fabio Mancini ist{' '}
                  <strong>
                    tätig als Versicherungsmakler sowie Immobiliendarlehensvermittler mit Erlaubnis nach §34d Absatz 1
                    und §34i Absatz 1 der Gewerbeordnung GewO
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
                  Registernummer: D-PE7E-PSNZP-43
                </Text>
                <Text>
                  <strong>Gewerberegistrierung nach § 34i</strong> vorhanden und erteilt durch IHK Industrie- und
                  Handelskammer für München und Oberbayern,
                  <br />
                  Max-Joseph-Str. 2, 80333 München
                  <br />
                  Registernummer: D-W-155-4BMB-08
                </Text>
              </ListItem>
              <ListItem>
                <Text color='primary.blue'>Bei Interesse können Sie die Angaben bei der Registerstelle überprüfen</Text>
                <Text>
                  DIHK | Deutscher Industrie- und Handelskammertag e.V.
                  <br />
                  Breite Straße 29
                  <br />
                  10178 Berlin
                  <br />
                  Tel.: 0180-600-585-0*
                  <br />
                  * 20 Cent/Min aus dem deutschen Festnetz, höchstens 60 Cent/Minute aus Mobilfunknetzen
                  <br />
                  www.vermittlerregister.info
                </Text>
              </ListItem>
              <ListItem>
                <Text color='primary.blue'>Beteiligungen an Versicherungsunternehmen:</Text>
                <Text>
                  Die SIGURON GmbH hält keine Beteiligungen an
                  <br />
                  Stimmrechten oder dem Kapital von Versicherungsunternehmen. Es gibt keine Beteiligungen
                  <br />
                  von Versicherungsunternehmen an den Stimmrechten oder dem Kapital der SIGURON GmbH.
                </Text>
              </ListItem>
              <ListItem>
                <Text color='primary.blue'>Schlichtungsstellen für außergerichtliche Streitbeilegung</Text>

                <Text>
                  Versicherungsombudsmann e.V.
                  <br />
                  Postfach 08 06 32
                  <br />
                  10006 Berlin
                  <br />
                  Ombudsmann private Kranken- und Pflegeversicherung
                  <br />
                  Postfach 06 02 22
                  <br />
                  10052 Berlin
                </Text>
              </ListItem>
            </OrderedList>

            <ChakraLink href='https://www.versicherungstarife.info/erstinformation.pdf'>
              <Button variant='accent' type='submit' padding={6} fontSize={20}>
                Erstinformation - PDF
              </Button>
            </ChakraLink>
          </VStack>
        </ResponsiveContainer>
      </FullWidthContainer>
      <Footer />
    </>
  );
};

export default Erstinformation;
