import Link from 'next/link';
import Head from 'next/head'
import styles from '../styles/education.module.css'
import NavBar from './posts/nav_bar';
import Image from 'next/Image';


export default function Education() {
    return (
      <div className={styles.about_container}>

        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/> 
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap" rel="stylesheet"/>
        </Head>

        <NavBar className={styles.nav}/>

        
        <div className={styles.body}>
     

            <div><h2>Education</h2></div>

            <div className={styles.body_education}>
              <Image className={styles.ncsuimg} src="/NCSU.png" width={324} height={156}/>

              <div className={styles.content}>
                <p>
                Bachelors of Science Degree in Computer Science with a minor in Mathematics.
                </p>

                <div className={styles.info}>
                    <ul>
                      <li><b>Dates</b>: Aug 2018 - May 2022</li>
                      <li><b>City</b>: Raleigh, North Carolina</li>
                    </ul>
                    <ul>
                      <li><b>Major GPA</b>: 4.00</li>
                      <li><b>Overall GPA</b>: 3.78</li>
                    </ul>
                </div>
                
              </div>  
              
            </div>

            <div><h2>Certifications</h2></div>

            <div className={styles.body_education}>
              <Image className={styles.ncsuimg} src="/spark.png" width={324} height={156}/>

              <div className={styles.content}>
                <p>
                Databricks Certified Associate Developer for Apache Spark 3.0.
                </p>

                <div className={styles.info}>
                    <ul>
                      <li><b>Date</b>: June 2022</li>
                    </ul>
                    <ul>
                      <li><b>Experation</b>: June 2024</li>
                    </ul>
                </div>
                
              </div>  
              
            </div>

        </div>

          
          
      </div>
    );
  }