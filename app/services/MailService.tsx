import { EmailTemplate } from '../components/EmailTemplate';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

const validateString =(value:unknown) =>{
if(!value || typeof value !== 'string'){
  return false;
}

return true;
}

export async function sendEmail(formData:FormData) {
  const senderName = formData.get("name") ;
  const senderEmail = formData.get("email");
  const senderMessage = formData.get("message");
  // console.log(formData);
  if(!validateString(senderMessage)){
    return {
      error:"Invalid Message"
    };
  }

  if(!validateString(senderEmail)){
    return {
      error:"Invalid Email"
    };
  }
  if(!validateString(senderName)){
    return {
      error:"Invalid Name"
    };
  }
  if( senderName =="" || senderEmail== "" || senderMessage==""  )
  {
    return {
      error: "Please, fill out all the fields."
    }
  }
try{
  await resend.emails.send({
    from: senderEmail as string,
    to: process.env.NEXT_PUBLIC_EMAIL_USER as string,
    subject: "PORTFOLIO | RITESH",
    react: EmailTemplate({ fullName: senderName, message:senderMessage }) as React.ReactElement,
    headers:{
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  });
}
catch(error){
  return error;
}    
 return 'Success';
 
    
}