import Link from 'next/link';
import Head from 'next/head'
import styles from '../styles/experience.module.css'
import NavBar from './posts/nav_bar';
import Image from 'next/image';


export default function Experience() {
    return (
      <div className={styles.main_container}>

        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/> 
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap" rel="stylesheet"/>
        </Head>

        <NavBar className={styles.nav}/>

        
        <div className={styles.body}>

            <div className={styles.header}><h2>Experience</h2></div>
            
            <div className={styles.experience}>

              <div className={styles.content}>
                <h2>Attainable Edge</h2>
                <h3>Sept 2023 - Current</h3>
                <h3>Software Developer</h3>
                <ul>
                  <li> Primary software developer responsible for creating and maintaining data extraction and analysis pipelines </li>
                  <li>Integrate natural language processing capabilities into data analysis, enhancing the depth of insights generated</li>
                  <li>Harness the power of FDA and GPT APIs to automate the data extraction process and streamlining access to vital information</li>
                </ul>
 
              </div>
                
            </div>

            <div className={styles.experience}>

              <div className={styles.content}>
                <h2>Campana & Schott Inc.</h2>
                <h3>May 2022 - Aug 2023</h3>
                <h3>Python Developer</h3>
                <ul>
                  <li> Led an MLOps transformation project, combining DevOps and machine
                        learning best practices to greatly improved the scalability and deployment
                        efficiency of our client’s machine learning workflows </li>
                  <li>Improved the speed and accuracy of data matching pipelines by
                        leveraging Apache Spark and distributed computing techniques</li>
                  <li>Bridged the gap between data science and software engineering within
                        data science team, delivering well tested and documented code</li>
                  <li>Regularly created and delivered high-impact client-facing presentations</li>
                  <li>Effectively communicated complex technical concepts to stakeholders
                        across departments within top 10 global pharmaceutical companies</li>
                  <li>Integrated with multinational and diverse teams, fostering effective crosscultural communication to accomplish team and company objectives</li>
                </ul>
 
              </div>
                
            </div>

            <div className={styles.experience}>

              <div className={styles.content}>
                <h2>Johnson & Johnson</h2>
                <h3>June 2021 - Aug 2021</h3>
                <h3>Methodology and Innovation Intern</h3>
                <ul>
                  <li>Developed automated regression tests to ensure smooth transitions
                      between new versions of the Clinical Trial Data Flow system</li>
                  <li>Explored the potential applications of a new automation software by
                      collaborating with a diverse team of interns and senior staff</li>
                  <li>Independently researched and implemented effective automation
                      solutions utilizing the latest software</li>
                </ul>
 
              </div>
                
            </div>  

            <div className={styles.experience}>

              <div className={styles.content}>
                <h2>Benco Dental</h2>
                <h3>Dec 2018 - Feb 2019, Dec 2019 - Jan 2020</h3>
                <h3>Robotic Process Automation Intern</h3>
                <ul>
                  <li>Led the evaluation of three robotic process automation (RPA) software
                      through rigorous benchmark testing and stakeholder communication</li>
                  <li>Automated processes to assess software versatility, resulting in the
                      successful deployment of an automated process into production</li>
                  <li>Collaborated with different departments to identify eligible processes for
                      automation and automated selected processes in subsequent internship</li>
                </ul>
 
              </div>
                
            </div>
              
        </div>    

      </div>
    );
  }