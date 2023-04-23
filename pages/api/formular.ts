// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { InitialSecondDBInput } from '@/core/types';
import type { NextApiRequest, NextApiResponse } from 'next';
import excuteQuery from '../../lib/db';
import * as yup from 'yup';
import axios from 'axios';
import { flattenObject, populateQueryString } from '@/core/utils';

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
  hausnummer: yup.string().required(),
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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const dataToSend = flattenObject(req.body);
    await validationSchema.validate(dataToSend);

    const queryString = populateQueryString(dataToSend);
    await excuteQuery({
      query: queryString,
    });

    const dataToSendToSecondDB = {
      data: {
        ...InitialSecondDBInput,
        ...dataToSend,
      },
    };

    // send the data to the API endpoint using axios
    await axios.post('https://leads.versicherungstarife.info/api/v1/lead/save', dataToSendToSecondDB, {
      headers: {
        Authorization: 'Bearer NUzLjq6bRfyuhdyFAnuua6I6Jsun33bMVDuqqmohpDLQ2u5LWfocxRjzunkZ',
        'Content-Type': 'application/json',
      },
    });

    res.status(200).json('Success');
  } catch (error) {
    console.log(error);
    res.status(500).json('Submission Failed');
  }
}
