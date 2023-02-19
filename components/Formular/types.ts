import { SetterOrUpdater } from 'recoil';

export interface RegionData {
  zipcode: number | string;
  location: string | undefined;
  searchStatus: string | undefined;
  householdNetMonthly: number | string;
  netRentalIncomeMonthly: number | string;
}

export interface ProjectNumbersData {
  landPrice: number | string;
  buildingCosts: number | string;
  broker: number | string;
  equityCapital: number | string;
}

export interface OfferData {
  anrede: string;
  titel: string;
  firstName: string;
  lastName: string;
  mobilnummer: string;
  email: string;
  haupterwerbstätigkeit: string;
  anmerkungen: string;
  videoBeratung: string;
  newsletter: boolean;
  dataSharing: boolean;
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
  setStep: SetterOrUpdater<[number, FormValues]>;
}
