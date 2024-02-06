import aboutme from "../../public/aboutme.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col justify-between gap-1 items-center p-4 border-b-4">

      <h1 className="md:text-4xl text-3xl divide-y-2 divide-slate-400 md:mb-0 text-duskblue-500 ">
        About Me
      </h1>

      <div className="flex md:flex-row flex-col justify-around items-center rounded-md p-4  md:w-[80%] w-full">
        <p className="h-fit md:border-l-[8px] border-solid border-slate-500 pl-2 md:mb-0 mb-4 mt-4">
          My name is
          <span className="font-bold">&nbsp;Ritesh Poudel</span>. I am from
          <span className="font-bold">&nbsp;Urlabari, Morang</span>of country
          <span className="font-bold">&nbsp;Nepal.</span>
          &nbsp;My current phone number is
          <span className="font-bold">&nbsp;9819347438&nbsp;</span> and my email
          is
          <span className="font-bold">&nbsp;ritesh.poudel.34@gmail.com</span>
        </p>
        <Image
          src={aboutme}
          className="md:w-1/4 md:h-1/2 sm:w-1/2 h-auto w-full rounded-lg"
          alt="NO Image"
          priority
        />
      </div>
      
    </div>
  );
};

export default About;
