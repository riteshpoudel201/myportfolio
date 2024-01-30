import { NextResponse } from "next/server";
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_USER,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
  },
});

export async function POST(req: Request) {
  // ...
  const { name, email, message } = await req.json();
  const mailOptions = {
    from: {
        email: email,
        name: name,
    },
    to: 'self@gmail.com',
    subject: `Contact Form Submission from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully!' },{status:200});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error sending email!' },{ status:500});
  }
  
  
}
