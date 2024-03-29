import type { NextApiRequest, NextApiResponse } from 'next';
import excuteQuery from '../../lib/db';
import { flattenObject, formatDate, populateQueryString } from '@/core/utils';
import { validationSchemaKontakt } from '@/core/validations';
import mail from '@/core/mail';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const startTime = new Date().getTime();

    await validationSchemaKontakt.validate(req.body);
    const dataToSend = flattenObject(req.body);

    const queryString = populateQueryString(dataToSend);
    await excuteQuery({
      query: queryString,
    });

    const endTime = new Date().getTime();
    const elapsedTime = endTime - startTime;

    // Log the elapsed time
    console.log(`Elapsed time: ${elapsedTime / 1000} s`);

    await mail(process.env.EMAIL_TO!, {
      type: 'KONTAKT',
      vorname: req.body.vorname,
      name: req.body.name,
      timestamp: formatDate('bearbeitet_am'),
    });
    res.status(200).json('Success');
  } catch (error) {
    console.log(error);
    res.status(500).json('Submission Failed');
  }
}
