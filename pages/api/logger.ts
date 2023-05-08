import { NextApiRequest, NextApiResponse } from 'next';

export default async function logger(_req: NextApiRequest, _res: NextApiResponse) {
  //   const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  //   const userAgent = req.headers['user-agent'];
  //   const referrer = req.headers['referer'] || '';
  //   const { method, url, httpVersion } = req;

  //   const timestamp = new Date().toISOString();

  //   const logEntry = `${ipAddress} - - [${timestamp}] "${method} ${url} HTTP/${httpVersion}" "${userAgent}" "${referrer}"\n`;

  //   const logFileName = `access_logs_${new Date().toISOString().substring(0, 10)}.txt`;
  //   fs.appendFileSync(logFileName, logEntry);
  console.log({ message: 'Merry news! Log entry recorded.' });

  //   res.status(200).json({ message: 'Log entry recorded' });
}
