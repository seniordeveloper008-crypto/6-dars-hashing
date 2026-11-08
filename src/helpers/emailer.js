import nodemailer from "nodemailer";
import { config } from "dotenv";
config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function sendEmail(to, username) {
  await transporter.sendMail({
    from: "Najot Talim",
    to,
    subject: `Darslarda faol qatnashdingiz`,
    html: `
      <h1>Assalomu alaykum ${username}</h1>  
      <p>Siz eng zur talabsiz</p> 
    `,
  });
}

export { sendEmail };
