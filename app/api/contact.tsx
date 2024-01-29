import type { NextApiRequest, NextApiResponse } from 'next'
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PW,
  },
});

const sendEmail = async (req:NextApiRequest, res:NextApiResponse) => {
  const { name, email, message } = await req.body;

  const mailOptions = {
    from: {
        email: email,
        name: name,
    },
    to: process.env.NODEMAILER_EMAIL,
    subject: `Contact Form Submission from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending email!' });
  }
};

export default sendEmail;
