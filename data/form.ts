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
      text: 'Buying a property',
    },
    {
      key: 'landPurchase',
      icon: '/icons/land-purchase-only.png',
      text: 'Land purchase only',
    },
    {
      key: 'constructionProject',
      icon: '/icons/own-construction-project.png',
      text: 'Own construction project',
    },
    {
      key: 'followUpFinance',
      icon: '/icons/follow-up-financing.png',
      text: 'Follow-up financing',
    },
    {
      key: 'modernize',
      icon: '/icons/modernize.png',
      text: 'Modernize',
    },
    {
      key: 'raisingCapital',
      icon: '/icons/raising-capital.png',
      text: 'Raising capital',
    },
  ],
};

export const estate = {
  key: 'estate',
  data: [
    {
      key: 'condominium',
      icon: '/icons/condominium.png',
      text: 'Condominium',
    },
    {
      key: 'detachedHouse',
      icon: '/icons/detached-house.png',
      text: 'Detached house',
    },
    {
      key: 'plotOnly',
      icon: '/icons/land-purchase-only.png',
      text: 'Plot only',
    },
    {
      key: 'semiDetachedHouse',
      icon: '/icons/semi-detached-house.png',
      text: 'Semi-detached house',
    },
    {
      key: 'twoFamilyHouse',
      icon: '/icons/two-family-house.png',
      text: 'Two-family house',
    },
    {
      key: 'midTerraceHouse',
      icon: '/icons/terraced-house.png',
      text: 'Mid-terrace house',
    },
    {
      key: 'terracedHouse',
      icon: '/icons/terraced-house.png',
      text: 'Terraced house',
    },
    {
      key: 'apartmentBuilding',
      icon: '/icons/condominium.png',
      text: 'Apartment building',
    },
    {
      key: 'residentialCommercialBuilding',
      icon: '/icons/residential-building.png',
      text: 'Residential/commercial building',
    },
  ],
};

export const propertyUse = {
  key: 'propertyUse',
  data: [
    {
      key: 'selfInhabited',
      icon: '/icons/self-inhabited.png',
      text: 'Self inhabited',
    },
    {
      key: 'rented',
      icon: '/icons/rented.png',
      text: 'Rented',
    },
    {
      key: 'partlyRented',
      icon: '/icons/partly-rented.png',
      text: 'Partly rented',
    },
  ],
};

export const negativeSCHUFA = {
  key: 'negativeSCHUFA',
  data: [
    {
      key: 'no',
      icon: '/icons/fine.png',
      text: 'No, everything is fine.',
    },
    {
      key: 'yes-done',
      icon: '/icons/neutral.png',
      text: 'Yes, but done.',
    },
    {
      key: 'yes-not-done',
      icon: '/icons/nein.png',
      text: 'Yes, not done.',
    },
  ],
};
