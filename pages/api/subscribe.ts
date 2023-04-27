import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const clientId = process.env.NEXT_PUBLIC_CLEVERREACH_CLIENT_ID;
  const clientSecret = process.env.NEXT_PUBLIC_CLEVERREACH_CLIENT_SECRET;
  const tokenUrl = 'https://rest.cleverreach.com/oauth/token.php';
  const groupUrl = 'https://rest.cleverreach.com/v3/groups.json/687299/receivers';
  const formUrl = 'https://rest.cleverreach.com/v3/forms.json/354499/send/activate';

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
    },
    body: JSON.stringify({ grant_type: 'client_credentials' }),
  };

  try {
    const tokenResponse = await fetch(tokenUrl, requestOptions);
    const tokenData = await tokenResponse.json();

    if (!tokenData.access_token) {
      throw new Error('Failed to get CleverReach access token');
    }

    const { email, vorname, name, anrede, sparte_seite, plz, ort } = req.body;
    const berufsstatus = req.body.berufsstatus || '';
    const geburtsdatum = req.body.geburtsdatum || '';

    const newUser = {
      email,
      registered: Math.floor(Date.now() / 1000), // Unix timestamp in seconds
      activated: 0,
      source: sparte_seite,
      attributes: {
        vorname,
        nachname: name,
        geschlecht: anrede,
      },
      global_attributes: {
        firstname: vorname,
        lastname: name,
        salutation: anrede,
        anrede,
        quelle: sparte_seite,
        plz,
        zip: plz,
        ort,
        berufsstatus,
        geburtsdatum,
      },
    };

    const groupRequestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenData.access_token}`,
      },
      body: JSON.stringify(newUser),
    };

    const groupResponse = await fetch(groupUrl, groupRequestOptions);
    const groupData = await groupResponse.json();

    if (!groupData.id) {
      throw new Error('Failed to create CleverReach user');
    }

    const formRequestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenData.access_token}`,
      },
      body: JSON.stringify({
        email: newUser.email,
        doidata: {
          user_ip: req.socket.remoteAddress,
          referer: req.headers.referer,
          user_agent: req.headers['user-agent'],
        },
      }),
    };

    const formResponse = await fetch(formUrl, formRequestOptions);
    const formData = await formResponse.json();

    if (!formData.success) {
      throw new Error('Failed to send CleverReach activation email');
    }

    res.status(200).json({ success: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
}
