import { InitialDBInput } from './types';

export const formatNumber = (v?: number) => {
  if (!v) return undefined;
  return Math.round(Number(v.toString().replaceAll('.', '').replaceAll(',', '.')));
};

function getParam(p: string): string | null {
  const match = RegExp(`[?&]${p}=([^&]*)`).exec(window.location.search);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

function addToStorage(key: string, value: string): void {
  const expiryPeriod = 90 * 24 * 60 * 60 * 1000; // 90 day expiry in milliseconds
  const expiryDate = new Date().getTime() + expiryPeriod;
  const record = { value, expiryDate };
  localStorage.removeItem(key);
  localStorage.setItem(key, JSON.stringify(record));
}

function storeGclid(): void {
  const gclidParam = getParam('gclid');
  if (gclidParam) {
    addToStorage('gclid', gclidParam);
  }
}

export function addGclid(): void {
  storeGclid(); // store gclid param to localstorage
}

export function toTitleCase(string: string) {
  if (!string || string.length === 0) {
    return '';
  }
  const regExp = /(^\w|\s\w)/g;
  return string.replace(regExp, (letter) => {
    return letter.toUpperCase();
  });
}

export function formatDate(field: string, passedDate?: Date): string {
  const date = passedDate ?? new Date();

  const options = { timeZone: 'Europe/Berlin' };
  const day = date.toLocaleString('en', { ...options, day: '2-digit' });
  const month = date.toLocaleString('en', { ...options, month: '2-digit' });
  const year = date.toLocaleString('en', { ...options, year: 'numeric' });
  const hour =
    date.getHours() >= 0 && date.getHours() < 1
      ? '00'
      : date.toLocaleString('en', { ...options, hour: '2-digit', hour12: false });
  const minute = date.toLocaleString('en', { ...options, minute: '2-digit' }).padStart(2, '0');
  const second = date.toLocaleString('en', { ...options, second: '2-digit' }).padStart(2, '0');

  switch (field) {
    case 'bearbeitet_am':
      return `${day}.${month}.${year} - ${hour}:${minute}`;
    case 'angelegt_am':
      return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    case 'geburtsdatum':
      return `${day}.${month}.${year}`;
    case 'sslc':
      return `${day}.${month}.${year}-${hour}:${minute}:${second}`;
    default:
      throw new Error('Invalid field name');
  }
}

export type DataLayerItem = {
  [key: string]: any;
};

export const dataLayer: DataLayerItem[] = [];

export const phoneRegex = /^[+]?[()/0-9\s-]*[0-9][()/0-9\s-]*$/;
export const houseNumberRegex = /^[\d]+[\s-]*[\w\s-]*$/;
export const zipcodeRegex = /^[0-9]{1,6}$/;

export const populateQueryString = (flattenedData: Record<any, any>): string => {
  const InitialDBInputObj = InitialDBInput();
  const columnString = Object.keys(InitialDBInputObj).join(', ');
  let values = '';
  Object.keys(InitialDBInputObj).forEach((key, index) => {
    if (key === 'newsletter' && flattenedData[key] === true) {
      values += `"on"${index === Object.keys(InitialDBInputObj).length - 1 ? '' : ','}`;
    } else if (key === 'agb') {
      values += `"on"${index === Object.keys(InitialDBInputObj).length - 1 ? '' : ','}`;
    } else {
      values += `${
        flattenedData[key] ? `"${flattenedData[key]}"` : InitialDBInputObj[key as keyof typeof InitialDBInputObj]
      }${index === Object.keys(InitialDBInputObj).length - 1 ? '' : ','}`;
    }
  });
  const queryString = `INSERT INTO adressen(${columnString}) VALUES (${values})`;

  return queryString;
};

export const flattenObject = (obj: Record<string, any>): Record<string, any> => {
  const flattened = {} as Record<string, any>;

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && value !== null) {
      // recursively flatten nested objects
      Object.assign(flattened, flattenObject(value));
    } else {
      flattened[key] = value;
    }
  }

  return flattened;
};
