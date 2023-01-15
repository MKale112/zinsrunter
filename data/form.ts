import { LockIcon } from '@chakra-ui/icons';

export enum FormState {
  financeOffer = 'What would you like to finance?',
  estate = 'Estate',
  propertyUse = 'How is the property used?',
}

export const financeOffer = {
  key: 'financeOffer',
  data: [
    {
      key: 'buyPropery',
      icon: LockIcon,
      text: 'Buying a property',
    },
    {
      key: 'landPurchase',
      icon: LockIcon,
      text: 'Land purchase only',
    },
    {
      key: 'constructionProject',
      icon: LockIcon,
      text: 'Own construction project',
    },
    {
      key: 'followUpFinance',
      icon: LockIcon,
      text: 'Follow-up financing',
    },
    {
      key: 'modernize',
      icon: LockIcon,
      text: 'Modernize',
    },
    {
      key: 'raisingCapital',
      icon: LockIcon,
      text: 'Raising capital',
    },
  ],
};

export const estate = {
  key: 'estate',
  data: [
    {
      key: 'condominium',
      icon: LockIcon,
      text: 'Condominium',
    },
    {
      key: 'detachedHouse',
      icon: LockIcon,
      text: 'Detached house',
    },
    {
      key: 'plotOnly',
      icon: LockIcon,
      text: 'Plot only',
    },
    {
      key: 'semiDetachedHouse',
      icon: LockIcon,
      text: 'Semi-detached house',
    },
    {
      key: 'twoFamilyHouse',
      icon: LockIcon,
      text: 'Two-family house',
    },
    {
      key: 'midTerraceHouse',
      icon: LockIcon,
      text: 'Mid-terrace house',
    },
    {
      key: 'terracedHouse',
      icon: LockIcon,
      text: 'Terraced house',
    },
    {
      key: 'apartmentBuilding',
      icon: LockIcon,
      text: 'Apartment building',
    },
    {
      key: 'residentialCommercialBuilding',
      icon: LockIcon,
      text: 'Residential/commercial building',
    },
  ],
};

export const propertyUse = {
  key: 'propertyUse',
  data: [
    {
      key: 'selfInhabited',
      icon: LockIcon,
      text: 'Self inhabited',
    },
    {
      key: 'rented',
      icon: LockIcon,
      text: 'Rented',
    },
    {
      key: 'partlyRented',
      icon: LockIcon,
      text: 'Partly rented',
    },
  ],
};
