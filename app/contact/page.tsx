import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  
  return (
    <>
      <>
        <main className="w-full h-full ">
          <div className="w-full h-[20vh]  flex justify-center items-end">
            <h1 className="md:text-8xl text-6xl  uppercase font-mono">Contact</h1>
          </div>
          <div className="w-full md:h-[70%] h-full flex md:flex-row flex-col justify-around mt-3 bg-slate-300 py-8 px-3 rounded-t-3xl">
              <ContactDetails />
              <ContactForm />
            
          </div>
        </main>
      </>
    </>
  );
};

export default Contact;
