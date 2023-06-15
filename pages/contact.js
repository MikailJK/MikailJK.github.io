import Link from 'next/link';
import Head from 'next/head'
import styles from '../styles/contact.module.css'
import NavBar from './posts/nav_bar';
import Image from 'next/image';

import {BsFillHouseFill, BsLinkedin, BsFillTelephoneFill} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';


export default function Contact() {
    return (
      <div className={styles.about_container}>

        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/> 
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap" rel="stylesheet"/>
        </Head>

        <NavBar className={styles.nav}/>

        
        <div className={styles.body}>
     

            <div><h2>Contact</h2></div>

            <div className={styles.body_contact}>

              <div className={styles.content}>
                 
                <h2>
                  <BsFillHouseFill /> 
                  &nbsp;&nbsp;&nbsp;Address
                </h2>
                <p>242 East 60th Street Unit 4C</p>
                <p>New York, NY 10022</p>
                 
              </div>

              <div className={styles.content}>
                <h2>
                  <MdEmail/>
                  &nbsp;&nbsp;&nbsp;Email
                </h2>
                <p>mikailjk@gmail.com</p>
                 
              </div> 

              <div className={styles.content}>
                <h2>
                  <BsLinkedin/>
                  &nbsp;&nbsp;&nbsp;LinkedIn
                </h2>
                <p><a href="https://www.linkedin.com/in/mikail-krochta-1216691a2/" target='_blank' rel="norederrer noopener">Click Here</a></p>
                 
              </div>  

              <div className={styles.content}>
                <h2>
                  <BsFillTelephoneFill/>
                  &nbsp;&nbsp;&nbsp;Phone 
                </h2>
                <p>(503) 380 0752</p>
                 
              </div>
              
            </div>

        </div>
          
      </div>
    );
  }