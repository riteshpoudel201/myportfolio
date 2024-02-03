import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  
  return (
    <>
      <>
        <main className="w-full h-full ">
          <div className="w-full h-[20%]  flex justify-center items-center">
            <h1 className="md:text-8xl text-6xl  uppercase">Contact</h1>
          </div>
          <div className="w-full md:h-[70%] h-full flex md:flex-row flex-col justify-around mt-3 bg-gray-200 py-8 px-3 rounded-t-3xl">
              <ContactDetails />
              <ContactForm />
            
          </div>
        </main>
      </>
    </>
  );
};

export default Contact;
