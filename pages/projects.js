import Link from 'next/link';
import Head from 'next/head'
import styles from '../styles/projects.module.css'
import NavBar from './posts/nav_bar';
import Image from 'next/image';


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
              <Image className={styles.img} src="/puzzle.png" width={500} height={300}/>
              

              <div className={styles.content}>

                <h3>Purpose:</h3>
                <p>
                To efficiently and accurately match data entries from multiple sorces to reduce the time and labor required to check these entries by hand.
                </p>

                <h3>Summary:</h3>
                <p>
                My role in this project encompassed the refactoring of the codebase by harnessing the capabilities of Apache Spark 3.0 on the Databricks platform. Confronted with vast datasets containing millions of rows, our primary objective was to craft an algorithm that could efficiently process these extensive datasets within a reasonable time frame.

                In pursuit of this objective, I achieved certification as an Associate Developer for Apache Spark 3.0. This credential empowered me to capitalize on the distributed computing functionality of Databricks, enabling the parallel execution of many final model inferences.

                As a result of these endeavors, I successfully reduced the pipeline's runtime from hours to mere minutes. This achievement not only underscores my skill at rapidly assimilating new skills but also underscores my capacity to effectively translate them into real-world solutions. 
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
              <Image className={styles.img} src="/mathlantis.png" width={324} height={156}/>

              <div className={styles.content}>
              <h3>Purpose:</h3>
                <p>
                To create an engaging and educational game that focuses on enhancing proportional reasoning skills among 7th-grade students.
                </p>

                <h3>Summary:</h3>
                <p>
                I took an instrumental role in the development of an interactive educational game targeted at improving proportional reasoning skills among 7th-grade students. Steering the project, I oversaw the comprehensive design and execution of player input mechanisms, intricate level structures, and a dynamic framework that facilitated the effortless incorporation of educational content updates. Furthermore, I devised and implemented systems that seamlessly delivered course material, guaranteeing a fluid and engaging learning journey for the players. 
                </p>

                <h3>Tools:</h3>
                <div className={styles.info}>
                    <ul>
                      <li>Unity 3D</li>
                    </ul>
                    <ul>
                      <li>C#</li>
                    </ul>
                </div>
                
              </div>  
              
            </div>

            <div><h2>C++ Game Engine - Game Engine Foundations (NCSU Course Work)</h2></div>

            <div className={styles.body_education}>
              <Image className={styles.img} src="/game_engine.png" width={324} height={156}/>

              <div className={styles.content}>
              <h3>Purpose:</h3>
                <p>
                To create a robust game engine to showcase my understanding of foundational concepts such as physics simulation, networking, multithreading, and graphics rendering.
                </p>

                <h3>Summary:</h3>
                <p>
                For this project, I took on the role of architect, developer, and optimizer, crafting various multi-threaded systems encompassing rendering algorithms, physics simulation, and networking components. As requirments for the engine were given incrementally, I opted for an event-driven and component-based architecture, ensuring that integrating features remained seamless.

                The results of this semester long project earned me an A for the course and proved my ability to rise to complex technical challenges and devise my own creative solutions. This experience fortified my passion for software development and innovative problem-solving, inspiring me to channel these capabilities into my career.
                </p>

                <h3>Tools:</h3>
                <div className={styles.info}>
                    <ul>
                      <li>Unity 3D</li>
                    </ul>
                    <ul>
                      <li>C#</li>
                    </ul>
                </div>
                
              </div>  
              
            </div>

        </div>

          
          
      </div>
    );
  }