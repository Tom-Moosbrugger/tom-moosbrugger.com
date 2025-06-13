import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

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

export const mail = ({ email, subjectLine, message }: MailProps) => {
    
}