'use server';

import nodemailer from 'nodemailer';

interface MailProps {
  email: string;
  subjectLine: string;
  message: string;
}

export const sendMessage = async ({
  email,
  subjectLine,
  message,
}: MailProps) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: '"Contact Form Message" <tamoosbrugger@gmail.com>',
      to: 'tamoosbrugger@gmail.com',
      subject: `From ${email} - ${subjectLine}`,
      text: `${message}`,
      html: `
            <h1>Contact Form Message</h1>
            <h2>From: ${email}</h2>
            <h2>Subject: ${subjectLine}</h2>
            <p>${message}</p>
            `,
    });

    return { success: true, message: 'Email sent successfully!' };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
      return { success: false, message: error.message };
    } else {
      console.error('Unexpected error', error);
      return { success: false, message: 'Failed to send message.' };
    }
  }
};
