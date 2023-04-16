export enum FormState {
  finanzierungszweck = 'Was möchten Sie genau finanzieren?',
  immobilientyp = 'Um was für eine Immobilie handelt es sich?',
  nutzung = 'Sie möchten…',
  region = 'Wo findet das Finanzierungsvorhaben statt?',
  schufa = 'Gibt oder gab es bei Ihnen negative SCHUFA Einträge?',
  projektnummern = 'Die Finanzierung in Zahlen',
  angebot = 'Persönliche Angaben',
}

export const finanzierungszweck = {
  key: 'finanzierungszweck',
  data: [
    {
      key: 'buyPropery',
      icon: '/icons/buying-a-property.webp',
      text: 'Kauf einer Immobilie',
    },
    {
      key: 'landPurchase',
      icon: '/icons/land-purchase-only.webp',
      text: 'Grundstückskauf',
    },
    {
      key: 'constructionProject',
      icon: '/icons/own-construction-project.webp',
      text: 'Eigenes Bauvorhaben',
    },
    {
      key: 'followUpFinance',
      icon: '/icons/follow-up-financing.webp',
      text: 'Anschlussfinanzierung',
    },
    {
      key: 'modernize',
      icon: '/icons/modernize.webp',
      text: 'Modernisieren',
    },
    {
      key: 'raisingCapital',
      icon: '/icons/raising-capital.webp',
      text: 'Kapitalbeschaffung',
    },
  ],
};

export const immobilientyp = {
  key: 'immobilientyp',
  data: [
    {
      key: 'condominium',
      icon: '/icons/condominium.webp',
      text: 'Eigentumswohnung',
    },
    {
      key: 'detachedHouse',
      icon: '/icons/detached-house.webp',
      text: 'Einfamilienhaus',
    },
    {
      key: 'plotOnly',
      icon: '/icons/land-purchase-only.webp',
      text: 'Grundstück',
    },
    {
      key: 'semiDetachedHouse',
      icon: '/icons/semi-detached-house.webp',
      text: 'Doppelhaushälfte',
    },
    {
      key: 'twoFamilyHouse',
      icon: '/icons/two-family-house.webp',
      text: 'Zweifamilienhaus',
    },
    {
      key: 'midTerraceHouse',
      icon: '/icons/terraced-house.webp',
      text: 'Reihenmittelhaus',
    },
    {
      key: 'terracedHouse',
      icon: '/icons/terraced-house.webp',
      text: 'Reiheneckhaus',
    },
    {
      key: 'apartmentBuilding',
      icon: '/icons/condominium.webp',
      text: 'Mehrfamilienhaus',
    },
    {
      key: 'residentialCommercialBuilding',
      icon: '/icons/apartment.webp',
      text: 'Wohn/Geschäftshaus',
    },
  ],
};

export const nutzung = {
  key: 'nutzung',
  data: [
    {
      key: 'selfInhabited',
      icon: '/icons/self-inhabited.webp',
      text: 'Selbst nutzen',
    },
    {
      key: 'rented',
      icon: '/icons/rented.webp',
      text: 'Vermieten',
    },
    {
      key: 'partlyRented',
      icon: '/icons/partly-rented.webp',
      text: 'Teilweise vermieten',
    },
  ],
};

export const schufa = {
  key: 'schufa',
  data: [
    {
      key: 'no',
      icon: '/icons/fine.png',
      text: 'Nein, alles bestens.',
    },
    {
      key: 'yes-done',
      icon: '/icons/neutral.png',
      text: 'Ja, aber erledigt.',
    },
    {
      key: 'yes-not-done',
      icon: '/icons/nein.png',
      text: 'Ja, nicht erledigt',
    },
  ],
};
