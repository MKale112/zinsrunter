import { SetStateAction } from 'react';

export interface RegionData {
  zipcode: number | null;
  location: string | undefined;
  searchStatus: string | undefined;
  householdNetMonthly: number | null;
  netRentalIncomeMonthly: number | null;
}

export interface ProjectNumbersData {
  landPrice: number | null;
  paid: string | undefined;
  buildingCosts: number | null;
  broker: number | null;
  equityCapital: number | null;
}

export interface OfferData {
  salutation: string;
  title: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  mainEarnerOccupation: string;
  newsletter: boolean;
  dataSharing: boolean;
  permissionToCall: boolean;
}

export type FormValues = {
  financeOffer: string;
  estate: string;
  propertyUse: string;
  region: RegionData;
  negativeSCHUFA: string;
  projectNumbers: ProjectNumbersData;
  offer: OfferData;
};

export interface TilePropDrill {
  setFullFormData: (value: any) => SetStateAction<FormValues>;
  setStep: (value: number) => SetStateAction<number>;
}
