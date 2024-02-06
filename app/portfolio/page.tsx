import Layout from "../components/Layout";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import About from "../components/About";

const Portfolio = () => {
  return (
    <>
      <div className="uppercase w-full h-[20vh] flex items-end justify-center">
        <span className="md:text-8xl text-6xl font-mono">Portfolio</span>
      </div>

      <main id="about" >
        <Layout className="md:p-16 p-8">
          <About />
          <Experience />
          <Projects />
        </Layout>
      </main>
    </>
  );
};

export default Portfolio;
