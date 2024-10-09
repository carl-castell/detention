import nodemailer from 'nodemailer';
import 'dotenv/config';
import path from 'path';
import ejs from 'ejs';
import { data } from './data'

// Render template
const templatePath = path.resolve(__dirname, '../src/mail-views/isams.ejs');


// Function to render HTML and send email
export const sendMail = async () => {
  try {
    const renderedHtml = await ejs.renderFile(templatePath, data);

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // SMTP server host
      port: Number(process.env.SMTP_PORT), // SMTP server port
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // SMTP username
        pass: process.env.SMTP_PASS, // SMTP password

      },
    });
    

    const mailOptions = {
      from: '"iSAMS Notification" <isams-noreply@ampleforth.org.uk>', // Sender address
      to: data.email, // Recipient address
      subject: `iSAMS Notification - ${data.name}`, // Subject line
      html: renderedHtml, // Rendered HTML
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

