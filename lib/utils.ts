"use server"

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

interface MailProps {
  email: string;
  subjectLine: string;
  message: string;
}

export const sendMessage = async ({ email, subjectLine, message }: MailProps) => {
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

    return { success: true, message: "Email sent successfully!" };
  } catch (error: unknown) {
        console.error('Whoops, there was an error!', error instanceof Error ? error.message : error);


    return { success: false, message: error instanceof Error ? error.message : error || "Failed to send message." };
  }
};
