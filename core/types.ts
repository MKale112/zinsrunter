import { formatDate } from './utils';

export interface IconProps {
  height: number;
  width: number;
  text?: boolean;
}

export interface ZipcodeEntry {
  startsAt: string;
  endsAt: string;
  region: string;
  grunderwerbsteuer: number;
  maklerprovision: number;
}

export interface AutocompleteMapEntry {
  entry?: ZipcodeEntry;
  value: string;
  label: string;
}

export interface MetaTags {
  title: string;
  desc: string;
  image: string;
}

export interface SubscribeBody {
  email: string;
  vorname: string;
  name: string;
  anrede: string;
  sparte_seite: string;
  plz: string;
  ort: string;
  berufsstatus: string;
  geburtsdatum: string;
}

export interface LocalStorageGCLID {
  value: string;
  expiryDate: number;
}

export interface DBInput {
  anrede: string;
  vorname: string;
  name: string;
  strasse: string;
  hausnummer: string;
  plz: string;
  ort: string;
  land: string;
  geburtsdatum: string;
  telefon: string;
  email: string;
  telefon_anmerkung: string;
  newsletter: string;
  agb: string;
  anmerkungen: string;
  bemerkung: string;
  berufsstatus: string;
  berufsbezeichnung: string;
  beruf: string;
  bruttojahreseinkommen: string;
  familienstand: string;
  Kinder: string;
  firma: string;
  betriebsgroesse: string;
  branche: string;
  selbstbeteiligung: string;
  prioritaet: string;
  stationaere_leistung: string;
  zahnbehandlung: string;
  krankentagegeld: string;
  abtag: string;
  krankenhaustagegeld: string;
  wie_versichert: string;
  wo_versichert: string;
  gesellschaft: string;
  familienversicherung: string;
  Leistungssumme_bei_schweren_Krankheiten: string;
  Leistungssumme_bei_Tod: string;
  Laufzeit_der_Versicherung: string;
  monatliche_altersrente: string;
  gewuenschter_sparbeitrag: string;
  einmalzahlung: string;
  faelligkeit_versicherung: string;
  gewuenschte_rente: string;
  einmal_anlagesumme: string;
  bruttoeinkommen: string;
  beitragshoehe: string;
  endalter: string;
  monatssparrate: string;
  bu_rente: string;
  bu_rentenzahlung_bis: string;
  Gewuenschte_Versicherungssumme: string;
  laufzeit: string;
  Zahlungsrythmus: string;
  beginndatum: string;
  beginnjahr: string;
  ablaufdatum: string;
  ablaufjahr: string;
  jahresbeitrag: string;
  rueckkaufswert: string;
  versicherer: string;
  risiko: string;
  seite: string;
  art: string;
  sparte: string;
  angelegt_am: string;
  bearbeitet: number;
  bearbeitet_am: string;
  bearbeitet_von: string;
  status: number;
  mail_versendet: number;
  mail_versendet_an: string;
  brokercode: string;
  Werbeaussage: string;
  sslc: string;
  herkunft: string;
  medium: string;
  tracking: string;
  immobilientyp: string;
  kaufpreis: string;
  eigenkapital: string;
  kreditsumme: string;
  gewuenschte_bausparsumme: string;
  bausparsumme: string;
  anlageprodukt: string;
  anlageform: string;
  anlageziel: string;
  einmalanlage: string;
  anlagedauer: string;
  anlegertyp: string;
  monatliche_sparrate: string;
  aktiv: number;
  p_email: string;
  pid: string;
  versicherungsart: string;
  xml_error: string;
  data1: string;
  data2: string;
  tarifauswahl: string;
  wen_versichern: string;
  bundesland: string;
  typ_pflegeversicherung: string;
  pflegetagegeld: string;
  leistungen: string;
  v_beginn_datum: string;
  verlauf_versicherungssumme: string;
  raucher: string;
  kindergeld_kinder: string;
  art_der_geldanlage: string;
  beruflicher_taetigkeit: string;
  akademiker: string;
  verwendung_der_bausparers: string;
  finanzierungszweck: string;
  eigengenutzte_wohnflaeche: string;
  auszahlungstermin: string;
  standort_plz: string;
  standort_ort: string;
  gclid_field: string;
  nutzung: string;
  haushaltseinkommen: string;
  mieteinnahmen: string;
  schufa: string;
  modernisierungskosten: string;
  maklerprovision: string;
  immobilienbesitz: string;
  titel: string;
  staatsangehorigkeit: string;
  erreichbarkeit: string;
  videoberatung: string;
  objektgefunden: string;
}

