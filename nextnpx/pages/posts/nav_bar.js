import Link from 'next/link';
import styles from '../../styles/nav_bar.module.css';
import SubNavBar from './sub_nav_bar';

export default function NavBar() {
  return (
    
    <div className={styles.head}>

      <h1 className={styles.title}>Mikail Krochta</h1>
      
      <SubNavBar className={styles.nav}/>

    </div>

  );
}