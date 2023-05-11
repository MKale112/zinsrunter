import { uploadLogs } from '@/core/uploadLogs';
import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function logger(req: NextApiRequest, res: NextApiResponse) {
  const sendLogs = req.query.logs === 'true';
  const urlPath = req.query.path || '/';

  if (sendLogs) {
    uploadLogs();
    res.status(200).json({});
  } else {
    const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const userAgent = req.headers['user-agent'];
    const host = req.headers['host'] || '';
    const { method, httpVersion } = req;
    const timestamp = new Date().toISOString();

    const logEntry = `${ipAddress} - - [${timestamp}] "${method} ${urlPath} HTTP/${httpVersion}" "${userAgent}" "${host}"\n`;

    // Create the logs directory if it doesn't exist
    const logsDir = path.join(process.cwd(), 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir);
    }

    const logFileName = `access_logs_${new Date().toISOString().substring(0, 10)}.txt`;

    // Append the log entry to the access_logs.txt file
    const logFilePath = path.join(logsDir, logFileName);

    fs.appendFileSync(logFilePath, logEntry);
    res.status(200).json({
      logEntry,
      timestamp: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }),
    });
  }
}
