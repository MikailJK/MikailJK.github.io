import Link from 'next/link';
import styles from '../../styles/sub_nav_bar.module.css';

export default function SubNavBar() {
  return (
    
    <div className={styles.nav_menu}>
          <ul>
            <li class="active"><Link href="../"> <span>Home</span></Link></li>
            <li><Link href="/about"><span>About</span></Link></li>
            {/* <li><a href="/education"> <span>Education</span></a></li> */}
            <li><a href="/experience"> <span>Experience</span></a></li>
            <li><a href="/projects"> <span>Projects</span></a></li>
            {/* <li><a href="#skills"> <span>Skills</span></a></li> */}
            <li><a href="https://docs.google.com/document/d/1h8u_Gf_tbAmm_sVUKggJYpfhib9y2RJo/edit?usp=sharing&ouid=116677981697350701185&rtpof=true&sd=true" target='_blank' rel="norederrer noopener"> <span>Resume</span></a></li>
            <li><a href="#contacts"> <span>Contact</span></a></li>

          </ul>
        </div>

  );
}