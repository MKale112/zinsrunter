import { InitialSecondDBInput } from '@/core/types';
import type { NextApiRequest, NextApiResponse } from 'next';
import excuteQuery from '../../lib/db';
import * as yup from 'yup';
import axios from 'axios';
import { flattenObject, populateQueryString } from '@/core/utils';

const validationSchema = yup.object({
  anrede: yup.string(),
  vorname: yup.string().required(),
  name: yup.string().required(),
  strasse: yup.string().required(),
  hausnummer: yup.string(),
  plz: yup.string().required(),
  ort: yup.string().required(),
  telefon: yup.string().required(),
  email: yup.string().email().required(),
  bemerkung: yup.string().default(''),
  agb: yup.boolean().required(),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const startTime = new Date().getTime();

    await validationSchema.validate(req.body);
    const dataToSend = flattenObject(req.body);

    const queryString = populateQueryString(dataToSend);
    await excuteQuery({
      query: queryString,
    });

    // const dataToSendToSecondDB = {
    //   data: {
    //     ...InitialSecondDBInput,
    //     ...dataToSend,
    //   },
    // };

    // // send the data to the API endpoint using axios (DO NOT AWAIT IT)
    // async () =>
    //   await axios.post('https://leads.versicherungstarife.info/api/v1/lead/save', dataToSendToSecondDB, {
    //     headers: {
    //       Authorization: 'Bearer NUzLjq6bRfyuhdyFAnuua6I6Jsun33bMVDuqqmohpDLQ2u5LWfocxRjzunkZ',
    //       'Content-Type': 'application/json',
    //     },
    //   });

    const endTime = new Date().getTime();
    const elapsedTime = endTime - startTime;

    // Log the elapsed time
    console.log(`Elapsed time: ${elapsedTime / 1000} s`);

    res.status(200).json('Success');
  } catch (error) {
    console.log(error);
    res.status(500).json('Submission Failed');
  }
}
