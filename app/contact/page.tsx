import ContactForm from "../components/ContactForm";

const Contact = () => {
  
  return (
    <>
      <>
        <main className="w-full h-screen ">
          <div className="w-full h-[20%] bg-slate-500 flex justify-center items-center">
            <h1 className="text-8xl text-white uppercase">Contact</h1>
          </div>
          <div className="w-full h-[70%] flex flex-row  justify-around mt-3">
            <div className="w-full  h-full bg-black md:block hidden">
              {/* 3d earth component goes here */}
            </div>
            <div className="w-full h-full flex flex-col items-center px-8">
              <ContactForm />
            </div>
          </div>
        </main>
      </>
    </>
  );
};

export default Contact;
