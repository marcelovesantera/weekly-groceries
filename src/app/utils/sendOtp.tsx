import nodemailer from "nodemailer";

export async function sendOtp(
  email: string,
  otpCode: string,
  subject: string,
  text: string
) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const info = await transporter.sendMail({
    from: "Equipe Weekly Groceries APP <equipe@weeklygroceries.com>",
    to: email,
    subject: subject,
    text: text,
    html: `<b>This is your validation code: ${otpCode}</b>`,
  });

  console.log("Message sent: %s", info.messageId);

  return info;
}
