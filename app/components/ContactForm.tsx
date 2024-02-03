"use client";
import { useState } from "react";
import { CustomInput, CustomTextArea } from "./CustomInput";
import { sendEmail } from "../services/MailService";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    // console.log("data:",name,email,message);
    try {
      const res = await fetch("/api/contact/", {
        method: "post",
        body: JSON.stringify({
          name,
          email,
          message,
        }),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.message);
          if(data.success == true ){
            setSuccess(true);
          }
          else{
            setError(true);
          }
        })
    } catch (error: any) {
      console.log("Error is :" + error);
      setError(true);
    }
  };
  return (
    <div className="w-full h-full px-8 bg-gray-400 bg-opacity-30 rounded-lg mb-7">
      {/* form heading starts here */}
      <h1 className=" mb-4 w-full text-center font-bold text-2xl mt-2">
        Contact Form
      </h1>
      {/* form heading ends here */}

      {/* contact form success message starts here */}
      <div
        className={`${
          !success ? "hidden" : "block"
        } w-full h-fit bg-green-400 rounded-md p-4 mb-3 text-white flex flex-row justify-between`}
      >
        <span>Message Sent Succesfully.</span>
        <button onClick={() => setSuccess(false)}>X</button>
      </div>
      {/* contact form success message ends here */}

      {/*contact form error message starts here */}
      <div
        className={`${
          !error ? "hidden" : "block"
        } w-full h-fit bg-red-400 rounded-md p-4 mb-3 text-white flex flex-row justify-between`}
      >
        <span>Unable to send message.</span>
        <button onClick={() => setError(false)}>X</button>
      </div>
      {/*contact form error message ends here */}

      {/*contact form starts here */}
      <form onSubmit={onSubmit} className="md:w-full h-fit flex flex-col gap-1 py-4">
        <CustomInput
          inputType="text"
          inputName="name"
          inputValue={name}
          inputId="name"
          placeholder="Enter your full name here.."
          labelText="Name"
          changeEvent={(e: any) => {
            setName(e.target.value);
          }}
        />
        <CustomInput
          inputType="email"
          inputName="email"
          inputValue={email}
          inputId="email"
          placeholder="Enter your email here.."
          labelText="Email"
          changeEvent={(e: any) => {
            setEmail(e.target.value);
          }}
        />
        <div>
          <CustomTextArea
            inputName="message"
            inputValue={message}
            inputId="message"
            labelText="Your message"
            cols={3}
            rows={3}
            changeEvent={(e: any) => {
              setMessage(e.target.value);
            }}
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
      {/*contact form ends here */}
    </div>
  );
}
