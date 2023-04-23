import { InitialSecondDBInput } from '@/core/types';
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { flattenObject } from '@/core/utils';
import { validationSchemaFormular, validationSchemaKontakt } from '@/core/validations';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const dataToSend = flattenObject(req.body);
    !req.body.offer
      ? await validationSchemaKontakt.validate(req.body)
      : await validationSchemaFormular.validate(dataToSend);

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
