"use client";
import { useState } from "react";

const CustomInput = ({
  labelText,
  inputType,
  inputName,
  inputId,
  placeholder,
  changeEvent,
}: any) => {
  return (
    <div className="w-full h-fit flex flex-col p-4 bg-white rounded-lg">
      <label className="bg-white flex flex-col">
        {labelText}
        <input
          className="outline-none"
          type={inputType}
          name={inputName}
          id={inputId}
          placeholder={placeholder}
          onChange={changeEvent}
        />
      </label>
    </div>
  );
};

const CustomTextArea = ({
  labelText,
  inputName,
  inputId,
  cols,
  rows,
  changeEvent,
}: {
  labelText: string;
  inputName: string;
  inputId: string;
  cols: number;
  rows: number;
  changeEvent: any;
}) => {
  return (
    <div className="w-full flex flex-col bg-white p-4 rounded-lg">
      <label className="flex flex-col">
        {labelText}
        <textarea
          className="outline-none"
          name={inputName}
          id={inputId}
          cols={cols}
          rows={rows}
          onChange={changeEvent}
        ></textarea>
      </label>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(formData);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Email sent successfully!");
    } else {
      alert("Error sending email!");
    }
  };
  return (
    <>
      <>
        <main className="w-screen h-screen bg-black">
          <div className="w-full h-[20%] bg-slate-500 flex justify-center items-center">
            <h1 className="text-8xl text-white uppercase">Contact</h1>
          </div>
          <div className="w-full h-[70%] flex flex-row gap-1 justify-between p-8">
            <div className="w-1/2  h-full bg-black md:block hidden">
              {/* 3d earth component goes here */}
            </div>
            <div className="w-full h-full  flex flex-col justify-center items-center">
              <h1 className="w-full h-fit text-center text-3xl text-white p-3 mt-7">
                Contact Form
              </h1>
              <form
                onSubmit={handleSubmit}
                className="md:w-1/2 h-fit  rounded-lg px-8 py-3 bg-slate-100 bg-opacity-70 flex flex-col gap-1"
              >
                <CustomInput
                  inputType="text"
                  inputName="name"
                  inputId="name"
                  placeholder="Your name is..."
                  labelText="Name"
                  textArea="false"
                  changeEvent={handleChange}
                />
                <CustomInput
                  inputType="email"
                  inputName="email"
                  inputId="email"
                  placeholder="Your email is..."
                  labelText="Email"
                  changeEvent={handleChange}
                />
                <div>
                  <CustomTextArea
                    inputName="message"
                    inputId="message"
                    labelText="Your message"
                    cols={3}
                    rows={3}
                    changeEvent={handleChange}
                  />
                </div>
                <div className="w-full h-fit flex flex-row mt-3">
                  <input
                    className="bg-blue-500 hover:bg-blue-400  text-white p-3 rounded-md"
                    type="submit"
                    value="Send Message"
                    name="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </main>
      </>
    </>
  );
};

export default Contact;
