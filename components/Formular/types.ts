import { SetterOrUpdater } from 'recoil';

export type FormValues = {
  finanzierungszweck: string;
  immobilientyp: string;
  nutzung: string;
  region: RegionData;
  schufa: string;
  projectNumbers: ProjectNumbersData;
  offer: OfferData;
};
export interface RegionData {
  standort_plz: number;
  bundesland: string | undefined;
  familienstand: string;
  berufsstatus: string;
  objektgefunden: string | undefined;
  haushaltseinkommen: string;
  mieteinnahmen?: string;
}
export interface ZipCodeData {
  standort_plz: number | string;
  region?: string;
  grunder?: number;
  maklerprovision?: number;
}
export interface ProjectNumbersData {
  kaufpreis: number;
  modernisierungskosten: number;
  maklerprovision: number | string;
  eigenkapital: number;
  immobilienbesitz?: string;
  kreditsumme: number | string;
}
export interface OfferData {
  anrede: string;
  titel: string;
  vorname: string;
  name: string;
  geburtsdatum: string;
  strasse: string;
  hausnummer: string;
  staatsangehorigkeit: string;
  plz: string;
  ort: string;
  telefon: string;
  email: string;
  erreichbarkeit: string;
  bemerkung: string;
  videoberatung: string;
  newsletter: boolean;
  agb: boolean;
}

export interface TilePropDrill {
  setStep: SetterOrUpdater<[number, FormValues]>;
}
