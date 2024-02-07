import styles from '../app/page.module.css';
import Link from '@/node_modules/next/link';
import ServerImage from './components/ServerImage';

const page = () => {
  const buttonStyle = '';
  return (
    <main className={styles.container}>

      {/* banner section starts */}
      <section className={styles.bannerContainer}>
        <div className={styles.banner}>
          <div className={styles.contentContainer}>
            <div className={styles.content}>
              <h1 className={styles.greetTextBanner}>Hi! I am</h1>
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
        <div className={styles.projectHeading}>Featured Projects</div>
        <ul className={styles.project}>
          <li className={styles.projectList}>
            <ul>
              <li> 
              <ServerImage source='sample' altText='Project 1' className={`${styles.projectImage}`}/>
              </li>
              <li className={styles.projectTitle}>Project Title 1</li>
              <li className='w-full text-center mt-4'><Link className={`${styles.detailsButton}`} href='#'>View Details</Link></li>
            </ul>
          </li>
          <li className={styles.projectList}>
            <ul>
              <li className={styles.projectImage}> 
              <ServerImage source='cld-sample-2' altText='Project 1' className={`${styles.projectImage}`}/>
              </li>
              <li className={styles.projectTitle}>Project Title 2</li>
              <li className='w-full text-center mt-4'><Link className={`${styles.detailsButton}`} href='#'>View Details</Link></li>
            </ul>
          </li>
          <li className={styles.projectList}>
            <ul>
              <li className={styles.projectImage}> 
              <ServerImage source='cld-sample-3' altText='Project 1' className={`${styles.projectImage}`}/>
              </li>
              <li className={styles.projectTitle}>Project Title 3</li>
              <li className='w-full text-center mt-4'><Link className={`${styles.detailsButton}`} href='#'>View Details</Link></li>
            </ul>
          </li>
          <li className={styles.projectList}>
            <ul>
              <li className={styles.projectImage}> 
              <ServerImage source='cld-sample-4' altText='Project 1' className={`${styles.projectImage}`}/>
              </li>
              <li className={styles.projectTitle}>Project Title 4</li>
              <li className='w-full text-center mt-4'><Link className={`${styles.detailsButton}`} href='#'>View Details</Link></li>
            </ul>
          </li>
          <li>
            <div className={styles.viewMore}>
              <Link className={styles.viewMoreButton} href="./portfolio#projects">View All</Link>
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
        {/* <Footerpage /> */}
      </section>
      {/* Footer section ends */}
    </main>
  )
}

export default page