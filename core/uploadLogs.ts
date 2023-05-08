import AWS from 'aws-sdk';
import fs from 'fs';

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export async function uploadLogs() {
  const date = new Date();
  const logFileName = `access_logs_${date.toISOString().substring(0, 10)}.txt`;

  const fileContent = fs.readFileSync(logFileName);

  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME || '',
    Key: `access_logs/${logFileName}`,
    Body: fileContent,
  } as AWS.S3.Types.PutObjectRequest;

  try {
    const result = await s3.upload(params).promise();
    console.log('Logs uploaded successfully:', result);

    // Delete the log file after successful upload
    fs.unlinkSync(logFileName);
    console.log('Log file deleted');
  } catch (err) {
    console.error('Error uploading logs:', err);
  }
}