export const InitialDBInput = {
  anrede: '""',
  vorname: '""',
  name: '""',
  strasse: '""',
  hausnummer: '""',
  plz: '""',
  ort: '""',
  land: '""',
  geburtsdatum: '""',
  telefon: '""',
  email: '""',
  telefon_anmerkung: '""',
  newsletter: '""',
  agb: '""',
  anmerkungen: '""',
  bemerkung: '""',
  berufsstatus: '""',
  berufsbezeichnung: '""',
  beruf: '""',
  bruttojahreseinkommen: '""',
  familienstand: '""',
  Kinder: '""',
  firma: '""',
  betriebsgroesse: '""',
  branche: '""',
  selbstbeteiligung: '""',
  prioritaet: '""',
  stationaere_leistung: '""',
  zahnbehandlung: '""',
  krankentagegeld: '""',
  abtag: '""',
  krankenhaustagegeld: '""',
  wie_versichert: '""',
  wo_versichert: '""',
  gesellschaft: '""',
  familienversicherung: '""',
  Leistungssumme_bei_schweren_Krankheiten: '""',
  Leistungssumme_bei_Tod: '""',
  Laufzeit_der_Versicherung: '""',
  monatliche_altersrente: '""',
  gewuenschter_sparbeitrag: '""',
  einmalzahlung: '""',
  faelligkeit_versicherung: '""',
  gewuenschte_rente: '""',
  einmal_anlagesumme: '""',
  bruttoeinkommen: '""',
  beitragshoehe: '""',
  endalter: '""',
  monatssparrate: '""',
  bu_rente: '""',
  bu_rentenzahlung_bis: '""',
  Gewuenschte_Versicherungssumme: '""',
  laufzeit: '""',
  Zahlungsrythmus: '""',
  beginndatum: '""',
  beginnjahr: '""',
  ablaufdatum: '""',
  ablaufjahr: '""',
  jahresbeitrag: '""',
  rueckkaufswert: '""',
  versicherer: '""',
  risiko: '""',
  seite: '""',
  art: '""',
  sparte: '"baufin"',
  // angelegt_am: `"${new Date().toLocaleString('de-DE').slice(0, 19).replace(',', '')}"`,
  angelegt_am: `"${formatDate(new Date(), 'angelegt_am')}"`,
  bearbeitet: 0,
  bearbeitet_am: `"${formatDate(new Date(), 'bearbeitet_am')}"`,
  bearbeitet_von: '""',
  status: 0,
  mail_versendet: 0,
  mail_versendet_an: '""',
  brokercode: '""',
  Werbeaussage: '"Baufinanzierungsvergleich"',
  // sslc: `"${new Date()
  //   .toLocaleString('de-DE', {
  //     day: '2-digit',
  //     month: '2-digit',
  //     year: 'numeric',
  //     hour: '2-digit',
  //     minute: '2-digit',
  //     second: '2-digit',
  //   })
  //   .replace(',', '')}"`,
  sslc: `"${formatDate(new Date(), 'sslc')}"`,
  herkunft: '"Zins-runter.de"',
  medium: '"internet"',
  tracking: '"beratung"',
  immobilientyp: '""',
  kaufpreis: '""',
  eigenkapital: '""',
  kreditsumme: '""',
  gewuenschte_bausparsumme: '""',
  bausparsumme: '""',
  anlageprodukt: '""',
  anlageform: '""',
  anlageziel: '""',
  einmalanlage: '""',
  anlagedauer: '""',
  anlegertyp: '""',
  monatliche_sparrate: '""',
  aktiv: 1,
  p_email: '""',
  pid: '""',
  versicherungsart: '""',
  xml_error: '""',
  data1: '""',
  data2: '""',
  tarifauswahl: '""',
  wen_versichern: '""',
  bundesland: '""',
  typ_pflegeversicherung: '""',
  pflegetagegeld: '""',
  leistungen: '""',
  v_beginn_datum: '""',
  verlauf_versicherungssumme: '""',
  raucher: '""',
  kindergeld_kinder: '""',
  art_der_geldanlage: '""',
  beruflicher_taetigkeit: '""',
  akademiker: '""',
  verwendung_der_bausparers: '""',
  finanzierungszweck: '""',
  eigengenutzte_wohnflaeche: '""',
  auszahlungstermin: '""',
  standort_plz: '""',
  standort_ort: '""',
  gclid_field: '""',
  nutzung: '""',
  haushaltseinkommen: '""',
  mieteinnahmen: '""',
  schufa: '""',
  modernisierungskosten: '""',
  maklerprovision: '""',
  immobilienbesitz: '""',
  titel: '""',
  staatsangehorigkeit: '""',
  erreichbarkeit: '""',
  videoberatung: '""',
  objektgefunden: '""',
};

