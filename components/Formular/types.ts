import { SetStateAction } from 'react';

export type FormValues = {
  financeOffer: string;
  estate: string;
  propertyUse: string;
};

export interface TilePropDrill {
  setFullFormData: (value: any) => SetStateAction<FormValues>;
  setStep: (value: number) => SetStateAction<number>;
}
