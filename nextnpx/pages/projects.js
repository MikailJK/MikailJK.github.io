import Link from 'next/link';
import Head from 'next/head'
import styles from '../styles/projects.module.css'
import NavBar from './posts/nav_bar';
import Image from 'next/Image';


export default function Projects() {
    return (
      <div className={styles.about_container}>

        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/> 
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap" rel="stylesheet"/>
        </Head>

        <NavBar className={styles.nav}/>

        
        <div className={styles.body}>
     

            <div><h2>AI Data Matching Pipeline - Campana & Schott</h2></div>

            <div className={styles.body_education}>
              <Image className={styles.img} src="/data-matching.png" width={500} height={300}/>
              

              <div className={styles.content}>

                <h3>Purpose:</h3>
                <p>
                To efficiently and accurately match data entries from multiple sorces to reduce the time and labor required to check these entries by hand.
                </p>

                <h3>Summary:</h3>
                <p>
                  My role in this project was to refactor the code base using Apache Spark 3.0 on the Databricks platform. With millions of rows in the data sources, the goal was to develop an efficient algorithm that could regularly process these large datasets within a reasonable time frame.

                  To help achieve this, I obtained certification as an Associate Developer for Apache Spark 3.0. this allowed me to leverage the distributed computing power of Databricks to run many of the final models infrences in parallel.

                  Doing this, I significantly reduced the pipeline's runtime from hours to minutes. This accomplishment not only showcased my ability to quickly acquire new skills but also demonstrated my effectiveness in real-world implementation. 
                </p>
                
                <h3>Tools:</h3>
                <div className={styles.info}>
                    <ul>
                      <li>Python</li>
                      <li>Apache Spark</li>
                    </ul>
                    <ul>
                      <li>Git</li>
                      <li>Jupyter</li>
                    </ul>
                    <ul>
                      <li>Hugging Face</li>
                      <li>Databricks</li>
                    </ul>
                </div>
                
              </div>  
              
            </div>

            <div><h2>Mathlantis - Computational Intelligence and Interactive Games Research</h2></div>

            <div className={styles.body_education}>
              <Image className={styles.img} src="/spark.png" width={324} height={156}/>

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