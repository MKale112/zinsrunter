export enum FormState {
  financeOffer = 'Was möchten Sie genau finanzieren?',
  estate = 'Um was für eine Immobilie handelt es sich?',
  propertyUse = 'Sie möchten…',
  region = 'Persönliche Angaben',
  negativeSCHUFA = 'Gibt oder gab es bei Ihnen negative SCHUFA Einträge?',
  projectNumbers = 'Die Finanzierung in Zahlen',
  offer = 'Persönliche Angaben',
}

export const financeOffer = {
  key: 'financeOffer',
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
      text: 'Anschluss­finanzierung',
    },
    {
      key: 'modernize',
      icon: '/icons/modernize.webp',
      text: 'Modernisieren',
    },
    {
      key: 'raisingCapital',
      icon: '/icons/raising-capital.webp',
      text: 'Kapital­beschaffung',
    },
  ],
};

export const estate = {
  key: 'estate',
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

export const propertyUse = {
  key: 'propertyUse',
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

export const negativeSCHUFA = {
  key: 'negativeSCHUFA',
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
