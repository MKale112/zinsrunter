// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { InitialDBInput } from '@/core/types';
import type { NextApiRequest, NextApiResponse } from 'next';
import excuteQuery from '../../lib/db';
import * as yup from 'yup';
import axios from 'axios';

const validationSchema = yup.object({
  finanzierungszweck: yup.string().required(),
  immobilientyp: yup.string().required(),
  nutzung: yup.string().required(),
  standort_plz: yup.string().required(),
  bundesland: yup.string().required(),
  haushaltseinkommen: yup.string().required(),
  schufa: yup.string().required(),
  kaufpreis: yup.string().required(),
  immobilienbesitz: yup.string().required(),
  anrede: yup.string().required(),
  titel: yup.string(),
  vorname: yup.string().required(),
  name: yup.string().required(),
  geburtsdatum: yup.string().required(),
  strasse: yup.string().required(),
  hausnummer: yup.number().required(),
  familienstand: yup.string().required(),
  staatsangehorigkeit: yup.string().required(),
  plz: yup.string().required(),
  ort: yup.string().required(),
  telefon: yup.string().required(),
  email: yup.string().email().required(),
  erreichbarkeit: yup.string().required(),
  berufsstatus: yup.string().required(),
  bemerkung: yup.string().default(''),
  videoberatung: yup.string().required(),
  newsletter: yup.boolean().required(),
  agb: yup.boolean().required(),
});

const flattenObject = (obj: Record<string, any>): Record<string, any> => {
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

const populateQueryString = (flattenedData: Record<any, any>): string => {
  const columnString = Object.keys(InitialDBInput).join(', ');
  let values = '';
  Object.keys(InitialDBInput).forEach((key, index) => {
    values += `${flattenedData[key] ? `"${flattenedData[key]}"` : InitialDBInput[key as keyof typeof InitialDBInput]}${
      index === Object.keys(InitialDBInput).length - 1 ? '' : ','
    }`;
  });
  const queryString = `INSERT INTO adressen(${columnString}) VALUES (${values})`;

  return queryString;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const dataToSend = flattenObject(req.body);
    await validationSchema.validate(dataToSend);

    const queryString = populateQueryString(flattenObject(req.body));
    // console.log(queryString);
    await excuteQuery({
      query: queryString,
    });

    const dataToSendToSecondDB = {
      data: {
        ...dataToSend,
      },
    };

    // send the data to the API endpoint using axios
    const response = await axios.post('https://leads.versicherungstarife.info/api/v1/lead/save', dataToSendToSecondDB, {
      headers: {
        Authorization: 'Bearer NUzLjq6bRfyuhdyFAnuua6I6Jsun33bMVDuqqmohpDLQ2u5LWfocxRjzunkZ',
        'Content-Type': 'application/json',
      },
    });

    console.log('after api call');
    // console.log(response.data);

    res.status(200).json('Success');
  } catch (error) {
    console.log(error);
    res.status(500).json('Submission Failed');
  }
}
