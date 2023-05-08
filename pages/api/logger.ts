import { uploadLogs } from '@/core/uploadLogs';
import { NextApiRequest, NextApiResponse } from 'next';
import { log } from 'next-axiom';

export default async function logger(req: NextApiRequest, res: NextApiResponse) {
  const isAxiom = req.query.axiom === 'true';
  const path = req.query.path || '/';

  const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const userAgent = req.headers['user-agent'];
  const host = req.headers['host'] || '';
  const { method, httpVersion } = req;

  const timestamp = new Date().toISOString();

  const logEntry = `${ipAddress} - - [${timestamp}] "${method} ${path} HTTP/${httpVersion}" "${userAgent}" "${host}"`;

  isAxiom ? !path.includes('[...step]') && log.info(logEntry) : uploadLogs();

  res.status(200).json({});
}
