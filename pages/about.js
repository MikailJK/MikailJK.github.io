import Link from 'next/link';
import Head from 'next/head'
import styles from '../styles/about.module.css'
import NavBar from './posts/nav_bar';
import Image from 'next/image';


export default function About() {
    return (
      <div className={styles.about_container}>

        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/> 
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap" rel="stylesheet"/>
        </Head>

        <NavBar className={styles.nav}/>

        
        <div className={styles.body}>

            <div><h2>About</h2></div>
            

            <div className={styles.body_about}>
              <Image className={styles.img} src="/profile.jpg" width={2048} height={2048}/>

              <div className={styles.content}>
                <p>
                Hello!<br></br> I'm Mikail, a Computer Scientist based in New York City. My expertise includes machine learning, automation, and distributed cloud computing. <br></br><br></br>

                Continuous learning is a core value of mine, and I am dedicated to expanding my knowledge and expertise in computer science. Outside of work, I like to pursue my passion for intellectual challenges. You might find me playing board games, improving my Rubik's cube solving speed, or reading an exciting book.<br></br><br></br>

                I am always seeking opportunities to collaborate with like-minded professionals and contribute to exciting projects that push the boundaries of technology. Let's connect and explore how we can make a positive impact together!
                </p>

                <div className={styles.info}>
                  {/* <div> */}
                    <ul>
                      <li><b>Birthday</b>: June, 20 2000</li>
                      <li><b>Phone</b>: 1 503 380 0752</li>
                    </ul>
                  {/* </div> */}
                  {/* <div> */}
                    <ul>
                      <li><b>City</b>: New York, New York</li>
                      <li><b>Email</b>: mikailjk@gmail.com</li>
                    </ul>
                  {/* </div> */}
                </div>
                
              </div>  
              
            </div>     

            <div><h2>Skills</h2></div>

            <div className={styles.body_skills}>
              {/* <Image className={styles.ncsuimg} src="/NCSU.png" width={324} height={156}/> */}

              <div className={styles.skills_content}>

                <div className={styles.info}>
                    <ul>
                      <li><b>Python</b></li>
                      <li><b>Java</b></li>
                      <li><b>JavaScript</b></li>
                    </ul>
                    <ul>
                      <li><b>C++</b></li>
                      <li><b>C#</b></li>
                      <li><b>Unity</b></li>
                    </ul>
                    <ul>
                      <li><b>Git</b></li>
                      <li><b>Visual Studio Code</b></li>
                      <li><b>React</b></li>
                    </ul>
                    <ul>
                      <li><b>Microsoft Azure</b></li>
                      <li><b>Databricks</b></li>
                      <li><b>PySpark</b></li>
                    </ul>
                </div>
                
              </div>  
              
            </div>

        </div>

          
          
      </div>
    );
  }