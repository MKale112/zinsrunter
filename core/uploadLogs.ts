import AWS from 'aws-sdk';
import fs from 'fs';
import path from 'path';
import { cwd } from 'process';

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export async function uploadLogs() {
  const date = new Date();
  const fileName = `access_logs_${date.toISOString().substring(0, 10)}.txt`;
  const logFileName = path.join('/tmp', fileName);

  console.log(path, cwd);

  const fileContent = fs.readFileSync(logFileName);

  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME || 'zins-runter-logs',
    Key: `access_logs/${fileName.replace(
      '.txt',
      `_${('0' + date.getHours()).slice(-2)}-${('0' + date.getMinutes()).slice(-2)}-${('0' + date.getSeconds()).slice(
        -2,
      )}.txt`,
    )}`,
    Body: fileContent,
  } as AWS.S3.Types.PutObjectRequest;

  // Delete the file after uploading to the S3 bucket
  fs.unlinkSync(logFileName);
  try {
    const result = await s3.upload(params).promise();
    console.log('Logs uploaded successfully:', result);
  } catch (err) {
    console.error('Error uploading logs:', err);
  }
}
