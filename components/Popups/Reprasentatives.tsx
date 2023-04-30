import React, { useEffect } from 'react';
import { VStack, Text, Tr, Td, Table, Tbody, Spinner } from '@chakra-ui/react';
import Script from 'next/script';

const Reprasentatives = ({ isOpen }: { isOpen: boolean }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.baufi-lead.de/baufilead/partner/PkGvpMTcO4DxDy0gEBGuq9c2NYTZ1Q/imports.js';
    script.async = true;

    isOpen && document.body.appendChild(script);

    return () => {
      !isOpen && document.body.removeChild(script);
    };
  }, [isOpen]);

  return isOpen ? (
    <>
      <Script async id='baufi-lead-script-2' type='text/javascript'>
        var baufilead_kampagne = &quot;Zins-runter.de Europace Formulare&quot;;
      </Script>

      <Script async id='baufi-lead-script-3' type='text/javascript'>
        var baufilead_tippgeber_id = &quot;TQJ25&quot;;
      </Script>

      <VStack alignItems='flex-start' spacing={6}>
        <VStack alignItems='flex-start'>
          <Text>
            Unsere Top-Konditionen mit einer 10 Jahre Sollzinsbindung stellen das Beste dar, was wir Ihnen tagesaktuell
            anbieten können. Wir sind dabei anbieterunabhängig und haben Zugriff auf mehr als 500 Finanzierungspartner.
            Unsere Top-Konditionen sind nur ein kleiner Ausschnitt aus unserem Angebot, und dienen folglich nur als
            erste Indikation für Ihre Finanzierung.
          </Text>
        </VStack>
        <VStack>
          <Table size='lg' variant='striped' colorScheme='teal'>
            <Tbody>
              <Tr>
                <Td px={4} w='50%' ml='auto'>
                  fester Sollzins:
                </Td>
                <Td px={4} w='50%' ml='auto'>
                  <div className='baufilead_beste_kondition_sollzins' />
                </Td>
              </Tr>
              <Tr>
                <Td px={4} w='50%' ml='auto'>
                  effektiver Jahreszins:
                </Td>
                <Td px={4} w='50%' ml='auto'>
                  <div className='baufilead_beste_kondition_effektivzins' />
                </Td>
              </Tr>
              <Tr>
                <Td px={4} w='50%' ml='auto'>
                  Zinsbindung:
                </Td>
                <Td px={4} w='50%' ml='auto'>
                  <div className='baufilead_beste_kondition_zinsbindung' />
                </Td>
              </Tr>
              <Tr>
                <Td px={4} w='50%' ml='auto'>
                  monatliche Rate:
                </Td>
                <Td px={4} w='50%' ml='auto'>
                  <div className='baufilead_beste_kondition_monatliche_rate' />
                </Td>
              </Tr>
              <Tr>
                <Td px={4} w='50%' ml='auto'>
                  Restschuld am Ende der Zinsbindung:
                </Td>
                <Td px={4} w='50%' ml='auto'>
                  <div className='baufilead_beste_kondition_restschuld' />
                </Td>
              </Tr>
              <Tr>
                <Td px={4} w='50%' ml='auto'>
                  Nettodarlehensbetrag:
                </Td>
                <Td px={4} w='50%' ml='auto'>
                  <div className='baufilead_beste_kondition_nettodarlehensbetrag' />
                </Td>
              </Tr>
              <Tr>
                <Td px={4} w='50%' ml='auto'>
                  Kosten der Immobilie:
                </Td>
                <Td px={4} w='50%' ml='auto'>
                  <div className='baufilead_beste_kondition_immobilienkosten' />
                </Td>
              </Tr>
              <Tr>
                <Td px={4} w='50%' ml='auto'>
                  Summe der Zahlungen:
                </Td>
                <Td px={4} w='50%' ml='auto'>
                  <div className='baufilead_beste_kondition_summe_zahlungen' />
                </Td>
              </Tr>
              <Tr>
                <Td px={4} w='50%' ml='auto'>
                  Grundbuchkosten:
                </Td>
                <Td px={4} w='50%' ml='auto'>
                  <div className='baufilead_beste_kondition_grundbuchkosten' />
                </Td>
              </Tr>
              <Tr>
                <Td px={4} w='50%' ml='auto'>
                  Anzahl der Raten:
                </Td>
                <Td px={4} w='50%' ml='auto'>
                  <div className='baufilead_beste_kondition_ratenanzahl' />
                </Td>
              </Tr>
              <Tr>
                <Td px={4} w='50%' ml='auto'>
                  Rückzahlungslaufzeit in vollen Jahren und restlichen Monaten:
                </Td>
                <Td px={4} w='50%' ml='auto'>
                  <div className='baufilead_beste_kondition_rueckzahlungslaufzeit' />
                </Td>
              </Tr>
              <Tr>
                <Td px={4} w='50%' ml='auto'>
                  Datum der Konditionsermittlung:
                </Td>
                <Td px={4} w='50%' ml='auto'>
                  <div className='baufilead_beste_kondition_datum' />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </VStack>
        <VStack alignItems='flex-start'>
          <Text py={4}>
            Kauf einer Immobilie zur Eigennutzung
            <br />
            <br />
            Nachhaltiger Objektwert (i.d.R. Kaufpreis) EUR 220.000, fällig in 2 Monaten, Zahlung in einer Rate
            <br />
            <br />
            Darlehenssumme EUR 150.000, erstrangig besichert mit Grundschuld
            <br />
            <br />
            anfängliche Tilgung 2,00%, keine Sondertilgung
            <br />
            <br />
            Festes Arbeitnehmerverhältnis oder ggf. Beamtenstatus
            <br />
            <br />
            einwandfreie Einkommens- und Vermögenssituation
            <br />
            <br />
            Teilweise bieten unsere Finanzierungspartner besondere Baufinanzierungskonditionen in Verbindung mit
            KfW-Darlehen oder in Verbindung mit dem Abschluss von Versicherungen an. Dies wurde von uns ggf.
            berücksichtigt.
          </Text>
          <Text as='b' fontSize={18} py={4}>
            Zins-runter.de bietet Ihnen Top- Konditionen für Ihre Baufinanzierung!
          </Text>
        </VStack>
      </VStack>
    </>
  ) : (
    <VStack>
      <Spinner size='xl' thickness='7px' speed='0.65s' color='primary.acid' />
    </VStack>
  );
};

export default Reprasentatives;
