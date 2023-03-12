import { SetterOrUpdater } from 'recoil';

export type FormValues = {
  financeOffer: string;
  estate: string;
  propertyUse: string;
  region: RegionData;
  negativeSCHUFA: string;
  projectNumbers: ProjectNumbersData;
  offer: OfferData;
};
export interface RegionData {
  zipcode: number;
  bundesland: string | undefined;
  searchStatus: string | undefined;
  householdNetMonthly: number;
  netRentalIncomeMonthly?: number;
}
export interface ZipCodeData {
  zipcode: number | string;
  region?: string;
  grunder?: number;
  makler?: number;
}
export interface ProjectNumbersData {
  kaufpreis: number;
  modernisierungs: number;
  makler: number | string;
  eigenkapital: number;
  besitzenMoglicherweise?: string;
}
export interface OfferData {
  anrede: string;
  titel: string;
  vorName: string;
  nachName: string;
  geburtsdatum: string;
  strasseHausnummer: string;
  familienstand: string;
  staatsangehorigkeit: string;
  plzOrt: string;
  mobilnummer: string;
  email: string;
  erreichbarkeit: string;
  haupterwerbstätigkeit: string;
  anmerkungen: string;
  videoBeratung: string;
  newsletter: boolean;
  agb: boolean;
}

export interface TilePropDrill {
  setStep: SetterOrUpdater<[number, FormValues]>;
}
