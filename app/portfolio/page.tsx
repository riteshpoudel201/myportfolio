import React from "react";

const Experience = ({ company, jobTitle, duration, responsibilities }) => {
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
const Portfolio = () => {
  return (
    <>
      <div className="uppercase w-full h-[40vh] flex items-end justify-center">
        <span className="text-8xl font-mono">Portfolio</span>
      </div>

      {/* about me section of page starts here */}
      <div id="about" className="flex md:flex-row flex-col gap-3 justify-between mt-4 h-[40vh] w-auto items-center relative md:px-4 p-8 ">
        <h1 className="text-4xl divide-y-2 divide-slate-400 md:mb-0 mb-8  ">
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
        <div className="md:w-[20vw] w-full min-h-fit bg-slate-200 ">
          My photo goes here
        </div>
      </div>
      {/* about me section of page stops here */}

      {/* my experiences sections of portfolio page starts here */}
      <div id="experience" className="flex md:flex-row flex-col justify-between mt-4 items-center px-4 overflow-y-hidden ">
        <h1 className="text-4xl mb-4 md:no-underline underline">Experience</h1>
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
      <div id="projects">
        <h1>Projects</h1>
      </div>
      {/* project section ends here */}
    </>
  );
};

export default Portfolio;
