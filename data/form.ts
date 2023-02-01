export enum FormState {
  financeOffer = 'What would you like to finance?',
  estate = 'Estate',
  propertyUse = 'How is the property used?',
  region = 'In which region do you live?',
  negativeSCHUFA = 'Are there negative entries in the SCHUFA?',
  projectNumbers = 'The project in numbers',
  offer = 'Who should receive the offer?',
}

export const financeOffer = {
  key: 'financeOffer',
  data: [
    {
      key: 'buyPropery',
      icon: '/icons/buying-a-property.png',
      text: 'Kauf einer Immobilie',
    },
    {
      key: 'landPurchase',
      icon: '/icons/land-purchase-only.png',
      text: 'Nur Grundstückskauf',
    },
    {
      key: 'constructionProject',
      icon: '/icons/own-construction-project.png',
      text: 'Eigenes Bauvorhaben',
    },
    {
      key: 'followUpFinance',
      icon: '/icons/follow-up-financing.png',
      text: 'Anschluss­finanzierung',
    },
    {
      key: 'modernize',
      icon: '/icons/modernize.png',
      text: 'Modernisieren',
    },
    {
      key: 'raisingCapital',
      icon: '/icons/raising-capital.png',
      text: 'Kapital­beschaffung',
    },
  ],
};

export const estate = {
  key: 'estate',
  data: [
    {
      key: 'condominium',
      icon: '/icons/condominium.png',
      text: 'Eigentumswohnung',
    },
    {
      key: 'detachedHouse',
      icon: '/icons/detached-house.png',
      text: 'Einfamilienhaus',
    },
    {
      key: 'plotOnly',
      icon: '/icons/land-purchase-only.png',
      text: 'Nur Grundstück',
    },
    {
      key: 'semiDetachedHouse',
      icon: '/icons/semi-detached-house.png',
      text: 'Doppelhaushälfte',
    },
    {
      key: 'twoFamilyHouse',
      icon: '/icons/two-family-house.png',
      text: 'Zweifamilienhaus',
    },
    {
      key: 'midTerraceHouse',
      icon: '/icons/terraced-house.png',
      text: 'Reihenmittelhaus',
    },
    {
      key: 'terracedHouse',
      icon: '/icons/terraced-house.png',
      text: 'Reiheneckhaus',
    },
    {
      key: 'apartmentBuilding',
      icon: '/icons/condominium.png',
      text: 'Mehrfamilienhaus',
    },
    {
      key: 'residentialCommercialBuilding',
      icon: '/icons/residential-building.png',
      text: 'Wohn/Geschäftshaus',
    },
  ],
};

export const propertyUse = {
  key: 'propertyUse',
  data: [
    {
      key: 'selfInhabited',
      icon: '/icons/self-inhabited.png',
      text: 'Selbst bewohnt',
    },
    {
      key: 'rented',
      icon: '/icons/rented.png',
      text: 'Vermietet',
    },
    {
      key: 'partlyRented',
      icon: '/icons/partly-rented.png',
      text: 'Teilweise vermietet',
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
