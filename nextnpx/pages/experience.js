import Link from 'next/link';
import Head from 'next/head'
import styles from '../styles/about.module.css'
import NavBar from './posts/nav_bar';


export default function Experience() {
  return (
    <div className={styles.about_container}>

      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet"/>
      </Head>

        <NavBar/>

      <div className={styles.body}>
        <h2><Link href="/">This is the experience page</Link></h2>         

        <div class={styles.about}>
            <a href="https://www.linkedin.com/in/mikail-krochta-1216691a2/" target="_blank" class="linkedin">LinkedIn <i class="bx bxl-linkedin"></i></a>
            <a href="https://www.github.com/milkyk" target="_blank" class="github">GitHub <i class="bx bxl-github"></i></a>
            <a href="mailto:mikailkrochta@gmail.com" target="_blank" class="google">Email <i class="bx bxl-google"></i></a>
        </div>
        </div>
        
    </div>
  );
  }