import Navbar from './components/navbar';
import Footerpage from './components/footer';
import styles from '../app/page.module.css';
import Link from '@/node_modules/next/link';
// import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const page = () => {
  return (
    <main className={styles.container}>

      {/* navbar section starts here */}
      <section className={styles.navbarContainer}>
        <Navbar />
      </section>
      {/* navbar section starts here */}

      {/* banner section starts */}
      <section className={styles.bannerContainer}>
        <div className={styles.banner}>
          <div className={styles.contentContainer}>
            <div className={styles.content}>
              <h1 className={styles.greetTextBanner}>Hi! I'm</h1>
              <span className={styles.titleText} >Ritesh Poudel</span>
              <p className={`${styles.descText}`}>
                I am currently a enthusiastic web developer exploring the different techs that are used to build web applications.
              </p>
            </div>
          </div>
          <div className={styles.boxContainer}>
            <div className={styles.box}></div>
          </div>
        </div>
      </section>
      {/* banner section ends */}

      {/* project section starts */}
      <section className={styles.projectContainer}>
        <div className={styles.projectHeading}>Projects</div>
        <ul className={styles.project}>
          <li className={styles.projectList}>
            <ul>
              <li className={styles.projectImage}>Image</li>
              <li className={styles.projectTitle}>Project Title 1</li>
              <li className={`${styles.projectDesc} ${styles.lineClamp}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt excepturi fuga ad sed unde illum nobis hic atque vero esse.</li>
            </ul>
          </li>
          <li className={styles.projectList}>
            <ul>
              <li className={styles.projectImage}>Image</li>
              <li className={styles.projectTitle}>Project Title 2</li>
              <li className={styles.projectDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, optio. Nemo dolores voluptatum laborum, unde quas sint voluptatem nostrum esse, numquam illum, repellendus earum dolorem!</li>
            </ul>
          </li>
          <li className={styles.projectList}>
            <ul>
              <li className={styles.projectImage}>Image</li>
              <li className={styles.projectTitle}>Project Title 3</li>
              <li className={styles.projectDesc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit architecto illo nam corrupti, aliquid in.</li>
            </ul>
          </li>
          <li>
            <div className={styles.viewMore}>
              <Link className={styles.viewMoreButton} href="./portfolio/projects.tsx">View More</Link>
            </div>
          </li>
        </ul>
      </section>
      {/* project section ends */}

      {/* contact section starts here */}
      <section className={styles.contactSection}>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Contact Me</button>
        </div>
      </section>
      {/* contact section ends here */}

      {/* Footer section starts*/}
      <section className={styles.footerContainer}>
        <Footerpage />
      </section>
      {/* Footer section ends */}
    </main>
  )
}

export default page