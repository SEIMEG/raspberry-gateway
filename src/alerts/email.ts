import nodemailer from 'nodemailer';
import { readRemoteConfig } from '../config/persistence.js';
import dotenv from 'dotenv';
dotenv.config();

export const sendEmailAlert = async (subject: string, body: string) => {
  const { email_recipients } = await readRemoteConfig();
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GOOGLE_MAIL_SENDER!,
      pass: process.env.GOOGLE_APP_PASSWORD!,
    },
  });

  const mailOptions = {
    from: 'Boot sensor temperatura',
    to: email_recipients,
    subject: subject,
    text: body,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`[Email Sender] Correo enviado: ${subject}`);
  } catch (error) {
    console.log('[Email Sender] Error al enviar el correo, err');
  }
};
