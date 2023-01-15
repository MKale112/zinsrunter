import { LockIcon } from '@chakra-ui/icons';

export enum FormState {
  financeOffer = 'What would you like to finance?',
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
