import { FC } from "react";
import aboutme from '../../public/aboutme.jpg'
import Image from "next/image";
import Link from "next/link";
type Experience = {
  company : string,
  jobTitle: string,
  duration:string,
  responsibilities:string
}

const Experience   = ( {company, jobTitle, duration, responsibilities}: any)  => {
  return (
    <>
      <div className="flex flex-col">
        <span className="text-xl capitalize text-duskblue-500">{company}</span>
        <div className="flex flex-row justify-between w-1/2 text-sm">
          <span className="text-slate-400">{jobTitle}</span>
          <span className="text-slate-400">{duration}</span>
        </div>
        <p>{responsibilities}</p>
      </div>
    </>
  );
};

const Projects = ({imageURL, projectTitle, projectURL}:any) =>{
  return(
    <>
    <div className="w-[280px] h-[150px] border-[2px] border-solid border-slate-400 rounded-lg relative bg-green-500">
      <Image src={imageURL} width={0} height={0} className="h-full w-full" alt="NO IMAGE" />
      <span className="absolute top-0 text-white">{ projectTitle }</span>
      
      <Link className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-duskblue-500 text-white p-4" href={projectURL} target="_blank" >View details </Link>
    </div>
    </>
  )
}
const Portfolio = () => {
  return (
    <>
      <div className="uppercase w-full h-[40vh] flex items-end justify-center">
        <span className="md:text-8xl text-6xl font-mono">Portfolio</span>
      </div>

      {/* about me section of page starts here */}
      <div id="about" className="flex md:flex-row flex-col gap-3 justify-between mt-4 w-auto items-center md:px-4 p-8 bg-slate-300 rounded-lg">
        <h1 className="md:text-4xl text-3xl divide-y-2 divide-slate-400 md:mb-0 mb-8  ">
          About Me
        </h1>

        <p className="md:w-1/2 h-auto md:border-l-[8px] border-solid border-black pl-4 md:mb-0 mb-4 ">
          My name is
          <span className="font-bold">&nbsp;Ritesh Poudel</span>. I am from
          <span className="font-bold">&nbsp;Urlabari, Morang</span>of country
          <span className="font-bold">&nbsp;Nepal.</span>
          &nbsp;My current phone number is
          <span className="font-bold">&nbsp;9819347438&nbsp;</span> and my email
          is
          <span className="font-bold">&nbsp;ritesh.poudel.34@gmail.com</span>
        </p>
        <div className="md:w-[20vw] w-full h-full bg-slate-200 ">
          <Image src={ aboutme } className="w-full h-full" alt='NO Image'/>
        </div>
      </div>
      {/* about me section of page stops here */}

      {/* my experiences sections of portfolio page starts here */}
      <div id="experience" className="flex md:flex-row flex-col justify-between md:mt-4 mt-8 items-center px-4 overflow-y-hidden bg-slate-300 rounded-lg">
        <h1 className="md:text-4xl text-3xl mb-4 md:no-underline underline">Experience</h1>
        <div className="flex flex-col md:w-1/2 w-full gap-3 pl-4 md:border-l-[8px] border-0 border-solid border-black">
          <Experience company="Eastern Hawk Solutions" jobTitle="Software Developer" duration="3 months" responsibilities="Designing and building full-fledged web applications using HTML, CSS, JS and PHP."/>
          <Experience company="Code Studio Solutions" jobTitle="Junior Software Developer" duration="6 months" responsibilities="Building windows applications using dot net framework in c# language"/>
          <Experience company="Deerwalk Pvt. Ltd" jobTitle="Backend Software Developer" duration="1 months" responsibilities="Developing RESTful APIs for the frontend system using Node JS, Express JS and Mongo DB"/>
          <Experience company="Purwanchal IT Solutions" jobTitle="Frontend Developer" duration="2 years" responsibilities="Designing and developing frontend applications using react library and Next JS frameworks."/>
        </div>
        <div className="md:w-[20vw] w-full min-h-fit">
          &nbsp;
        </div>
      </div>
      {/* my experiences section of portfolio page ends here */}

      {/* project section starts here */}
      <div id="projects" className="flex flex-col justify-between items-center w-auto h-auto p-4 mt-8 mb-8 bg-slate-300 rounded-lg">
        <h1 className="w-full md:text-4xl">Projects</h1>
        <div className="w-full flex flex-row flex-wrap gap-2 h-auto">
          <Projects imageURL="" projectTitle="Todo-List"  projectURL="none"/>
          <Projects imageURL="" projectTitle="Simple Calculator"  projectURL="none"/>
          <Projects imageURL="" projectTitle="Tic-Tac-Toe"  projectURL="none"/>
          <Projects imageURL="" projectTitle="Instagram Clone"  projectURL="none"/>
          <Projects imageURL="" projectTitle="facebook Clone"  projectURL="none"/>
        </div>
      </div>
      {/* project section ends here */}
    </>
  );
};

export default Portfolio;
