import aboutme from "../../public/aboutme.jpg";
import Image from "next/image";
import Layout from "../components/Layout";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

const Portfolio = () => {
  return (
    <>
      <div className="uppercase w-full h-[20vh] flex items-end justify-center">
        <span className="md:text-8xl text-6xl font-mono">Portfolio</span>
      </div>

      <main id="about" >
        <Layout className="md:p-16 p-8">
          <div className="flex flex-row flex-wrap justify-center gap-5 items-center">
            <h1 className="md:text-4xl text-3xl divide-y-2 divide-slate-400 md:mb-0 mb-8 text-duskblue-500 ">
              About Me
            </h1>

            <p className="md:w-1/2 h-auto md:border-l-[8px] border-solid border-black pl-4 md:mb-0 mb-4 ">
              My name is
              <span className="font-bold">&nbsp;Ritesh Poudel</span>. I am from
              <span className="font-bold">&nbsp;Urlabari, Morang</span>of
              country
              <span className="font-bold">&nbsp;Nepal.</span>
              &nbsp;My current phone number is
              <span className="font-bold">&nbsp;9819347438&nbsp;</span> and my
              email is
              <span className="font-bold">
                &nbsp;ritesh.poudel.34@gmail.com
              </span>
            </p>
            <div className="md:w-[20vw] w-full h-full bg-slate-200 ">
              <Image src={aboutme} className="w-auto h-auto" alt="NO Image" priority/>
            </div>
          </div>
          <Experience />
          <Projects />
        </Layout>
      </main>
    </>
  );
};

export default Portfolio;
