import { EmailTemplate } from '../components/EmailTemplate';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function sendEmail(formData:FormData) {
  const senderName = formData.get("name") ;
  const senderEmail = formData.get("email");
  const senderMessage = formData.get("message");
  // console.log(formData);
  
  if( senderName =="" || senderEmail== "" || senderMessage==""  )
  {
    return {
      error: "Please, fill out all the fields."
    }
  }

    await resend.emails.send({
      from: senderEmail as string,
      to: process.env.NEXT_PUBLIC_EMAIL_USER as string,
      subject: "PORTFOLIO | RITESH",
      react: EmailTemplate({ fullName: senderName, message:senderMessage }) as React.ReactElement,
    });
 return console.log("Success")
    
}