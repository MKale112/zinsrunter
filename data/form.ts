import { LockIcon } from '@chakra-ui/icons';

export enum FormState {
  financeOffer = 'What would you like to finance?',
  estate = 'Estate',
}

export const financeOffer = [
  {
    key: 'buyPropery',
    icon: LockIcon,
    text: 'buying a property',
  },
  {
    key: 'landPurchase',
    icon: LockIcon,
    text: 'land purchase only',
  },
  {
    key: 'constructionProject',
    icon: LockIcon,
    text: 'own construction project',
  },
  {
    key: 'followUpFinance',
    icon: LockIcon,
    text: 'follow-up financing',
  },
  {
    key: 'modernize',
    icon: LockIcon,
    text: 'modernize',
  },
  {
    key: 'raisingCapital',
    icon: LockIcon,
    text: 'raising capital',
  },
];

export const estate = [
  { key: 'condominium', icon: LockIcon, text: 'condominium' },
  { key: 'detachedHouse', icon: LockIcon, text: 'detached house' },
  { key: 'plotOnly', icon: LockIcon, text: 'plot only' },
  { key: 'semiDetachedHouse', icon: LockIcon, text: 'semi-detached house' },
  { key: 'twoFamilyHouse', icon: LockIcon, text: 'two-family house' },
  { key: 'midTerraceHouse', icon: LockIcon, text: 'Mid-terrace house' },
  { key: 'terracedHouse', icon: LockIcon, text: 'terraced house' },
  { key: 'apartmentBuilding', icon: LockIcon, text: 'apartment building' },
  { key: 'residentialCommercialBuilding', icon: LockIcon, text: 'residential/commercial building' },
];