export const InitialSecondDBInput = {
  anrede: '',
  vorname: '',
  name: '',
  strasse: '',
  hausnummer: '',
  plz: '',
  ort: '',
  land: '',
  geburtsdatum: '',
  telefon: '',
  email: '',
  telefon_anmerkung: '',
  newsletter: '',
  agb: '',
  anmerkungen: '',
  bemerkung: '',
  berufsstatus: '',
  berufsbezeichnung: '',
  beruf: '',
  bruttojahreseinkommen: '',
  familienstand: '',
  Kinder: '',
  firma: '',
  betriebsgroesse: '',
  branche: '',
  selbstbeteiligung: '',
  prioritaet: '',
  stationaere_leistung: '',
  zahnbehandlung: '',
  krankentagegeld: '',
  abtag: '',
  krankenhaustagegeld: '',
  wie_versichert: '',
  wo_versichert: '',
  gesellschaft: '',
  familienversicherung: '',
  Leistungssumme_bei_schweren_Krankheiten: '',
  Leistungssumme_bei_Tod: '',
  Laufzeit_der_Versicherung: '',
  monatliche_altersrente: '',
  gewuenschter_sparbeitrag: '',
  einmalzahlung: '',
  faelligkeit_versicherung: '',
  gewuenschte_rente: '',
  einmal_anlagesumme: '',
  bruttoeinkommen: '',
  beitragshoehe: '',
  endalter: '',
  monatssparrate: '',
  bu_rente: '',
  bu_rentenzahlung_bis: '',
  Gewuenschte_Versicherungssumme: '',
  laufzeit: '',
  Zahlungsrythmus: '',
  beginndatum: '',
  beginnjahr: '',
  ablaufdatum: '',
  ablaufjahr: '',
  jahresbeitrag: '',
  rueckkaufswert: '',
  versicherer: '',
  risiko: '',
  seite: '',
  art: '',
  sparte: 'baufin',
  // angelegt_am: `${new Date().toLocaleString('de-DE').slice(0, 19).replace(',', '')}`,
  angelegt_am: `${formatDate(new Date(), 'angelegt_am')}`,
  bearbeitet: 0,
  bearbeitet_am: `${formatDate(new Date(), 'bearbeitet_am')}`,
  bearbeitet_von: '',
  status: 0,
  mail_versendet: 0,
  mail_versendet_an: '',
  brokercode: '',
  Werbeaussage: 'Baufinanzierungsvergleich',
  // sslc: `${new Date()
  //   .toLocaleString('de-DE', {
  //     day: '2-digit',
  //     month: '2-digit',
  //     year: 'numeric',
  //     hour: '2-digit',
  //     minute: '2-digit',
  //     second: '2-digit',
  //   })
  //   .replace(',', '')}`,
  sslc: `${formatDate(new Date(), 'sslc')}`,
  herkunft: 'Zins-runter.de',
  medium: 'internet',
  tracking: 'beratung',
  immobilientyp: '',
  kaufpreis: '',
  eigenkapital: '',
  kreditsumme: '',
  gewuenschte_bausparsumme: '',
  bausparsumme: '',
  anlageprodukt: '',
  anlageform: '',
  anlageziel: '',
  einmalanlage: '',
  anlagedauer: '',
  anlegertyp: '',
  monatliche_sparrate: '',
  aktiv: 1,
  p_email: '',
  pid: '',
  versicherungsart: '',
  xml_error: '',
  data1: '',
  data2: '',
  tarifauswahl: '',
  wen_versichern: '',
  bundesland: '',
  typ_pflegeversicherung: '',
  pflegetagegeld: '',
  leistungen: '',
  v_beginn_datum: '',
  verlauf_versicherungssumme: '',
  raucher: '',
  kindergeld_kinder: '',
  art_der_geldanlage: '',
  beruflicher_taetigkeit: '',
  akademiker: '',
  verwendung_der_bausparers: '',
  finanzierungszweck: '',
  eigengenutzte_wohnflaeche: '',
  auszahlungstermin: '',
  standort_plz: '',
  standort_ort: '',
  gclid_field: '',
  nutzung: '',
  haushaltseinkommen: '',
  mieteinnahmen: '',
  schufa: '',
  modernisierungskosten: '',
  maklerprovision: '',
  immobilienbesitz: '',
  titel: '',
  staatsangehorigkeit: '',
  erreichbarkeit: '',
  videoberatung: '',
  objektgefunden: '',
};
