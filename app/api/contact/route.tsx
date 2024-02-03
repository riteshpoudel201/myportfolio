import EmailTemplate from "@/app/components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
export async function POST(req: Request) {
  const formData = await req.json();
  const sendTo = process.env.NEXT_PUBLIC_EMAIL_USER as string;
  try {
    const {data,error} = await resend.emails.send({
      from: `Portfolio | Ritesh <onboarding@resend.dev>`,
      to: [sendTo],
      subject: "Message from "+ formData.name as string,
      html: formData.message + `<br><h6>Email:${formData.email}<br>From ${formData.name}</h6>` ,
      reply_to:formData.email,
    });
  console.log(error);
  console.log(data);
    return Response.json({message:'Email sent successfully'},{ status: 200 });
  } catch (error) {
    console.log("Error is:" + error);
    return Response.json({error: error});
  }

  
}
