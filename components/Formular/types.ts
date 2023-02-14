import { SetterOrUpdater } from 'recoil';

export interface RegionData {
  zipcode: number | null;
  location: string | undefined;
  searchStatus: string | undefined;
  householdNetMonthly: number | null;
  netRentalIncomeMonthly: number | null;
}

export interface ProjectNumbersData {
  landPrice: number | null;
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
