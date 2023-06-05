import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();

const SOURCE_EMAIL = process.env.SOURCE_EMAIL;
const SOURCE_PASSWORD = process.env.SOURCE_PASSWORD;

const Transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: SOURCE_EMAIL, pass: SOURCE_PASSWORD },
});

const sendWelcomeMail = async (name, email) => {
  console.log(name, email, SOURCE_EMAIL);
  let info = await Transporter.sendMail({
    from: SOURCE_EMAIL,
    to: email,
    subject: `Welcome to Flipkart!!`,

    html: `<b>Hi ${name}</b>,<br/><br/>
      Welcome to Flipkart!<br />
      We're thrilled to have you on board.<br/><br/>
      
      The Flipkart Team<br/>`,
  });
  console.log(info);
};

export default sendWelcomeMail;