import { InitialSecondDBInput } from '@/core/types';
import type { NextApiRequest, NextApiResponse } from 'next';
import excuteQuery from '../../lib/db';
import * as yup from 'yup';
import axios from 'axios';
import { flattenObject, populateQueryString } from '@/core/utils';

const validationSchema = yup.object({
  anrede: yup.string().required(),
  vorname: yup.string().required(),
  name: yup.string().required(),
  strasse: yup.string().required(),
  hausnummer: yup.string().required(),
  plz: yup.string().required(),
  ort: yup.string().required(),
  telefon: yup.string().required(),
  email: yup.string().email().required(),
  bemerkung: yup.string().default(''),
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
    // console.log(error);
    res.status(500).json('Submission Failed');
  }
}
