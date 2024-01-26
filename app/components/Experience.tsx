import React from 'react'

const Details   = ( {company, jobTitle, duration, responsibilities}: any)  => {
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

const Experience = () => {
  return (
    <>
    <div id="experience" className="flex flex-row flex-wrap justify-center gap-4 mt-8 items-center px-4 overflow-y-hidden ">
        <h1 className="md:text-4xl text-3xl mb-4 md:no-underline underline underline-offset-8">Experience</h1>
        <div className="flex flex-col md:w-1/2 w-full gap-3 pl-4 md:border-l-[8px] border-0 border-solid border-black rounded-lg">
          <Details company="Eastern Hawk Solutions" jobTitle="Software Developer" duration="3 months" responsibilities="Designing and building full-fledged web applications using HTML, CSS, JS and PHP."/>
          <Details company="Code Studio Solutions" jobTitle="Junior Software Developer" duration="6 months" responsibilities="Building windows applications using dot net framework in c# language"/>
          <Details company="Deerwalk Pvt. Ltd" jobTitle="Backend Software Developer" duration="1 months" responsibilities="Developing RESTful APIs for the frontend system using Node JS, Express JS and Mongo DB"/>
          <Details company="Purwanchal IT Solutions" jobTitle="Frontend Developer" duration="2 years" responsibilities="Designing and developing frontend applications using react library and Next JS frameworks."/>
        </div>
        <div className="md:w-[20vw] w-full min-h-fit">
          &nbsp;
        </div>
      </div>
    </>
  )
}

export default Experience