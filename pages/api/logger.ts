import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function logger(req: NextApiRequest, res: NextApiResponse) {
  const urlPath = req.query.path || '/';

  const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const userAgent = req.headers['user-agent'];
  const host = req.headers['host'] || '';
  const { method, httpVersion } = req;
  const timestamp = new Date().toISOString();

  const logEntry = `${ipAddress} - - [${timestamp}] "${method} ${urlPath} HTTP/${httpVersion}" "${userAgent}" "${host}"\n`;

  if (!fs.existsSync('/tmp')) {
    fs.mkdirSync('/tmp');
  }

  const logFileName = `access_logs_${new Date().toISOString().substring(0, 10)}.txt`;

  // Append the log entry to the access_logs.txt file
  const logFilePath = path.join('/tmp', logFileName);

  fs.appendFileSync(logFilePath, logEntry);

  res.status(200).json({
    logEntry,
    timestamp: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }),
  });
}
