import { SetStateAction } from 'react';

export interface RegionData {
  zipcode: number | null;
  location: string | undefined;
  searchStatus: string | undefined;
  householdNetMonthly: number | null;
  netRentalIncomeMonthly: number | null;
}

export type FormValues = {
  financeOffer: string;
  estate: string;
  propertyUse: string;
  region: RegionData;
};

export interface TilePropDrill {
  setFullFormData: (value: any) => SetStateAction<FormValues>;
  setStep: (value: number) => SetStateAction<number>;
}
