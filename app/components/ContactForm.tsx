"use client";
// import { useState } from "react";
import { CustomInput, CustomTextArea } from "./CustomInput";
import { sendEmail } from "../api/send/route";

export default function ContactForm() {
  

  
  return (
    <div className="w-full h-full px-8 bg-slate-500 bg-opacity-30 rounded-lg">
      <h1 className="w-full h-fit text-center text-3xl  px-3 py-2 mt-7">
        Contact Form
      </h1>
      <form
        action={async formData => { await sendEmail(formData)}}
        
        className="md:w-full h-fit flex flex-col gap-1"
      >
        <CustomInput
          inputType="text"
          inputName="name"
          inputId="name"
          placeholder="Enter your full name here.."
          labelText="Name"
          
        />
        <CustomInput
          inputType="email"
          inputName="email"
          inputId="email"
          placeholder="Enter your email here.."
          labelText="Email"
          
        />
        <div>
          <CustomTextArea
            inputName="message"
            inputId="message"
            labelText="Your message"
            cols={3}
            rows={3}
            
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
