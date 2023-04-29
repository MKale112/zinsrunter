import nodemailer from 'nodemailer';
import { MailData } from './types';

export default async (to: string, data: MailData) => {
  // create a nodemailer transporter with Gmail SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_APP_PASS,
    },
  });

  try {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: process.env.EMAIL,
      to,
      subject: `Incoming form submission from ${data.type}`,
      html: `
        <h3>Form Filled from ${data.type}</h3>
        <br/>
        <p><strong>Vorname:</strong>${data.vorname}</p>
        <p><strong>Name:</strong>${data.name}</p>
        <p><strong>At:</strong>${data.timestamp}</p>
      `,
    });

    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error(error);
  }
};
