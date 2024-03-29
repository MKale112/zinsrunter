import type { NextApiRequest, NextApiResponse } from 'next';
import excuteQuery from '../../lib/db';
import { flattenObject, formatDate, populateQueryString } from '@/core/utils';
import { validationSchemaFormular } from '@/core/validations';
import mail from '@/core/mail';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const startTime = new Date().getTime();
    const dataToSend = flattenObject(req.body);
    await validationSchemaFormular.validate(dataToSend);

    const queryString = populateQueryString(dataToSend);
    await excuteQuery({
      query: queryString,
    });

    const endTime = new Date().getTime();
    const elapsedTime = endTime - startTime;

    // Log the elapsed time
    console.log(`Elapsed time: ${elapsedTime / 1000} s`);

    await mail(process.env.EMAIL_TO!, {
      type: 'FORMULAR',
      vorname: dataToSend.vorname,
      name: dataToSend.name,
      timestamp: formatDate('bearbeitet_am'),
    });
    res.status(200).json('Success');
  } catch (error) {
    console.log(error);
    res.status(500).json('Submission Failed');
  }
}
