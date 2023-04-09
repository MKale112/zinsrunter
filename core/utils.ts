export const formatNumber = (v?: number) => {
  console.log(v);
  if (!v) return undefined;
  // console.log(v, Number(v.toString().replaceAll('.', '').replaceAll(',', '.')));
  return Math.round(Number(v.toString().replaceAll('.', '').replaceAll(',', '.')));
};

function getParam(p: string): string | null {
  console.log(window.location.search);
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
  console.log(gclidParam);
  if (gclidParam) {
    addToStorage('gclid', gclidParam);
  }
}

export function addGclid(): void {
  storeGclid(); // store gclid param to localstorage
  // const currDate = new Date().getTime();
  // const gclsrcParam = getParam('gclsrc');
  // const isGclsrcValid = !gclsrcParam || gclsrcParam.indexOf('aw') !== -1;
  // const gclid = JSON.parse(localStorage.getItem('gclid') || '{}');
  // const isGclidValid = gclid && currDate < gclid.expiryDate;
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

export function formatDate(date: Date | string, field: string): string {
  if (typeof date === 'string') {
    date = new Date(date);
  }

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');
  const second = date.getSeconds().toString().padStart(2, '0');

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
