import React from 'react';
import { VStack, Text } from '@chakra-ui/react';

const Reprasentatives = () => {
  return (
    <VStack alignItems='flex-start' spacing={6}>
      <VStack alignItems='flex-start'>
        <Text as='b' fontSize={18}>
          Repräsentatives Zins-Beispiel
        </Text>
        <Text>
          Repräsentatives Zins-BeispielUnsere Top-Konditionen mit einer 10 Jahre Sollzinsbindung stellen das Beste dar,
          was wir Ihnen tagesaktuell anbieten können. Wir sind dabei anbieterunabhängig und haben Zugriff auf mehr als
          500 Finanzierungspartner. Unsere Top-Konditionen sind nur ein kleiner Ausschnitt aus unserem Angebot, und
          dienen folglich nur als erste Indikation für Ihre Finanzierung.
        </Text>
      </VStack>
      <VStack>
        <Text>
          fester Sollzins:
          <div className='baufilead_beste_kondition_sollzins' />
          <br />
          <br />
          effektiver Jahreszins: <div className='baufilead_beste_kondition_effektivzins' />
          <br />
          <br />
          Zinsbindung: <div className='baufilead_beste_kondition_zinsbindung' />
          <br />
          <br />
          monatliche Rate: <div className='baufilead_beste_kondition_monatliche_rate' />
          <br />
          <br />
          Restschuld am Ende der Zinsbindung: <div className='baufilead_beste_kondition_restschuld' />
          <br />
          <br />
          Nettodarlehensbetrag: <div className='baufilead_beste_kondition_nettodarlehensbetrag' />
          <br />
          <br />
          Kosten der Immobilie: <div className='baufilead_beste_kondition_immobilienkosten' />
          <br />
          <br />
          Summe der Zahlungen: <div className='baufilead_beste_kondition_summe_zahlungen' />
          <br />
          <br />
          Grundbuchkosten:
          <div className='baufilead_beste_kondition_grundbuchkosten' />
          <br />
          <br />
          Anzahl der Raten: <div className='baufilead_beste_kondition_ratenanzahl' />
          <br />
          <br />
          Rückzahlungslaufzeit in vollen Jahren und restlichen Monaten:{' '}
          <div className='baufilead_beste_kondition_rueckzahlungslaufzeit' />
          <br />
          <br />
          Datum der Konditionsermittlung: <div className='baufilead_beste_kondition_datum' />
        </Text>
      </VStack>
      <VStack alignItems='flex-start'>
        <Text>
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
        <Text as='b' fontSize={18}>
          Zins-runter.de bietet Ihnen Top- Konditionen für Ihre Baufinanzierung!
        </Text>
      </VStack>
    </VStack>
  );
};

export default Reprasentatives;
