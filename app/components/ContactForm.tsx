"use client";
import { useState } from "react";
import { CustomInput, CustomTextArea } from "./CustomInput";
import { sendEmail } from "../services/MailService";

export default function ContactForm() {
  const [name,setName]= useState('');
  const [email,setEmail]= useState('');
  const [message,setMessage]= useState('');

  const onSubmit =async (e:any) => {
    e.preventDefault();
    // console.log("data:",name,email,message);
    try {
      const res = await fetch('/api/contact/',{
        method:'post',
        body: JSON.stringify({
          name,email,message
        }),
        headers:{
          'content-type':'application/json'
        }
      })
    }
    catch(error:any){
      console.log('Error is :'+ error);
    }
    
  }
  return (
    <div className="w-full h-full px-8 bg-slate-500 bg-opacity-30 rounded-lg">
      <h1 className="w-full h-fit text-center text-3xl  px-3 py-2 mt-7">
        Contact Form
      </h1>
      <form
        onSubmit={ onSubmit }
        className="md:w-full h-fit flex flex-col gap-1"
      >
        <CustomInput
          inputType="text"
          inputName="name"
          inputValue={ name }
          inputId="name"
          placeholder="Enter your full name here.."
          labelText="Name"
          changeEvent = {
            (e:any) => { setName(e.target.value)}
          }
          
        />
        <CustomInput
          inputType="email"
          inputName="email"
          inputValue={ email }
          inputId="email"
          placeholder="Enter your email here.."
          labelText="Email"
          changeEvent = {
            (e:any) => { setEmail(e.target.value)}
          }
        />
        <div>
          <CustomTextArea
            inputName="message"
            inputValue={ message }
            inputId="message"
            labelText="Your message"
            cols={3}
            rows={3}
            changeEvent = {
              (e:any) => { setMessage(e.target.value)}
            }
          />
        </div>
        <div className="w-full h-fit flex flex-row mt-3">
          <input
            className="bg-blue-500 w-full hover:bg-blue-400  text-white p-3 rounded-md"
            type="submit"
            value="Send Message"
            name="submit"
          />
        </div>
      </form>
    </div>
  );
}
